"use client";

import Image from "next/image";

const whatYouGet = [
  {
    orbitLabel: "Primena",
    label:
      "Primena – sve vrste vozila i plovila: automobili, kombiji, kamioni, motocikli, radne mašine, plovila.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
  },
  {
    orbitLabel: "Ugradnja",
    label:
      "Jednostavna ugradnja – povezivanje na akumulator ili napajanje vozila, samostalno ili kod auto-električara.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    ),
  },
  {
    orbitLabel: "Aplikacija",
    label: "Aplikacija – izuzetno jednostavna i podržana za iOS i Android telefone.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    orbitLabel: "Pretplata",
    label: "Pretplata – bez ugovorne obaveze, skrivenih troškova i dodatnih naknada.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    orbitLabel: "Garancija",
    label: "Garancija – važi tokom celog perioda korišćenja sistema.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

function OrbitVisual() {
  return (
    <div className="anim-visual-shell relative mx-auto flex aspect-square scale-110 items-center justify-center lg:scale-125">
      {/* Central hub – mapa vozila */}
      <div className="anim-visual-hub relative z-10 flex shrink-0 items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center text-slate-900 dark:text-white">
          <Image
            src="/gpssistem.svg"
            alt="Mapa vozila"
            width={1024}
            height={1024}
            className="anim-visual-image object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section id="gps-sistem" className="scroll-mt-20 bg-slate-50 px-4 py-8 dark:bg-black sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-14 lg:items-center xl:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              GPS sistemi za privatnu i poslovnu upotrebu
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Pogodan za različite delatnosti i za praćenje jednog ili više vozila u realnom vremenu.
            </p>
            <h3 className="mt-8 font-semibold text-slate-900 dark:text-white">Šta dobijate</h3>
            <ul className="mt-3 space-y-3">
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
            <h3 className="mt-8 font-semibold text-slate-900 dark:text-white">Namena</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              Privatna vozila • Rent-a-car • Kurirske službe • Dostava • Građevinske i poljoprivredne mašine •
              Transport i logistika • Auto-škole • Taxi vozila • Plovila • Ostala vozila i prevozna sredstva
            </p>
          </div>
          <div className="hidden min-h-[520px] items-center justify-center md:flex lg:min-h-[640px] xl:min-h-[700px]">
            <OrbitVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
