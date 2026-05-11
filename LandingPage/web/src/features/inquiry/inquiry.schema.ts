import { z } from "zod";

const optionalUrl = z.preprocess(
  (value) => (value === "" ? undefined : value),
  z.string().trim().url("Enter a valid URL.").optional(),
);

const optionalPhone = z.preprocess(
  (value) => (value === "" ? undefined : value),
  z.string().trim().min(7, "Enter a valid phone number.").optional(),
);

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email."),
  phone: optionalPhone,
  businessType: z.string().trim().min(2, "Select a business type."),
  currentWebsite: optionalUrl,
  serviceNeeded: z.string().trim().min(2, "Select a service."),
  primaryGoal: z.string().trim().min(6, "Share the primary goal."),
  timeline: z.string().trim().min(2, "Select a timeline."),
  projectNotes: z.string().trim().min(20, "Share a little more context."),
  company: z.string().trim().optional(),
  startedAt: z.coerce.number().optional(),
});

export type InquiryFormInput = z.input<typeof inquirySchema>;
export type InquiryInput = z.output<typeof inquirySchema>;
