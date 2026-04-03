import Script from "next/script";
import { GOOGLE_ADS_AW_ID } from "@/lib/googleAdsGtag";

/** Globalni Google tag (gtag.js) za Google Ads — na svim stranicama. */
export function GoogleAdsGtag() {
  const id = GOOGLE_ADS_AW_ID;
  if (!id) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="google-ads-gtag-init" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');
        `.trim()}
      </Script>
    </>
  );
}
