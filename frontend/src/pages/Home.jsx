import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import TrustStrip from "@/components/site/TrustStrip";
import Services from "@/components/site/Services";
import CallBanner from "@/components/site/CallBanner";
import ServiceAreas from "@/components/site/ServiceAreas";
import About from "@/components/site/About";
import Reviews from "@/components/site/Reviews";
import ContactForm from "@/components/site/ContactForm";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="bg-white text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <CallBanner />
        <ServiceAreas />
        <About />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
