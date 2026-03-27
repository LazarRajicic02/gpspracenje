import { Resend } from "resend";

/**
 * Env: RESEND_API_KEY, MAIL_TO
 * Opciono: MAIL_FROM (podrazumevano "Cyber Tracking <noreply@gpspracenje.rs>")
 */

let resend: Resend | null = null;

function getResend(): Resend {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY!.trim());
  }
  return resend;
}

export function isMailConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY?.trim() && process.env.MAIL_TO?.trim(),
  );
}

export async function sendSiteMail(options: {
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}): Promise<void> {
  if (!isMailConfigured()) {
    throw new Error("Mail is not configured");
  }

  const to = process.env.MAIL_TO!.trim();
  const from =
    process.env.MAIL_FROM?.trim() || "Cyber Tracking <noreply@gpspracenje.rs>";
  const replyTo =
    options.replyTo?.trim() || process.env.MAIL_REPLY_TO?.trim() || undefined;

  const r = getResend();
  const { error } = await r.emails.send({
    from,
    to,
    replyTo,
    subject: options.subject,
    text: options.text,
    ...(options.html ? { html: options.html } : {}),
  });

  if (error) {
    throw new Error(error.message);
  }
}

export function clampText(value: string, max: number): string {
  const t = value.trim();
  if (t.length <= max) return t;
  return t.slice(0, max);
}
