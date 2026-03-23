export type BlogAuthor = {
  name: string;
  role: string;
  /** Opciono; bez slike prikazuju se inicijali */
  avatarSrc?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  /** Naslovna slika (putanja ispod /public) */
  coverImage: string;
  category: string;
  readTimeMinutes: number;
  author: BlogAuthor;
  sections: { heading: string; paragraphs: string[] }[];
};

/** Članci bloga — dodajte nove objekte u niz za nove tekstove. */
export const blogPosts: BlogPost[] = [
  {
    slug: "zasto-gps-pracenje-flote",
    title: "Zašto GPS praćenje flote isplati investiciju",
    publishedAt: "2026-03-15",
    excerpt:
      "Kako real-time lokacija, istorija ruta i izveštaji smanjuju troškove goriva i povećavaju odgovornost vozača — bez dodatnog administrativnog tereta.",
    coverImage: "/003 sva vozila na mapi.png",
    category: "Flota i kontrola",
    readTimeMinutes: 6,
    author: {
      name: "Cyber Tracking",
      role: "Tim za podršku korisnicima",
    },
    sections: [
      {
        heading: "Kontrola bez „papira“",
        paragraphs: [
          "Kompanije koje koriste vozila u svakodnevnom radu brzo uoče da telefonski pozivi i ručni zapisi ne daju pouzdanu sliku gde su vozila i kako se koriste.",
          "GPS sistem sa aplikacijom omogućava da na jednom mestu vidite sve aktivne vozila, status (u pokretu / parkirano) i osnovne parametre vožnje.",
        ],
      },
      {
        heading: "Manje skrivenih troškova",
        paragraphs: [
          "Optimizacija ruta i uvid u stil vožnje često dovode do uštede na gorivu i servisu. Istorija kretanja pomaže i u rešavanju sporova sa klijentima ili osiguranjem.",
          "Ulaganje u uređaj i pretplatu tipično se isplati kroz bolju organizaciju i transparentnost, posebno kod većih flota.",
        ],
      },
    ],
  },
  {
    slug: "bezbednost-vozila-i-daljinsko-gasenje",
    title: "Bezbednost vozila i uloga daljinskog gašenja",
    publishedAt: "2026-03-01",
    excerpt:
      "Šta treba znati o zaštiti od krađe, odgovornom korišćenju funkcije blokade goriva i obaveštenju učesnika u saobraćaju.",
    coverImage: "/005 gasenje vozila.png",
    category: "Bezbednost",
    readTimeMinutes: 5,
    author: {
      name: "Cyber Tracking",
      role: "Tim za podršku korisnicima",
    },
    sections: [
      {
        heading: "Prevencija i brza reakcija",
        paragraphs: [
          "GPS ne zamenjuje fizičku zaštitu vozila, ali značajno skraćuje vreme reakcije: alarmi, geozone i praćenje u realnom vremenu pomažu da se brzo reaguje na sumnjive situacije.",
        ],
      },
      {
        heading: "Daljinska blokada goriva",
        paragraphs: [
          "Napredni sistemi omogućavaju blokadu pumpe uz jasna pravila bezbednosti (npr. aktivacija kada vozilo miruje ili ide malom brzinom). Korisnik je uvek odgovoran za zakonito i bezbedno korišćenje, u skladu sa uputstvima pružaoca usluge.",
          "Preporučuje se da vozači i korisnici vozila budu obavešteni o ugrađenom uređaju gde to zakon zahteva.",
        ],
      },
    ],
  },
  {
    slug: "kako-izabrati-gps-za-firmu",
    title: "Kako izabrati GPS rešenje za firmu u Srbiji",
    publishedAt: "2026-02-18",
    excerpt:
      "Kratki vodič: šta pitati dobavljača, šta uključuje pretplata i na šta obratiti pažnju pre kupovine.",
    coverImage: "/002 istorija kretanja.png",
    category: "Vodič",
    readTimeMinutes: 7,
    author: {
      name: "Cyber Tracking",
      role: "Tim za podršku korisnicima",
    },
    sections: [
      {
        heading: "Šta sistem treba da pokrije",
        paragraphs: [
          "Proverite da li ponuda uključuje uređaj, SIM karticu i aplikaciju, kao i da li postoji jasna cena pretplate bez skrivenih naknada.",
          "Bitno je i da aplikacija radi stabilno na telefonu i računaru i da podrška na srpskom jeziku može pomoći pri ugradnji i rešavanju problema.",
        ],
      },
      {
        heading: "Pitanja za dobavljača",
        paragraphs: [
          "Koliko dugo se čuva istorija lokacija? Da li postoji obuka ili uputstvo? Kako funkcioniše produžetak pretplate i šta se dešava pri isteku?",
          "Odgovori na ova pitanja pomažu da izbegnete rešenja koja deluju jeftino, a kasnije otkrijete ograničenja.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
