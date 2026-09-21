import { createBrowserClient } from "@supabase/ssr";

/**
 * Browser client, for Client Components. Only the publishable key is exposed
 * here — RLS is what actually guards the data, not the key.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
