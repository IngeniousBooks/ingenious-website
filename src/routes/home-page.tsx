import HeroSection from "../components/hero-section/hero-section";
import PartnersSection from "../components/partners-section/partners-section";
import ContactSection from "../components/contact-section/contact-section";
import SolutionsSection from "../components/solutions-section/solutions-section";
import ServicesSection from "../components/services-section/services-section";
import BenefitsSection from "../components/benefits-section/benefits-section";
import DividerImage from "../components/ui/divider-image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <ServicesSection />
      <DividerImage
        imageUrl="public/assets/divider-images/books-scattered-angle-with-spines.jpg"
        altText="Eleven vibrant books scattered across a white table, spines visible"
      />
      <BenefitsSection />
      <PartnersSection />
      <ContactSection />
    </>
  );
}
