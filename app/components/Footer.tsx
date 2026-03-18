import Link from "next/link";
import Image from "next/image";

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
                width={200}
                height={56}
                className="h-10 w-auto dark:invert mx-auto"
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
                <Link href="/usluge" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
                  Usluge
                </Link>
              </li>
              <li>
                <Link href="/prednosti" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
                  Prednosti
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

        <div className="mt-10 border-t border-slate-700 pt-8 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
          © {currentYear} Cyber Tracking – gpspracenje.rs.{" "}
          <Link href="/politika-privatnosti" className="transition-smooth hover:text-teal-400 dark:hover:text-[#00ff9d]">
            Politika privatnosti
          </Link>
          . Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
