import { benefitsContent } from "../../data/benefits-content";
import BenefitPanel from "./benefit-panel";

export default function BenefitsSection() {
  return (
    <section className="benefits-section">
      <h2>The Benefits of Working With Us</h2>
      {benefitsContent.map(({ iconURL, benefitName, benefitDescription }) => (
        <BenefitPanel
          iconURL={iconURL}
          benefitName={benefitName}
          benefitDescription={benefitDescription}
        />
      ))}
    </section>
  );
}
