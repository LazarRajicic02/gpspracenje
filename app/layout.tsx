import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Preuzmite potpunu kontrolu nad vozilima u realnom vremenu",
  description:
    "Praćenje vozila u Srbiji i Evropi. Zaštita od krađe, kontrola zaposlenih i smanjenje troškova uz jednostavnu aplikaciju.",
  keywords: [
    "GPS praćenje",
    "praćenje vozila",
    "praćenje flote",
    "GPS praćenje vozila",
    "GPS Srbija",
    "praćenje vozila u realnom vremenu",
    "geofencing",
    "kontrola flote",
    "Cyber Tracking",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" data-theme="light">
      <body className={`${plusJakarta.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
