import nodemailer from "nodemailer";

/**
 * Env: SMTP_USER, SMTP_PASS, MAIL_TO
 * Host: SMTP_HOST + SMTP_PORT, ili SMTP_SERVICE=gmail (tada host nije obavezan)
 * Opciono: MAIL_FROM, MAIL_REPLY_TO
 */

export function isMailConfigured(): boolean {
  const auth = Boolean(
    process.env.SMTP_USER?.trim() && process.env.SMTP_PASS?.trim() && process.env.MAIL_TO?.trim(),
  );
  if (!auth) return false;
  if (process.env.SMTP_SERVICE?.trim().toLowerCase() === "gmail") return true;
  return Boolean(process.env.SMTP_HOST?.trim());
}

function getTransporter() {
  const user = process.env.SMTP_USER!.trim();
  const pass = process.env.SMTP_PASS!.trim();
  const service = process.env.SMTP_SERVICE?.trim().toLowerCase();

  if (service === "gmail") {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }

  const host = process.env.SMTP_HOST!.trim();
  const port = Number.parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    // Port 587 = STARTTLS; bez ovoga neki serveri odbiju ili „vise“ na konekciji
    ...(!secure ? { requireTLS: true } : {}),
    connectionTimeout: 20_000,
    greetingTimeout: 20_000,
  });
}

export async function sendSiteMail(options: {
  subject: string;
  text: string;
  html?: string;
  /** Ako je zadato (npr. email kupca), koristi se umesto MAIL_REPLY_TO */
  replyTo?: string;
}): Promise<void> {
  if (!isMailConfigured()) {
    throw new Error("Mail is not configured");
  }

  const to = process.env.MAIL_TO!.trim();
  const from =
    process.env.MAIL_FROM?.trim() || `"Cyber Tracking" <${process.env.SMTP_USER!.trim()}>`;

  const replyTo =
    options.replyTo?.trim() || process.env.MAIL_REPLY_TO?.trim() || undefined;

  const transporter = getTransporter();
  await transporter.sendMail({
    from,
    to,
    replyTo,
    subject: options.subject,
    text: options.text,
    ...(options.html ? { html: options.html } : {}),
  });
}

export function clampText(value: string, max: number): string {
  const t = value.trim();
  if (t.length <= max) return t;
  return t.slice(0, max);
}
