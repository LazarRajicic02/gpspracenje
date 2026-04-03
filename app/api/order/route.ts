import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { buildOrderEmailHtml } from "@/lib/email-templates";
import { clampText, isMailConfigured, sendSiteMail } from "@/lib/mail";

const ORDER_TYPES = new Set(["pro", "smart", "renewal"]);
const MONTHS = new Set([3, 6, 12]);

const MAX_NAME = 200;
const MAX_PHONE = 40;
const MAX_ADDRESS = 500;
const MAX_EMAIL = 120;
const MAX_NOTES = 4000;

export async function POST(request: Request) {
  if (!isMailConfigured()) {
    return NextResponse.json(
      { error: "Slanje porudžbine trenutno nije podešeno. Pišite na mejl ili nas pozovite." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Neispravan zahtev." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Neispravan zahtev." }, { status: 400 });
  }

  const b = body as Record<string, unknown>;

  const orderType = typeof b.orderType === "string" ? b.orderType : "";
  if (!ORDER_TYPES.has(orderType)) {
    return NextResponse.json({ error: "Neispravan tip porudžbine." }, { status: 400 });
  }

  const months = typeof b.months === "number" ? b.months : Number(b.months);
  if (!MONTHS.has(months as 3 | 6 | 12)) {
    return NextResponse.json({ error: "Neispravno trajanje pretplate." }, { status: 400 });
  }

  const nameStr = typeof b.name === "string" ? clampText(b.name, MAX_NAME) : "";
  const phoneStr = typeof b.phone === "string" ? clampText(b.phone, MAX_PHONE) : "";
  const addressStr = typeof b.address === "string" ? clampText(b.address, MAX_ADDRESS) : "";
  const notesStr = typeof b.notes === "string" ? clampText(b.notes, MAX_NOTES) : "";

  const isRenewal = orderType === "renewal";

  if (!nameStr || !phoneStr) {
    return NextResponse.json(
      { error: "Ime i telefon su obavezni." },
      { status: 400 },
    );
  }

  if (isRenewal) {
    if (!notesStr) {
      return NextResponse.json(
        {
          error:
            "Napomena je obavezna za produžavanje pretplate. Unesite količinu pretplata i serijske brojeve uređaja.",
        },
        { status: 400 },
      );
    }
  } else if (!addressStr) {
    return NextResponse.json(
      { error: "Ime, telefon i adresa su obavezni." },
      { status: 400 },
    );
  }

  const paymentMethod = b.paymentMethod === "pouzece" || b.paymentMethod === "racun" ? b.paymentMethod : null;

  if (!paymentMethod) {
    return NextResponse.json({ error: "Izaberite način plaćanja." }, { status: 400 });
  }

  const fulfillment =
    b.fulfillment === "dostava" || b.fulfillment === "preuzimanje" ? b.fulfillment : null;
  const fullLabel = fulfillment
    ? fulfillment === "dostava"
      ? "Dostava na adresu"
      : "Lično preuzimanje"
    : "U dogovoru";

  let quantity = typeof b.quantity === "number" ? b.quantity : Number(b.quantity);
  if (!Number.isFinite(quantity) || quantity < 1) quantity = 1;
  if (quantity > 99) quantity = 99;

  const emailStr =
    typeof b.email === "string" && b.email.trim() ? clampText(b.email, MAX_EMAIL) : "";

  const addressForMail = isRenewal && !addressStr ? "— (produžavanje pretplate)" : addressStr;

  const typeLabel =
    orderType === "pro"
      ? "PRO GPS Sistem"
      : orderType === "smart"
        ? "Smart GPS Sistem"
        : "Produžavanje pretplate";

  const payLabel = paymentMethod === "pouzece" ? "Pouzećem prilikom isporuke" : "Uplata na račun po predračunu";

  const sentAtIso = new Date().toISOString();
  const text = [
    "Nova porudžbina sa sajta (gpspracenje.rs)",
    "",
    `Tip: ${typeLabel}`,
    `Trajanje pretplate: ${months} mes.`,
    `Broj sistema: ${quantity}`,
    "",
    `Ime / firma: ${nameStr}`,
    `Telefon: ${phoneStr}`,
    `Adresa: ${addressForMail}`,
    emailStr ? `Email: ${emailStr}` : "",
    notesStr ? `\nNapomena:\n${notesStr}` : "",
    "",
    `Plaćanje: ${payLabel}`,
    `Preuzimanje / dostava: ${fullLabel}`,
    "",
    `--- ${sentAtIso} ---`,
  ]
    .filter(Boolean)
    .join("\n");

  const html = buildOrderEmailHtml({
    typeLabel,
    months,
    quantity,
    name: nameStr,
    phone: phoneStr,
    address: addressForMail,
    email: emailStr,
    notes: notesStr,
    payLabel,
    fullLabel,
    sentAtIso,
  });

  try {
    await sendSiteMail({
      subject: `[Cyber Tracking] Narudžbina — ${typeLabel}`,
      text,
      html,
      ...(emailStr ? { replyTo: emailStr } : {}),
    });
  } catch (err) {
    console.error("[order mail]", err);
    const details =
      process.env.NODE_ENV === "development" && err instanceof Error ? err.message : undefined;
    return NextResponse.json(
      {
        error: "Slanje nije uspelo. Pokušajte ponovo ili pišite na mejl.",
        ...(details ? { details } : {}),
      },
      { status: 502 },
    );
  }

  const transactionId = randomUUID();
  return NextResponse.json({ ok: true, transactionId });
}
