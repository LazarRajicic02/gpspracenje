/**
 * HTML mejlovi za obaveštenja sa sajta (inline stilovi, tabele).
 */

const ACCENT = "#0d9488";
const HEADER_BG = "#0f172a";
const MUTED = "#64748b";
const BORDER = "#e2e8f0";
const SITE_LABEL = "gpspracenje.rs";
const SITE_URL = "https://gpspracenje.rs";

export function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nl2br(raw: string): string {
  return escapeHtml(raw).replace(/\r\n|\r|\n/g, "<br />");
}

function wrapEmail(inner: string): string {
  return `<!DOCTYPE html>
<html lang="sr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cyber Tracking</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;-webkit-font-smoothing:antialiased;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f1f5f9;">
  <tr>
    <td align="center" style="padding:28px 16px;">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(15,23,42,0.08);">
        ${inner}
      </table>
      <p style="margin:20px 0 0;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:12px;color:${MUTED};line-height:1.5;">
        Automatska poruka sa <a href="${SITE_URL}" style="color:${ACCENT};text-decoration:none;">${SITE_LABEL}</a>
      </p>
    </td>
  </tr>
</table>
</body>
</html>`;
}

function headerBlock(badge: string, title: string, subtitle?: string): string {
  const sub = subtitle
    ? `<p style="margin:10px 0 0;font-family:system-ui,-apple-system,sans-serif;font-size:14px;color:rgba(255,255,255,0.75);line-height:1.5;">${escapeHtml(subtitle)}</p>`
    : "";
  return `<tr>
  <td style="background-color:${HEADER_BG};padding:28px 32px;border-bottom:4px solid ${ACCENT};">
    <p style="margin:0;font-family:system-ui,-apple-system,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${ACCENT};">${escapeHtml(badge)}</p>
    <h1 style="margin:8px 0 0;font-family:system-ui,-apple-system,sans-serif;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3;">${escapeHtml(title)}</h1>
    ${sub}
  </td>
</tr>`;
}

function kvRow(label: string, valueHtml: string): string {
  return `<tr>
  <td style="padding:14px 0;border-bottom:1px solid ${BORDER};font-family:system-ui,-apple-system,sans-serif;font-size:13px;color:${MUTED};width:36%;vertical-align:top;">${escapeHtml(label)}</td>
  <td style="padding:14px 0;border-bottom:1px solid ${BORDER};font-family:system-ui,-apple-system,sans-serif;font-size:14px;color:#0f172a;font-weight:600;vertical-align:top;line-height:1.45;">${valueHtml}</td>
</tr>`;
}

function sectionTitle(text: string): string {
  return `<tr>
  <td colspan="2" style="padding:24px 0 8px;font-family:system-ui,-apple-system,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${ACCENT};">${escapeHtml(text)}</td>
</tr>`;
}

function bodyTable(rows: string): string {
  return `<tr>
  <td style="padding:28px 32px 32px;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
      ${rows}
    </table>
  </td>
</tr>`;
}

function messageBlock(heading: string, body: string): string {
  return `<tr>
  <td colspan="2" style="padding:16px 0 0;">
    <p style="margin:0 0 8px;font-family:system-ui,-apple-system,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${MUTED};">${escapeHtml(heading)}</p>
    <div style="margin:0;padding:16px 18px;background-color:#f8fafc;border-radius:8px;border:1px solid ${BORDER};font-family:system-ui,-apple-system,sans-serif;font-size:14px;color:#334155;line-height:1.6;">${nl2br(body)}</div>
  </td>
</tr>`;
}

function footerTimestamp(iso: string): string {
  const formatted = new Date(iso).toLocaleString("sr-RS", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  return `<tr>
  <td style="padding:0 32px 28px;">
    <p style="margin:0;font-family:system-ui,-apple-system,sans-serif;font-size:12px;color:${MUTED};border-top:1px solid ${BORDER};padding-top:20px;">
      Vreme slanja: <strong style="color:#475569;">${escapeHtml(formatted)}</strong> · ID: <code style="font-size:11px;background:#f1f5f9;padding:2px 6px;border-radius:4px;color:#475569;">${escapeHtml(iso)}</code>
    </p>
  </td>
</tr>`;
}

export function buildContactEmailHtml(input: {
  name: string;
  phone: string;
  message: string;
  sentAtIso: string;
}): string {
  const rows = [
    sectionTitle("Podaci klijenta"),
    kvRow("Ime / firma", escapeHtml(input.name)),
    kvRow("Telefon", `<a href="tel:${escapeHtml(input.phone.replace(/\s/g, ""))}" style="color:${ACCENT};text-decoration:none;">${escapeHtml(input.phone)}</a>`),
    ...(input.message.trim()
      ? [messageBlock("Poruka", input.message)]
      : []),
  ].join("");

  const inner =
    headerBlock("Kontakt forma", "Novi upit sa sajta", `Poslato preko ${SITE_LABEL}`) +
    bodyTable(rows) +
    footerTimestamp(input.sentAtIso);

  return wrapEmail(inner);
}

export function buildOrderEmailHtml(input: {
  typeLabel: string;
  months: number;
  quantity: number;
  name: string;
  phone: string;
  address: string;
  email: string;
  notes: string;
  payLabel: string;
  fullLabel: string;
  sentAtIso: string;
}): string {
  const rows = [
    sectionTitle("Porudžbina"),
    kvRow("Tip sistema", escapeHtml(input.typeLabel)),
    kvRow("Trajanje pretplate", `${escapeHtml(String(input.months))} meseci`),
    kvRow("Broj sistema", escapeHtml(String(input.quantity))),
    sectionTitle("Kontakt i isporuka"),
    kvRow("Ime / firma", escapeHtml(input.name)),
    kvRow("Telefon", `<a href="tel:${escapeHtml(input.phone.replace(/\s/g, ""))}" style="color:${ACCENT};text-decoration:none;">${escapeHtml(input.phone)}</a>`),
    kvRow("Adresa", nl2br(input.address)),
    ...(input.email.trim()
      ? [
          kvRow(
            "Email",
            `<a href="mailto:${escapeHtml(input.email)}" style="color:${ACCENT};text-decoration:none;">${escapeHtml(input.email)}</a>`,
          ),
        ]
      : []),
    sectionTitle("Plaćanje i preuzimanje"),
    kvRow("Način plaćanja", escapeHtml(input.payLabel)),
    kvRow("Preuzimanje", escapeHtml(input.fullLabel)),
    ...(input.notes.trim() ? [messageBlock("Napomena kupca", input.notes)] : []),
  ].join("");

  const inner =
    headerBlock("Narudžbina", "Nova porudžbina sa sajta", `Cyber Tracking · ${SITE_LABEL}`) +
    bodyTable(rows) +
    footerTimestamp(input.sentAtIso);

  return wrapEmail(inner);
}
