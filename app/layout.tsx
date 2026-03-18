import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cyber Tracking – GPS praćenje vozila u realnom vremenu | Srbija",
  description:
    "GPS praćenje vozila i praćenje flote u realnom vremenu. Geofencing, izveštaji, zaštita od krade. Kontrola kompanijskih vozila – pristupačne cene za sve veličine flote. gpspracenje.rs",
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
    title: "Cyber Tracking – GPS praćenje vozila u realnom vremenu | Srbija",
    description: "GPS praćenje vozila i flote u realnom vremenu. Geofencing, izveštaji, zaštita od krade. Kontrola vozila za kompanije i pojedince.",
    url: "https://gpspracenje.rs",
  },
};

const themeScript = `
(function() {
  var key = 'gpspracenje-theme';
  try {
    var stored = localStorage.getItem(key);
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark;
    if (stored === 'dark') dark = true;
    else if (stored === 'light') dark = false;
    else dark = !!prefersDark;
    var el = document.documentElement;
    if (dark) { el.classList.add('dark'); el.setAttribute('data-theme', 'dark'); }
    else { el.classList.remove('dark'); el.setAttribute('data-theme', 'light'); }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </body>
    </html>
  );
}
