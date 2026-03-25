"use client";

import { useState } from "react";
import Image from "next/image";

const CONTACT_IMAGE_SRC = "/kontakt.svg";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setValidationError(null);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    if (!name || !phone) {
      setValidationError("Molimo popunite obavezna polja: Ime i Prezime / Ime Firme i Telefon.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; details?: string };
      if (!res.ok) {
        const base = data.error || "Slanje nije uspelo. Pokušajte ponovo ili nas pozovite.";
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

  return (
    <section
      id="kontakt"
      className="scroll-mt-20 bg-white px-4 py-16 text-slate-900 sm:px-6 lg:px-8 lg:py-20 dark:bg-black dark:text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: form */}
          <div>
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Zainteresovani ste za GPS praćenje?
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-200/90">
                Pošaljite upit i kontaktiraćemo vas u najkraćem roku.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8 dark:border-white/10 dark:bg-white/5">
              {sent ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-400/20 dark:bg-emerald-500/10">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#00ff9d] text-black">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">Upit je poslat</h3>
                  <p className="mt-2 text-slate-700 dark:text-slate-200/90">Hvala vam. Kontaktiraćemo vas uskoro.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {validationError && (
                    <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 dark:border-red-300/20 dark:bg-red-500/10 dark:text-red-200">
                      <svg className="h-5 w-5 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm font-medium">{validationError}</p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                      Ime i Prezime / Ime Firme <span className="text-red-500 dark:text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={() => setValidationError(null)}
                      className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#00ff9d] dark:focus:ring-[#00ff9d]/30"
                      placeholder="Vaše ime ili naziv firme"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                      Telefon <span className="text-red-500 dark:text-red-400">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      onChange={() => setValidationError(null)}
                      className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#00ff9d] dark:focus:ring-[#00ff9d]/30"
                      placeholder="061 4030 888"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                      Poruka <span className="text-slate-500 dark:text-slate-300">(opciono)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      onChange={() => setValidationError(null)}
                  className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#00ff9d] dark:focus:ring-[#00ff9d]/30"
                      placeholder="Opis vaših potreba, broj vozila..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="transition-smooth w-full rounded-xl bg-[#00ff9d] px-6 py-4 font-semibold text-black shadow-[0_0_28px_rgba(0,255,157,0.25)] hover:bg-[#00e699] hover:shadow-[0_0_38px_rgba(0,255,157,0.35)] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting ? "Šaljem…" : "Zatraži ponudu"}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-slate-600 dark:text-slate-200/90">
              <a href="mailto:podrska@gpspracenje.rs" className="flex items-center gap-2 transition hover:text-teal-600 dark:hover:text-[#00ff9d]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                podrska@gpspracenje.rs
              </a>
              <a href="tel:+381614030888" className="flex items-center gap-2 transition hover:text-teal-600 dark:hover:text-[#00ff9d]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                061 4030 888
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="hidden lg:flex relative items-center justify-center">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent" aria-hidden />
            <div className="rounded-3xl">
              <Image
                src={CONTACT_IMAGE_SRC}
                alt="Kontakt ilustracija"
                width={1200}
                height={700}
                priority
                className="h-[380px] w-full object-contain sm:h-[460px] lg:h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
