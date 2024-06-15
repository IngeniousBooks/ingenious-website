import HeroSection from "../components/hero-section/hero-section";
import TestimonialsCarousel from "../components/testimonials-section/testimonials-carousel";
import PartnersSection from "../components/partners-section/partners-section";
import BenefitsSection from "../components/benefits-section/benefits-section";
import ContactSection from "../components/contact-section/contact-section";
import ProblemsSection from "../components/problems-section/problems-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <TestimonialsCarousel />
      <PartnersSection />
      <BenefitsSection />
      <ContactSection />
    </>
  );
}
