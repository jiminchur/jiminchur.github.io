/**
 * Canonical origin for the site, used by metadata, sitemap and robots.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL   — set this once a custom domain is attached.
 *  2. VERCEL_PROJECT_PRODUCTION_URL — the stable production domain Vercel
 *     assigns; unlike VERCEL_URL it does not change per deployment, so
 *     preview builds still point canonical tags at production.
 *  3. localhost — local development.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}
