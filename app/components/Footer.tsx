import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 dark:border-slate-700">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/logo.svg"
                alt="Cyber Tracking"
                width={200}
                height={56}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-slate-400">
              Pametno GPS praćenje vozila za kompanije i pojedince. Kontrola flote u realnom vremenu.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-white">Brzi linkovi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/usluge" className="transition hover:text-teal-400">
                  Usluge
                </Link>
              </li>
              <li>
                <Link href="/prednosti" className="transition hover:text-teal-400">
                  Prednosti
                </Link>
              </li>
              <li>
                <Link href="/aplikacija" className="transition hover:text-teal-400">
                  Aplikacija
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition hover:text-teal-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/narudzba" className="transition hover:text-teal-400">
                  Narudžba
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="transition hover:text-teal-400">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-white">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@gpspracenje.rs" className="transition hover:text-teal-400">
                  info@gpspracenje.rs
                </a>
              </li>
              <li>
                <a href="tel:+381601234567" className="transition hover:text-teal-400">
                  +381 60 123 4567
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-white">Pratite nas</h3>
            <p className="text-sm">
              GPS praćenje vozila – pouzdano rešenje za vašu flotu.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
          © {currentYear} Cyber Tracking – gpspracenje.rs. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
