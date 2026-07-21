import type { MetadataRoute } from "next";
import { getAllSlugs } from "../content";

const base = "https://dogecoin.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const guides = getAllSlugs().map((slug) => ({
    url: `${base}/guide/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/clarity`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/safety`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/belonging`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/map`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${base}/niche`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ...guides,
  ];
}
