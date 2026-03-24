const features = [
  {
    title: "Kontrola i evidencija rada zaposlenih",
    description:
      "Uvid u to kada se vozilo koristi, koliko traje vožnja i da li se koristi van radnog vremena – sve pregledno u aplikaciji.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "Zaštita vozila od krađe i zloupotrebe",
    description:
      "Daljinska blokada pumpe za gorivo jednim klikom u aplikaciji, uz bezbedno aktiviranje kada vozilo miruje ili se kreće malom brzinom.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Smanjenje troškova goriva i održavanja",
    description:
      "Pregled vožnje i kilometraže omogućava otkrivanje nepotrebne potrošnje goriva, zloupotrebe i neefikasnog korišćenja vozila.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Pregled kretanja i istorija vožnje",
    description:
      "Detaljan pregled kretanja vozila sa animacijom rute, zadržavanjem na lokacijama, prikazom brzine i istorijom do 180 dana.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    title: "Detaljni izveštaji i statistika",
    description:
      "Prikaz početka i završetka vožnje, trajanja, pređene kilometraže i grafikona kroz detaljne izveštaje u aplikaciji.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Najbolja mrežna pokrivenost",
    description:
      "Multinetwork SIM kartica – automatsko povezivanje na najjači signal. Rad u Srbiji i preko 40 zemalja bez rominga.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="prednosti" className="scroll-mt-20 bg-white px-4 py-20 dark:bg-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Prednosti GPS sistema
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Kontrola flote, zaštita vozila, manji troškovi, istorija kretanja, izveštaji i pouzdana mreža – sve u jednom sistemu.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group transition-smooth rounded-2xl border border-slate-200 bg-slate-50/80 p-6 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10 dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-[#00ff9d]/40 dark:hover:shadow-teal-500/10"
            >
              <div className="transition-smooth flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500 text-white group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
