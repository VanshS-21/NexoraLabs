import type { ServiceLine } from "@/types/content";

export const services: ServiceLine[] = [
  {
    id: "website-development",
    name: "Website Development",
    summary: "High-trust marketing websites built around action, search intent, and measurable conversion.",
    whenNeeded: ["New business launch", "Outdated website", "Local SEO push"],
    deliverables: ["Information architecture", "Responsive pages", "Contact and inquiry flows", "Launch analytics"],
    outcomes: ["Clear offer", "Faster trust", "More qualified inquiries"],
  },
  {
    id: "web-applications",
    name: "Web Applications",
    summary: "Custom portals, dashboards, booking systems, and internal tools for day-to-day operations.",
    whenNeeded: ["Manual workflows", "Customer portals", "Operational reporting"],
    deliverables: ["Product flow", "Frontend app", "API integration", "Admin-ready surfaces"],
    outcomes: ["Less manual work", "Better visibility", "Reusable systems"],
  },
  {
    id: "ui-ux-redesign",
    name: "UI/UX Redesign",
    summary: "Sharper interface design for products or websites that already exist but underperform.",
    whenNeeded: ["Low conversion", "Confusing journeys", "Outdated product UI"],
    deliverables: ["UX audit", "New flows", "Visual system", "Responsive redesign"],
    outcomes: ["Reduced friction", "Cleaner decisions", "Higher confidence"],
  },
  {
    id: "seo-ai-seo",
    name: "SEO and AI SEO",
    summary: "Search architecture for Google, local listings, and AI answer engines from the start.",
    whenNeeded: ["New domain", "Local visibility", "Service page strategy"],
    deliverables: ["Keyword map", "Structured data", "Local SEO plan", "Answer-ready content blocks"],
    outcomes: ["Better discovery", "Qualified intent", "Compounding visibility"],
  },
  {
    id: "saas-backend",
    name: "SaaS and Backend Platforms",
    summary: "Foundational SaaS screens, backend workflows, and integrations for early product teams.",
    whenNeeded: ["MVP launch", "Admin panels", "API-backed workflows"],
    deliverables: ["System architecture", "Data model", "Secure endpoints", "Core user journeys"],
    outcomes: ["Launch clarity", "Technical foundation", "Scalable structure"],
  },
  {
    id: "android-apps",
    name: "Native Android Apps",
    summary: "Android experiences for brands that need mobile-first access beyond a responsive website.",
    whenNeeded: ["Repeat customers", "Field teams", "Mobile-first service"],
    deliverables: ["App experience map", "Native screens", "Backend connection", "Release support"],
    outcomes: ["Mobile retention", "Operational reach", "Brand presence"],
  },
];
