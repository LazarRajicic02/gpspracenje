"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/prednosti", label: "Prednosti" },
  { href: "/gps-sistem", label: "GPS sistem" },
  { href: "/aplikacija", label: "Aplikacija" },
  { href: "/porucivanje", label: "Poručivanje" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-white/[0.08] dark:bg-black">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between gap-6 py-4 pl-3 pr-4 sm:pl-4 sm:pr-6 lg:pl-5 lg:pr-8">
        {/* Logo – left */}
        <Link
          href="/"
          className="-ml-1 flex shrink-0 items-center sm:-ml-2"
          aria-label="Cyber Tracking – GPS praćenje vozila, početna"
        >
          <Image
            src="/logo.svg"
            alt="Cyber Tracking – GPS praćenje vozila u realnom vremenu"
            width={360}
            height={103}
            className="h-14 w-auto sm:h-16 md:h-[4.25rem] lg:h-[4.75rem]"
            priority
          />
        </Link>

        {/* Nav – center (desktop) */}
        <ul className="hidden flex-1 justify-center md:flex md:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-smooth text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-white dark:hover:text-[var(--accent-cta-bg)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: CTA */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/kontakt"
            className="transition-smooth hidden rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-teal-500 hover:-translate-y-0.5 md:inline-block dark:bg-[#00ff9d] dark:text-black dark:hover:bg-[#00e699] dark:hover:shadow-[0_0_20px_rgba(0,255,157,0.3)]"
          >
            Zatraži ponudu
          </Link>
          <button
            type="button"
            className="transition-smooth flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 md:hidden dark:text-white dark:hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-black md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100 hover:text-teal-600 dark:text-white dark:hover:bg-white/10 dark:hover:text-[#00ff9d]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/kontakt"
                className="block rounded-lg bg-[#00ff9d] px-3 py-3 text-center font-semibold text-black hover:bg-[#00e699]"
                onClick={() => setOpen(false)}
              >
                Zatraži ponudu
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
