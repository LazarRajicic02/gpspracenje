import HeroRouteVansAnimated from "./HeroRouteVansAnimated";

export default function Hero() {
  return (
    <section className="relative min-h-0 sm:min-h-[calc(100dvh-7rem)] overflow-hidden px-4 pb-0 pt-4 sm:px-6 sm:pb-16 sm:pt-6 lg:px-8">
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
      {/* GPS: ruta, sateliti, isprekidana trasa, radar (light) — bez SVG na telefonu */}
      <div className="pointer-events-none absolute inset-0 hidden items-end justify-center overflow-hidden dark:hidden md:flex">
        <svg
          viewBox="0 0 1200 420"
          className="w-full max-w-5xl translate-y-[2%] scale-110 opacity-[0.55]"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden
        >
          <defs>
            <linearGradient
              id="hero-gps-route-light"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0d9488" stopOpacity="0.45" />
            </linearGradient>
            <pattern
              id="hero-gps-hex-light"
              width="28"
              height="48"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(1)"
            >
              <path
                d="M14 4 L24 12 L24 24 L14 32 L4 24 L4 12 Z"
                fill="none"
                stroke="#64748b"
                strokeWidth="0.35"
                opacity="0.35"
              />
            </pattern>
            {/* Nevidljive putanje za animateMotion (tri segmenta iste rute kao glavni path) */}
            <path
              id="hero-van-seg-1-light"
              d="M 120 320 Q 280 200 450 260"
              fill="none"
              stroke="none"
            />
            <path
              id="hero-van-seg-2-light"
              d="M 450 260 Q 620 320 800 220"
              fill="none"
              stroke="none"
            />
            <path
              id="hero-van-seg-3-light"
              d="M 800 220 Q 980 120 1080 280"
              fill="none"
              stroke="none"
            />
          </defs>
          <rect
            x="0"
            y="120"
            width="1200"
            height="300"
            fill="url(#hero-gps-hex-light)"
            opacity="0.22"
          />
          {/* „Sateliti“ / fix tačke na nebu */}
          <g fill="#94a3b8" opacity="0.45">
            <circle cx="180" cy="95" r="2.5" />
            <circle cx="320" cy="68" r="2" />
            <circle cx="520" cy="110" r="2" />
            <circle cx="720" cy="72" r="2.5" />
            <circle cx="900" cy="98" r="2" />
            <circle cx="1040" cy="55" r="2" />
            {/* Jednostavan satelit */}
            <g transform="translate(1020, 88)">
              <rect
                x="-14"
                y="-5"
                width="28"
                height="10"
                rx="2"
                fill="#64748b"
                opacity="0.7"
              />
              <rect
                x="-22"
                y="-4"
                width="6"
                height="8"
                rx="1"
                fill="#94a3b8"
                opacity="0.6"
              />
              <rect
                x="16"
                y="-4"
                width="6"
                height="8"
                rx="1"
                fill="#94a3b8"
                opacity="0.6"
              />
            </g>
          </g>
          {/* GPS isprekidana istorija trase */}
          <path
            d="M 120 320 Q 280 200 450 260 T 800 220 T 1080 280"
            fill="none"
            stroke="url(#hero-gps-route-light)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="10 18"
            strokeDashoffset="0"
            className="hero-gps-dash-flow"
            opacity="0.85"
          />
          {/* Puna „trenutna“ ruta */}
          <path
            d="M 120 320 Q 280 200 450 260 T 800 220 T 1080 280"
            fill="none"
            stroke="#64748b"
            strokeWidth="12"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M 120 320 Q 280 200 450 260 T 800 220 T 1080 280"
            fill="none"
            stroke="#475569"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.65"
          />
          {/* Među-fix tačke duž rute */}
          <g fill="#0d9488" opacity="0.75">
            <circle cx="285" cy="238" r="5" />
            <circle cx="620" cy="232" r="5" />
            <circle cx="935" cy="252" r="5" />
          </g>
          {/* Smer kretanja duž rute (chevron markeri) */}
          <g fill="#14b8a6" opacity="0.55">
            <polygon
              points="248,262 256,256 248,250"
              transform="rotate(-28 252 256)"
            />
            <polygon
              points="410,248 418,242 410,236"
              transform="rotate(-8 414 242)"
            />
            <polygon
              points="560,228 568,222 560,216"
              transform="rotate(12 564 222)"
            />
            <polygon
              points="720,218 728,212 720,206"
              transform="rotate(-18 724 212)"
            />
            <polygon
              points="900,248 908,242 900,236"
              transform="rotate(22 904 242)"
            />
          </g>
          {/* Blok „ulice“ / dashboard mapa */}
          <g fill="none" stroke="#64748b" strokeWidth="0.8" opacity="0.12">
            <rect x="160" y="268" width="100" height="64" rx="2" />
            <rect x="380" y="248" width="88" height="52" rx="2" />
            <rect x="640" y="228" width="96" height="58" rx="2" />
            <rect x="860" y="258" width="110" height="48" rx="2" />
            <path d="M 260 300 H 340 M 200 292 V 332 M 700 242 H 780" />
          </g>
          <HeroRouteVansAnimated theme="light" />
          {/* Glavni pinovi */}
          <g transform="translate(120, 320)">
            <circle r="14" fill="#0d9488" className="drop-shadow-md" />
            <path
              d="M0 18 L-8 32 L0 28 L8 32 Z"
              fill="#0f766e"
              className="drop-shadow-sm"
            />
          </g>
          <g transform="translate(450, 260)">
            <circle r="14" fill="#0d9488" className="drop-shadow-md" />
            <path
              d="M0 18 L-8 32 L0 28 L8 32 Z"
              fill="#0f766e"
              className="drop-shadow-sm"
            />
          </g>
          {/* Aktivno vozilo: čist, statičan pin */}
          <g transform="translate(1080, 280)">
            <circle r="14" fill="#0d9488" className="drop-shadow-md" />
            <path
              d="M0 18 L-8 32 L0 28 L8 32 Z"
              fill="#0f766e"
              className="drop-shadow-sm"
            />
          </g>
        </svg>
      </div>
      {/* GPS art (dark) — bez SVG na telefonu */}
      <div className="pointer-events-none absolute inset-0 hidden items-end justify-center overflow-hidden md:dark:flex">
        <svg
          viewBox="0 0 1200 420"
          className="w-full max-w-5xl translate-y-[2%] scale-110 opacity-[0.42]"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden
        >
          <defs>
            <linearGradient
              id="hero-gps-route-dark"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#5eead4" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.4" />
            </linearGradient>
            <pattern
              id="hero-gps-hex-dark"
              width="28"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M14 4 L24 12 L24 24 L14 32 L4 24 L4 12 Z"
                fill="none"
                stroke="rgba(148,163,184,0.5)"
                strokeWidth="0.35"
              />
            </pattern>
            <path
              id="hero-van-seg-1-dark"
              d="M 120 320 Q 280 200 450 260"
              fill="none"
              stroke="none"
            />
            <path
              id="hero-van-seg-2-dark"
              d="M 450 260 Q 620 320 800 220"
              fill="none"
              stroke="none"
            />
            <path
              id="hero-van-seg-3-dark"
              d="M 800 220 Q 980 120 1080 280"
              fill="none"
              stroke="none"
            />
          </defs>
          <rect
            x="0"
            y="120"
            width="1200"
            height="300"
            fill="url(#hero-gps-hex-dark)"
            opacity="0.18"
          />
          <g fill="rgba(255,255,255,0.35)">
            <circle cx="180" cy="95" r="2.5" />
            <circle cx="320" cy="68" r="2" />
            <circle cx="520" cy="110" r="2" />
            <circle cx="720" cy="72" r="2.5" />
            <circle cx="900" cy="98" r="2" />
            <circle cx="1040" cy="55" r="2" />
            <g transform="translate(1020, 88)">
              <rect
                x="-14"
                y="-5"
                width="28"
                height="10"
                rx="2"
                fill="rgba(148,163,184,0.55)"
              />
              <rect
                x="-22"
                y="-4"
                width="6"
                height="8"
                rx="1"
                fill="rgba(148,163,184,0.45)"
              />
              <rect
                x="16"
                y="-4"
                width="6"
                height="8"
                rx="1"
                fill="rgba(148,163,184,0.45)"
              />
            </g>
          </g>
          <path
            d="M 120 320 Q 280 200 450 260 T 800 220 T 1080 280"
            fill="none"
            stroke="url(#hero-gps-route-dark)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="10 18"
            strokeDashoffset="0"
            className="hero-gps-dash-flow"
          />
          <path
            d="M 120 320 Q 280 200 450 260 T 800 220 T 1080 280"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            className="text-slate-500"
            opacity="0.5"
          />
          <path
            d="M 120 320 Q 280 200 450 260 T 800 220 T 1080 280"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            className="text-slate-400"
            opacity="0.55"
          />
          <g fill="rgba(45,212,191,0.85)">
            <circle cx="285" cy="238" r="5" />
            <circle cx="620" cy="232" r="5" />
            <circle cx="935" cy="252" r="5" />
          </g>
          <g fill="rgba(45,212,191,0.5)">
            <polygon
              points="248,262 256,256 248,250"
              transform="rotate(-28 252 256)"
            />
            <polygon
              points="410,248 418,242 410,236"
              transform="rotate(-8 414 242)"
            />
            <polygon
              points="560,228 568,222 560,216"
              transform="rotate(12 564 222)"
            />
            <polygon
              points="720,218 728,212 720,206"
              transform="rotate(-18 724 212)"
            />
            <polygon
              points="900,248 908,242 900,236"
              transform="rotate(22 904 242)"
            />
          </g>
          <g fill="none" stroke="rgba(148,163,184,0.22)" strokeWidth="0.8">
            <rect x="160" y="268" width="100" height="64" rx="2" />
            <rect x="380" y="248" width="88" height="52" rx="2" />
            <rect x="640" y="228" width="96" height="58" rx="2" />
            <rect x="860" y="258" width="110" height="48" rx="2" />
            <path d="M 260 300 H 340 M 200 292 V 332 M 700 242 H 780" />
          </g>
          <HeroRouteVansAnimated theme="dark" />
          <g transform="translate(120, 320)">
            <circle
              r="14"
              fill="rgba(255,255,255,0.92)"
              className="drop-shadow-md"
            />
            <path
              d="M0 18 L-8 32 L0 28 L8 32 Z"
              fill="rgba(255,255,255,0.95)"
              className="drop-shadow-sm"
            />
          </g>
          <g transform="translate(450, 260)">
            <circle
              r="14"
              fill="rgba(255,255,255,0.92)"
              className="drop-shadow-md"
            />
            <path
              d="M0 18 L-8 32 L0 28 L8 32 Z"
              fill="rgba(255,255,255,0.95)"
              className="drop-shadow-sm"
            />
          </g>
          <g transform="translate(1080, 280)">
            <circle
              r="14"
              fill="rgba(255,255,255,0.92)"
              className="drop-shadow-md"
            />
            <path
              d="M0 18 L-8 32 L0 28 L8 32 Z"
              fill="rgba(255,255,255,0.95)"
              className="drop-shadow-sm"
            />
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl pt-3 text-center sm:pt-6">
        <h1 className="min-h-[1em] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100">
          Preuzmite potpunu kontrolu nad vozilima u realnom vremenu
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-teal-600 dark:text-teal-400">
          Smanjite troškove, zaštitite vozila od krađe i sprečite zloupotrebu
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Rešenje za firme i privatna vozila, uz daljinsko gašenje vozila putem
          aplikacije. Već od 780 RSD mesečno po vozilu.
        </p>

        <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:mt-10">
          <a
            href="tel:+381614030888"
            className="transition-smooth w-full rounded-xl bg-teal-600 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-teal-500/30 hover:bg-teal-500 hover:shadow-teal-500/40 hover:-translate-y-0.5 sm:w-auto dark:bg-[#00ff9d] dark:text-black dark:hover:bg-[#00e699] dark:hover:shadow-[0_0_24px_rgba(0,255,157,0.35)]"
          >
            Pozovite: 061 4030 888
          </a>
        </div>
        <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-300">
          Bez ugovorne obaveze i uz potpunu tehničku podršku.
        </p>
      </div>
    </section>
  );
}
