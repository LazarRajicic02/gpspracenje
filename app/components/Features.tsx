const features = [
  {
    title: "Multinetwork",
    description:
      "Uvek najjača mreža – uređaj se automatski povezuje na najbolji dostupni signal. Radi u Srbiji i preko 40 zemalja sa EURO41 SIM karticom.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    title: "Gašenje vozila putem aplikacije",
    description:
      "Daljinsko isključivanje motora putem aplikacije. Relej za blokadu pumpe goriva – aktivacija samo kada vozilo miruje, za maksimalnu bezbednost.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Istorija kretanja (180 dana)",
    description:
      "Evidencija kretanja i zaustavljanja sa vremenom i lokacijom. Pregled u aplikaciji u obliku animacije – idealno za izveštaje i analizu.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Geo-fence i alarm za brzinu",
    description:
      "Virtuelna ograda – obaveštenja kada vozilo uđe ili izađe iz zone. Alarm za prekoračenje brzine i detekcija pokreta.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Izveštaji i analitika",
    description:
      "Detaljni izveštaji, alarmi i notifikacije. Status baterije uređaja. Sve na dohvat ruke u mobilnoj aplikaciji i na web platformi.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Jednostavna instalacija",
    description:
      "Povezivanje na akumulator (12V–24V). Pogodan za sve vrste vozila (8V–32V). Ugrađena baterija omogućava rad do 4h bez napajanja.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="usluge" className="scroll-mt-20 bg-white px-4 py-20 dark:bg-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="animate-fade-in-up text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Usluge GPS praćenja vozila
          </h2>
          <p className="animate-fade-in-up animation-delay-75 mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Multinetwork, gašenje vozila iz aplikacije, istorija 180 dana, geo-fence, alarm za brzinu, izveštaji – sve u jednom GPS sistemu.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group animate-fade-in-up transition-smooth rounded-2xl border border-slate-200 bg-slate-50/80 p-6 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10 dark:border-slate-700/80 dark:bg-slate-800/50 dark:hover:border-teal-500/50 dark:hover:shadow-teal-500/10"
              style={{ animationDelay: `${120 + index * 80}ms` }}
            >
              <div className="transition-smooth flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500 text-white group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
