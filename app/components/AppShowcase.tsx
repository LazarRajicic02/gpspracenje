"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
type ShowcaseItem = {
  id: string;
  title: string;
  description: string;
  type: "image" | "desktop";
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

const desktopShowcaseItem: ShowcaseItem = {
  id: "desktop-prikaz",
  title: "Desktop pregled svih vozila",
  description:
    "Pregled svih vozila i lokacija na velikom ekranu, sa jasnim prikazom mape i statusa vozila u realnom vremenu.",
  type: "desktop",
  imageSrc: "/slika komp pracenje (1).jpg",
};

function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`anim-phone-frame relative mx-auto w-fit overflow-hidden rounded-[2.25rem] border-[8px] border-slate-800 bg-slate-900 shadow-2xl dark:border-slate-700 dark:bg-black ${className}`}
    >

      <div className="anim-phone-screen relative overflow-hidden rounded-[1.35rem] bg-slate-950">
        {children}
      </div>
    </div>
  );
}

function ShowcaseSectionHeader({ className = "" }: { className?: string }) {
  return (
    <header className={className}>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
        Kontrola svih vozila u naprednoj aplikaciji
      </h2>
      <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:mt-4 sm:text-lg">
        Praćenje vozila u realnom vremenu sa prikazom na Google mapama, istorijom kretanja, alarmima i izveštajima u
        jednoj aplikaciji.
      </p>
    </header>
  );
}

function ShowcaseSlideCaption({ item, className = "" }: { item: ShowcaseItem; className?: string }) {
  if (item.type === "desktop") return null;

  return (
    <div className={className}>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
        PRIKAZ NA EKRANU
      </p>
      <h3 className="mt-1.5 text-lg font-semibold leading-snug text-slate-900 dark:text-white sm:text-xl">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:mt-3 sm:text-base">
        {item.description}
      </p>
    </div>
  );
}

function ShowcasePhoneColumn({
  items,
  item,
  index,
  setIndex,
  className = "",
}: {
  items: ShowcaseItem[];
  item: ShowcaseItem;
  index: number;
  setIndex: (i: number) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <ShowcaseContent item={item} />
      <div className="flex w-full justify-center gap-0.5 sm:gap-1">
        {items.map((_, i) => (
          <button
            key={items[i].id}
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
  );
}

function ShowcaseContent({ item }: { item: ShowcaseItem }) {
  if (item.type === "desktop") {
    return (
      <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-slate-900/30 sm:p-3">
        <h3 className="mb-3 text-center text-lg font-semibold leading-snug text-slate-900 dark:text-white sm:text-xl">
          {item.title}
        </h3>
        <Image
          src={item.imageSrc}
          alt={`GPS desktop prikaz – ${item.title}`}
          width={1920}
          height={1080}
          className="h-auto w-full rounded-xl object-cover"
          sizes="(max-width: 640px) 100vw, 960px"
          priority={false}
        />
      </div>
    );
  }

  return (
    <PhoneFrame>
      <div className="relative h-full w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.imageSrc}
          alt={`GPS praćenje vozila – ${item.title}`}
          className="anim-phone-image h-full w-full object-contain object-top"
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

export default function AppShowcase({ showDesktopPreview = false }: { showDesktopPreview?: boolean }) {
  const items = showDesktopPreview ? [...showcaseItems, desktopShowcaseItem] : showcaseItems;
  const [index, setIndex] = useState(0);
  const total = items.length;
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  useEffect(() => {
    const t = setInterval(goNext, 10_000);
    return () => clearInterval(t);
  }, [goNext]);

  const item = items[index];

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    const t = e.changedTouches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current == null || touchStartY.current == null) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    // Swipe should be clearly horizontal to avoid fighting vertical scroll.
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) goNext();
    else goPrev();
  }

  return (
    <section id="aplikacija" className="scroll-mt-20 bg-slate-100 px-4 py-8 dark:bg-black sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:gap-6">
          {/* Leva / desna strelica — skrivene ispod sm (telefon), vidljive od tableta navise */}
          <button
            type="button"
            onClick={goPrev}
            className="hidden h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-slate-300 bg-white p-0 text-slate-600 shadow-md transition-smooth hover:border-teal-500 hover:bg-teal-50 hover:text-teal-600 hover:-translate-y-0.5 sm:grid dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-[#00ff9d]/50 dark:hover:bg-[#00ff9d]/10 dark:hover:text-[#00ff9d]"
            aria-label="Prethodna slika"
          >
            <svg className="col-start-1 row-start-1 h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Samo uski ekran (telefon): naslov → telefon → opis slajda */}
          <div
            className="motion-medium flex w-full min-w-0 max-w-4xl flex-col items-stretch gap-6 transition-opacity sm:hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {item.type !== "desktop" && (
              <ShowcaseSectionHeader className="border-b border-slate-200 pb-6 text-center dark:border-white/10" />
            )}
            <ShowcasePhoneColumn
              items={items}
              item={item}
              index={index}
              setIndex={setIndex}
              className={
                item.type === "desktop"
                  ? "mx-auto flex w-full max-w-5xl flex-col items-center gap-2"
                  : "mx-auto flex w-fit max-w-[min(100%,320px)] flex-col items-center gap-2"
              }
            />
            <ShowcaseSlideCaption item={item} className="text-center" />
          </div>

          {/* sm+ kao ranije: telefon levo, desno naslov sekcije + opis slajda */}
          <div className="motion-medium hidden w-full min-w-0 max-w-4xl flex-1 transition-opacity sm:flex sm:flex-row sm:items-start sm:justify-center sm:gap-6 lg:gap-8">
            <ShowcasePhoneColumn
              items={items}
              item={item}
              index={index}
              setIndex={setIndex}
              className={
                item.type === "desktop"
                  ? "flex w-full max-w-[62rem] shrink-0 flex-col items-center gap-2 sm:gap-2.5"
                  : "flex w-fit max-w-[min(100%,320px)] shrink-0 flex-col items-center gap-2 sm:gap-2.5"
              }
            />
            {item.type !== "desktop" && (
              <div className="flex w-full min-w-0 max-w-md flex-1 flex-col justify-start text-center sm:max-w-lg sm:text-left">
                <ShowcaseSectionHeader className="border-b border-slate-200 pb-6 dark:border-white/10 sm:pb-7" />
                <div className="pt-6 sm:pt-8">
                  <ShowcaseSlideCaption item={item} />
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="hidden h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-slate-300 bg-white p-0 text-slate-600 shadow-md transition-smooth hover:border-teal-500 hover:bg-teal-50 hover:text-teal-600 hover:-translate-y-0.5 sm:grid dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-[#00ff9d]/50 dark:hover:bg-[#00ff9d]/10 dark:hover:text-[#00ff9d]"
            aria-label="Sledeća slika"
          >
            <svg className="col-start-1 row-start-1 h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
