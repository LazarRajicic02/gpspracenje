/** Podaci o pravnom licu (sajt, futer, uslovi korišćenja). */
export const companyLegal = {
  /** Naziv firme u APR-u */
  company: "Cyber Master PR",
  /** Brend / sajt */
  brand: "Cyber Tracking",
  address: "Čačak, Srbija",
  pib: "115037196",
  maticni: "68042453",
  phone: "+381 60 4030 888",
  email: "cybermaster381@gmail.com",
} as const;

/** Datum poslednje izmene dokumenta „uslovi korišćenja“. */
export const termsLastUpdated = "21. mart 2026." as const;

export const termsProvider = {
  ...companyLegal,
  lastUpdated: termsLastUpdated,
} as const;
