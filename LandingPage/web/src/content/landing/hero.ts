import type { MediaAsset } from "@/types/content";

export const hero = {
  eyebrow: "Bengaluru-first digital product studio",
  headline: "Nexora Labs builds trust-ready websites and systems for ambitious local businesses.",
  subhead:
    "We design, build, launch, and track fast digital experiences for cafes, hotels, schools, clinics, suppliers, and founders who need customers to act with confidence.",
  primaryCta: { label: "Plan a project", href: "#contact" },
  secondaryCta: { label: "See proof plan", href: "#proof" },
  trustLine:
    "Pre-launch studio building 3-4 showcase projects before the public launch.",
  image: {
    src: "/media/landing/portal/portal-frame.png",
    alt: "Abstract luminous portal representing Nexora Labs digital systems.",
    width: 1440,
    height: 1080,
  } satisfies MediaAsset,
  highlights: [
    "Websites",
    "Web apps",
    "SEO and AI SEO",
    "Android apps",
    "Conversion tracking",
  ],
};
