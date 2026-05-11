import type { LinkItem } from "@/types/content";

export const footerGroups: { title: string; links: LinkItem[] }[] = [
  {
    title: "Work",
    links: [
      { label: "Websites", href: "#services" },
      { label: "Web applications", href: "#services" },
      { label: "SEO and AI search", href: "#services" },
      { label: "Android apps", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Proof plan", href: "#proof" },
      { label: "Process", href: "#process" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
