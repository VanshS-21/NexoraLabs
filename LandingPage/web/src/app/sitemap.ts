import type { MetadataRoute } from "next";

import { seoRoadmap } from "@/content/seo/page-roadmap";
import { absoluteUrl } from "@/lib/metadata/build-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return seoRoadmap.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
