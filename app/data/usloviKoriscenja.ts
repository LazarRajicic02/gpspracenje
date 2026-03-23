export type TermsBulletSection = {
  title: string;
  items: string[];
};

/** Tekst usklađen sa dokumentom „Uslovi i pravila korišćenja GPS usluge“ (PDF). */
export const termsBulletSections: TermsBulletSection[] = [
  {
    title: "Privatnost i sigurnost podataka",
    items: [
      "Pružalac usluge ne prikuplja lične podatke osim onih koje korisnik dobrovoljno ostavi putem kontakt forme, porudžbine ili komunikacije.",
      "Korisnik dobija pristup uređaju preko aplikacije i obavezan je da odmah promeni inicijalnu lozinku po prijemu uređaja.",
      "Lozinka koju korisnik postavi koristi se isključivo za pristup aplikaciji i uređaju, a pružalac usluge nema uvid u nju.",
      "Korisnik je odgovoran da čuva lozinku u tajnosti i da ne deli pristup trećim licima.",
      "Zabranjeno je korišćenje uređaja ili usluge u svrhe koje mogu narušiti privatnost drugih lica ili prekršiti važeće propise.",
      "SIM kartica je IMEI zaključana i namenjena isključivo za korišćenje u dodeljenom uređaju. Svako vađenje kartice ili korišćenje u drugom uređaju dovodi do momentalne blokade kartice i deaktivacije usluge.",
    ],
  },
  {
    title: "Opis usluge",
    items: [
      "GPS uređaj je namenjen za ugradnju u vozila radi praćenja njihove lokacije i kretanja.",
      "GPS sistem omogućava praćenje kretanja vozila u realnom vremenu u svrhu povećanja kontrole i sigurnosti.",
      "Usluga može pomoći u preventivi od krađe ili pronalaženju vozila u slučaju nestanka.",
      "GPS sistem omogućava pregled pređenih ruta i lokacije zadržavanja vozila.",
      "GPS uređaj se isporučuje kao sastavni deo GPS sistema za praćenje vozila i koristi se uz aktivnu pretplatu. Uređaj nije samostalan proizvod, već deo sistema koji uključuje uređaj, SIM karticu i aplikaciju.",
      "Korisnik može koristiti aplikaciju za praćenje jednog ili više vozila u okviru svog naloga.",
      "GPS uređaj šalje podatke o lokaciji putem mobilne mreže na centralni server sistema.",
      "U slučaju bilo kakvih tehničkih problema, korisnik treba odmah obavestiti podršku pružaoca usluge.",
      "Funkcionisanje sistema moguće je isključivo uz aktivnu pretplatu.",
    ],
  },
  {
    title: "Obaveze korisnika",
    items: [
      "Korisnik je odgovoran za pravilnu instalaciju uređaja u vozilu ili je dužan da instalaciju poveri stručnoj osobi.",
      "Korisnik je dužan da uređaj koristi u skladu sa zakonima Republike Srbije i snosi odgovornost za način korišćenja sistema.",
      "Od korisnika se očekuje da uređaj koristi pažljivo i odgovorno, kako bi se izbegle štete ili kvarovi.",
      "Korisnik je dužan da obezbedi da uređaj ima stabilno napajanje kako bi usluga mogla pravilno da funkcioniše.",
      "Korisnik je odgovoran za bezbednost pristupnih podataka za aplikaciju i sve aktivnosti izvršene putem svog korisničkog naloga.",
      "Korisnik može po potrebi premeštati uređaj iz jednog vozila u drugo; takva upotreba je dozvoljena i ne utiče na korišćenje usluge.",
      "Korisnik ima pravo da koristi uslugu u skladu sa ovim uslovima i treba da poštuje sve preporuke za sigurnu upotrebu.",
      "Korisnik je dužan da bez odlaganja prijavi eventualni gubitak, krađu ili oštećenje uređaja.",
      "Korisnik se obavezuje da neće pokušavati da menja, otvara ili tehnički modifikuje uređaj.",
      "Korisnik je dužan da obavesti osobe koje koriste vozilo da je vozilo opremljeno uređajem za GPS praćenje, ukoliko to zahtevaju važeći propisi.",
      "Korisnik prihvata da kvalitet i dostupnost usluge mogu zavisiti od dostupnosti mobilne mreže i GPS signala.",
      "Korisnik je dužan da uređaj koristi u skladu sa tehničkim uputstvima proizvođača ili pružaoca usluge.",
      "Korisnik snosi odgovornost za štetu nastalu usled nepravilnog korišćenja, neovlašćenih izmena uređaja ili nepoštovanja ovih uslova korišćenja.",
    ],
  },
  {
    title: "Reklamacije, tehnička podrška i garancija",
    items: [
      "GPS uređaj, SIM kartica i aplikacija čine jedinstven sistem za korišćenje usluge i ne predstavljaju zaseban proizvod u prodaji.",
      "Uređaj se korisniku daje na korišćenje kao deo GPS usluge i namenjen je isključivo za rad u okviru sistema pružaoca usluge.",
      "Garancija na ispravnost uređaja važi tokom celog perioda aktivne pretplate, pod uslovom da se uređaj koristi u skladu sa uputstvima i bez neovlašćenih tehničkih izmena.",
      "U slučaju kvara, nepravilnog rada ili tehničkog problema, korisnik je dužan da kontaktira pružaoca usluge radi dijagnostike i rešavanja problema.",
      "Pružalac usluge će, u razumnom roku, obezbediti popravku, zamenu ili ponovno podešavanje uređaja ukoliko se utvrdi da je kvar nastao u redovnom korišćenju sistema.",
      "Garancija ne pokriva oštećenja nastala nepravilnom instalacijom, neovlašćenim otvaranjem uređaja, fizičkim oštećenjem, vlagom, neodgovarajućim napajanjem ili korišćenjem suprotnim uputstvima.",
      "U slučaju prekida pretplate, pružalac usluge ne garantuje funkcionalnost uređaja dok se pretplata ponovo ne aktivira.",
      "Sve tehničke intervencije, zamena SIM kartice ili ponovna aktivacija sistema vrše se isključivo od strane pružaoca usluge.",
    ],
  },
  {
    title: "Ograničenje odgovornosti",
    items: [
      "Korišćenje usluge vrši se u potpunosti na sopstvenu odgovornost korisnika.",
      "Pružalac usluge nastoji da GPS usluga funkcioniše pouzdano, ali povremene greške, prekidi, kvarovi ili privremena nedostupnost mogu se javiti, posebno u mestima sa slabim signalom ili otežanim uslovima.",
      "Pružalac usluge ne preuzima odgovornost za bilo kakvu direktnu, indirektnu, slučajnu, posledičnu ili drugu štetu koja može nastati korišćenjem usluge ili nemogućnošću njenog korišćenja, uključujući gubitak prihoda, vozila ili podataka.",
      "Pružalac usluge ne može garantovati potpuno neprekidno ili besprekorno funkcionisanje svih funkcionalnosti u svakom trenutku.",
      "Pružalac usluge nije odgovoran za kvarove, oštećenja, gubitak uređaja ili probleme nastale nepravilnom instalacijom.",
      "Pružalac usluge ne odgovara za prekide ili smanjenje funkcionalnosti izazvane mobilnom mrežom, dostupnošću interneta, GPS signalom ili drugim tehničkim ograničenjima.",
      "Pružalac usluge ne preuzima odgovornost za posledice nastale nezakonitim korišćenjem uređaja od strane korisnika ili trećih lica.",
      "Pružalac usluge ne odgovara za gubitak ili curenje podataka uzrokovanog neovlašćenim pristupom, hakerskim napadima ili drugim bezbednosnim incidentima.",
      "Funkcionisanje sistema može zavisiti od dostupnosti mobilne mreže, GPS signala, interneta i tehničkih uslova na terenu, na koje pružalac usluge nema uticaj.",
      "GPS sistem služi kao pomoćno sredstvo za praćenje i kontrolu vozila i ne predstavlja apsolutnu zaštitu od krađe, oštećenja ili gubitka vozila.",
      "Pružalac usluge ne garantuje da će vozilo biti pronađeno ili zaštićeno u svim situacijama, niti snosi odgovornost za eventualnu štetu nastalu krađom, nezgodom ili zloupotrebom.",
      "Funkcija daljinskog gašenja vozila, ukoliko postoji, zavisi od tehničkih uslova, instalacije i dostupnosti signala, te pružalac usluge ne može garantovati njeno izvršenje u svakom trenutku.",
      "Pružalac usluge nije odgovoran za štetu nastalu nepravilnom instalacijom uređaja, neovlašćenim modifikacijama, neispravnim napajanjem ili korišćenjem suprotnim uputstvima.",
      "U slučaju prekida pretplate ili deaktivacije SIM kartice, sistem može prestati sa radom, za šta pružalac usluge ne snosi odgovornost.",
      "Pružalac usluge zadržava pravo izmene tehničkih karakteristika sistema radi unapređenja usluge, bez obaveze prethodnog obaveštavanja korisnika.",
      "Podaci o lokaciji, brzini i drugim parametrima prikazuju se na osnovu informacija koje uređaj šalje putem GPS i mobilne mreže, te mogu imati odstupanja ili kašnjenja, za šta pružalac usluge ne snosi odgovornost.",
      "Pružalac usluge ne garantuje neprekidan rad aplikacije, servera ili internet servisa, niti snosi odgovornost za privremenu nedostupnost sistema usled tehničkih radova, kvarova, prekida mreže ili drugih okolnosti na koje nema uticaj.",
    ],
  },
  {
    title: "Poručivanje i plaćanje",
    items: [
      "Poručivanje GPS sistema vrši se putem sajta, telefona ili elektronske pošte.",
      "Prilikom prve porudžbine korisnik kupuje GPS sistem zajedno sa odabranim trajanjem pretplate.",
      "Sistem se isporučuje na adresu korisnika putem kurirske službe ili ličnim preuzimanjem, u dogovoru sa pružaocem usluge.",
      "Plaćanje je moguće pouzećem prilikom isporuke ili uplatom na račun, prema dogovoru.",
      "Porudžbina se smatra prihvaćenom nakon potvrde od strane pružaoca usluge.",
      "Pružalac usluge zadržava pravo da odbije porudžbinu bez dodatnog obrazloženja.",
      "Rok isporuke zavisi od dostupnosti uređaja i kurirske službe, a pružalac usluge ne odgovara za kašnjenja nastala usled okolnosti na koje nema uticaj.",
    ],
  },
  {
    title: "Trajanje i aktivacija pretplate",
    items: [
      "Pretplata počinje od trenutka aktivacije uređaja u sistemu, nakon isporuke korisniku.",
      "Pretplata traje onoliko koliko je korisnik izabrao prilikom poručivanja ili naknadnog produženja.",
      "Produženje pretplate moguće je putem sajta ili kontaktiranjem pružaoca usluge, uplatom na račun ili plaćanjem pouzećem.",
      "Ukoliko pretplata istekne, usluga se automatski deaktivira i uređaj prestaje da šalje podatke dok se pretplata ponovo ne aktivira.",
      "Ponovna aktivacija može zahtevati tehničku intervenciju ili zamenu SIM kartice, u zavisnosti od dužine prekida korišćenja.",
      "Korišćenje usluge nije vezano ugovorom i korisnik sam odlučuje da li želi da produži pretplatu nakon isteka.",
      "GPS uređaj, SIM kartica i aplikacija čine jedinstven sistem za korišćenje usluge i ne predstavljaju zaseban proizvod.",
    ],
  },
  {
    title: "Prestanak korišćenja usluge",
    items: [
      "Korisnik može prestati sa korišćenjem GPS usluge u bilo kom trenutku.",
      "Pretplata traje onoliko koliko je uplaćeno i ne produžava se automatski.",
      "Nakon isteka pretplate, usluga se deaktivira ukoliko korisnik ne izvrši novu uplatu.",
      "U slučaju prestanka korišćenja usluge pre isteka uplaćenog perioda, uplaćeni iznos se ne vraća.",
      "GPS uređaj je sastavni deo sistema za praćenje i koristi se isključivo uz aktivnu pretplatu, te ne predstavlja samostalan proizvod.",
      "Nakon prestanka korišćenja usluge pružalac usluge nema obavezu daljeg održavanja ili podrške uređaja dok se pretplata ponovo ne aktivira.",
    ],
  },
  {
    title: "Izmena uslova",
    items: [
      "Pružalac usluge zadržava pravo da u bilo kom trenutku izmeni ili dopuni ove uslove korišćenja.",
      "Korisnik je dužan da povremeno proverava uslove korišćenja radi upoznavanja sa eventualnim izmenama.",
    ],
  },
];

export { termsProvider } from "./company";

export const termsPrivacySummaryParagraphs: string[] = [
  "Prilikom korišćenja sajta korisnik može dobrovoljno ostaviti lične podatke putem kontakt forme ili porudžbine, kao što su ime, broj telefona ili email adresa.",
  "Ovi podaci koriste se isključivo u svrhu komunikacije sa korisnikom i realizacije tražene usluge.",
  "Pružalac usluge ne prosleđuje podatke trećim licima, osim kada je to neophodno za realizaciju isporuke ili pružanje usluge.",
  "Podaci se ne koriste u druge svrhe niti se javno objavljuju.",
  "Pružalac usluge preduzima razumne tehničke i organizacione mere radi zaštite podataka od neovlašćenog pristupa.",
  "Korisnik može u svakom trenutku zatražiti izmenu ili brisanje svojih podataka kontaktiranjem pružaoca usluge.",
];
