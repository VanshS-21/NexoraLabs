import type { Metadata } from "next";

import { brand } from "@/content/brand";
import { siteSeo } from "@/content/seo/site";

type PageMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export const absoluteUrl = (path = "/") => {
  const baseUrl = brand.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${normalizedPath}`;
};

export const buildMetadata = ({
  title,
  description = siteSeo.description,
  path = "/",
  keywords,
  noIndex = false,
}: PageMetadataInput = {}): Metadata => {
  const metadataTitle = title ?? siteSeo.defaultTitle;
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(siteSeo.ogImage);

  return {
    title: title
      ? {
          absolute: metadataTitle,
          template: siteSeo.titleTemplate,
        }
      : metadataTitle,
    description,
    keywords,
    alternates: {
      canonical,
    },
    metadataBase: new URL(brand.url),
    openGraph: {
      title: metadataTitle,
      description,
      url: canonical,
      siteName: brand.name,
      locale: siteSeo.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${brand.name} brand preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description,
      creator: siteSeo.twitterHandle,
      images: [ogImage],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
};
