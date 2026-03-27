import { NextResponse } from "next/server";
import { buildContactEmailHtml } from "@/lib/email-templates";
import { clampText, isMailConfigured, sendSiteMail } from "@/lib/mail";

const MAX_NAME = 200;
const MAX_PHONE = 40;
const MAX_MESSAGE = 8000;

export async function POST(request: Request) {
  if (!isMailConfigured()) {
    return NextResponse.json(
      { error: "Slanje poruka trenutno nije podešeno. Kontaktirajte nas telefonom ili direktno mejlom." },
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

  const { name, phone, message } = body as Record<string, unknown>;
  const nameStr = typeof name === "string" ? clampText(name, MAX_NAME) : "";
  const phoneStr = typeof phone === "string" ? clampText(phone, MAX_PHONE) : "";
  const messageStr = typeof message === "string" ? clampText(message, MAX_MESSAGE) : "";

  if (!nameStr || !phoneStr) {
    return NextResponse.json({ error: "Ime i telefon su obavezni." }, { status: 400 });
  }

  const sentAtIso = new Date().toISOString();
  const text = [
    "Nova poruka sa kontakt forme (gpspracenje.rs)",
    "",
    `Ime / firma: ${nameStr}`,
    `Telefon: ${phoneStr}`,
    messageStr ? `\nPoruka:\n${messageStr}` : "",
    "",
    `--- ${sentAtIso} ---`,
  ].join("\n");

  const html = buildContactEmailHtml({
    name: nameStr,
    phone: phoneStr,
    message: messageStr,
    sentAtIso,
  });

  try {
    await sendSiteMail({
      subject: "[Cyber Tracking] Kontakt upit sa sajta",
      text,
      html,
    });
  } catch (err) {
    console.error("[contact mail]", err);
    const details = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      {
        error: "Slanje nije uspelo. Pokušajte ponovo ili nas pozovite.",
        details,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
