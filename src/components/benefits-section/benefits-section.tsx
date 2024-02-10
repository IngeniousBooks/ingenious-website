import BenefitPanel from "./benefit-panel";
import benefitsContent from "../../data/benefits-content";
import IngeniousIcon from "../ui/icon";

export default function BenefitsSection() {
  return (
    <section className="benefits-section">
      <h2 id="services">What we can offer you</h2>
      {benefitsContent.map((benefit, index) => {
        return (
          <BenefitPanel benefit={benefit} index={index} key={benefit.heading} />
        );
      })}
      <div className="end-section-icon">
        <IngeniousIcon />
      </div>
    </section>
  );
}
