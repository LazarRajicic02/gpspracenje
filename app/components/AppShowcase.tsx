"use client";

import { useState, useCallback, useEffect } from "react";
type ShowcaseItem = {
  id: string;
  title: string;
  description: string;
  type: "image";
  imageSrc: string;
};

/** Slike iz /public (001–006); tekstovi 001–005 po PDF-u „APLIKACIJA“. */
const showcaseItems: ShowcaseItem[] = [
  {
    id: "001-uzivo",
    title: "Precizno praćenje svakog vozila",
    description:
      "Na mapi pratite vozilo u realnom vremenu, uz prikaz pravca kretanja, trenutne brzine i ostalih parametara.",
    type: "image",
    imageSrc: "/001 uzivo pracenje.png",
  },
  {
    id: "002-istorija",
    title: "Detaljna istorija kretanja vozila",
    description:
      "Pregledajte kompletnu rutu kretanja kroz animaciju, sa mestima i vremenom zadržavanja, istorijom brzine i podacima dostupnim do 180 dana unazad.",
    type: "image",
    imageSrc: "/002 istorija kretanja.png",
  },
  {
    id: "003-mapa",
    title: "Sva vozila na mapi u realnom vremenu",
    description:
      "Na mapi vidite tačnu lokaciju svakog vozila, pravac kretanja, trenutnu brzinu i status vozila, sa jasnim prikazom da li je u pokretu ili parkirano.",
    type: "image",
    imageSrc: "/003 sva vozila na mapi.png",
  },
  {
    id: "004-lista",
    title: "Kontrola svih vozila na jednom ekranu",
    description:
      "Na listi vozila odmah vidite da li se vozilo kreće, miruje i koliko dugo je parkirano.",
    type: "image",
    imageSrc: "/004 lista vozila (promena 23.03).jpg",
  },
  {
    id: "005-dnevni",
    title: "Dnevni izveštaj vožnje",
    description:
      "Grafikon kretanja, vreme vožnje, pređena kilometraža i tačan pregled svih vožnji tokom dana.",
    type: "image",
    imageSrc: "/006 grafikon i prikaz.png",
  },
  {
    id: "005-gasenje",
    title: "Daljinska kontrola i zaštita vozila",
    description:
      "Daljinska blokada pumpe za gorivo jednim klikom u aplikaciji, uz bezbedno aktiviranje kada vozilo miruje ili se kreće malom brzinom.",
    type: "image",
    imageSrc: "/005 gasenje vozila.png",
  },
];

function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-fit max-w-[min(100%,320px)] overflow-hidden rounded-[2.25rem] border-[8px] border-slate-800 bg-slate-900 shadow-2xl dark:border-slate-700 dark:bg-black ${className}`}
    >

      <div className="relative min-h-[280px] overflow-hidden rounded-[1.35rem] bg-slate-950 sm:min-h-[420px]">
        {children}
      </div>
    </div>
  );
}

function ShowcaseContent({ item }: { item: ShowcaseItem }) {
  return (
    <PhoneFrame>
      <div className="relative h-full w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.imageSrc}
          alt={`GPS praćenje vozila – ${item.title}`}
          className="h-full w-full max-h-[min(72vh,560px)] object-contain object-top"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const placeholder = target.nextElementSibling as HTMLElement;
            if (placeholder) placeholder.style.display = "flex";
          }}
        />
        <div
          className="hidden h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-sky-900/30 to-slate-800 p-4 text-white"
          style={{ display: "none" }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/20">
            <svg className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
            </svg>
          </div>
          <p className="text-center text-xs text-slate-400">
            Slika: <code className="rounded bg-slate-700/50 px-1">{item.imageSrc}</code>
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}

export default function AppShowcase() {
  const [index, setIndex] = useState(0);
  const total = showcaseItems.length;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  useEffect(() => {
    const t = setInterval(goNext, 5000);
    return () => clearInterval(t);
  }, [goNext]);

  const item = showcaseItems[index];

  return (
    <section id="aplikacija" className="scroll-mt-20 bg-slate-100 px-4 py-20 dark:bg-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Kontrola svih vozila u jednoj aplikaciji
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Praćenje vozila u realnom vremenu sa prikazom na Google mapama, istorijom kretanja, alarmima i izveštajima u jednoj aplikaciji.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:justify-center lg:gap-12">
          {/* Prev */}
          <button
            type="button"
            onClick={goPrev}
            className="hidden lg:flex transition-smooth order-2 h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-600 shadow-md hover:border-teal-500 hover:bg-teal-50 hover:text-teal-600 hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-[#00ff9d]/50 dark:hover:bg-[#00ff9d]/10 dark:hover:text-[#00ff9d] lg:order-1 lg:self-center"
            aria-label="Prethodna slika"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slide */}
          <div className="order-1 flex flex-col items-center gap-6 lg:order-2 lg:min-w-[320px]">
            <div className="w-full transition-opacity duration-300">
              <ShowcaseContent item={item} />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={goNext}
            className="hidden lg:flex transition-smooth order-3 h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-600 shadow-md hover:border-teal-500 hover:bg-teal-50 hover:text-teal-600 hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-[#00ff9d]/50 dark:hover:bg-[#00ff9d]/10 dark:hover:text-[#00ff9d] lg:self-center"
            aria-label="Sledeća slika"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 hidden sm:flex justify-center gap-2">
          {showcaseItems.map((_, i) => (
            <button
              key={showcaseItems[i].id}
              type="button"
              onClick={() => setIndex(i)}
              className="transition-smooth group flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
              aria-label={`Slajd ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            >
              <span
                className={`h-2.5 rounded-full ${
                  i === index
                    ? "w-8 bg-teal-500"
                    : "w-2.5 bg-slate-300 group-hover:bg-slate-400 dark:bg-slate-600 dark:group-hover:bg-slate-500"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
