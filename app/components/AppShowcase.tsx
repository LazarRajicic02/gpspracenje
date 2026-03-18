"use client";

import { useState, useCallback, useEffect } from "react";

type ShowcaseItem = {
  id: string;
  title: string;
  description: string;
  type: "image";
  imageSrc: string;
};

const showcaseItems: ShowcaseItem[] = [
  {
    id: "mapa",
    title: "Pregled na mapi",
    description: "Sva vozila na jednoj mapi u realnom vremenu. Zoom, istorija ruta i brzi detalji.",
    type: "image",
    imageSrc: "/phone1.png",
  },
  {
    id: "vozila",
    title: "Vozila i rute",
    description: "Lista vozila, status, trenutna lokacija i pregled pređene rute za svako vozilo.",
    type: "image",
    imageSrc: "/phone2.png",
  },
  {
    id: "izvestaji",
    title: "Izveštaji i obaveštenja",
    description: "Geofencing alarmi, izveštaji o vožnji i push obaveštenja na telefon.",
    type: "image",
    imageSrc: "/phone3.png",
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
      className={`relative mx-auto w-full max-w-[280px] overflow-hidden rounded-[2.5rem] border-[10px] border-slate-700 bg-slate-800 shadow-2xl dark:border-slate-700 dark:bg-black ${className}`}
      style={{ aspectRatio: "9/19.5" }}
    >
      <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-800 dark:bg-black" />
      <div className="absolute inset-0 overflow-hidden rounded-[1.5rem] bg-slate-100 dark:bg-black">
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
          className="h-full w-full  object-top"
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
          <h2 className="animate-fade-in-up text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Aplikacija za GPS praćenje vozila
          </h2>
          <p className="animate-fade-in-up animation-delay-75 mt-4 text-lg text-slate-600 dark:text-slate-300">
            Pratite flotu sa telefona – mapa vozila u realnom vremenu, istorija ruta i geofencing u džepu.
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
              <p className="mt-2 max-w-sm text-sm text-slate-600 dark:text-slate-300">
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
