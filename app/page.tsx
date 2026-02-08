import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Steps } from "@/components/landing/steps";
import { Services } from "@/components/landing/services";
import { About } from "@/components/landing/about";
import { Team } from "@/components/landing/team";
import { Locations } from "@/components/landing/locations";
import { RunguMassage } from "@/components/landing/rungu-massage";
import { Gallery } from "@/components/landing/gallery";
import { ChemicalPeels } from "@/components/landing/chemical-peels";
import { Menu } from "@/components/landing/menu";
import { WhyUs } from "@/components/landing/why-us";
import { Testimonials } from "@/components/landing/testimonials";
import { Footer } from "@/components/landing/footer";
import { CtaSection } from "@/components/landing/cta-section";
import { ScrollVideo } from "@/components/landing/scroll-video";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light font-display">
      <Header />
      <Hero />
      <ScrollVideo />
      <Services />
      <About />
      <Team />
      <Locations />
      <Gallery />
      <Menu />
      <Testimonials />
      <CtaSection />
      <Steps />
      <Footer />
    </main>
  );
}