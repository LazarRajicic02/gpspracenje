import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GoogleTagManager, GoogleTagManagerNoScript } from "./components/GoogleTagManager";
import { GoogleAdsGtag } from "./components/GoogleAdsGtag";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://gpspracenje.rs";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cyber Tracking GPS",
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/icon-512.png`,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gpspracenje.rs"),
  icons: {
    icon: [
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  title: "GPS praćenje vozila | Bez ugovora | Cyber Tracking GPS",
  description:
    "GPS praćenje vozila u Srbiji i Evropi bez skrivenih troškova. Uređaj, SIM kartica i aplikacija – sve uključeno. Daljinska blokada vozila putem aplikacije.",
  keywords: [
    "GPS praćenje",
    "praćenje vozila",
    "praćenje flote",
    "GPS praćenje vozila",
    "GPS Srbija",
    "praćenje vozila u realnom vremenu",
    "geofencing",
    "kontrola flote",
    "Cyber Tracking GPS",
    "gps za vozila",
    "nadzor vozila",
  ],
  openGraph: {
    title: "Preuzmite potpunu kontrolu nad vozilima u realnom vremenu",
    description:
      "Praćenje vozila u Srbiji i Evropi. Zaštita od krađe, kontrola zaposlenih i smanjenje troškova uz jednostavnu aplikaciju.",
    url: "https://gpspracenje.rs",
    images: [
      {
        url: "/logo.png",
        alt: "CyberTracking logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" data-theme="light">
      <body className={`${plusJakarta.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        <GoogleTagManagerNoScript />
        <GoogleTagManager />
        <GoogleAdsGtag />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
