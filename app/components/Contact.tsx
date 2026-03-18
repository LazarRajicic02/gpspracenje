"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setValidationError(null);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    if (!name || !phone) {
      setValidationError("Molimo popunite obavezna polja: Ime i prezime / Kompanija i Telefon.");
      return;
    }
    setSent(true);
  }

  return (
    <section id="kontakt" className="scroll-mt-20 bg-slate-50 px-4 py-20 dark:bg-slate-800/80 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="animate-fade-in-up text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Kontakt – upit za GPS praćenje vozila
          </h2>
          <p className="animate-fade-in-up animation-delay-75 mt-4 text-lg text-slate-600 dark:text-slate-400">
            Upit za praćenje flote ili pojedinačnog vozila? Pošaljite poruku – odgovaramo u najkraćem roku.
          </p>
        </div>
        <div
          className={`mt-12 rounded-2xl border-2 bg-white p-6 shadow-sm transition-colors dark:bg-slate-800/50 sm:p-8 ${
            validationError
              ? "border-red-400 dark:border-red-500"
              : "border-slate-200 dark:border-slate-600"
          }`}
        >
          {sent ? (
            <div className="rounded-xl border border-teal-200 bg-teal-50 p-6 text-center dark:border-teal-700/50 dark:bg-teal-900/20">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">Upit je poslat</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Hvala vam. Kontaktiraćemo vas uskoro.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {validationError && (
                <div className="flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-red-700 dark:border-red-500/50 dark:bg-red-900/20 dark:text-red-300">
                  <svg className="h-5 w-5 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">{validationError}</p>
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Ime i prezime / Kompanija <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={() => setValidationError(null)}
                  className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  placeholder="Vaše ime ili naziv firme"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email <span className="text-slate-400 dark:text-slate-500">(opciono)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={() => setValidationError(null)}
                  className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  placeholder="email@ primer.rs"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Telefon <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  onChange={() => setValidationError(null)}
                  className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  placeholder="061 4030 888"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Poruka <span className="text-slate-400 dark:text-slate-500">(opciono)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  onChange={() => setValidationError(null)}
                  className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  placeholder="Opis vaših potreba, broj vozila..."
                />
              </div>
              <button
                type="submit"
                className="transition-smooth w-full rounded-xl bg-teal-600 px-6 py-4 font-semibold text-white shadow-lg shadow-teal-500/25 hover:bg-teal-500 hover:shadow-teal-500/30 hover:-translate-y-0.5"
              >
                Pošalji upit
              </button>
            </form>
          )}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-slate-600 dark:text-slate-400">
          <a href="mailto:info@gpspracenje.rs" className="transition-smooth flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@gpspracenje.rs
          </a>
          <a href="tel:+381614030888" className="transition-smooth flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            061 4030 888
          </a>
        </div>
      </div>
    </section>
  );
}
