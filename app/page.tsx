import Hero from "./components/Hero";
import Features from "./components/Features";
import AppShowcase from "./components/AppShowcase";
import WhyUs from "./components/WhyUs";
import WhyChooseCyberTracking from "./components/WhyChooseCyberTracking";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <AppShowcase showDesktopPreview />
      <Features />
      <WhyUs />
      <WhyChooseCyberTracking />
      <Reviews />
      <FAQ />
      <Contact
        sectionId="ponuda"
        heading="Zatražite ponudu i formular"
        description="Popunite formular i kontaktiraćemo vas u najkraćem roku sa ponudom prilagođenom vašim potrebama."
      />
    </main>
  );
}
