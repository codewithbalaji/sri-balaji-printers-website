import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "info@sribalajiprinters.in";
const MAX_FIELD_LENGTH = 2000;

function isNonEmptyString(value: unknown, maxLength = MAX_FIELD_LENGTH): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "The enquiry form isn't set up to send emails yet. Please call or WhatsApp us directly.",
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, jobType, message } = (body ?? {}) as Record<string, unknown>;

  if (
    !isNonEmptyString(name, 200) ||
    !isNonEmptyString(phone, 40) ||
    !isNonEmptyString(jobType, 200) ||
    !isNonEmptyString(message)
  ) {
    return NextResponse.json({ error: "Please fill in all fields." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Sri Balaji Printers Website <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      subject: `New enquiry: ${jobType} — ${name}`,
      html: `
        <h2>New enquiry from the website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Job type:</strong> ${escapeHtml(jobType)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Couldn't send your message. Please call or WhatsApp us instead." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Couldn't send your message. Please call or WhatsApp us instead." },
      { status: 500 }
    );
  }
}
