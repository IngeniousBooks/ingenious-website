import { BenefitContent } from "../../data/benefits-content";
import IngeniousIcon from "../ui/icon";
import styles from "./benefits-section.module.css";

export default function BenefitPanel({
  iconURL,
  benefitName,
  benefitDescription,
}: BenefitContent) {
  return (
    <article className={styles["benefit-panel"]}>
      {iconURL ? (
        <img src={iconURL} alt={benefitName + " icon"} />
      ) : (
        <IngeniousIcon sizeMultiplier={1} />
      )}
      <h3>{benefitName}</h3>
      <p>{benefitDescription}</p>
    </article>
  );
}
