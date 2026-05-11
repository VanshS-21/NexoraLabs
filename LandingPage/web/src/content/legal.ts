import { brand } from "@/content/brand";

export const legal = {
  lastUpdated: "May 12, 2026",
  privacy: {
    title: "Privacy Policy",
    intro:
      "This temporary policy explains how Nexora Labs handles inquiries and basic website analytics before launch.",
    sections: [
      {
        heading: "Information we collect",
        body: "When you submit the project inquiry form, we collect the contact details and project context you choose to provide. We also collect basic product analytics events to understand which sections visitors use.",
      },
      {
        heading: "How we use information",
        body: "We use inquiry details to respond to your request, qualify fit, and prepare project recommendations. Analytics data is used to improve the website, content, conversion flow, and SEO strategy.",
      },
      {
        heading: "Third-party services",
        body: "The site is prepared for Resend for email delivery and PostHog for privacy-conscious event analytics. These providers may process data according to their own policies once configured.",
      },
      {
        heading: "Contact",
        body: `For privacy questions, contact ${brand.email}. This page uses placeholder legal details until launch.`,
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    intro:
      "These temporary terms set basic expectations for using the Nexora Labs website before launch.",
    sections: [
      {
        heading: "Website use",
        body: "The website is provided for general information and inquiry collection. Content may change as the agency prepares for launch.",
      },
      {
        heading: "No client relationship",
        body: "Submitting an inquiry does not create a client relationship, project agreement, exclusivity, or obligation to begin work.",
      },
      {
        heading: "Project discussions",
        body: "Any project scope, pricing, timeline, deliverables, and ownership terms must be agreed separately in writing before work begins.",
      },
      {
        heading: "Placeholder information",
        body: `The current address, phone, social links, and some team details are placeholders. ${brand.name} will update them before public launch.`,
      },
    ],
  },
};
