import Link from "next/link";
import Image from "next/image";
import { companyLegal } from "../data/company";
import { TrackedTelLink } from "./TrackedTelLink";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 dark:border-white/10 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 text-center md:text-left md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Cyber Tracking GPS – GPS praćenje vozila Srbija"
                width={400}
                height={115}
                className="mx-auto h-20 w-auto sm:h-24 md:mx-0 md:h-28 lg:h-32"
              />
            </Link>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-white">Brzi linkovi</h3>
            <ul className="space-y-2 text-sm mx-auto md:mx-0">
              <li>
                <Link
                  href="/prednosti"
                  className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]"
                >
                  Prednosti
                </Link>
              </li>
              <li>
                <Link
                  href="/gps-sistem"
                  className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]"
                >
                  GPS sistem
                </Link>
              </li>
              <li>
                <Link
                  href="/aplikacija"
                  className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]"
                >
                  Aplikacija
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <div className="mx-auto w-full max-w-md text-center md:mx-0 md:max-w-lg md:text-left">
              <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-4 md:justify-start lg:gap-x-10">
                <div className="mx-auto w-full max-w-[11.5rem] shrink-0 sm:mx-0">
                  <h3 className="mb-2 font-semibold text-white">Kontakt</h3>
                  <ul className="space-y-1.5 text-sm">
                    <li>
                      <a
                        href={`mailto:${companyLegal.email}`}
                        className="transition-smooth break-all hover:text-teal-400 dark:hover:text-[#00ff9d]"
                      >
                        {companyLegal.email}
                      </a>
                    </li>
                    <li>
                      <TrackedTelLink
                        href="tel:+381614030888"
                        className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]"
                      >
                        061 4030 888
                      </TrackedTelLink>
                    </li>
                  </ul>
                </div>
                <div className="mx-auto w-full max-w-[13rem] shrink-0 sm:mx-0">
                  <h3 className="mb-2 font-semibold text-white">
                    Cyber Tracking GPS
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                    Profesionalni GPS sistem za praćenje i zaštitu vozila. 12
                    godina iskustva u GPS praćenju i tehničkoj podršci.
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-700/70 pt-5 dark:border-white/10">
                <div className="space-y-1.5 text-sm text-slate-300">
                  <p>{companyLegal.company}</p>
                  <p>{companyLegal.address}</p>
                  <p>PIB: {companyLegal.pib}</p>
                  <p>MB: {companyLegal.maticni}</p>
                  <p>{companyLegal.racun}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex w-full items-end justify-between gap-4 border-t border-slate-700 pt-8 dark:border-white/10">
          <p className="min-w-0 flex-1 text-left text-sm text-slate-500 dark:text-slate-400">
            © 2014-2026 Cyber Tracking GPS – gpspracenje.rs.{" "}
            <Link
              href="/politika-privatnosti"
              className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]"
            >
              Politika privatnosti
            </Link>
            {" · "}
            <Link
              href="/uslovi-koriscenja"
              className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]"
            >
              Uslovi korišćenja
            </Link>
            . Sva prava zadržana.
          </p>
          <a
            href={companyLegal.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-teal-600 hover:text-white dark:hover:bg-teal-800"
            aria-label="Facebook — Cyber Tracking GPS"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
