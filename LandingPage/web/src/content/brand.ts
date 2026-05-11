import type { LinkItem } from "@/types/content";

export const brand = {
  name: "Nexora Labs",
  logoMark: "NL",
  tagline: "Digital systems for businesses people need to trust.",
  shortDescription:
    "Bengaluru-based website, product, SEO, and application studio for local operators with national ambition.",
  email: "hello@nexoralabs.in",
  phone: "+91 80 0000 0000",
  address: "Nexora Labs, MG Road, Bengaluru, Karnataka 560001, India",
  region: "Bengaluru-first, India-wide",
  foundingStatus: "Pre-launch agency studio",
  domain: "nexoralabs.in",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexoralabs.in",
} as const;

export const socialLinks: LinkItem[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nexora-labs-placeholder",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nexoralabs.placeholder",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/nexora-labs-placeholder",
    external: true,
  },
];
