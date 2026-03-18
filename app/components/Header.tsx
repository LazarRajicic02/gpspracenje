"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/usluge", label: "Usluge" },
  { href: "/prednosti", label: "Prednosti" },
  { href: "/aplikacija", label: "Aplikacija" },
  { href: "/faq", label: "FAQ" },
  { href: "/narudzba", label: "Narudžba" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/90">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="absolute left-4 top-1/2 z-10 flex -translate-y-1/2 sm:left-6 lg:left-8"
          aria-label="Cyber Tracking – GPS praćenje vozila, početna"
        >
          <Image
            src="/logo.svg"
            alt="Cyber Tracking – GPS praćenje vozila u realnom vremenu"
            width={280}
            height={80}
            className="h-14 w-auto sm:h-16 md:h-20"
            priority
          />
        </Link>
        <div className="w-32 shrink-0 sm:w-36 md:w-44" aria-hidden />

        <ul className="hidden items-center gap-4 md:flex md:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-smooth text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/kontakt"
              className="transition-smooth rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-500/20 hover:bg-teal-500 hover:shadow-teal-500/30 hover:-translate-y-0.5"
            >
              Pošalji upit
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="transition-smooth flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
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

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-700 dark:bg-slate-900 md:hidden">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-teal-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-teal-400"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/kontakt"
                className="block rounded-lg bg-teal-600 px-3 py-2 text-center font-semibold uppercase tracking-wide text-white hover:bg-teal-500"
                onClick={() => setOpen(false)}
              >
                Pošalji upit
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
