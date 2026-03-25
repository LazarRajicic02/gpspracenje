"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export type OrderType = "pro" | "smart" | "renewal" | null;

const ORDER_TYPES = [
  {
    id: "pro" as const,
    title: "PRO GPS Sistem",
    description: "Napredni GPS sistem sa mogućnošću daljinskog gašenja vozila i potpunom kontrolom u realnom vremenu.",
    price: "GPS sistem 6.850 rsd. • Pretplata od 780 rsd.",
  },
  {
    id: "smart" as const,
    title: "Smart GPS Sistem",
    description: "Standardni GPS sistem za praćenje vozila u realnom vremenu sa svim osnovnim funkcijama.",
    price: "GPS sistem 5.850 rsd. • Pretplata od 780 rsd.",
  },
  {
    id: "renewal" as const,
    title: "Produžavanje pretplate",
    description: "Produžite postojeću pretplatu za 3, 6 ili 12 meseci bez ugovorne obaveze i dodatnih naknada.",
    price: "3 meseca 3.150 rsd. • 6 meseci 5.340 rsd. • 12 meseci 9.360 rsd.",
  },
];

const SUBSCRIPTION_MONTHS = [3, 6, 12] as const;
const SUBSCRIPTION_PRICES: Record<3 | 6 | 12, string> = {
  3: "3.150 rsd.",
  6: "5.340 rsd.",
  12: "9.360 rsd.",
};

const MONTHLY_PRICE: Record<3 | 6 | 12, string> = {
  3: "1.050 rsd.",
  6: "890 rsd.",
  12: "780 rsd.",
};

const MONTH_LABELS: Record<3 | 6 | 12, string> = {
  3: "3 meseca",
  6: "6 meseci",
  12: "12 meseci",
};

export type PlanId = "pro" | "smart" | "renewal";

type OrderFormBodyProps = {
  type: PlanId;
  variant: "modal" | "page";
  onDismiss: () => void;
};

