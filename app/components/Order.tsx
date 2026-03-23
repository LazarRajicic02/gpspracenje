"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

export type OrderType = "pro" | "smart" | "renewal" | null;

const ORDER_TYPES = [
  {
    id: "pro" as const,
    title: "PRO GPS Sistem",
    description: "Napredni GPS sistem sa mogućnošću daljinskog gašenja vozila i potpunom kontrolom u realnom vremenu.",
    price: "GPS Lokator 59,95€ • Pretplata od 6,5€ mesečno",
  },
  {
    id: "smart" as const,
    title: "Smart GPS Sistem",
    description: "Standardni GPS sistem za praćenje vozila u realnom vremenu sa svim osnovnim funkcijama.",
    price: "GPS Lokator 49,95€ • Pretplata od 6,5€ mesečno",
  },
  {
    id: "renewal" as const,
    title: "Produžavanje pretplate",
    description: "Produžite postojeću pretplatu za 3, 6 ili 12 meseci bez ugovorne obaveze i dodatnih naknada.",
    price: "3 meseca 24,00€ • 6 meseci 45,00€ • 12 meseci 78,00€",
  },
];

const SUBSCRIPTION_MONTHS = [3, 6, 12] as const;
const SUBSCRIPTION_PRICES: Record<3 | 6 | 12, string> = {
  3: "24,00€",
  6: "45,00€",
  12: "78,00€",
};

const MONTHLY_PRICE: Record<3 | 6 | 12, string> = {
  3: "8,0€",
  6: "7,0€",
  12: "6,5€",
};

const MONTH_LABELS: Record<3 | 6 | 12, string> = {
  3: "3 meseca",
  6: "6 meseci",
  12: "12 meseci",
};

type OrderModalProps = {
  type: "pro" | "smart" | "renewal";
  onClose: () => void;
};

