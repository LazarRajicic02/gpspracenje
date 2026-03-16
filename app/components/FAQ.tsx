"use client";

import { useState } from "react";

const faqItems = [
  { question: "Koliko košta GPS praćenje vozila?", answer: "Cene zavise od broja vozila i izabranog paketa. Nudimo fleksibilne pakete za male flote i pojedinačna vozila, kao i posebne uslove za veće kompanije. Kontaktirajte nas za besplatnu ponudu prilagođenu vašim potrebama." },
  { question: "Koliko traje instalacija uređaja?", answer: "Instalacija jednog uređaja obično traje 30–60 minuta. Dolazimo na vašu adresu ili u vaše poslovne prostore. Nakon instalacije, vozilo je odmah vidljivo na platformi i možete početi sa praćenjem." },
  { question: "Da li mogu da pratim više vozila?", answer: "Da. Naša platforma podržava praćenje neograničenog broja vozila. Sva vozila su prikazana na jednoj mapi, sa mogućnošću filtriranja po grupi, tipu ili statusu. Posebno su pogodni paketi za flote od nekoliko do stotina vozila." },
  { question: "Šta ako mi ukradu vozilo?", answer: "U slučaju krade, trenutna lokacija vozila je dostupna u realnom vremenu na platformi. Preporučujemo da odmah obavestite policiju i da im prosledite podatke o lokaciji. Naši uređaji su skriveni i teško se uočavaju, što povećava šanse za brzu povratnost vozila." },
  { question: "Da li postoji podrška za korisnike?", answer: "Da. Naš tim je dostupan putem emaila i telefona tokom radnog vremena. Za hitne slučajeve (npr. krada) možete nas kontaktirati i van radnog vremena. Takođe nudimo obuku za korišćenje platforme." },
  { question: "Koja je tačnost praćenja?", answer: "GPS uređaji koje koristimo nude tačnost pozicije do nekoliko metara u otvorenom prostoru. U gradskim zonama sa visokim zgradama tačnost može biti nešto manja, ali i dalje dovoljna za praćenje rute i lokacije vozila." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-white px-4 py-20 dark:bg-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Često postavljana pitanja
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Odgovori na najčešća pitanja o GPS praćenju vozila.
          </p>
        </div>
        <ul className="mt-12 space-y-3">
          {faqItems.map((item, index) => (
            <li
              key={index}
              className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-slate-600"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-white dark:focus-visible:ring-offset-slate-900"
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-teal-600 transition-transform dark:text-teal-400 ${openIndex === index ? "rotate-180" : ""}`}>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className={`grid transition-[grid-template-rows] duration-200 ease-out ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="border-t border-slate-200 px-5 pb-4 pt-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
                    {item.answer}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
