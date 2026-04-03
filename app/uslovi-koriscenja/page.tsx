import type { Metadata } from "next";
import Link from "next/link";
import { TrackedTelLink } from "../components/TrackedTelLink";
import {
  termsBulletSections,
  termsProvider,
  termsPrivacySummaryParagraphs,
} from "../data/usloviKoriscenja";

export const metadata: Metadata = {
  title: "Uslovi i pravila korišćenja – Cyber Tracking",
  description:
    "Uslovi i pravila korišćenja GPS usluge na gpspracenje.rs: privatnost, opis usluge, obaveze korisnika, garancija, odgovornost i pretplata.",
};

export default function UsloviKoriscenjaPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Nazad na početnu
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Uslovi i pravila korišćenja GPS usluge
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Poslednja izmena: {termsProvider.lastUpdated}</p>
      </header>

      <div className="prose prose-slate dark:prose-invert prose-headings:font-semibold prose-p:text-slate-600 dark:prose-p:text-slate-400 max-w-none">
        {termsBulletSections.map((section) => (
          <section key={section.title} className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 dark:text-slate-400">
              {section.items.map((item, i) => (
                <li key={`${section.title}-${i}`}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Podaci o pružaocu usluge</h2>
          <ul className="mt-4 list-none space-y-2 pl-0 text-slate-600 dark:text-slate-400">
            <li>
              <span className="font-medium text-slate-800 dark:text-slate-200">Naziv firme:</span>{" "}
              {termsProvider.company}
            </li>
            <li>
              <span className="font-medium text-slate-800 dark:text-slate-200">Sedište:</span> {termsProvider.address}
            </li>
            <li>
              <span className="font-medium text-slate-800 dark:text-slate-200">PIB:</span> {termsProvider.pib}
            </li>
            <li>
              <span className="font-medium text-slate-800 dark:text-slate-200">Matični broj:</span>{" "}
              {termsProvider.maticni}
            </li>
            <li>
              <span className="font-medium text-slate-800 dark:text-slate-200">Telefon:</span>{" "}
              <TrackedTelLink
                href={`tel:${termsProvider.phone.replace(/\s/g, "")}`}
                className="text-teal-600 underline-offset-2 hover:underline dark:text-teal-400"
              >
                {termsProvider.phone}
              </TrackedTelLink>
            </li>
            <li>
              <span className="font-medium text-slate-800 dark:text-slate-200">Email:</span>{" "}
              <a
                href={`mailto:${termsProvider.email}`}
                className="text-teal-600 underline-offset-2 hover:underline dark:text-teal-400"
              >
                {termsProvider.email}
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Politika privatnosti (ukratko)</h2>
          {termsPrivacySummaryParagraphs.map((p, i) => (
            <p key={i} className="mt-4 first:mt-4">
              {p}
            </p>
          ))}
          <p className="mt-4">
            Detaljnija politika privatnosti sajta gpspracenje.rs:{" "}
            <Link
              href="/politika-privatnosti"
              className="font-medium text-teal-600 underline-offset-2 hover:underline dark:text-teal-400"
            >
              Politika privatnosti
            </Link>
            .
          </p>
        </section>
      </div>

      <div className="mt-14 border-t border-slate-200 pt-8 dark:border-slate-700">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Nazad na početnu
        </Link>
      </div>
    </article>
  );
}
