import Image from "next/image";
import { Unbounded } from "next/font/google";
const whyQuestionFont = Unbounded({
  subsets: ["latin", "latin-ext"],
  weight: ["800"],
  display: "swap",
});

const reasons = [
  {
    title: "12 godina iskustva u GPS praćenju",
    description:
      "Proveren sistem sa velikim brojem zadovoljnih korisnika, i stabilnim radom.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconWrap: "bg-violet-100 text-violet-600 dark:bg-[#00ff9d]/20 dark:text-[#00ff9d]",
  },
  {
    title: "Neograničena tehnička podrška",
    description:
      "Besplatna tehnička podrška tokom celog perioda korišćenja sistema, bez dodatnih troškova.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    iconWrap: "bg-sky-100 text-sky-600 dark:bg-[#00ff9d]/20 dark:text-[#00ff9d]",
  },
  {
    title: "Brza isporuka sistema",
    description:
      "Sisteme najčešće isporučujemo u roku od 24h od trenutka porudžbine.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1"
        />
      </svg>
    ),
    iconWrap: "bg-amber-100 text-amber-600 dark:bg-[#00ff9d]/20 dark:text-[#00ff9d]",
  },
  {
    title: "Jednostavno korišćenje",
    description:
      "Praćenje vozila preko računara ili mobilnog telefona, putem jednostavne aplikacije i web pristupa.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    iconWrap: "bg-rose-100 text-rose-600 dark:bg-[#00ff9d]/20 dark:text-[#00ff9d]",
  },
  {
    title: "Bez ugovorne obaveze",
    description:
      "Sistem koristite koliko želite, bez ugovorne obaveze.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    iconWrap: "bg-emerald-100 text-emerald-600 dark:bg-[#00ff9d]/20 dark:text-[#00ff9d]",
  },
];

const SECTION_IMAGE = "/zbogcega.svg";

export default function WhyChooseCyberTracking() {
  return (
    <section
      id="zasto-cyber-tracking"
      className="scroll-mt-20 bg-white px-4 py-8 dark:bg-black sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <h2 className="text-balance text-xl font-bold uppercase leading-snug tracking-wide text-slate-900 dark:text-white sm:text-2xl md:text-2xl lg:text-3xl">
            Zbog čega odabrati Cyber Tracking
            <span
              className={`${whyQuestionFont.className} ms-0.5 inline-block bg-gradient-to-br from-brand-orange via-brand-orange-deep to-brand-orange-bright bg-clip-text text-[1.35em] font-extrabold leading-none text-transparent align-baseline drop-shadow-[0_0_12px_rgba(240,127,28,0.45)] dark:from-brand-orange-muted dark:via-brand-orange-bright dark:to-brand-orange-soft dark:drop-shadow-[0_0_16px_rgba(240,127,28,0.4)]`}
            >
              ?
            </span>
          </h2>
          <div
            className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-brand-orange dark:bg-brand-orange-bright"
            aria-hidden
          />
        </header>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Kartice */}
          <div className="order-2 flex flex-col gap-7 lg:order-1 lg:gap-5">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="transition-smooth flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-md shadow-slate-200/60 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/10 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none dark:hover:border-[#00ff9d]/40 dark:hover:shadow-teal-500/10 sm:p-5"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14 md:h-16 md:w-16 ${item.iconWrap}`}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="card-title text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="card-body mt-2 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slika */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-none">
              <Image
                src={SECTION_IMAGE}
                alt="Cyber Tracking — GPS praćenje vozila"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
