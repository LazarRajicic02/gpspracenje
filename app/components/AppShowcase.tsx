"use client";

import { useState } from "react";

type ShowcaseItem = {
  id: string;
  title: string;
  description: string;
  type: "image" | "video";
  imageSrc?: string;
  videoSrc?: string;
  videoPoster?: string;
};

const showcaseItems: ShowcaseItem[] = [
  {
    id: "mapa",
    title: "Pregled na mapi",
    description: "Sva vozila na jednoj mapi u realnom vremenu. Zoom, istorija ruta i brzi detalji.",
    type: "image",
    imageSrc: undefined,
  },
  {
    id: "vozila",
    title: "Vozila i rute",
    description: "Lista vozila, status, trenutna lokacija i pregled pređene rute za svako vozilo.",
    type: "image",
    imageSrc: undefined,
  },
  {
    id: "izvestaji",
    title: "Izveštaji i obaveštenja",
    description: "Geofencing alarmi, izveštaji o vožnji i push obaveštenja na telefon.",
    type: "image",
    imageSrc: undefined,
  },
  {
    id: "video",
    title: "Kako aplikacija radi",
    description: "Kratak video koji pokazuje korišćenje aplikacije na telefonu.",
    type: "video",
    videoSrc: undefined,
    videoPoster: undefined,
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
      {/* Notch */}
      <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-800 dark:bg-black" />
      {/* Screen */}
      <div className="absolute inset-0 overflow-hidden rounded-[1.5rem] bg-slate-100 dark:bg-slate-900">
        {children}
      </div>
    </div>
  );
}

function ShowcaseContent({ item }: { item: ShowcaseItem }) {
  if (item.type === "video") {
    return (
      <PhoneFrame>
        <div className="relative h-full w-full bg-slate-900">
          {item.videoSrc ? (
            <video
              src={item.videoSrc}
              poster={item.videoPoster}
              controls
              playsInline
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-slate-800 to-slate-900 p-4 text-white">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/20">
                <svg className="h-8 w-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-center text-sm font-medium">Video demo</p>
              <p className="text-center text-xs text-slate-400">
                Dodajte video u <code className="rounded bg-slate-700 px-1">public/showcase/demo.mp4</code>
              </p>
            </div>
          )}
        </div>
      </PhoneFrame>
    );
  }

  return (
    <PhoneFrame>
      {item.imageSrc ? (
        <div className="relative h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.imageSrc}
            alt={item.title}
            className="h-full w-full object-cover object-top"
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
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-teal-900/30 to-slate-800 p-4 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/20">
              <svg className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
            </svg>
          </div>
          <p className="text-center text-xs text-slate-400">
            Dodajte sliku u <code className="rounded bg-slate-700/50 px-1">public/showcase/</code>
          </p>
        </div>
      )}
    </PhoneFrame>
  );
}

export default function AppShowcase() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="aplikacija" className="scroll-mt-20 bg-slate-100 px-4 py-20 dark:bg-slate-800/80 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Prikaz aplikacije
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Aplikacija na dlanu – pratite vozila sa telefona. Izaberite stavku ispod da vidite više.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {showcaseItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-teal-300 dark:border-slate-600 dark:bg-slate-800/50 dark:hover:border-slate-500"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-slate-50 sm:px-6 dark:hover:bg-slate-700/50"
                  aria-expanded={isOpen}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500 text-white">
                    {item.type === "video" ? (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-teal-600 transition-transform dark:text-teal-400 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-200 bg-slate-50 px-4 py-8 dark:border-slate-700 dark:bg-slate-900/50 sm:px-6 sm:py-10">
                      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-12">
                        <div className="shrink-0">
                          <ShowcaseContent item={item} />
                        </div>
                        <div className="max-w-sm text-center lg:text-left">
                          <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
