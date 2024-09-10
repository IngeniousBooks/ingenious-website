import HeroSection from "../components/hero-section/hero-section";
import PartnersSection from "../components/partners-section/partners-section";
import ContactSection from "../components/contact-section/contact-section";
import SolutionsSection from "../components/solutions-section/solutions-section";
import ServicesSection from "../components/services-section/services-section";
import BenefitsSection from "../components/benefits-section/benefits-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <ServicesSection />
      <BenefitsSection />
      <PartnersSection />
      <ContactSection />
    </>
  );
}
