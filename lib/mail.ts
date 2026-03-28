import nodemailer from "nodemailer";

/**
 * Env: SMTP_USER, SMTP_PASS, MAIL_TO
 * Host: SMTP_HOST + SMTP_PORT, ili SMTP_SERVICE=gmail (tada host nije obavezan)
 * Opciono: MAIL_FROM, MAIL_REPLY_TO
 */

export function isMailConfigured(): boolean {
  const auth = Boolean(
    process.env.SMTP_USER && process.env.SMTP_PASS && process.env.MAIL_TO
  );
  
  if (!auth) return false;

  if (process.env.SMTP_SERVICE?.toLowerCase() === "gmail") return true;

  return Boolean(process.env.SMTP_HOST);
}

function getTransporter() {
  const user = process.env.SMTP_USER!;
  const pass = process.env.SMTP_PASS!;
  const service = process.env.SMTP_SERVICE?.toLowerCase();

  // ✅ Gmail shortcut
  if (service === "gmail") {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }

  const host = process.env.SMTP_HOST!;
  const port = Number(process.env.SMTP_PORT || 587);

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true samo za 465
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false, // Loopia fix
    },
    connectionTimeout: 20000,
    greetingTimeout: 20000,
  });
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

  const to = process.env.MAIL_TO!;
  
  // ✅ Loopia-safe FROM (mora da matchuje SMTP_USER)
  const from = process.env.SMTP_USER!;

  const replyTo =
    options.replyTo || process.env.MAIL_REPLY_TO || undefined;

  const transporter = getTransporter();

  // 🔍 DEBUG (možeš kasnije obrisati)
  try {
    await transporter.verify();
    console.log("✅ SMTP connection OK");
  } catch (err) {
    console.error("❌ SMTP verify failed:", err);
    throw err;
  }

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo,
      subject: options.subject,
      text: options.text,
      ...(options.html ? { html: options.html } : {}),
    });

    console.log("✅ Mail sent");
  } catch (err) {
    console.error("❌ Send mail error:", err);
    throw err;
  }
}

export function clampText(value: string, max: number): string {
  const t = value.trim();
  if (t.length <= max) return t;
  return t.slice(0, max);
}