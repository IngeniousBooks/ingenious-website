import HeroSection from "../components/hero-section/hero-section";
import SolutionsSection from "../components/solutions-section/solutions-section";
import ServicesSection from "../components/services-section/services-section";
import BenefitsSection from "../components/benefits-section/benefits-section";
import DividerImage from "../components/ui/divider-image";
import CallToAction from "../components/ui/call-to-action";
import FeatureTestimonial from "../components/feature-testimonial/feature-testimonial";
import { featureTestimonialContent } from "../data/feature-testimonial-content";
import TheIngeniousWaySection from "../components/the-ingenious-way-section/the-ingenious-way-section";
import WhatWeCanDoSection from "../components/what-we-can-do-section/what-we-can-do";
import PricingSection from "../components/pricing-section/pricing-section";
import FAQSection from "../components/faq-section/faq-section";
import ContactSection from "../components/contact-section/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <ServicesSection />
      <DividerImage
        imageUrl="/assets/divider-images/books-scattered-angle-with-spines.jpg"
        altText="Eleven vibrant books scattered across a white table, spines visible"
      />
      <BenefitsSection />
      <FeatureTestimonial props={featureTestimonialContent.bryna} />
      <CallToAction ctaText="Become another publishing success story with Ingenious!" />
      <DividerImage
        imageUrl="/assets/divider-images/books-open-top-down.jpg"
        altText="top-down view of a set of colourful book full-page spreads"
      />
      <TheIngeniousWaySection />
      <WhatWeCanDoSection />
      <DividerImage
        imageUrl="/assets/divider-images/flicking-through-books.jpg"
        altText="Jim and Paul flicking through their books, discussion design philosophy"
      />
      <CallToAction ctaText="Ready to get started?" />
      <PricingSection />
      <DividerImage
        imageUrl="/assets/divider-images/ingenious-colour-filter.jpg"
        altText="Ingenious logo in white against vibrant background with perceptible eye-catching books"
      />
      <FAQSection />
      <ContactSection />
    </>
  );
}
