import type { InquiryField } from "@/types/content";

export const contact = {
  title: "Tell us what the business needs to make easier.",
  intro:
    "Share enough context for a useful first reply. The form is wired for Resend when keys are configured and logs locally during development.",
  fields: [
    {
      id: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Your name",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "you@example.com",
    },
    {
      id: "phone",
      label: "Phone",
      type: "tel",
      required: false,
      placeholder: "+91 ...",
    },
    {
      id: "businessType",
      label: "Business type",
      type: "select",
      required: true,
      options: ["Cafe or restaurant", "Hotel or stay", "School or institute", "Clinic or wellness", "B2B supplier", "Startup or SaaS", "Other"],
    },
    {
      id: "currentWebsite",
      label: "Current website",
      type: "url",
      required: false,
      placeholder: "https://...",
    },
    {
      id: "serviceNeeded",
      label: "Service needed",
      type: "select",
      required: true,
      options: ["Website development", "Web application", "UI/UX redesign", "SEO and AI SEO", "SaaS or backend platform", "Native Android app", "Not sure yet"],
    },
    {
      id: "primaryGoal",
      label: "Primary goal",
      type: "text",
      required: true,
      placeholder: "More inquiries, better bookings, internal tool, etc.",
    },
    {
      id: "timeline",
      label: "Timeline",
      type: "select",
      required: true,
      options: ["ASAP", "This month", "1-3 months", "Exploring for later"],
    },
    {
      id: "projectNotes",
      label: "Project notes",
      type: "textarea",
      required: true,
      placeholder: "What exists today, what feels broken, and what success should look like.",
    },
  ] satisfies InquiryField[],
};
