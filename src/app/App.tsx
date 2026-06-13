import "../styles/fonts.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { PopularServices } from "./components/PopularServices";
import { NoDrugsBlock } from "./components/NoDrugsBlock";
import { WhyUsSection } from "./components/WhyUsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { AllServicesSection } from "./components/AllServicesSection";
import { LicensesSection } from "./components/LicensesSection";
import { ContactsSection } from "./components/ContactsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PopularServices />
        <NoDrugsBlock />
        <WhyUsSection />
        <TestimonialsSection />
        <AllServicesSection />
        <LicensesSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}
