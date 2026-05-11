import type { InquiryAdapter } from "@/features/inquiry/inquiry.types";

export const logInquiryAdapter: InquiryAdapter = {
  send: async (inquiry) => {
    console.info("[inquiry:fallback]", {
      ...inquiry,
      email: inquiry.email.replace(/(^.).*(@.*$)/, "$1***$2"),
    });

    return {
      mode: "log",
    };
  },
};
