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
      {/* Dark gradient + grid */}
      <div className="absolute inset-0 hidden dark:block" style={{
        background: "linear-gradient(180deg, #2c1810 0%, #1a1614 25%, #1e293b 50%, #1e293b 70%, #0f172a 100%)",
      }} />
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
      <div className="absolute inset-0 flex items-end justify-center overflow-hidden pointer-events-none dark:hidden">
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
      <div className="absolute inset-0 hidden items-end justify-center overflow-hidden pointer-events-none dark:flex">
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
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-200 min-h-[1em]">
          Najjednostavniji način da pratite i upravljate vozilima
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400">
          Dajemo vam snagu i performanse kompletnog sistema za upravljanje flotom. Dobijate potpunu
          kontrolu nad vozilima, vozačima i troškovima poslovanja.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
          <Link
            href="/usluge"
            className="w-full rounded-lg bg-teal-600 px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-teal-500 sm:w-auto"
          >
            Saznajte više
          </Link>
          <Link
            href="/narudzba"
            className="w-full rounded-lg bg-slate-600 px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-slate-500 sm:w-auto dark:bg-slate-500 dark:hover:bg-slate-400"
          >
            Naručite
          </Link>
        </div>
        <Link
          href="/aplikacija"
          className="mt-4 inline-block rounded-lg border-2 border-slate-300 bg-white/80 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-slate-800 backdrop-blur-sm transition hover:border-teal-400 hover:bg-slate-50 dark:border-slate-400/80 dark:bg-slate-900/40 dark:text-white dark:hover:border-slate-300 dark:hover:bg-slate-800/50"
        >
          Live demo
        </Link>
      </div>
    </section>
  );
}
