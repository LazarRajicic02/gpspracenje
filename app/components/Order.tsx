"use client";

import { useState } from "react";

export type OrderType = "basic" | "premium" | null;

const ORDER_TYPES = [
  {
    id: "basic" as const,
    title: "Osnovni paket",
    description: "Idealno za pojedinačna vozila. Praćenje u realnom vremenu, istorija ruta i osnovni izveštaji.",
    price: "Od 999 RSD/mes",
  },
  {
    id: "premium" as const,
    title: "Premium paket",
    description: "Za flote i kompanije. Geofencing, napredni izveštaji, podrška 24/7 i API integracija.",
    price: "Od 1.499 RSD/mes",
  },
];

const SUBSCRIPTION_MONTHS = [3, 6, 12] as const;

type OrderModalProps = {
  type: "basic" | "premium";
  onClose: () => void;
};

function OrderModal({ type, onClose }: OrderModalProps) {
  const [months, setMonths] = useState<3 | 6 | 12>(12);
  const [sent, setSent] = useState(false);

  const selectedType = ORDER_TYPES.find((t) => t.id === type)!;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-600 dark:bg-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
          aria-label="Zatvori"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 sm:p-8">
          <div className="mb-6 rounded-xl border border-teal-200 bg-teal-50 p-4 dark:border-teal-700/50 dark:bg-teal-900/30">
            <h3 className="font-semibold text-slate-900 dark:text-white">{selectedType.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{selectedType.description}</p>
          </div>

          {sent ? (
            <div className="rounded-xl border border-teal-200 bg-teal-50 p-6 text-center dark:border-teal-700/50 dark:bg-teal-900/20">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="mt-4 font-semibold text-slate-900 dark:text-white">Narudžbina je poslata</h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Hvala vam. Kontaktiraćemo vas uskoro u vezi narudžbine.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-500"
              >
                Zatvori
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Trajanje pretplate</label>
                <div className="mt-2 flex gap-2">
                  {SUBSCRIPTION_MONTHS.map((m) => (
                    <label
                      key={m}
                      className={`flex flex-1 cursor-pointer flex-col items-center rounded-xl border-2 px-4 py-3 text-center transition ${
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
                      <span className="font-semibold">{m}</span>
                      <span className="text-xs">meseci</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="order-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Ime i prezime / Kompanija
                </label>
                <input
                  id="order-name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  placeholder="Vaše ime ili naziv firme"
                />
              </div>
              <div>
                <label htmlFor="order-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  id="order-email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  placeholder="email@primer.rs"
                />
              </div>
              <div>
                <label htmlFor="order-phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Telefon
                </label>
                <input
                  id="order-phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  placeholder="+381 60 123 4567"
                />
              </div>
              <div>
                <label htmlFor="order-address" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Adresa (opciono)
                </label>
                <input
                  id="order-address"
                  name="address"
                  type="text"
                  className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  placeholder="Grad, ulica, broj"
                />
              </div>
              <div>
                <label htmlFor="order-notes" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Napomena (opciono)
                </label>
                <textarea
                  id="order-notes"
                  name="notes"
                  rows={2}
                  className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  placeholder="Broj vozila, željeni datum instalacije..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-teal-600 py-4 font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-500"
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
              Narudžba
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Izaberite tip paketa i popunite podatke. Javićemo vam se sa ponudom.
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
