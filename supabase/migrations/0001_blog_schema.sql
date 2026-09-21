-- Blog schema: posts live in the database, authored through /admin.
--
-- Mirrors the markdown frontmatter the 60 existing posts already use
-- (title / date / category / description) so the import is lossless.

-- Extensions live outside `public`: that schema is PostgREST's exposed API
-- surface, and Supabase's linter flags extensions placed there.
create schema if not exists extensions;
create extension if not exists pg_trgm with schema extensions;

-- Admins ---------------------------------------------------------------
-- Membership table rather than a hardcoded uid, so granting a second
-- author later is an insert instead of a policy migration.
create table public.admins (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = ''
stable
as $$
  select exists (
    select 1 from public.admins where user_id = auth.uid()
  );
$$;

-- Posts ----------------------------------------------------------------
create table public.posts (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null unique,
  title        text not null,
  description  text not null default '',
  category     text not null default 'Tech' check (category in ('Tech', 'Story')),
  content      text not null,
  status       text not null default 'published' check (status in ('draft', 'published')),
  published_at date not null,
  views        bigint not null default 0,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- The blog index is always "published, newest first"; this covers it.
create index posts_published_idx
  on public.posts (published_at desc)
  where status = 'published';

create index posts_category_idx on public.posts (category) where status = 'published';

-- Trigram beats tsvector here: the posts are Korean, and Postgres has no
-- Korean text-search configuration, so to_tsvector would tokenise badly.
create index posts_title_trgm_idx on public.posts using gin (title gin_trgm_ops);
create index posts_description_trgm_idx on public.posts using gin (description gin_trgm_ops);

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger posts_touch_updated_at
  before update on public.posts
  for each row execute function public.touch_updated_at();

-- View counter ---------------------------------------------------------
-- A single atomic UPDATE, so concurrent readers cannot lose increments.
-- security definer because anon has no write grant on posts.
create or replace function public.increment_post_views(post_slug text)
returns bigint
language plpgsql
security definer
set search_path = ''
as $$
declare
  new_count bigint;
begin
  update public.posts
     set views = views + 1
   where slug = post_slug and status = 'published'
   returning views into new_count;

  return coalesce(new_count, 0);
end;
$$;

-- RLS ------------------------------------------------------------------
alter table public.posts  enable row level security;
alter table public.admins enable row level security;

-- Drafts stay invisible to anon; admins see everything.
create policy posts_read_published on public.posts
  for select using (status = 'published' or public.is_admin());

create policy posts_admin_insert on public.posts
  for insert with check (public.is_admin());

create policy posts_admin_update on public.posts
  for update using (public.is_admin()) with check (public.is_admin());

create policy posts_admin_delete on public.posts
  for delete using (public.is_admin());

-- Readable so the admin UI can tell whether the current user is an admin.
-- Writes are intentionally left with no policy: adding an admin is a
-- dashboard/service-role action, never something the web app can do.
create policy admins_read_self on public.admins
  for select using (user_id = auth.uid());

revoke execute on function public.increment_post_views(text) from public;
grant execute on function public.increment_post_views(text) to anon, authenticated;

-- Supabase's linter flags both SECURITY DEFINER functions as anon-callable.
-- Both are deliberate and neither leaks data:
--
--   increment_post_views — being callable by logged-out readers is the whole
--     point; it only bumps a counter on an already-published row.
--   is_admin — the SELECT policy above calls it, and RLS predicates run as the
--     querying role, so revoking EXECUTE from anon would break public reads.
--     It discloses only whether *the caller* is an admin, which the caller
--     already knows.
