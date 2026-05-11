import type { MetadataRoute } from "next";

import { brand } from "@/content/brand";
import { absoluteUrl } from "@/lib/metadata/build-metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: brand.url,
  };
}