function OrderModal({ type, onClose }: OrderModalProps) {
  const [months, setMonths] = useState<3 | 6 | 12>(12);
  const [sent, setSent] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"pouzece" | "racun">("pouzece");
  const [fulfillment, setFulfillment] = useState<"dostava" | "preuzimanje" | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const selectedType = ORDER_TYPES.find((t) => t.id === type)!;

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setValidationError(null);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const address = (form.elements.namedItem("address") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const notes = (form.elements.namedItem("notes") as HTMLTextAreaElement).value.trim();
    const qtyRaw = (form.elements.namedItem("quantity") as HTMLInputElement).value;
    const quantity = Math.min(99, Math.max(1, Number.parseInt(qtyRaw, 10) || 1));
    if (!name || !phone || !address) {
      setValidationError("Molimo popunite obavezna polja: Ime i prezime / Naziv firme, Telefon i Ulica i grad.");
      return;
    }
    if (!acceptedTerms) {
      setValidationError("Morate prihvatiti uslove korišćenja i politiku privatnosti.");
      return;
    }
    if (!fulfillment) {
      setValidationError("Izaberite način preuzimanja ili slanja porudžbine.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderType: type,
          months,
          name,
          phone,
          address,
          email: email || undefined,
          notes: notes || undefined,
          quantity,
          paymentMethod,
          fulfillment,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; details?: string };
      if (!res.ok) {
        const base = data.error || "Slanje nije uspelo. Pokušajte ponovo.";
        setValidationError(data.details ? `${base} (${data.details})` : base);
        return;
      }
      setSent(true);
    } catch {
      setValidationError("Mrežna greška. Proverite vezu i pokušajte ponovo.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) onClose();
  }

  const panelBorder =
    validationError ? "border-red-400 dark:border-red-500" : "border-slate-200 dark:border-white/20";

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center overflow-hidden bg-slate-900/60 px-3 py-5 backdrop-blur-sm dark:bg-black/80 sm:px-5 sm:py-8"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        className={`relative max-h-[calc(100dvh-2.5rem)] w-full max-w-lg overflow-x-hidden overflow-y-auto overscroll-contain rounded-2xl border-2 bg-white px-5 pb-5 pt-12 shadow-xl transition-colors [touch-action:pan-y] dark:bg-black sm:max-h-[calc(100dvh-4rem)] sm:px-6 sm:pb-6 sm:pt-14 ${panelBorder}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 z-20 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label="Zatvori"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-4 rounded-xl border border-teal-200 bg-teal-50 p-3 dark:border-teal-700/50 dark:bg-teal-900/30">
          <h3 id="order-modal-title" className="font-semibold text-slate-900 dark:text-white">
            {selectedType.title}
          </h3>
          <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{selectedType.description}</p>
          {type !== "renewal" && (
            <p className="mt-2 text-sm font-medium text-teal-700 dark:text-teal-300">Pretplata: od 6,5€ mesečno</p>
          )}
        </div>

        {sent ? (
            <div className="rounded-xl border border-teal-200 bg-teal-50 p-5 text-center dark:border-teal-700/50 dark:bg-teal-900/20">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="mt-3 font-semibold text-slate-900 dark:text-white">Narudžbina je poslata</h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Hvala vam. Kontaktiraćemo vas uskoro u vezi narudžbine.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-3 rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-500"
              >
                Zatvori
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {validationError && (
                <div className="flex items-start gap-3 rounded-lg border border-red-300 bg-red-50 px-3 py-2.5 text-red-700 dark:border-red-500/50 dark:bg-red-900/20 dark:text-red-100">
                  <svg className="mt-0.5 h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-xs font-medium">{validationError}</p>
                </div>
              )}

              <div>
                <span className="block text-sm font-medium text-slate-700 dark:text-slate-300">Trajanje pretplate</span>
                <div className="mt-1.5 flex flex-wrap gap-2 sm:flex-nowrap">
                  {SUBSCRIPTION_MONTHS.map((m) => {
                    const selected = months === m;
                    const twelveHighlight = m === 12;
                    return (
                      <label
                        key={m}
                        className={`flex min-w-[calc(33.333%-0.5rem)] flex-1 cursor-pointer flex-col items-center rounded-lg border-2 px-2 py-2.5 text-center transition sm:min-w-0 ${
                          selected
                            ? "border-teal-500 bg-teal-50 text-teal-800 dark:bg-teal-900/30 dark:text-teal-200"
                            : twelveHighlight
                              ? "border-amber-400/90 text-slate-700 hover:border-amber-500 dark:border-amber-400/50 dark:text-slate-200"
                              : "border-slate-300 text-slate-600 hover:border-slate-400 dark:border-white/10 dark:text-slate-300 dark:hover:border-white/25"
                        } ${selected && twelveHighlight ? "ring-2 ring-amber-400 ring-offset-2 ring-offset-white dark:ring-offset-black" : ""}`}
                      >
                        <input
                          type="radio"
                          name="months"
                          value={m}
                          checked={selected}
                          onChange={() => setMonths(m)}
                          className="sr-only"
                        />
                        <span className="text-xs font-semibold leading-tight sm:text-sm">{MONTH_LABELS[m]}</span>
                        <span className="mt-1 text-xs font-medium text-teal-600 dark:text-teal-400">{SUBSCRIPTION_PRICES[m]}</span>
                        {m === 12 && (
                          <span className="mt-1.5 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800 dark:bg-amber-400/25 dark:text-amber-100">
                            Najbolja cena
                          </span>
                        )}
                      </label>
                    );
                  })}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Po mesecu: 3 mes. {MONTHLY_PRICE[3]} · 6 mes. {MONTHLY_PRICE[6]} · 12 mes. {MONTHLY_PRICE[12]} (najbolja cena). Izabrano:{" "}
                  <span className="font-semibold text-teal-600 dark:text-teal-400">{MONTHLY_PRICE[months]}/mes.</span>
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="order-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Ime i prezime / Naziv firme <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="order-name"
                    name="name"
                    type="text"
                    required
                    onChange={() => setValidationError(null)}
                    className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
                    placeholder="Unesite ime i prezime ili naziv firme"
                  />
                </div>
                <div>
                  <label htmlFor="order-phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Broj telefona <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="order-phone"
                    name="phone"
                    type="tel"
                    required
                    onChange={() => setValidationError(null)}
                    className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
                    placeholder="061 4030 888"
                  />
                </div>
                <div>
                  <label htmlFor="order-address" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Ulica i grad <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="order-address"
                    name="address"
                    type="text"
                    required
                    onChange={() => setValidationError(null)}
                    className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
                    placeholder="Unesite ulicu i grad"
                  />
                </div>
                <div>
                  <label htmlFor="order-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email <span className="text-slate-400 dark:text-slate-300">(opciono)</span>
                  </label>
                  <input
                    id="order-email"
                    name="email"
                    type="email"
                    onChange={() => setValidationError(null)}
                    className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
                    placeholder="email@primer.rs"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="order-notes" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Napomena <span className="text-slate-400 dark:text-slate-300">(opciono)</span>
                </label>
                <textarea
                  id="order-notes"
                  name="notes"
                  rows={2}
                  onChange={() => setValidationError(null)}
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
                  placeholder="Napomena."
                />
              </div>

              <div>
                <label htmlFor="order-quantity" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Broj željenih sistema
                </label>
                <input
                  id="order-quantity"
                  name="quantity"
                  type="number"
                  min={1}
                  defaultValue={1}
                  onChange={() => setValidationError(null)}
                  className="mt-1 block w-full max-w-xs rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
                />
              </div>

              <div>
                <span className="block text-sm font-medium text-slate-700 dark:text-slate-300">Način plaćanja</span>
                <div className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <label className="group flex cursor-pointer items-center gap-3 rounded-xl border border-transparent px-2 py-2.5 transition hover:bg-slate-50 dark:hover:bg-white/[0.05]">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="pouzece"
                      checked={paymentMethod === "pouzece"}
                      onChange={() => {
                        setPaymentMethod("pouzece");
                        setValidationError(null);
                      }}
                      className="sr-only"
                    />
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-white transition dark:border-white/20 dark:bg-white/[0.06] group-has-[:checked]:border-teal-600 group-has-[:checked]:bg-teal-600 dark:group-has-[:checked]:border-[#00ff9d] dark:group-has-[:checked]:bg-[#00ff9d]">
                      <span className="h-2 w-2 rounded-full bg-white opacity-0 transition group-has-[:checked]:opacity-100 dark:bg-slate-950 dark:group-has-[:checked]:bg-black" />
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">Pouzećem prilikom isporuke</span>
                  </label>
                  <label className="group flex cursor-pointer items-center gap-3 rounded-xl border border-transparent px-2 py-2.5 transition hover:bg-slate-50 dark:hover:bg-white/[0.05]">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="racun"
                      checked={paymentMethod === "racun"}
                      onChange={() => {
                        setPaymentMethod("racun");
                        setValidationError(null);
                      }}
                      className="sr-only"
                    />
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-white transition dark:border-white/20 dark:bg-white/[0.06] group-has-[:checked]:border-teal-600 group-has-[:checked]:bg-teal-600 dark:group-has-[:checked]:border-[#00ff9d] dark:group-has-[:checked]:bg-[#00ff9d]">
                      <span className="h-2 w-2 rounded-full bg-white opacity-0 transition group-has-[:checked]:opacity-100 dark:bg-slate-950 dark:group-has-[:checked]:bg-black" />
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">Uplata na račun po predračunu</span>
                  </label>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 dark:border-white/10">
                <span className="block text-sm font-medium text-slate-700 dark:text-slate-300">Preuzimanje / dostava</span>
                <div className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <label className="group flex cursor-pointer items-center gap-3 rounded-xl border border-transparent px-2 py-2.5 transition hover:bg-slate-50 dark:hover:bg-white/[0.05]">
                    <input
                      type="radio"
                      name="fulfillment"
                      value="dostava"
                      checked={fulfillment === "dostava"}
                      onChange={() => {
                        setFulfillment("dostava");
                        setValidationError(null);
                      }}
                      className="sr-only"
                    />
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-white transition dark:border-white/20 dark:bg-white/[0.06] group-has-[:checked]:border-teal-600 group-has-[:checked]:bg-teal-600 dark:group-has-[:checked]:border-[#00ff9d] dark:group-has-[:checked]:bg-[#00ff9d]">
                      <span className="h-2 w-2 rounded-full bg-white opacity-0 transition group-has-[:checked]:opacity-100 dark:bg-slate-950 dark:group-has-[:checked]:bg-black" />
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">Dostava na adresu</span>
                  </label>
                  <label className="group flex cursor-pointer items-center gap-3 rounded-xl border border-transparent px-2 py-2.5 transition hover:bg-slate-50 dark:hover:bg-white/[0.05]">
                    <input
                      type="radio"
                      name="fulfillment"
                      value="preuzimanje"
                      checked={fulfillment === "preuzimanje"}
                      onChange={() => {
                        setFulfillment("preuzimanje");
                        setValidationError(null);
                      }}
                      className="sr-only"
                    />
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-white transition dark:border-white/20 dark:bg-white/[0.06] group-has-[:checked]:border-teal-600 group-has-[:checked]:bg-teal-600 dark:group-has-[:checked]:border-[#00ff9d] dark:group-has-[:checked]:bg-[#00ff9d]">
                      <span className="h-2 w-2 rounded-full bg-white opacity-0 transition group-has-[:checked]:opacity-100 dark:bg-slate-950 dark:group-has-[:checked]:bg-black" />
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">Lično preuzimanje</span>
                  </label>
                </div>
              </div>

              <label className="group flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-3 text-xs text-slate-600 transition hover:border-teal-200/80 hover:bg-teal-50/40 focus-within:ring-2 focus-within:ring-teal-500/40 focus-within:ring-offset-2 focus-within:ring-offset-white dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-[#00ff9d]/25 dark:hover:bg-[#00ff9d]/[0.06] dark:focus-within:ring-[#00ff9d]/50 dark:focus-within:ring-offset-black">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => {
                    setAcceptedTerms(e.target.checked);
                    setValidationError(null);
                  }}
                  className="sr-only"
                />
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 border-slate-300 bg-white transition dark:border-white/25 dark:bg-white/[0.06] group-has-[:checked]:border-teal-600 group-has-[:checked]:bg-teal-600 dark:group-has-[:checked]:border-[#00ff9d] dark:group-has-[:checked]:bg-[#00ff9d]">
                  <svg
                    className="h-3 w-3 text-white opacity-0 transition group-has-[:checked]:opacity-100 dark:text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="min-w-0 leading-relaxed">
                  Prihvatam{" "}
                  <Link
                    href="/uslovi-koriscenja"
                    className="font-semibold text-teal-700 underline-offset-2 hover:underline dark:text-[#00ff9d]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    uslove korišćenja
                  </Link>{" "}
                  i{" "}
                  <Link
                    href="/politika-privatnosti"
                    className="font-semibold text-teal-700 underline-offset-2 hover:underline dark:text-[#00ff9d]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    politiku privatnosti
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={!acceptedTerms || submitting}
                className="w-full rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-45 dark:bg-[#00ff9d] dark:text-black dark:hover:bg-[#00e699] dark:disabled:opacity-40"
              >
                {submitting ? "Šaljem…" : "Pošalji porudžbinu"}
              </button>

              <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                Ili pišite na{" "}
                <a
                  href="mailto:cybermaster381@gmail.com"
                  className="font-medium text-teal-600 hover:underline dark:text-teal-400"
                >
                  cybermaster381@gmail.com
                </a>
              </p>
            </form>
          )}
      </div>
    </div>,
    document.body,
  );
}

export default function Order() {
  const [modalType, setModalType] = useState<OrderType>(null);

  return (
    <>
      <section id="narudzba" className="scroll-mt-20 bg-white px-4 py-20 dark:bg-black sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Započnite GPS praćenje već danas
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Izaberite GPS sistem i trajanje pretplate koje vam odgovara. Kompletan sistem uključuje uređaj, SIM karticu i aplikaciju, uz mogućnost izbora pretplate na 3, 6 ili 12 meseci, bez ugovorne obaveze.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ORDER_TYPES.map((plan) => {
              const isRenewal = plan.id === "renewal";
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setModalType(plan.id)}
                  className={`group flex flex-col rounded-2xl border-2 p-6 text-left transition hover:shadow-lg ${
                    isRenewal
                      ? "border-slate-200 bg-slate-50/80 hover:border-teal-300 hover:bg-slate-50 hover:shadow-teal-500/10 dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-[#00ff9d]/40 dark:hover:bg-white/[0.08]"
                      : "border-slate-800 bg-slate-900 hover:border-teal-500/60 hover:shadow-teal-500/20 dark:border-white/15 dark:bg-slate-950"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${
                      isRenewal ? "bg-teal-500" : "bg-teal-600 dark:bg-[#00ff9d] dark:text-black"
                    }`}
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3
                    className={`mt-4 font-semibold ${
                      isRenewal
                        ? "text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400"
                        : "text-white group-hover:text-teal-300 dark:group-hover:text-[#00ff9d]"
                    }`}
                  >
                    {plan.title}
                  </h3>
                  <p
                    className={`mt-2 flex-1 text-sm ${
                      isRenewal ? "text-slate-600 dark:text-slate-300" : "text-slate-300 dark:text-slate-400"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <p
                    className={`mt-4 text-sm font-medium ${
                      isRenewal ? "text-teal-600 dark:text-teal-400" : "text-[#4ade80] dark:text-[#00ff9d]"
                    }`}
                  >
                    {plan.price}
                  </p>
                  <span
                    className={`mt-3 inline-flex items-center text-sm font-medium ${
                      isRenewal
                        ? "text-teal-600 group-hover:text-teal-500 dark:text-teal-400 dark:group-hover:text-teal-300"
                        : "text-teal-400 group-hover:text-teal-300 dark:text-[#00ff9d] dark:group-hover:text-[#00e699]"
                    }`}
                  >
                    {isRenewal ? "Produži" : "Poruči"}
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {modalType && <OrderModal type={modalType} onClose={() => setModalType(null)} />}
    </>
  );
}
