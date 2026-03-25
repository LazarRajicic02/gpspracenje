import Link from "next/link";
import Image from "next/image";
import { companyLegal } from "../data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 dark:border-white/10 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 text-center md:text-left md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Cyber Tracking – GPS praćenje vozila Srbija"
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
                <Link href="/prednosti" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
                  Prednosti
                </Link>
              </li>
              <li>
                <Link href="/gps-sistem" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
                  GPS sistem
                </Link>
              </li>
              <li>
                <Link href="/aplikacija" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
                  Aplikacija
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/porucivanje" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
                  Poručivanje
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
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
                        href="mailto:podrska@gpspracenje.rs"
                        className="transition-smooth break-all hover:text-teal-400 dark:hover:text-[#00ff9d]"
                      >
                        podrska@gpspracenje.rs
                      </a>
                    </li>
                    <li>
                      <a href="tel:+381614030888" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
                        061 4030 888
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mx-auto w-full max-w-[13rem] shrink-0 sm:mx-0">
                  <h3 className="mb-2 font-semibold text-white">Pratite nas</h3>
                  <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                    Praćenje flote i nadzor vozila – pouzdano GPS rešenje za kompanije.
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-700/70 pt-5 dark:border-white/10">
                <dl className="space-y-3 text-sm text-slate-400">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">Sedište</dt>
                    <dd className="mt-0.5 text-slate-300">{companyLegal.address}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                      PIB / Matični broj
                    </dt>
                    <dd className="mt-0.5 text-slate-300">
                      {companyLegal.pib}
                      <span className="text-slate-500"> · </span>
                      {companyLegal.maticni}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-8 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
          © {currentYear} Cyber Tracking – gpspracenje.rs.{" "}
          <Link href="/politika-privatnosti" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
            Politika privatnosti
          </Link>
          {" · "}
          <Link href="/uslovi-koriscenja" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
            Uslovi korišćenja
          </Link>
          . Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
