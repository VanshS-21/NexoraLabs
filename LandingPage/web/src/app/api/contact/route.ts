import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  service: string;
  message: string;
}

function isContactPayload(body: unknown): body is ContactPayload {
  if (typeof body !== "object" || body === null) return false;
  const obj = body as Record<string, unknown>;
  return (
    typeof obj.name === "string" &&
    typeof obj.email === "string" &&
    typeof obj.service === "string" &&
    typeof obj.message === "string" &&
    obj.name.trim().length > 0 &&
    obj.email.trim().length > 0 &&
    obj.service.trim().length > 0 &&
    obj.message.trim().length > 0
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!isContactPayload(body)) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 422 },
      );
    }

    // In production, integrate with your email service, CRM, or database.
    // Examples: Resend, SendGrid, Notion API, Airtable, etc.
    // For now, log the submission and return success.
    console.log("[Contact Form Submission]", {
      name: body.name,
      email: body.email,
      service: body.service,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 },
    );
  }
}
