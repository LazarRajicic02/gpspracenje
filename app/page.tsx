import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyUs from "./components/WhyUs";
import WhyChooseCyberTracking from "./components/WhyChooseCyberTracking";
import AppShowcase from "./components/AppShowcase";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Order from "./components/Order";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhyUs />
      <WhyChooseCyberTracking />
      <AppShowcase />
      <Reviews />
      <FAQ />
      <Order />
      <Contact />
    </>
  );
}