export function OrderFormBody({ type, variant, onDismiss }: OrderFormBodyProps) {
  const [months, setMonths] = useState<3 | 6 | 12>(12);
  const [sent, setSent] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"pouzece" | "racun">("pouzece");
  const [validationError, setValidationError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const selectedType = ORDER_TYPES.find((t) => t.id === type)!;
  const titleId = variant === "modal" ? "order-modal-title" : "order-form-title";

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
      setValidationError("Molimo popunite obavezna polja: ime i prezime ili naziv firme, telefon i ulica sa gradom.");
      return;
    }
    if (!acceptedTerms) {
      setValidationError("Morate prihvatiti uslove korišćenja i politiku privatnosti.");
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

  const panelBorder =
    validationError ? "border-red-400 dark:border-red-500" : "border-slate-200 dark:border-white/20";

  const suffix = variant === "page" ? "-inline" : "";
  const pageForm = variant === "page";

  const pageGrid = pageForm
    ? {
        error: "lg:col-span-2 lg:col-start-1 lg:row-start-1",
        pretplata: validationError ? "lg:col-start-1 lg:row-start-2" : "lg:col-start-1 lg:row-start-1",
        personal: validationError
          ? "lg:col-start-2 lg:row-start-2 lg:row-span-3"
          : "lg:col-start-2 lg:row-start-1 lg:row-span-3",
        payment: validationError ? "lg:col-start-1 lg:row-start-3" : "lg:col-start-1 lg:row-start-2",
        terms: validationError ? "lg:col-start-1 lg:row-start-4" : "lg:col-start-1 lg:row-start-3",
        submit: validationError ? "lg:col-span-2 lg:col-start-1 lg:row-start-5" : "lg:col-span-2 lg:col-start-1 lg:row-start-4",
        foot: validationError ? "lg:col-span-2 lg:col-start-1 lg:row-start-6" : "lg:col-span-2 lg:col-start-1 lg:row-start-5",
      }
    : null;

  const fieldInputClass = pageForm
    ? "mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-white/10 dark:bg-white/[0.08] dark:text-white max-lg:min-h-[48px] lg:mt-1 lg:px-2.5 lg:py-1.5 lg:text-sm"
    : "mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-white/10 dark:bg-white/[0.08] dark:text-white";

  const sectionCardClass = pageForm
    ? "rounded-xl border border-slate-200 bg-slate-50/90 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04] lg:rounded-lg lg:border-slate-200/70 lg:bg-slate-50/50 lg:p-3 lg:shadow-none dark:lg:border-white/[0.08] dark:lg:bg-white/[0.02]"
    : "rounded-xl border border-slate-200 bg-slate-50/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-5";

  const mainBody = (
    <>
      <div
        className={
          pageForm
            ? "mb-4 rounded-xl border border-teal-200 bg-teal-50 p-4 dark:border-teal-700/50 dark:bg-teal-900/30 lg:mb-2 lg:rounded-lg lg:border-teal-200/70 lg:bg-teal-50/70 lg:p-3 dark:lg:border-teal-800/45 dark:lg:bg-teal-950/30"
            : "mb-4 rounded-xl border border-teal-200 bg-teal-50 p-3 dark:border-teal-700/50 dark:bg-teal-900/30"
        }
      >
        <h3 id={titleId} className="font-semibold text-slate-900 dark:text-white">
          {selectedType.title}
        </h3>
        <p
          className={
            pageForm
              ? "mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 lg:mt-1 lg:text-xs lg:leading-snug"
              : "mt-0.5 text-sm text-slate-600 dark:text-slate-300"
          }
        >
          {selectedType.description}
        </p>
      </div>

      {sent ? (
        <div className="rounded-xl border border-teal-200 bg-teal-50 p-6 text-center dark:border-teal-700/50 dark:bg-teal-900/20 max-lg:py-8 lg:mx-auto lg:max-w-md lg:p-5">
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
            onClick={onDismiss}
            className="mt-3 rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-500"
          >
            Zatvori
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={
            pageForm
              ? "flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-2"
              : "flex flex-col gap-5"
          }
        >
              {validationError && (
                <div
                  className={`flex items-start gap-3 rounded-lg border border-red-300 bg-red-50 px-3 py-2.5 text-red-700 dark:border-red-500/50 dark:bg-red-900/20 dark:text-red-100 ${pageGrid?.error ?? ""}`}
                >
                  <svg className="mt-0.5 h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className={`font-medium ${pageForm ? "text-sm max-lg:text-base" : "text-xs"}`}>{validationError}</p>
                </div>
              )}

              <div className={`${sectionCardClass} ${pageGrid?.pretplata ?? ""}`}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Pretplata
                </h4>
                <span
                  className={
                    pageForm
                      ? "mt-3 block text-sm font-medium text-slate-800 dark:text-slate-200 lg:mt-1.5 lg:text-xs"
                      : "mt-3 block text-sm font-medium text-slate-800 dark:text-slate-200"
                  }
                >
                  Izaberite trajanje pretplate
                </span>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-nowrap lg:mt-1.5">
                  {SUBSCRIPTION_MONTHS.map((m) => {
                    const selected = months === m;
                    const isTwelve = m === 12;
                    const isSix = m === 6;
                    const cardClass =
                      selected && isTwelve
                        ? "border-teal-600 bg-teal-50 text-teal-900 shadow-md ring-2 ring-brand-orange ring-offset-2 ring-offset-white dark:border-teal-400 dark:bg-teal-900/35 dark:text-teal-100 dark:ring-brand-orange dark:ring-offset-black"
                        : selected && isSix
                          ? "border-teal-600 bg-teal-50 text-teal-900 shadow-md ring-2 ring-sky-400 ring-offset-2 ring-offset-white dark:border-teal-400 dark:bg-teal-900/35 dark:text-teal-100 dark:ring-sky-500 dark:ring-offset-black"
                          : selected
                            ? "border-teal-500 bg-teal-50 text-teal-800 dark:bg-teal-900/30 dark:text-teal-200"
                            : isTwelve
                              ? "border-brand-orange bg-brand-orange-soft/90 text-slate-800 shadow-md hover:border-brand-orange-deep dark:border-brand-orange dark:bg-brand-orange-950/40 dark:text-brand-orange-soft"
                              : isSix
                                ? "border-sky-400 bg-sky-50/90 text-slate-800 shadow-sm hover:border-sky-500 dark:border-sky-500/60 dark:bg-sky-950/35 dark:text-sky-50"
                                : "border-slate-300 text-slate-600 hover:border-slate-400 dark:border-white/10 dark:text-slate-300 dark:hover:border-white/25";
                    return (
                      <label
                        key={m}
                        className={`flex w-full cursor-pointer flex-col items-center rounded-lg border-2 px-1.5 py-2.5 text-center transition sm:min-w-0 sm:flex-1 sm:px-2 lg:py-1.5 ${cardClass}`}
                      >
                        <input
                          type="radio"
                          name="months"
                          value={m}
                          checked={selected}
                          onChange={() => setMonths(m)}
                          className="sr-only"
                        />
                        <span className="text-[11px] font-semibold leading-tight sm:text-sm">{MONTH_LABELS[m]}</span>
                        <span className="mt-1 text-[11px] font-semibold text-teal-600 dark:text-teal-400 sm:text-xs">
                          {SUBSCRIPTION_PRICES[m]}
                        </span>
                        <span className="mt-0.5 block text-[10px] font-medium leading-tight text-slate-500 dark:text-slate-400">
                          {MONTHLY_PRICE[m]} / mes.
                        </span>
                        {m === 6 && (
                          <span className="mt-1.5 rounded-full bg-sky-200 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-sky-950 dark:bg-sky-500/35 dark:text-sky-100 sm:px-2 sm:text-[10px]">
                            Najčešći izbor
                          </span>
                        )}
                        {m === 12 && (
                          <span className="mt-1.5 rounded-full bg-brand-orange/25 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-brand-orange-ink dark:bg-brand-orange/35 dark:text-brand-orange-soft sm:px-2 sm:text-[10px]">
                            Najbolja cena
                          </span>
                        )}
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className={`${sectionCardClass} ${pageGrid?.personal ?? ""}`}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Vaši podaci
                </h4>
                <div className={pageForm ? "mt-4 space-y-5 max-lg:space-y-5 lg:mt-2 lg:space-y-2" : "mt-4 space-y-4"}>
                  <div>
                    <label
                      htmlFor={`order-name${suffix}`}
                      className={
                        pageForm
                          ? "block text-sm font-medium text-slate-700 dark:text-slate-300 max-lg:text-base"
                          : "block text-sm font-medium text-slate-700 dark:text-slate-300"
                      }
                    >
                      Ime i prezime (ili naziv firme) <span className="text-red-500">*</span>
                    </label>
                    <input
                      id={`order-name${suffix}`}
                      name="name"
                      type="text"
                      required
                      onChange={() => setValidationError(null)}
                      className={fieldInputClass}
                      placeholder="Unesite ime i prezime ili naziv firme"
                    />
                  </div>
                  <div className="grid gap-4 max-lg:gap-5 sm:grid-cols-2 lg:gap-2">
                    <div>
                      <label
                        htmlFor={`order-phone${suffix}`}
                        className={
                          pageForm
                            ? "block text-sm font-medium text-slate-700 dark:text-slate-300 max-lg:text-base"
                            : "block text-sm font-medium text-slate-700 dark:text-slate-300"
                        }
                      >
                        Telefon <span className="text-red-500">*</span>
                      </label>
                      <input
                        id={`order-phone${suffix}`}
                        name="phone"
                        type="tel"
                        required
                        onChange={() => setValidationError(null)}
                        className={fieldInputClass}
                        placeholder="061 4030 888"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`order-email${suffix}`}
                        className={
                          pageForm
                            ? "block text-sm font-medium text-slate-700 dark:text-slate-300 max-lg:text-base"
                            : "block text-sm font-medium text-slate-700 dark:text-slate-300"
                        }
                      >
                        Email <span className="text-slate-400 dark:text-slate-300">(opciono)</span>
                      </label>
                      <input
                        id={`order-email${suffix}`}
                        name="email"
                        type="email"
                        onChange={() => setValidationError(null)}
                        className={fieldInputClass}
                        placeholder="email@primer.rs"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor={`order-address${suffix}`}
                      className={
                        pageForm
                          ? "block text-sm font-medium text-slate-700 dark:text-slate-300 max-lg:text-base"
                          : "block text-sm font-medium text-slate-700 dark:text-slate-300"
                      }
                    >
                      Ulica i grad <span className="text-red-500">*</span>
                    </label>
                    <input
                      id={`order-address${suffix}`}
                      name="address"
                      type="text"
                      required
                      onChange={() => setValidationError(null)}
                      className={fieldInputClass}
                      placeholder="Unesite ulicu i grad"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`order-notes${suffix}`}
                      className={
                        pageForm
                          ? "block text-sm font-medium text-slate-700 dark:text-slate-300 max-lg:text-base"
                          : "block text-sm font-medium text-slate-700 dark:text-slate-300"
                      }
                    >
                      Napomena <span className="text-slate-400 dark:text-slate-300">(opciono)</span>
                    </label>
                    <textarea
                      id={`order-notes${suffix}`}
                      name="notes"
                      rows={pageForm ? 3 : 2}
                      onChange={() => setValidationError(null)}
                      className={`${fieldInputClass} max-lg:min-h-[5.5rem] lg:min-h-[3.25rem] lg:resize-none lg:py-1.5`}
                    />
                  </div>
                  <div className="max-w-full sm:max-w-[12rem]">
                    <label
                      htmlFor={`order-quantity${suffix}`}
                      className={
                        pageForm
                          ? "block text-sm font-medium text-slate-700 dark:text-slate-300 max-lg:text-base"
                          : "block text-sm font-medium text-slate-700 dark:text-slate-300"
                      }
                    >
                      Broj željenih sistema za kupovinu
                    </label>
                    <input
                      id={`order-quantity${suffix}`}
                      name="quantity"
                      type="number"
                      min={1}
                      defaultValue={1}
                      onChange={() => setValidationError(null)}
                      className={fieldInputClass}
                    />
                  </div>
                </div>
              </div>

              <div className={`${sectionCardClass} ${pageGrid?.payment ?? ""}`}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Plaćanje i isporuka
                </h4>
                <div className={pageForm ? "mt-4 space-y-5 lg:mt-2 lg:space-y-2" : "mt-4 space-y-5"}>
                  <div>
                    <span
                      className={
                        pageForm
                          ? "text-sm font-medium text-slate-800 dark:text-slate-200 max-lg:text-base lg:text-xs"
                          : "text-sm font-medium text-slate-800 dark:text-slate-200"
                      }
                    >
                      Način plaćanja
                    </span>
                    <div
                      className={`mt-2 divide-y divide-slate-200 overflow-hidden rounded-lg border border-slate-200 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.06] ${pageForm ? "max-lg:mt-2 lg:mt-1.5 lg:flex lg:flex-col lg:divide-x-0 lg:divide-y" : ""}`}
                    >
                      <label
                        className={`group flex cursor-pointer items-center gap-3 px-3 py-3 transition hover:bg-slate-50 dark:hover:bg-white/[0.04] ${pageForm ? "lg:py-2 lg:pl-3 lg:pr-3" : ""}`}
                      >
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
                        <span
                          className={
                            pageForm
                              ? "text-sm font-medium text-slate-800 dark:text-slate-200 max-lg:text-base lg:text-xs lg:leading-snug"
                              : "text-sm font-medium text-slate-800 dark:text-slate-200"
                          }
                        >
                          Pouzećem prilikom isporuke
                        </span>
                      </label>
                      <label
                        className={`group flex cursor-pointer items-center gap-3 px-3 py-3 transition hover:bg-slate-50 dark:hover:bg-white/[0.04] ${pageForm ? "lg:py-2 lg:pl-3 lg:pr-3" : ""}`}
                      >
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
                        <span
                          className={
                            pageForm
                              ? "text-sm font-medium text-slate-800 dark:text-slate-200 max-lg:text-base lg:text-xs lg:leading-snug"
                              : "text-sm font-medium text-slate-800 dark:text-slate-200"
                          }
                        >
                          Uplata na račun po predračunu
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <label
                className={`group flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-xs text-slate-600 shadow-sm transition hover:border-teal-200/80 hover:bg-teal-50/30 focus-within:ring-2 focus-within:ring-teal-500/30 focus-within:ring-offset-2 focus-within:ring-offset-white dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300 dark:hover:border-[#00ff9d]/25 dark:hover:bg-[#00ff9d]/[0.06] dark:focus-within:ring-[#00ff9d]/40 dark:focus-within:ring-offset-black ${pageForm ? "max-lg:px-4 max-lg:py-4 max-lg:text-sm lg:px-3 lg:py-2 lg:text-[11px] lg:leading-snug" : ""} ${pageGrid?.terms ?? ""}`}
              >
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
                className={`w-full rounded-xl bg-teal-600 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-45 dark:bg-[#00ff9d] dark:text-black dark:hover:bg-[#00e699] dark:disabled:opacity-40 ${pageForm ? "max-lg:py-3.5 max-lg:text-base lg:py-2.5 lg:text-sm" : "py-3"} ${pageGrid?.submit ?? ""}`}
              >
                {submitting ? "Šaljem…" : "Pošalji porudžbinu"}
              </button>

              <p
                className={`text-center text-xs text-slate-500 dark:text-slate-400 ${pageForm ? "max-lg:text-sm lg:text-[11px]" : ""} ${pageGrid?.foot ?? ""}`}
              >
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
    </>
  );

  if (variant === "modal") {
    return (
      <div
        className={`relative max-h-[calc(100dvh-2.5rem)] w-full max-w-2xl overflow-x-hidden overflow-y-auto overscroll-contain rounded-2xl border-2 bg-white px-5 pb-5 pt-12 shadow-xl transition-colors [touch-action:pan-y] dark:bg-black sm:max-h-[calc(100dvh-4rem)] sm:px-6 sm:pb-6 sm:pt-14 ${panelBorder}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          type="button"
          onClick={onDismiss}
          className="absolute right-2 top-2 z-20 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label="Zatvori"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {mainBody}
      </div>
    );
  }

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={onDismiss}
        className="mb-2 text-left text-sm font-medium text-teal-600 hover:underline dark:text-[#00ff9d] max-lg:mb-3 max-lg:text-base max-lg:min-h-[44px] lg:mb-1 lg:text-sm"
      >
        ← Nazad na izbor paketa
      </button>
      {mainBody}
    </div>
  );
}

function OrderModal({ type, onClose }: { type: PlanId; onClose: () => void }) {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) onClose();
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center overflow-hidden bg-slate-900/60 px-3 py-5 backdrop-blur-sm dark:bg-black/80 sm:px-5 sm:py-8"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <OrderFormBody type={type} variant="modal" onDismiss={onClose} />
    </div>,
    document.body,
  );
}

function OrderInner() {
  const pathname = usePathname();
  const router = useRouter();
  const [modalType, setModalType] = useState<OrderType>(null);

  const isOrderPage = pathname === "/porucivanje";

  function selectPlan(id: PlanId) {
    const mobile = typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches;
    if (isOrderPage || mobile) {
      router.push(`/porucivanje/${id}`);
      return;
    }
    setModalType(id);
  }

  const smartPlan = ORDER_TYPES.find((t) => t.id === "smart")!;
  const proPlan = ORDER_TYPES.find((t) => t.id === "pro")!;
  const renewalPlan = ORDER_TYPES.find((t) => t.id === "renewal")!;

  return (
    <>
      <section id="porucivanje" className="scroll-mt-20 bg-white px-4 py-12 dark:bg-black sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Poručite svoj GPS sistem
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Izaberite GPS sistem i trajanje pretplate koje vam odgovara. Kompletan sistem uključuje uređaj, SIM karticu i aplikaciju, uz mogućnost izbora pretplate na 3, 6 ili 12 meseci, bez ugovorne obaveze.
            </p>
          </div>

          <p className="mt-10 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 lg:mt-12">
            Novi GPS uređaj + pretplata
          </p>

          <div className="mt-4 flex flex-col gap-8 lg:mt-5 lg:flex-row lg:items-stretch lg:justify-center lg:gap-5 xl:gap-7">
            {/* Smart — levo, manji */}
            <div className="mx-auto w-full max-w-sm lg:mx-0 lg:flex lg:w-[26%] lg:min-w-0 lg:max-w-none lg:self-center">
              <button
                type="button"
                onClick={() => selectPlan("smart")}
                className="group flex h-full w-full flex-col rounded-2xl border-2 border-slate-700 bg-slate-900 p-5 text-left transition hover:border-teal-500/70 hover:shadow-lg hover:shadow-teal-500/15 dark:border-white/20 dark:bg-slate-950 sm:p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white dark:bg-[#00ff9d] dark:text-black">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-white group-hover:text-teal-200 dark:group-hover:text-[#00ff9d] sm:text-lg">
                  {smartPlan.title}
                </h3>
                <p className="mt-2 flex-1 text-xs text-slate-300 dark:text-slate-400 sm:text-sm">{smartPlan.description}</p>
                <p className="mt-4 text-xs font-medium text-[#4ade80] dark:text-[#00ff9d] sm:text-sm">{smartPlan.price}</p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-teal-300 dark:text-[#00ff9d]">
                  Poruči
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>

            {/* PRO — centar, najveći */}
            <div className="mx-auto w-full max-w-md lg:mx-0 lg:flex lg:w-[38%] lg:min-w-0 lg:max-w-none lg:self-center">
              <button
                type="button"
                onClick={() => selectPlan("pro")}
                className="group relative z-10 flex h-full w-full flex-col rounded-2xl border-2 border-brand-orange bg-slate-900 p-7 text-left shadow-xl ring-2 ring-brand-orange/50 ring-offset-2 ring-offset-white transition hover:border-brand-orange-bright hover:shadow-2xl hover:shadow-brand-orange/25 dark:bg-slate-950 dark:ring-brand-orange/40 dark:ring-offset-black sm:p-8 lg:scale-[1.05] lg:py-9"
              >
                <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-brand-orange-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-orange-ink shadow-sm dark:bg-brand-orange/90 dark:text-black">
                  Preporuka
                </span>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white dark:bg-[#00ff9d] dark:text-black">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-teal-100 dark:group-hover:text-[#00ff9d] sm:text-2xl">
                  {proPlan.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-300 dark:text-slate-400 sm:text-base">{proPlan.description}</p>
                <p className="mt-4 text-sm font-medium text-[#4ade80] dark:text-[#00ff9d] sm:text-base">{proPlan.price}</p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-teal-300 dark:text-[#00ff9d]">
                  Poruči
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Produžavanje — desno, drugačiji vizuelni jezik */}
            <div
              className="mx-auto flex w-full max-w-sm flex-col border-t border-dashed border-slate-300 pt-8 dark:border-white/20 lg:mx-0 lg:w-[24%] lg:min-w-0 lg:max-w-none lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0 xl:pl-8"
              aria-labelledby="order-renewal-heading"
            >
              <p
                id="order-renewal-heading"
                className="mb-1 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-[#00ff9d] lg:text-left"
              >
                Produžavanje pretplate
              </p>
              <p className="mb-4 text-center text-xs text-slate-600 dark:text-slate-400 lg:text-left">
                Za postojeće korisnike — bez novog uređaja.
              </p>
              <button
                type="button"
                onClick={() => selectPlan("renewal")}
                className="group flex w-full flex-col rounded-xl border-2 border-dashed border-teal-500/60 bg-slate-50 p-4 text-left shadow-sm transition hover:border-teal-500 hover:bg-white hover:shadow-md dark:border-[#00ff9d]/45 dark:bg-white/[0.04] dark:hover:border-[#00ff9d] dark:hover:bg-white/[0.07] sm:p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-600/15 text-teal-700 dark:bg-[#00ff9d]/15 dark:text-[#00ff9d]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900 group-hover:text-teal-700 dark:text-white dark:group-hover:text-[#00ff9d]">
                  {renewalPlan.title}
                </h3>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{renewalPlan.description}</p>
                <p className="mt-3 text-xs font-medium text-teal-600 dark:text-teal-400">{renewalPlan.price}</p>
                <span className="mt-2 inline-flex items-center text-xs font-semibold text-teal-600 group-hover:text-teal-500 dark:text-[#00ff9d]">
                  Produži pretplatu
                  <svg className="ml-1 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {modalType && !isOrderPage && <OrderModal type={modalType} onClose={() => setModalType(null)} />}
    </>
  );
}

export default OrderInner;
