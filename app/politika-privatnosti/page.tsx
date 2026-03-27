import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politika privatnosti – Cyber Tracking",
  description:
    "Politika privatnosti Cyber Tracking (gpspracenje.rs). Kako prikupljamo, koristimo i štitimo vaše podatke pri upitu i narudžbi GPS praćenja vozila.",
};

export default function PolitikaPrivatnostiPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Nazad na početnu
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Politika privatnosti
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Poslednja izmena:{" "}
          {new Date().toLocaleDateString("sr-Latn-RS", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </header>

      <div className="prose prose-slate dark:prose-invert prose-headings:font-semibold prose-p:text-slate-600 dark:prose-p:text-slate-400 max-w-none">
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">1. Uvod</h2>
          <p>
            Cyber Tracking („mi“, „nas“, sajt gpspracenje.rs) poštuje vašu privatnost. Ova politika objašnjava koje
            podatke o vama prikupljamo, kako ih koristimo i koja su vaša prava u skladu sa zakonom o zaštiti podataka
            o ličnosti (uključujući GDPR gde je primenjivo).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">2. Ko prikuplja podatke</h2>
          <p>
            Podatke prikuplja i obrađuje Cyber Tracking, vlasnik sajta gpspracenje.rs. Za pitanja u vezi sa podacima
            možete nas kontaktirati putem emaila podrska@gpspracenje.rs ili telefona navedenog na sajtu.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">3. Koje podatke prikupljamo</h2>
          <p>Prikupljamo podatke koje nam vi dobrovoljno prosledite:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400">
            <li>
              <strong className="text-slate-800 dark:text-slate-200">Kontakt forma i forma za narudžbu:</strong> ime i
              prezime ili naziv kompanije, broj telefona, email adresa, adresa (opciono), poruka ili napomena.
            </li>
            <li>
              <strong className="text-slate-800 dark:text-slate-200">Tehnički podaci:</strong> pri poseti sajtu
              pretraživač može da šalje IP adresu, tip uređaja i slične podatke u svrhu ispravnog prikaza stranice; ne
              koristimo ih za profilisanje.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">4. U koje svrhe koristimo podatke</h2>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400">
            <li>Odgovor na vaš upit i komunikacija u vezi sa uslugama GPS praćenja vozila.</li>
            <li>Obrada narudžbe, slanje ponude i eventualno sklapanje ugovora.</li>
            <li>Ispunjavanje zakonskih obaveza ako to zakon zahteva.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">5. Pravni osnov obrade</h2>
          <p>
            Vaše podatke obrađujemo na osnovu vaše saglasnosti (kada popunite formu) i/u skladu sa zakonskom obavezom
            i legitimnim interesom (npr. odgovor na upit, izvršenje ugovora).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">6. Čuvanje i dele podataka</h2>
          <p>
            Podatke iz formi primamo putem emaila i čuvamo u okviru našeg email sistema i potrebnih arhiva. Ne prodajemo
            i ne ustupamo vaše podatke trećim stranama u marketinške svrhe. Podatke možemo deliti samo ako to zakon
            izričito zahteva (npr. nadležnim organima) ili sa pouzdanim pružaocima usluga koji nam pomažu u radu (npr.
            hosting), a koji su obavezni da poštuju zaštitu podataka.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">7. Koliko dugo čuvamo podatke</h2>
          <p>
            Podatke iz upita i narudžbi čuvamo onoliko dugo koliko je potrebno za ispunjenje svrhe (odgovor, ponuda,
            ugovor) i u skladu sa zakonskim rokovima za čuvanje dokumenata. Ako želite da obrišemo vaše podatke ranije,
            obratite nam se putem kontakta navedenog u odeljku 2.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">8. Vaša prava</h2>
          <p>U skladu sa zakonom imate pravo da:</p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400">
            <li>Zatražite pristup svojim podacima i kopiju.</li>
            <li>Zatražite ispravku netačnih podataka.</li>
            <li>Zatražite brisanje podataka („pravo na zaborav“) u okviru zakonskih mogućnosti.</li>
            <li>Uložite prigovor nadležnom organu za zaštitu podataka ako smatrate da je obrada nezakonita.</li>
          </ul>
          <p className="mt-4">
            Za ostvarivanje ovih prava pošaljite nam zahtev na podrska@gpspracenje.rs. Odgovorićemo u roku propisanom
            zakonom.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">9. Kolačići (cookies)</h2>
          <p>
            Sajt može koristiti neophodne kolačiće (npr. za čuvanje vaše postavke teme ili tehničke potrebe). Ne
            koristimo kolačiće za praćenje u marketinške svrhe bez vaše prethodne saglasnosti. Ako u budućnosti
            uključimo analitičke ili druge opciono kolačiće, na sajtu će biti moguće prihvatiti ili odbiti njihovo
            korišćenje.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">10. Bezbednost</h2>
          <p>
            Preduzimamo odgovarajuće tehničke i organizacione mere da vaše podatke zaštitimo od neovlašćenog pristupa,
            gubitka ili zloupotrebe. Komunikacija putem forme na sajtu može ići preko šifrovanog protokola (HTTPS) u
            zavisnosti od podešavanja vašeg pretraživača i hostinga.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">11. Izmene politike</h2>
          <p>
            Ovu politiku privatnosti možemo povremeno ažurirati. O značajnim izmenama ćemo vas obavestiti putem sajta
            (npr. ažuriran datum na ovoj stranici) ili, ako je moguće, putem kontakta koji ste nam ostavili.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">12. Kontakt</h2>
          <p>
            Za sva pitanja u vezi sa ovom politikom privatnosti i vašim podacima kontaktirajte nas na{" "}
            <a
              href="mailto:podrska@gpspracenje.rs"
              className="text-teal-600 underline hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
            >
              podrska@gpspracenje.rs
            </a>{" "}
            ili putem telefona navedenog na sajtu.
          </p>
        </section>
      </div>

      <div className="mt-14 border-t border-slate-200 pt-8 dark:border-slate-700">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Nazad na početnu
        </Link>
      </div>
    </article>
  );
}
