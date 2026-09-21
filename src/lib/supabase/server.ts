import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `${name} is not set. Copy .env.example to .env.local for local runs, ` +
        `or add it under Settings → Environment Variables on Vercel.`,
    );
  }
  return value;
}

/**
 * Server-side client that carries the visitor's auth cookies, so RLS sees
 * who they are. Use this anywhere the answer depends on the signed-in user —
 * /admin, and anything that reads drafts.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    requireEnv("NEXT_PUBLIC_SUPABASE_URL"),
    requireEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            for (const { name, value, options } of cookiesToSet) {
              cookieStore.set(name, value, options);
            }
          } catch {
            // Called from a Server Component, where cookies are read-only.
            // Safe to swallow: middleware refreshes the session instead.
          }
        },
      },
    },
  );
}
