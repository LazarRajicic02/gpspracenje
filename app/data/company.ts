/** Podaci o pravnom licu (sajt, futer, uslovi korišćenja). */
export const companyLegal = {
  /** Naziv firme u APR-u */
  company: "Cyber Master PR",
  /** Brend / sajt */
  brand: "Cyber Tracking",
  address: "Čačak, Srbija",
  pib: "115037196",
  maticni: "68042453",
  racun: "155-0000000093194-79",
  phone: "+381 60 4030 888",
  email: "podrska@gpspracenje.rs",
} as const;

/** Datum poslednje izmene dokumenta „uslovi korišćenja“. */
export const termsLastUpdated = "21. mart 2026." as const;

export const termsProvider = {
  ...companyLegal,
  lastUpdated: termsLastUpdated,
} as const;
