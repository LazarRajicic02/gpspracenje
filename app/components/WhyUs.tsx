"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
const whatYouGet = [
  {
    label: "Praćenje u realnom vremenu",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Istorija i evidencija kretanja",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    label: "Alarmi i notifikacije",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    label: "Aplikacija + web pristup",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function OrbitVisual() {
  const orbitDurationSec = 42;
  const orbitItems = whatYouGet;

  function getOrbitSpinStyle(delay: number): CSSProperties & Record<"--orbit-duration", string> {
    return {
      "--orbit-duration": `${orbitDurationSec}s`,
      animationDelay: `${delay}s`,
    };
  }

  function getOrbitCounterStyle(delay: number, radius: string): CSSProperties & Record<"--orbit-duration" | "--r", string> {
    return {
      "--orbit-duration": `${orbitDurationSec}s`,
      "--r": radius,
      animationDelay: `${delay}s`,
    };
  }

  return (
    <div className="relative mx-auto flex aspect-square max-w-[420px] items-center justify-center lg:max-w-[480px]">
      {/* Central hub – mapa vozila */}
      <div className="relative z-10 flex h-72 w-72 shrink-0 items-center justify-center sm:h-80 sm:w-80">
        <div className="flex flex-col items-center justify-center text-center text-slate-900 dark:text-white">
          <Image
            src="/tracking.png"
            alt="Mapa vozila"
            width={420}
            height={420}
            className="h-56 w-56 object-contain sm:h-64 sm:w-64"
            priority
          />

        </div>
      </div>

      {/* Orbiting feature cards */}
      {orbitItems.map((item, i) => {
        // Two rings: inner and outer. Radius scales with viewport so cards won't overlap as easily.
        const isOuter = i % 2 === 0;
        const radius = isOuter ? "clamp(175px, 26vw, 260px)" : "clamp(130px, 20vw, 210px)";
        // Stagger phases so cards are visible at different positions along the circles.
        const delay = -(i * (orbitDurationSec / orbitItems.length));

        return (
          <div key={item.label} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div
              className="orbit-spin"
              style={getOrbitSpinStyle(delay)}
            >
              <div
                className="orbit-counter"
                style={getOrbitCounterStyle(delay, radius)}
              >
                <div className="transition-smooth rounded-xl border border-slate-200/80 bg-white px-3 py-2.5 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-white/[0.08] dark:shadow-none dark:backdrop-blur-sm sm:px-4 sm:py-3">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-500/15 text-teal-600 dark:bg-[#00ff9d]/20 dark:text-[#00ff9d]">
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium leading-snug text-slate-700 dark:text-slate-200 sm:text-sm">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function WhyUs() {
  return (
    <section id="gps-sistem" className="scroll-mt-20 bg-slate-50 px-4 py-20 dark:bg-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="animate-fade-in-up text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              GPS sistemi za privatnu i poslovnu upotrebu
            </h2>
            <p className="animate-fade-in-up animation-delay-75 mt-4 text-lg text-slate-600 dark:text-slate-300">
              Pogodan za različite delatnosti i za praćenje jednog ili više vozila u realnom vremenu.
            </p>
            <h3 className="mt-8 font-semibold text-slate-900 dark:text-white">Šta dobijate</h3>
            <ul className="mt-3 space-y-2">
              {whatYouGet.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white dark:bg-[#00ff9d] dark:text-black">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">{item.label}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">Namena</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Privatna vozila • Rent-a-car • Kurirske službe • Dostava • Građevinske i poljoprivredne mašine • Transport i logistika • Auto-škole • Taxi vozila • Plovila • Ostala vozila i prevozna sredstva
            </p>
          </div>
          <div className="flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
            <OrbitVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
