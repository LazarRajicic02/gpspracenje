"use client";

const reviews = [
  {
    name: "Marko P.",
    role: "Vlasnik transportne firme",
    text: "Koristimo Cyber Tracking za ceo vozni park. Aplikacija je odlična, sve na jednom mestu – mapa, istorija, alarmi. Preporučujem.",
    rating: 5,
  },
  {
    name: "Ana S.",
    role: "Rent a car",
    text: "Jednostavna instalacija i pouzdan sistem. Geofencing nam mnogo pomaže da pratimo vozila. Odličan odnos cene i kvaliteta.",
    rating: 5,
  },
  {
    name: "Nikola M.",
    role: "Privatni korisnik",
    text: "Kupio za lično vozilo – miran sam kada auto stoji negde. Podrška je brzo odgovorila na sva pitanja. Zadovoljan.",
    rating: 5,
  },
  {
    name: "Jelena K.",
    role: "Kurirska služba",
    text: "Pratimo preko 20 vozila. Izveštaji i notifikacije štede vreme. Nema ugovora, fleksibilno – baš ono što nam treba.",
    rating: 5,
  },
  {
    name: "Stefan D.",
    role: "Građevinska firma",
    text: "GPS uređaji rade i na terenu, multinetwork je zaista primetno bolji signal. Preporuka za sve koji imaju flotu.",
    rating: 5,
  },
];

function StarRating({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-brand-orange" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5"
          fill={i < n ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  name,
  role,
  text,
  rating,
}: {
  name: string;
  role: string;
  text: string;
  rating: number;
}) {
  return (
    <div className="transition-smooth flex h-full w-[min(340px,85vw)] shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:border-teal-200 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-[#00ff9d]/40">
      <StarRating n={rating} />
      <p className="card-body mt-4 flex-1 text-slate-600 dark:text-slate-300">{text}</p>
      <div className="mt-4 border-t border-slate-100 pt-4 dark:border-white/10">
        <p className="card-title text-slate-900 dark:text-white">{name}</p>
        <p className="text-sm text-slate-500 dark:text-slate-300">{role}</p>
      </div>
    </div>
  );
}

export default function Reviews() {
  const duplicated = [...reviews, ...reviews];

  return (
    <section className="scroll-mt-20 bg-slate-50 px-4 py-8 dark:bg-black sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Šta kažu korisnici
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Recenzije korisnika koji koriste Cyber Tracking za praćenje vozila i flote.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="overflow-hidden" aria-hidden="true">
            <div
              className="flex gap-6"
              style={{
                width: "max-content",
                animation: "reviews-scroll 45s linear infinite",
              }}
            >
              {duplicated.map((review, i) => (
                <ReviewCard key={`${review.name}-${i}`} {...review} />
              ))}
            </div>
          </div>
          {/* Fade edges */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800/50"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-800/50"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
