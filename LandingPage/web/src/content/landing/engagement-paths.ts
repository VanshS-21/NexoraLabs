import type { EngagementPath } from "@/types/content";

export const engagementPaths: EngagementPath[] = [
  {
    id: "launch",
    label: "Launch from zero",
    fits: "New or refreshed businesses that need a credible website, lead flow, and search foundation.",
    likelyServices: ["Website Development", "SEO and AI SEO", "Analytics setup"],
    qualificationPrompt: "What should a visitor be able to do in the first 60 seconds?",
  },
  {
    id: "upgrade",
    label: "Upgrade what exists",
    fits: "Businesses with a live site that feels generic, dated, slow, or hard to act on.",
    likelyServices: ["UI/UX Redesign", "Website Development", "Conversion tracking"],
    qualificationPrompt: "Where are people dropping off today?",
  },
  {
    id: "system",
    label: "Build a working system",
    fits: "Teams that need a portal, dashboard, booking flow, quote engine, or mobile experience.",
    likelyServices: ["Web Applications", "SaaS and Backend Platforms", "Native Android Apps"],
    qualificationPrompt: "Which repeated workflow should stop being manual?",
  },
];
