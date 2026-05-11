import { NextResponse } from "next/server";

import { submitProjectInquiry } from "@/features/inquiry/submit-project-inquiry";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const result = await submitProjectInquiry(payload);

    return NextResponse.json(result, { status: result.status });
  } catch (error) {
    console.error("[api:inquiry]", error);

    return NextResponse.json(
      {
        ok: false,
        error: "We could not send the inquiry. Please email us directly.",
      },
      { status: 500 },
    );
  }
}
