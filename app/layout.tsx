import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cyber Tracking – Pametno GPS praćenje vozila",
  description:
    "Profesionalno GPS praćenje vozila u realnom vremenu. Zaštita flote, smanjenje troškova i potpuna kontrola nad vozilima.",
  keywords: ["GPS praćenje", "praćenje vozila", "flota", "Cyber Tracking", "GPS Srbija"],
  openGraph: {
    title: "Cyber Tracking – Pametno GPS praćenje vozila",
    description: "Profesionalno GPS praćenje vozila u realnom vremenu.",
    url: "https://gpspracenje.rs",
  },
};

const themeScript = `
(function() {
  var key = 'gpspracenje-theme';
  try {
    var stored = localStorage.getItem(key);
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = stored === 'dark' || (stored !== 'light' && (prefersDark || true));
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}>
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
