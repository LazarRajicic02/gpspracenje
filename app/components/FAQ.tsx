"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { faqCategories, faqItems, type FaqItem } from "../data/faq";

type FAQProps = {
  variant?: "landing" | "all";
};

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <li className="transition-smooth overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-white/20">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-white dark:focus-visible:ring-offset-slate-900"
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <span
          className={`transition-smooth flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-teal-600 dark:text-teal-400 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-200 px-5 pb-4 pt-2 text-slate-600 dark:border-white/10 dark:text-slate-300">
            {item.answer}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function FAQ({ variant = "landing" }: FAQProps) {
  const isLanding = variant === "landing";

  const featuredItems = useMemo(() => faqItems.filter((i) => i.featured), []);
  const baseItems = isLanding ? featuredItems : faqItems;

  const initialOpenId = isLanding && featuredItems.length > 0 ? featuredItems[0].id : null;
  const [openId, setOpenId] = useState<string | null>(initialOpenId);
  const [query, setQuery] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");

  const filteredItems = useMemo(() => {
    if (isLanding) return baseItems;

    const q = query.trim().toLowerCase();
    return baseItems.filter((item) => {
      const categoryOk = activeCategoryId === "all" ? true : item.categoryId === activeCategoryId;
      const text = `${item.question} ${item.answer}`.toLowerCase();
      const queryOk = q.length === 0 ? true : text.includes(q);
      return categoryOk && queryOk;
    });
  }, [activeCategoryId, baseItems, isLanding, query]);

  const categories = faqCategories;

  return (
    <section id="faq" className="scroll-mt-20 bg-white px-4 py-20 dark:bg-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className={isLanding ? "" : "flex flex-col lg:flex-row lg:items-start lg:gap-12"}>
          {/* Left: pitanja + search */}
          <div className={isLanding ? "" : "flex-1"}>
            <div className={isLanding ? "text-center" : "text-left"}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Imate pitanje?
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Pronađite odgovore na najčešća pitanja o instalaciji, aplikaciji, uređaju i pretplati.
                {!isLanding && (
                  <>
                    {" "}
                    Koristite pretragu i kategorije da brže pronađete odgovor.
                  </>
                )}
              </p>
            </div>

            {!isLanding && (
              <div className="mt-10">
                <div className="flex flex-col gap-3">
                  <div className="w-full">
                    <label htmlFor="faq-search" className="sr-only">
                      Pretraga FAQ-a
                    </label>
                    <input
                      id="faq-search"
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Pretraži (npr. instalacija, pretplata, cena)"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-start gap-2">
                    <button
                      type="button"
                      className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                        activeCategoryId === "all"
                          ? "bg-teal-500 text-white"
                          : "border border-slate-200 bg-white/70 text-slate-700 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:bg-white/[0.08]"
                      }`}
                      onClick={() => setActiveCategoryId("all")}
                    >
                      Sve
                    </button>
                    {categories.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                          activeCategoryId === c.id
                            ? "bg-teal-500 text-white"
                            : "border border-slate-200 bg-white/70 text-slate-700 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:bg-white/[0.08]"
                        }`}
                        onClick={() => setActiveCategoryId(c.id)}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <ul className="mt-12 space-y-3">
              {filteredItems.length === 0 ? (
                <li className="rounded-xl border border-slate-200 bg-slate-50/80 p-6 text-center text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
                  Nismo pronašli odgovor za dati upit. Pokušajte drugu reč ili izaberite drugu kategoriju.
                </li>
              ) : (
                filteredItems.map((item) => (
                  <FaqAccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openId === item.id}
                    onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                  />
                ))
              )}
            </ul>

            {isLanding && (
              <div className="mt-10 text-center">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-500"
                >
                  Pogledajte sva pitanja
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          {/* Right: slika */}
          {!isLanding && (
            <div className="mt-10 lg:mt-0 lg:w-[640px] lg:sticky lg:top-24 lg:self-start">
              <div className="w-full overflow-hidden rounded-2xl">
                <Image
                  src="/f.png"
                  alt="Ilustracija – FAQ"
                  width={1400}
                  height={700}
                  className="h-[420px] w-full object-contain sm:h-[500px] lg:h-[640px]"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
