import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import TrustStrip from "@/components/site/TrustStrip";
import Services from "@/components/site/Services";
import CallBanner from "@/components/site/CallBanner";
import ServiceAreas from "@/components/site/ServiceAreas";
import About from "@/components/site/About";
import Gallery from "@/components/site/Gallery";
import Reviews from "@/components/site/Reviews";
import ContactForm from "@/components/site/ContactForm";
import Footer from "@/components/site/Footer";
import FloatingPromo from "@/components/site/FloatingPromo";

export default function Home() {
  return (
    <div className="bg-white text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <CallBanner />
        <About />
        <Gallery />
        <Reviews />
        <Services />
        <ServiceAreas />
        <ContactForm />
      </main>
      <Footer />
      <FloatingPromo
        to="/seal-team-insulation"
        eyebrow="Sister Company"
        title="Spray Foam Insulation"
        storageKey="palmer_promo_seal_dismissed"
        theme="dark"
        testId="promo-to-seal"
        logoSrc="https://customer-assets.emergentagent.com/job_palmer-hvac-pro/artifacts/2u0we42h_CFCDB172-0D39-4E01-9DD4-8A83B8282693.PNG"
      />
    </div>
  );
}
