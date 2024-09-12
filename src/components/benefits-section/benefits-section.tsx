import { benefitsContent } from "../../data/benefits-content";
import BenefitPanel from "./benefit-panel";
import styles from "./benefits-section.module.css";

export default function BenefitsSection() {
  return (
    <section className={styles["benefits-section"]}>
      <h2>The Benefits of Working With Us</h2>
      <div className={styles["benefits-wrapper"]}>
        {benefitsContent.map(({ iconURL, benefitName, benefitDescription }) => (
          <BenefitPanel
            iconURL={iconURL}
            benefitName={benefitName}
            benefitDescription={benefitDescription}
            key={benefitName}
          />
        ))}
      </div>
    </section>
  );
}
