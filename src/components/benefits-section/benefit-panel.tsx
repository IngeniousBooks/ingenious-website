import { BenefitContent } from "../../data/benefits-content";
import IngeniousIcon from "../ui/icon";

export default function BenefitPanel({
  iconURL,
  benefitName,
  benefitDescription,
}: BenefitContent) {
  return (
    <article className="benefit-panel">
      {iconURL ? (
        <img src={iconURL} alt={benefitName + " icon"} />
      ) : (
        <IngeniousIcon />
      )}
      <h3>{benefitName}</h3>
      <p>{benefitDescription}</p>
    </article>
  );
}
