import { Resend } from "resend";

import type { InquiryAdapter } from "@/features/inquiry/inquiry.types";

const buildEmailHtml = (inquiry: Parameters<InquiryAdapter["send"]>[0]) => `
  <h1>New Nexora Labs project inquiry</h1>
  <p><strong>Name:</strong> ${inquiry.name}</p>
  <p><strong>Email:</strong> ${inquiry.email}</p>
  <p><strong>Phone:</strong> ${inquiry.phone ?? "Not provided"}</p>
  <p><strong>Business type:</strong> ${inquiry.businessType}</p>
  <p><strong>Current website:</strong> ${inquiry.currentWebsite ?? "Not provided"}</p>
  <p><strong>Service needed:</strong> ${inquiry.serviceNeeded}</p>
  <p><strong>Primary goal:</strong> ${inquiry.primaryGoal}</p>
  <p><strong>Timeline:</strong> ${inquiry.timeline}</p>
  <p><strong>Notes:</strong></p>
  <p>${inquiry.projectNotes.replace(/\n/g, "<br />")}</p>
`;

export const createResendInquiryAdapter = (): InquiryAdapter | null => {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;

  if (!apiKey || !to) {
    return null;
  }

  const resend = new Resend(apiKey);

  return {
    send: async (inquiry) => {
      const response = await resend.emails.send({
        from: process.env.INQUIRY_FROM_EMAIL ?? "Nexora Labs <onboarding@resend.dev>",
        to,
        replyTo: inquiry.email,
        subject: `Project inquiry from ${inquiry.name}`,
        html: buildEmailHtml(inquiry),
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      return {
        id: response.data?.id,
        mode: "resend",
      };
    },
  };
};
