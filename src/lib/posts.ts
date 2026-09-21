import { createClient } from "@supabase/supabase-js";

/**
 * Public read path. Deliberately does NOT use the cookie-aware server client:
 * reading cookies opts a route out of static generation, and the blog index
 * and post pages are the same for everyone. Drafts stay hidden because RLS
 * filters them for the anon role, not because of anything in this file.
 */
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  { auth: { persistSession: false } },
);

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: "Story" | "Tech";
  content: string;
  readingTime: number;
  views: number;
}

interface PostRow {
  slug: string;
  title: string;
  description: string;
  category: "Story" | "Tech";
  content: string;
  published_at: string;
  views: number;
}

/** Roughly 200 words per minute. */
function readingTimeOf(content: string): number {
  return Math.ceil(content.trim().split(/\s+/).length / 200);
}

function toPost(row: PostRow): Post {
  return {
    slug: row.slug,
    title: row.title,
    date: row.published_at,
    description: row.description,
    category: row.category,
    content: row.content,
    readingTime: readingTimeOf(row.content),
    views: row.views,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("slug, title, description, category, content, published_at, views")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw new Error(`failed to load posts: ${error.message}`);

  return (data ?? []).map(toPost);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from("posts")
    .select("slug, title, description, category, content, published_at, views")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  // A missing row is a 404, not a failure — only surface real errors.
  if (error) throw new Error(`failed to load post ${slug}: ${error.message}`);

  return data ? toPost(data) : null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("slug")
    .eq("status", "published");

  if (error) throw new Error(`failed to load slugs: ${error.message}`);

  return (data ?? []).map((row) => row.slug);
}

export interface Heading {
  level: number;
  text: string;
  id: string;
}

export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.*)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2];
    headings.push({
      level: match[1].length,
      text,
      id: text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-"),
    });
  }

  return headings;
}
