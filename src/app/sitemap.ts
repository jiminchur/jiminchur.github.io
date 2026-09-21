import { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/markdown";
import { getSiteUrl } from "@/lib/site";

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const postSlugs = getAllPostSlugs();

  const blogUrls = postSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug.replace(/\.md$/, "")}`,
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
