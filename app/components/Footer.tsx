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
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/logo.svg"
                alt="Cyber Tracking – GPS praćenje vozila Srbija"
                width={320}
                height={92}
                className="logo-brand-orange mx-auto h-14 w-auto md:mx-0 md:h-16 lg:h-[4.5rem]"
              />
            </Link>
            <p className="text-sm text-slate-400">
              GPS praćenje vozila i praćenje flote u realnom vremenu. Kontrola kompanijskih vozila – Srbija.
            </p>
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
                <Link href="/narudzba" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
                  Narudžba
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-white">Kontakt</h3>
            <ul className="space-y-2 text-sm mx-auto md:mx-0">
              <li>
                <a href="mailto:info@gpspracenje.rs" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
                  info@gpspracenje.rs
                </a>
              </li>
              <li>
                <a href="tel:+381614030888" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
                  061 4030 888
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-white">Pratite nas</h3>
            <p className="text-sm">
              Praćenje flote i nadzor vozila – pouzdano GPS rešenje za kompanije.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-slate-700/80 bg-slate-800/35 px-4 py-5 sm:px-6 dark:border-white/10 dark:bg-white/[0.04]">
          <h3 className="mb-4 text-center text-sm font-semibold tracking-wide text-white md:text-left">
            Podaci o firmi
          </h3>
          <dl className="mx-auto grid max-w-2xl gap-x-10 gap-y-3 text-sm text-slate-400 md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center md:text-left">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                Poslovno ime
              </dt>
              <dd className="mt-1 text-slate-300">{companyLegal.company}</dd>
              <dd className="text-xs text-slate-500">Brend: {companyLegal.brand}</dd>
            </div>
            <div className="text-center md:text-left">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                Sedište
              </dt>
              <dd className="mt-1 text-slate-300">{companyLegal.address}</dd>
            </div>
            <div className="text-center md:text-left">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                PIB / Matični broj
              </dt>
              <dd className="mt-1 text-slate-300">
                {companyLegal.pib}
                <span className="text-slate-500"> · </span>
                {companyLegal.maticni}
              </dd>
            </div>
            <div className="text-center md:text-left">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                Službeni kontakt
              </dt>
              <dd className="mt-1">
                <a
                  href={`tel:${companyLegal.phone.replace(/\s/g, "")}`}
                  className="text-slate-300 transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]"
                >
                  {companyLegal.phone}
                </a>
              </dd>
              <dd className="mt-0.5">
                <a
                  href={`mailto:${companyLegal.email}`}
                  className="break-all text-slate-300 transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]"
                >
                  {companyLegal.email}
                </a>
              </dd>
            </div>
          </dl>
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
