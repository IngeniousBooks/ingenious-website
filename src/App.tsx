import "./App.css";
import HeroSection from "./components/hero-section/hero-section";
import Header from "./components/header-section/header";
import TestimonialsCarousel from "./components/testimonials-section/testimonials-carousel";
import PartnersSection from "./components/partners-section/partners-section";
import BenefitsSection from "./components/benefits-section/benefits-section";
import ContactSection from "./components/contact-section/contact-section";
import Footer from "./components/footer-section/footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TestimonialsCarousel />
      <PartnersSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
