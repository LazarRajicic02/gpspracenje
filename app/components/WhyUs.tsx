const benefits = [
  "Praćenje u realnom vremenu na mapi",
  "Smanjenje troškova goriva i održavanja",
  "Povećana bezbednost vozača i vozila",
  "Jednostavna instalacija i podrška",
  "Pristupačne cene za sve veličine flote",
  "Izveštaji prilagođeni vašim potrebama",
];

export default function WhyUs() {
  return (
    <section id="prednosti" className="scroll-mt-20 bg-slate-50 px-4 py-20 dark:bg-slate-800/80 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Zašto Cyber Tracking?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Nudimo pouzdano GPS rešenje za kompanije koje žele potpunu kontrolu nad svojom flotom.
              Naša platforma je jednostavna za korišćenje, a podrška je uvek na dohvat ruke.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-600 dark:bg-slate-800">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-700 p-8">
                <div className="text-center text-white/90">
                  <svg className="mx-auto h-16 w-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="mt-4 text-sm font-medium">Pregled flote na mapi</p>
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
