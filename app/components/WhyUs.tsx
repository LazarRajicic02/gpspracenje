const whatYouGet = [
  "Praćenje u realnom vremenu",
  "Istorija i evidencija kretanja",
  "Alarmi i notifikacije",
  "Aplikacija + web pristup",
];

const useCases = [
  "Privatna vozila",
  "Rent a car",
  "Transport i logistika",
  "Kurirske službe",
  "Građevina i poljoprivreda",
  "Taxi udruženja",
  "Plovila",
];

export default function WhyUs() {
  return (
    <section id="prednosti" className="scroll-mt-20 bg-slate-50 px-4 py-20 dark:bg-slate-800/80 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="animate-fade-in-up text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Kontrola i menadžment – bez obzira na broj vozila
            </h2>
            <p className="animate-fade-in-up animation-delay-75 mt-4 text-lg text-slate-600 dark:text-slate-400">
              Neograničen broj uređaja. Praćenje preko mobilne aplikacije i web platforme. Pogodno za firme i vozne parkove.
            </p>
            <h3 className="mt-8 font-semibold text-slate-900 dark:text-white">Šta dobijate</h3>
            <ul className="mt-3 space-y-2">
              {whatYouGet.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">Namena</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              {useCases.join(" • ")}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="transition-smooth relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl hover:shadow-2xl hover:shadow-teal-500/10 dark:border-slate-600 dark:bg-slate-800 dark:hover:shadow-teal-500/10">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-700 p-8">
                <div className="text-center text-white/90">
                  <svg className="mx-auto h-16 w-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="mt-4 text-sm font-medium">GPS praćenje flote – mapa vozila</p>
                  <p className="mt-1 text-xs opacity-80">Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
