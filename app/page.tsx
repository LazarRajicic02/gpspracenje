import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyUs from "./components/WhyUs";
import AppShowcase from "./components/AppShowcase";
import FAQ from "./components/FAQ";
import Order from "./components/Order";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhyUs />
      <AppShowcase />
      <FAQ />
      <Order />
      <Contact />
    </>
  );
}
