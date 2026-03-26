import Hero from "./components/Hero";
import Features from "./components/Features";
import AppShowcase from "./components/AppShowcase";
import WhyUs from "./components/WhyUs";
import WhyChooseCyberTracking from "./components/WhyChooseCyberTracking";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Order from "./components/Order";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <AppShowcase />
      <WhyUs />
      <WhyChooseCyberTracking />
      <Reviews />
      <FAQ />
      <Order />
    </main>
  );
}
