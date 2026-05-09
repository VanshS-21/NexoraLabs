import { NextRequest, NextResponse } from "next/server";

const VALID_SERVICES = new Set(["new-website", "redesign", "launch-support", "other"]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = {
  name: 120,
  email: 254,
  service: 30,
  message: 2000,
} as const;

interface ContactPayload {
  name: string;
  email: string;
  service: string;
  message: string;
}

function isContactPayload(body: unknown): body is ContactPayload {
  if (typeof body !== "object" || body === null) return false;
  const obj = body as Record<string, unknown>;

  if (
    typeof obj.name !== "string" ||
    typeof obj.email !== "string" ||
    typeof obj.service !== "string" ||
    typeof obj.message !== "string"
  ) {
    return false;
  }

  const name = obj.name.trim();
  const email = obj.email.trim();
  const service = obj.service.trim();
  const message = obj.message.trim();

  if (!name || name.length > LIMITS.name) return false;
  if (!email || email.length > LIMITS.email || !EMAIL_RE.test(email)) return false;
  if (!service || service.length > LIMITS.service || !VALID_SERVICES.has(service)) return false;
  if (!message || message.length > LIMITS.message) return false;

  return true;
}

export async function POST(request: NextRequest) {
  try {
    if (request.headers.get("content-type") !== "application/json") {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 415 },
      );
    }

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
      name: body.name.trim().slice(0, LIMITS.name),
      email: body.email.trim().slice(0, LIMITS.email),
      service: body.service,
      message: body.message.trim().slice(0, LIMITS.message),
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
