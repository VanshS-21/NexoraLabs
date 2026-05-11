import { logInquiryAdapter } from "@/features/inquiry/adapters/log-inquiry-adapter";
import { createResendInquiryAdapter } from "@/features/inquiry/adapters/resend-inquiry-adapter";
import { inquirySchema } from "@/features/inquiry/inquiry.schema";

export const submitProjectInquiry = async (input: unknown) => {
  const parsed = inquirySchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false as const,
      status: 422,
      error: "Please check the highlighted fields.",
      issues: parsed.error.flatten().fieldErrors,
    };
  }

  const { company, startedAt, ...inquiry } = parsed.data;

  if (company || (startedAt && Date.now() - startedAt < 1500)) {
    return {
      ok: true as const,
      status: 202,
      message: "Thanks. We will review this and reply soon.",
    };
  }

  const adapter = createResendInquiryAdapter() ?? logInquiryAdapter;
  const result = await adapter.send(inquiry);

  return {
    ok: true as const,
    status: 200,
    message: "Thanks. We will review this and reply soon.",
    result,
  };
};
