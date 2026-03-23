import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      {/* Light: gradient + subtle grid */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Dark: true black */}
      <div className="absolute inset-0 hidden bg-black dark:block" />
      <div
        className="absolute inset-0 hidden opacity-[0.06] dark:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Route line + pins (light mode) */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center overflow-hidden dark:hidden">
        <svg
          viewBox="0 0 1200 400"
          className="w-full max-w-5xl translate-y-[15%] scale-110 opacity-50"
          preserveAspectRatio="xMidYMax meet"
        >
          <path d="M 120 320 Q 280 200 450 260 T 800 220 T 1080 280" fill="none" stroke="#64748b" strokeWidth="14" strokeLinecap="round" />
          <path d="M 120 320 Q 280 200 450 260 T 800 220 T 1080 280" fill="none" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
          <g transform="translate(120, 320)">
            <circle r="14" fill="#0d9488" className="drop-shadow-md" />
            <path d="M0 18 L-8 32 L0 28 L8 32 Z" fill="#0f766e" className="drop-shadow-sm" />
          </g>
          <g transform="translate(450, 260)">
            <circle r="14" fill="#0d9488" className="drop-shadow-md" />
            <path d="M0 18 L-8 32 L0 28 L8 32 Z" fill="#0f766e" className="drop-shadow-sm" />
          </g>
          <g transform="translate(1080, 280)">
            <circle r="14" fill="#0d9488" className="drop-shadow-md" />
            <path d="M0 18 L-8 32 L0 28 L8 32 Z" fill="#0f766e" className="drop-shadow-sm" />
          </g>
        </svg>
      </div>
      {/* Route line + pins (dark mode) */}
      <div className="pointer-events-none absolute inset-0 hidden items-end justify-center overflow-hidden dark:flex">
        <svg
          viewBox="0 0 1200 400"
          className="w-full max-w-5xl translate-y-[15%] scale-110 opacity-40"
          preserveAspectRatio="xMidYMax meet"
        >
          <path d="M 120 320 Q 280 200 450 260 T 800 220 T 1080 280" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" className="text-slate-500" />
          <path d="M 120 320 Q 280 200 450 260 T 800 220 T 1080 280" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-slate-400" />
          <g transform="translate(120, 320)"><circle r="14" fill="rgba(255,255,255,0.9)" className="drop-shadow-md" /><path d="M0 18 L-8 32 L0 28 L8 32 Z" fill="rgba(255,255,255,0.95)" className="drop-shadow-sm" /></g>
          <g transform="translate(450, 260)"><circle r="14" fill="rgba(255,255,255,0.9)" className="drop-shadow-md" /><path d="M0 18 L-8 32 L0 28 L8 32 Z" fill="rgba(255,255,255,0.95)" className="drop-shadow-sm" /></g>
          <g transform="translate(1080, 280)"><circle r="14" fill="rgba(255,255,255,0.9)" className="drop-shadow-md" /><path d="M0 18 L-8 32 L0 28 L8 32 Z" fill="rgba(255,255,255,0.95)" className="drop-shadow-sm" /></g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl pt-8 text-center">
        <h1 className="animate-fade-in-up min-h-[1em] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100">
          Preuzmite potpunu kontrolu nad vozilima u realnom vremenu
        </h1>
        <p className="animate-fade-in-up animation-delay-75 mx-auto mt-4 max-w-2xl text-lg font-semibold text-teal-600 dark:text-teal-400">
          Smanjite troškove, zaštitite vozila od krađe i sprečite zloupotrebu
        </p>
        <p className="animate-fade-in-up animation-delay-150 mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          GPS Praćenje vozila u Srbiji i preko 40 zemalja Evrope, uz mogućnost daljinskog gašenja vozila jednim klikom putem aplikacije. Sistem je dostupan po promotivnoj ceni od samo 6.50€ mesečno po vozilu, a ponuda je vremenski ograničena.
        </p>

        <div className="animate-fade-in-up animation-delay-225 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
          <a
            href="tel:+381614030888"
            className="transition-smooth w-full rounded-xl bg-teal-600 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-teal-500/30 hover:bg-teal-500 hover:shadow-teal-500/40 hover:-translate-y-0.5 sm:w-auto dark:bg-[#00ff9d] dark:text-black dark:hover:bg-[#00e699] dark:hover:shadow-[0_0_24px_rgba(0,255,157,0.35)]"
          >
            Pozovite: 061 4030 888
          </a>
          <Link
            href="/narudzba"
            className="transition-smooth w-full rounded-xl border-2 border-slate-300 bg-white px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-slate-700 shadow-md hover:border-teal-400 hover:bg-slate-50 hover:-translate-y-0.5 sm:w-auto dark:border-white/20 dark:bg-white/[0.08] dark:text-white dark:hover:border-[#00ff9d]/50 dark:hover:bg-white/10"
          >
            Započni odmah
          </Link>
        </div>
        <p className="animate-fade-in-up animation-delay-300 mt-4 text-center text-sm text-slate-500 dark:text-slate-300">
          Bez ugovorne obaveze, bez skrivenih troškova i uz potpunu tehničku podršku.
        </p>
        <Link
          href="/aplikacija"
          className="transition-smooth animate-fade-in-up animation-delay-400 mt-2 inline-block rounded-xl border-2 border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-800 backdrop-blur-sm hover:border-teal-400 hover:bg-white hover:shadow-md dark:border-white/20 dark:bg-white/[0.08] dark:text-white dark:hover:border-[#00ff9d]/50 dark:hover:bg-white/10"
        >
          Live demo
        </Link>
      </div>
    </section>
  );
}
