import type { InquiryInput } from "@/features/inquiry/inquiry.schema";

export type ProjectInquiry = Omit<InquiryInput, "company" | "startedAt">;

export type InquiryAdapterResult = {
  id?: string;
  mode: "resend" | "log";
};

export type InquiryAdapter = {
  send: (inquiry: ProjectInquiry) => Promise<InquiryAdapterResult>;
};
