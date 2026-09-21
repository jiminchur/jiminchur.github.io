import { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/posts";
import { getSiteUrl } from "@/lib/site";

// Regenerated hourly so posts published from /admin reach Search Console
// without a redeploy.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl();
  const postSlugs = await getAllPostSlugs();

  const blogUrls = postSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...blogUrls,
  ];
}
