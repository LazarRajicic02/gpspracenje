import Image from "next/image";
import { Unbounded } from "next/font/google";
const whyQuestionFont = Unbounded({
  subsets: ["latin", "latin-ext"],
  weight: ["800"],
  display: "swap",
});

const reasons = [
  {
    title: "Neograničena tehnička podrška",
    description:
      "Tu smo za pitanja o uređaju, aplikaciji i podešavanjima — bez skrivenog ograničenja broja kontakata dok koristite naš sistem.",
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
    title: "12 godina iskustva u GPS praćenju",
    description:
      "Dugogodišnji rad na praćenju vozila i flota u Srbiji — poznajemo izazove terena, mreže i očekivanja korisnika.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconWrap:
      "bg-violet-100 text-violet-600 dark:bg-[#00ff9d]/20 dark:text-[#00ff9d]",
  },
  {
    title: "10 dana besplatnog korišćenja",
    description:
      "Isprobajte sistem u miru pre odluke — bez obaveze, da vidite da li vam odgovara praćenje i aplikacija.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconWrap: "bg-rose-100 text-rose-600 dark:bg-[#00ff9d]/20 dark:text-[#00ff9d]",
  },
  {
    title: "Proveren sistem sa velikim brojem zadovoljnih korisnika",
    description:
      "Uređaji, SIM i aplikacija u praksi kod firmi i pojedinaca — stabilnost i podrška koje možete da očekujete.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    iconWrap:
      "bg-emerald-100 text-emerald-600 dark:bg-[#00ff9d]/20 dark:text-[#00ff9d]",
  },
  {
    title: "Startujte odmah — sistem isporučujemo u roku od 24h",
    description:
      "Brza isporuka i jasni koraci za aktivaciju, da što pre krenete sa praćenjem vozila na mapi.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    iconWrap:
      "bg-amber-100 text-amber-700 dark:bg-[#00ff9d]/20 dark:text-[#00ff9d]",
  },
];

const SECTION_IMAGE = "/hero2.png";

export default function WhyChooseCyberTracking() {
  return (
    <section
      id="zasto-cyber-tracking"
      className="scroll-mt-20 bg-white px-4 py-20 dark:bg-black sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <h2 className="text-balance text-lg font-bold uppercase leading-snug tracking-wide text-slate-900 dark:text-white sm:text-xl md:text-2xl lg:text-3xl">
            Zbog čega odabrati Cyber Tracking
            <span
              className={`${whyQuestionFont.className} ms-0.5 inline-block bg-gradient-to-br from-orange-500 via-orange-600 to-amber-500 bg-clip-text text-[1.35em] font-extrabold leading-none text-transparent align-baseline drop-shadow-[0_0_12px_rgba(249,115,22,0.45)] dark:from-orange-300 dark:via-orange-400 dark:to-amber-300 dark:drop-shadow-[0_0_16px_rgba(251,146,60,0.4)]`}
            >
              ?
            </span>
          </h2>
          <div
            className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-orange-500 dark:bg-orange-400"
            aria-hidden
          />
        </header>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Kartice */}
          <div className="order-2 flex flex-col gap-5 lg:order-1">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="transition-smooth flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-md shadow-slate-200/60 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/10 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none dark:hover:border-[#00ff9d]/40 dark:hover:shadow-teal-500/10 sm:p-5"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14 ${item.iconWrap}`}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Slika — hero2, bez dekorativnog okvira */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-none">
              <Image
                src={SECTION_IMAGE}
                alt="Cyber Tracking — GPS praćenje vozila"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/40 dark:border-white/10 dark:shadow-none"
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
