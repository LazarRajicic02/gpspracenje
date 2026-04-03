/** Google Ads konverzija — „Zatraži ponudu“ (kontakt forma). */
export const GOOGLE_ADS_AW_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim() || "AW-18061550703";

export const GOOGLE_ADS_CONTACT_CONVERSION_SEND_TO =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_SEND_TO?.trim() ||
  "AW-18061550703/SrN4CM2ZmZUcEO_ItaRD";

/** Klik na broj telefona (click-to-call). */
export const GOOGLE_ADS_PHONE_CLICK_SEND_TO =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_SEND_TO?.trim() ||
  "AW-18061550703/TallCJnRg5UcEO_ItaRD";

/** Porudžbina / kupovina (success nakon API). */
export const GOOGLE_ADS_PURCHASE_SEND_TO =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_PURCHASE_SEND_TO?.trim() ||
  "AW-18061550703/oFLACLfRmZUcEO_ItaRD";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Pozovi nakon potvrđenog slanja kontakt upita (server vratio OK). */
export function reportContactOfferConversion(): void {
  if (typeof window === "undefined") return;
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;
  gtag("event", "conversion", { send_to: GOOGLE_ADS_CONTACT_CONVERSION_SEND_TO });
}

/**
 * Kao `gtag_report_conversion` iz Google Ads uputstva: šalje konverziju pa preko
 * `event_callback` otvara `tel:` (da merenje stigne pre navigacije).
 */
export function reportPhoneClickConversion(targetUrl: string): void {
  if (typeof window === "undefined") return;
  const gtag = window.gtag;
  const callback = () => {
    if (targetUrl) window.location.assign(targetUrl);
  };
  if (typeof gtag === "function") {
    gtag("event", "conversion", {
      send_to: GOOGLE_ADS_PHONE_CLICK_SEND_TO,
      value: 1.0,
      currency: "EUR",
      event_callback: callback,
    });
  } else {
    callback();
  }
}

/** Konverzija porudžbine; `transaction_id` sprečava višestruko brojanje iste narudžbine. */
export function reportPurchaseConversion(transactionId: string): void {
  if (typeof window === "undefined") return;
  const id = transactionId.trim();
  if (!id) return;
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;
  gtag("event", "conversion", {
    send_to: GOOGLE_ADS_PURCHASE_SEND_TO,
    transaction_id: id,
  });
}
