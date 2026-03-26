export type FaqItem = {
  id: string;
  categoryId: string;
  question: string;
  answer: string;
  featured?: boolean;
};

export const faqCategories: Array<{ id: string; label: string }> = [
  { id: "instalacija", label: "Instalacija i aktivacija" },
  { id: "funkcionisanje", label: "Funkcionisanje uređaja" },
  { id: "aplikacija", label: "Praćenje i aplikacija" },
  { id: "sigurnost", label: "Sigurnost i privatnost" },
  { id: "pretplata", label: "Pretplata" },
  { id: "cenovnik", label: "Cenovnik i plaćanje" },
];

export const faqItems: FaqItem[] = [
  // Instalacija i aktivacija GPS uređaja (1-4)
  {
    id: "q1",
    categoryId: "instalacija",
    question: "Kako instalirati GPS uređaj u vozilo?",
    answer:
      "GPS uređaj treba postaviti na mesto sa dobrom vidljivošću prema nebu, obično ispod haube, ispod instrument-table, u prostoru oko vetrobranskog stakla ili u tapaciru vrata.",
    featured: true,
  },
  {
    id: "q2",
    categoryId: "instalacija",
    question: "Da li je potrebna profesionalna montaža ili je mogu sam izvršiti?",
    answer:
      "Ugradnja GPS sistema zahteva osnovno znanje iz auto-elektrike, pa ukoliko ga imate, možete sami postaviti uređaj. Najvažnije je da uređaj bude pravilno i bezbedno povezan na konstantan izvor napajanja vozila.",
  },
  {
    id: "q3",
    categoryId: "instalacija",
    question: "Kako povezati uređaj sa aplikacijom?",
    answer:
      "Nakon što je GPS uređaj pravilno postavljen i uključen, otvorite aplikaciju na telefonu i prijavite se. Nikakvo specijalno povezivanje nije potrebno.",
    featured: true,
  },
  {
    id: "q4",
    categoryId: "instalacija",
    question: "Kada uređaj počinje sa radom nakon instalacije?",
    answer:
      "Potrebno je sačekati 4–5 minuta kako bi se uređaj povezao sa satelitima. Nakon toga GPS sistem je spreman za korišćenje. Otvorite aplikaciju i videćete vozilo na mapi.",
  },

  // Način funkcionisanja GPS uređaja (5-9)
  {
    id: "q5",
    categoryId: "funkcionisanje",
    question: "Da li uređaj radi i kada je vozilo isključeno?",
    answer:
      "GPS uređaj nastavlja da radi i kada je vozilo isključeno, jer je povezan na stalni izvor napajanja vozila. To omogućava praćenje vozila u svakom trenutku, čak i kada motor nije u funkciji.",
  },
  {
    id: "q6",
    categoryId: "funkcionisanje",
    question: "Da li uređaj ima bateriju i koliko dugo radi?",
    answer:
      "GPS uređaj ima rezervnu bateriju koja omogućava nastavak rada čak i kada se akumulator vozila ukloni ili nestane struje. Ovo obezbeđuje da GPS sistem funkcioniše do 4 sata u takvim situacijama.",
  },
  {
    id: "q7",
    categoryId: "funkcionisanje",
    question: "Kako funkcioniše bežično gašenje vozila?",
    answer:
      "Bežično gašenje vozila funkcioniše preko releja u GPS uređaju, koji omogućava daljinsko isključivanje motora putem aplikacije. Funkcija se aktivira samo kada je vozilo zaustavljeno i u sigurnom režimu, a relej šalje signal da prekine napajanje pumpe za gorivo, čime se vozilo bezbedno zaustavlja.",
  },
  {
    id: "q8",
    categoryId: "funkcionisanje",
    question: "Šta znače različite LED lampice na uređaju?",
    answer:
      "Na uređaju žuta LED lampica označava GPRS mrežu, dok plava LED lampica označava GPS mrežu. Ako lampice sijaju konstantno, to znači da je uređaj uspešno povezan. Ukoliko neka LED dioda trepće, to znači da uređaj još uvek pokušava da uspostavi signal. Vozilo je potrebno odvesti na mesto sa boljim GPS i GSM signalom.",
  },
  {
    id: "q9",
    categoryId: "funkcionisanje",
    question: "Da li smem da prebacujem GPS uređaj iz jednog u drugo vozilo?",
    answer:
      "Da, uređaj sme da se prebacuje iz jednog u drugo vozilo. Potrebno je samo da se ponovo pravilno poveže na napajanje i postavi na odgovarajuće mesto u novom vozilu kako bi nastavio sa radom i praćenjem.",
  },

  // Praćenje i aplikacija (10-15)
  {
    id: "q10",
    categoryId: "aplikacija",
    question: "Kako mogu da pratim vozilo u realnom vremenu?",
    answer:
      "Nakon prijavljivanja u aplikaciju kliknite na zelenu ikonicu u donjem levom uglu pod nazivom „Position“ kako biste videli kretanje i lokaciju vozila u realnom vremenu.",
    featured: true,
  },
  {
    id: "q11",
    categoryId: "aplikacija",
    question: "Mogu li da pratim više vozila istovremeno?",
    answer:
      "Sva vozila mogu se pratiti i kontrolisati sa jednog ekrana u realnom vremenu.",
  },
  {
    id: "q12",
    categoryId: "aplikacija",
    question: "Da li aplikacija čuva istoriju kretanja i koliko dugo?",
    answer:
      "Istorija kretanja i zaustavljanja, uključujući vreme i lokaciju, čuva se u poslednjih 180 dana. Korisnici mogu pregledati ovu istoriju u aplikaciji u obliku animacije koja prikazuje kretanje vozila.",
    featured: true,
  },
  {
    id: "q13",
    categoryId: "aplikacija",
    question: "Da li aplikacija radi na iOS i Android uređajima?",
    answer:
      "Aplikacija je potpuno besplatna i radi na svim iPhone i Android uređajima.",
  },
  {
    id: "q14",
    categoryId: "aplikacija",
    question: "Da li postoji ograničenje broja korisnika koji mogu pristupiti nalogu?",
    answer:
      "Ne postoji ograničenje broja korisnika koji mogu pristupiti nalogu. Svako ko ima šifru može se prijaviti, bez obzira na mesto gde se nalazi ili tip uređaja koji koristi.",
  },
  {
    id: "q15",
    categoryId: "aplikacija",
    question: "Postoji li mogućnost praćenja putem računara ili tableta?",
    answer:
      "Da, praćenje je moguće na većini uređaja koji imaju pristup internetu.",
  },

  // Sigurnost i privatnost (16-18)
  {
    id: "q16",
    categoryId: "sigurnost",
    question: "Da li je praćenje sigurno i zaštićeno?",
    answer:
      "Da, praćenje je zaštićeno enkripcijom kako bi podaci o lokaciji vozila bili sigurni.",
    featured: true,
  },
  {
    id: "q17",
    categoryId: "sigurnost",
    question: "Ko ima pristup informacijama o lokaciji vozila?",
    answer:
      "Pristup informacijama o lokaciji vozila ima isključivo osoba koja poseduje šifru za pristup nalogu. Pružalac usluge nema uvid u šifru korisničkog naloga i nema mogućnost praćenja vozila.",
  },
  {
    id: "q18",
    categoryId: "sigurnost",
    question: "Da li GPS sistem radi u inostranstvu?",
    answer:
      "GPS sistem radi u Srbiji i širom Evrope bez ograničenja. Zahvaljujući Multinetwork SIM karticama, uređaj se automatski povezuje na najjaču dostupnu mrežu operatera, što omogućava najbolju moguću pokrivenost.",
  },

  // Aktivacija pretplate (19-24)
  {
    id: "q19",
    categoryId: "pretplata",
    question: "Gde se kupuje i kako se produžava pretplata?",
    answer:
      "Sve instrukcije za kupovinu i produžavanje pretplate možete pronaći na veb sajtu gpspracenje.rs ili pozivom na broj telefona 061 4030 888.",
    featured: true,
  },
  {
    id: "q20",
    categoryId: "pretplata",
    question: "Kako se vrši aktivacija i plaćanje prve preplate?",
    answer:
      "Prva pretplata se kupuje zajedno sa GPS sistemom i aktivna je od dana prijema GPS uređaja.",
  },
  {
    id: "q21",
    categoryId: "pretplata",
    question: "Da li privremeno mogu pauzirati pretplatu?",
    answer:
      "Pretplatu nije moguće privremeno pauzirati.",
  },
  {
    id: "q22",
    categoryId: "pretplata",
    question: "Na koliko meseci mogu da kupim pretplatu?",
    answer:
      "Pretplata se može kupiti na period od 3, 6 ili 12 meseci. Duži period (12 meseci) nudi najpovoljniju mesečnu cenu pretplate.",
  },
  {
    id: "q23",
    categoryId: "pretplata",
    question: "Kako produžiti pretplatu pre nego što istekne?",
    answer:
      "Najmanje sedam dana pre isteka pretplate kontaktiraćemo vas na broj telefona koji ste ostavili prilikom kupovine i dati uputstva za produženje. Pretplatu možete produžiti i ranije, ali najkasnije 48 sati pre njenog isteka.",
  },
  // Cenovnik i način plaćanja (25-27)
  {
    id: "q25",
    categoryId: "cenovnik",
    question: "Da li postoje ugovorne obaveze i neki dodatni troškovi?",
    answer:
      "Apsolutno ne postoji nikakva ugovorna obaveza, niti postoje skriveni ili dodatni troškovi. Nakon isteka plaćene pretplate, korisnik sam odlučuje da li želi da je nastavi ili ne.",
  },
  {
    id: "q26",
    categoryId: "cenovnik",
    question: "Koja je cena i šta pretplata uključuje?",
    answer:
      "PRO GPS sistem: uređaj 6.850 rsd., pretplata u dinarima (najpovoljnije 780 rsd. / mesečno uz 12 meseci). Smart GPS sistem: uređaj 5.850 rsd., ista struktura pretplate. Pretplata na 3, 6 ili 12 meseci: 3 meseca 3.150 rsd. (1.050 rsd. / mesečno), 6 meseci 5.340 rsd. (890 rsd. / mesečno), 12 meseci 9.360 rsd. (780 rsd. / mesečno). Bez ugovorne obaveze i skrivenih troškova. Pretplata uključuje kompletnu tehničku podršku tokom trajanja i konsultacije vezane za GPS sistem. Za tačnu ponudu pozovite 061 4030 888.",
  },
  {
    id: "q27",
    categoryId: "cenovnik",
    question: "Da li mogu otkazati pretplatu pre isteka perioda?",
    answer:
      "Ne postoji mogućnost otkazivanja pretplate u toku njenog trajanja. Otkazivanje je moguće nakon isteka aktuelne pretplate.",
  },
];

