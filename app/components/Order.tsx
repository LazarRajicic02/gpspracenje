"use client";

import { useState } from "react";

export type OrderType = "basic" | "premium" | null;

const ORDER_TYPES = [
  {
    id: "basic" as const,
    title: "GPS uređaj + pretplata",
    description: "Uređaj 49,95€. Pretplata 3 meseca 19,50€, 6 meseci 39€ ili 12 meseci 78€ + 1 mesec gratis. Bez ugovora i skrivenih troškova.",
    price: "Uređaj 49,95€ • Pretplata od 19,50€",
  },
  {
    id: "premium" as const,
    title: "Više vozila ili flota",
    description: "Isti uređaj i pretplata – neograničen broj vozila. Kontaktirajte nas za ponudu prilagođenu vašim potrebama.",
    price: "Pozovite 061 4030 888",
  },
];

const SUBSCRIPTION_MONTHS = [3, 6, 12] as const;
const SUBSCRIPTION_PRICES: Record<3 | 6 | 12, string> = {
  3: "19,50€",
  6: "39,00€",
  12: "78,00€ + 1 mesec gratis",
};

type OrderModalProps = {
  type: "basic" | "premium";
  onClose: () => void;
};

function OrderModal({ type, onClose }: OrderModalProps) {
  const [months, setMonths] = useState<3 | 6 | 12>(12);
  const [sent, setSent] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const selectedType = ORDER_TYPES.find((t) => t.id === type)!;

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

  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full max-w-lg rounded-2xl border-2 bg-white shadow-xl transition-colors dark:bg-slate-800 ${
          validationError ? "border-red-400 dark:border-red-500" : "border-slate-200 dark:border-slate-600"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-lg p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
          aria-label="Zatvori"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-5 sm:p-6">
          <div className="mb-4 rounded-xl border border-teal-200 bg-teal-50 p-3 dark:border-teal-700/50 dark:bg-teal-900/30">
            <h3 className="font-semibold text-slate-900 dark:text-white">{selectedType.title}</h3>
            <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">{selectedType.description}</p>
            {type === "basic" && (
              <p className="mt-2 text-sm font-medium text-teal-700 dark:text-teal-300">Uređaj: 49,95€</p>
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
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
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
                <div className="flex items-start gap-3 rounded-lg border border-red-300 bg-red-50 px-3 py-2.5 text-red-700 dark:border-red-500/50 dark:bg-red-900/20 dark:text-red-300">
                  <svg className="h-4 w-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs font-medium">{validationError}</p>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Trajanje pretplate</label>
                <div className="mt-1.5 flex gap-2">
                  {SUBSCRIPTION_MONTHS.map((m) => (
                    <label
                      key={m}
                      className={`flex flex-1 cursor-pointer flex-col items-center rounded-lg border-2 px-3 py-2 text-center transition ${
                        months === m
                          ? "border-teal-500 bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300"
                          : "border-slate-300 text-slate-600 hover:border-slate-400 dark:border-slate-600 dark:hover:border-slate-500 dark:text-slate-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="months"
                        value={m}
                        checked={months === m}
                        onChange={() => setMonths(m)}
                        className="sr-only"
                      />
                      <span className="font-semibold text-sm">{m}</span>
                      <span className="text-xs">meseci</span>
                      <span className="mt-0.5 text-xs font-medium text-teal-600 dark:text-teal-400">{SUBSCRIPTION_PRICES[m]}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="order-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Ime / Kompanija <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="order-name"
                    name="name"
                    type="text"
                    onChange={() => setValidationError(null)}
                    className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    placeholder="Ime ili naziv firme"
                  />
                </div>
                <div>
                  <label htmlFor="order-phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="order-phone"
                    name="phone"
                    type="tel"
                    onChange={() => setValidationError(null)}
                    className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    placeholder="061 4030 888"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="order-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email <span className="text-slate-400 dark:text-slate-500">(opciono)</span>
                  </label>
                  <input
                    id="order-email"
                    name="email"
                    type="email"
                    onChange={() => setValidationError(null)}
                    className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    placeholder="email@primer.rs"
                  />
                </div>
                <div>
                  <label htmlFor="order-address" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Adresa <span className="text-slate-400 dark:text-slate-500">(opciono)</span>
                  </label>
                  <input
                    id="order-address"
                    name="address"
                    type="text"
                    onChange={() => setValidationError(null)}
                    className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    placeholder="Grad, ulica"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="order-notes" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Napomena <span className="text-slate-400 dark:text-slate-500">(opciono)</span>
                </label>
                <textarea
                  id="order-notes"
                  name="notes"
                  rows={2}
                  onChange={() => setValidationError(null)}
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  placeholder="Broj vozila, željeni datum..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-500"
              >
                Pošalji narudžbinu
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Order() {
  const [modalType, setModalType] = useState<OrderType>(null);

  return (
    <>
      <section id="narudzba" className="scroll-mt-20 bg-white px-4 py-20 dark:bg-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Narudžba GPS praćenja
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Izaberite paket za praćenje vozila ili flote i popunite podatke. Besplatna ponuda u najkraćem roku.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {ORDER_TYPES.map((plan) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => setModalType(plan.id)}
                className="group flex flex-col rounded-2xl border-2 border-slate-200 bg-slate-50/80 p-6 text-left transition hover:border-teal-300 hover:bg-slate-50 hover:shadow-lg hover:shadow-teal-500/10 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-teal-500/50 dark:hover:bg-slate-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                  {plan.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">{plan.description}</p>
                <p className="mt-4 text-sm font-medium text-teal-600 dark:text-teal-400">{plan.price}</p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-teal-600 group-hover:text-teal-500 dark:text-teal-400 dark:group-hover:text-teal-300">
                  Naruči
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {modalType && <OrderModal type={modalType} onClose={() => setModalType(null)} />}
    </>
  );
}
