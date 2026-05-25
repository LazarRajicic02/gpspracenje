export type BlogAuthor = {
  name: string;
  role: string;
  avatarSrc?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  coverImage: string;
  category: string;
  readTimeMinutes: number;
  author: BlogAuthor;
  intro?: string[];
  sections: { heading: string; paragraphs: string[] }[];
  outro?: string[];
  cta?: { label: string; href: string };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "kako-funkcionise-gps-pracenje-vozila",
    title: "Kako funkcioniše GPS praćenje vozila i šta sve sadrži GPS lokator",
    publishedAt: "2026-05-25",
    excerpt:
      "Kako GPS lokator radi u realnom vremenu, šta sve sadrži sistem i na koji način vam pomaže u zaštiti vozila i smanjenju troškova.",
    coverImage: "/003 sva vozila na mapi.png",
    category: "GPS praćenje",
    readTimeMinutes: 8,
    author: {
      name: "Cyber Tracking GPS",
      role: "Tim za podršku korisnicima",
    },
    intro: [
      "GPS praćenje vozila danas predstavlja potrebu za svakoga ko želi potpunu kontrolu nad svojim vozilom. Bez obzira da li ste privatno lice ili koristite vozila u poslovne svrhe, ovaj sistem vam omogućava da u svakom trenutku znate gde se vozilo nalazi, kako se koristi i da li dolazi do zloupotrebe.",
      "U nastavku teksta objašnjavamo kako funkcioniše GPS lokator, šta sve sadrži i na koji način vam može pomoći u zaštiti vozila i smanjenju troškova.",
    ],
    sections: [
      {
        heading: "Kako izgleda GPS lokator?",
        paragraphs: [
          "GPS lokator je uređaj malih dimenzija i možete povezati na apsolutno sve vrste prevoznih sredstava, bez obzira da li su vozila ili plovila. Potrebno je samo da postoji akumulator ili baterija koja će obezbediti konstantno napajanje GPS lokatora. Momentalno je spreman za rad bez ikakvih dodatnih konfiguracija i podešavanja. Uređaj je u obliku male kockice (releja), pa ga je izuzetno jednostavno sakriti.",
          "Ugradnja GPS lokatora je jednostavna i može se izvršiti samostalno ili uz pomoć auto-električara, a uređaj se najčešće postavlja na skrivena mesta unutar vozila.",
        ],
      },
      {
        heading: "Na kom principu funkcioniše GPS praćenje vozila u realnom vremenu?",
        paragraphs: [
          "Jedan od osnovnih delova GPS sistema za praćenje vozila je GPS lokator koji konstantno prima signal sa GPS satelita i na osnovu toga određuje tačnu lokaciju vozila. Zahvaljujući ovom principu, omogućeno je precizno GPS praćenje vozila u realnom vremenu.",
          "Kada uređaj izračuna svoju poziciju, podatke putem mobilne mreže šalje na server, odakle ih vi u svakom trenutku možete pratiti preko mobilne aplikacije ili računara. Lokacija vozila se najčešće osvežava na svakih 30 do 60 sekundi, što omogućava veoma precizan uvid u kretanje vozila.",
          "U praksi, to znači da više ne morate da zovete vozača ili nagađate gde se vozilo nalazi jer sve informacije imate direktno na telefonu, u svakom trenutku.",
          "Pored praćenja u realnom vremenu, sistem beleži i istoriju kretanja vozila, uključujući rute, zaustavljanja i trajanje vožnje, do 180 dana unazad. Ovo je posebno korisno za kontrolu rada zaposlenih, optimizaciju ruta i smanjenje nepotrebnih troškova goriva.",
        ],
      },
      {
        heading: "Kako funkcioniše GPS praćenje preko telefona?",
        paragraphs: [
          "GPS praćenje vozila preko telefona funkcioniše putem mobilne aplikacije koja je dostupna za iPhone i Android uređaje. Nakon instalacije aplikacije, unosite podatke za prijavljivanje koje dobijate uz GPS lokator i odmah dobijate pristup sistemu.",
          "U aplikaciji u svakom trenutku možete videti tačnu lokaciju vozila na mapi, kretanje u realnom vremenu, kao i informacije o brzini i zaustavljanjima.",
          "Pored trenutne lokacije, aplikacija omogućava i pregled istorije kretanja, što vam daje jasnu sliku gde se vozilo kretalo, koliko se zadržavalo na određenim lokacijama i na koji način se koristi.",
        ],
      },
      {
        heading: "Na koji način GPS praćenje sprečava krađu i neželjeno korišćenje?",
        paragraphs: [
          "GPS lokator u sebi ima integrisan relej koji se najčešće povezuje na pumpu goriva. U slučaju krađe ili neželjenog korišćenja vozila, jednim klikom u aplikaciji aktivirate relej koji prekida dovod električne energije, čime se vozilo bezbedno zaustavlja i onemogućava njegovo dalje kretanje.",
          "U praksi, to znači da čak i ako dođe do krađe, imate mogućnost da reagujete odmah i sprečite dalje udaljavanje vozila, bez potrebe za fizičkim kontaktom sa njim.",
          "Važno je naglasiti da povezivanje releja nije obavezno kako bi GPS praćenje vozila funkcionisalo. Osnovne funkcije poput praćenja lokacije, istorije kretanja i kontrole aktivnosti dostupne su i bez ove opcije, dok se relej koristi kao dodatni nivo zaštite.",
        ],
      },
      {
        heading: "Da li GPS lokator ima bateriju u sebi?",
        paragraphs: [
          "Uređaj u sebi ima ugrađenu rezervnu bateriju koja omogućava rad GPS lokatora i do 4 sata u situacijama kada se prekine napajanje sa vozila, na primer kada se skine akumulator. Zahvaljujući tome, GPS praćenje vozila nastavlja da funkcioniše i u ovakvim situacijama, što dodatno povećava sigurnost.",
          "U praksi, to znači da uređaj nastavlja da šalje lokaciju čak i kada vozilo ostane bez glavnog napajanja, što može biti ključno u slučaju pokušaja krađe ili neovlašćenog korišćenja vozila.",
        ],
      },
    ],
    outro: [
      "GPS lokator danas predstavlja jednostavno i pouzdano rešenje za praćenje vozila u realnom vremenu, zaštitu vozila i kontrolu troškova. Bez obzira da li koristite vozilo privatno ili poslovno, ovaj sistem vam daje sigurnost i kontrolu u svakom trenutku.",
    ],
    cta: {
      label: "Pogledajte ponudu GPS sistema i započnite praćenje već danas",
      href: "/#ponuda",
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
