import { ServicesContent } from "../../data/services-content";
import IngeniousIcon from "../ui/icon";
import styles from "./pricing-section.module.css";

type PricingPanelProps = { price: string } & Pick<
  ServicesContent,
  "iconURL" | "serviceName" | "pricingBreakdown"
>;

export default function PricingPanel({
  iconURL,
  serviceName,
  pricingBreakdown,
}: PricingPanelProps) {
  return (
    <article className={styles["pricing-panel"]}>
      {iconURL ? (
        <img src={iconURL} alt={serviceName + " icon"} />
      ) : (
        <IngeniousIcon sizeMultiplier={1} />
      )}
      <h3 className={styles["service-name"]}>{serviceName}</h3>
      <ul className={styles["pricing-list"]}>
        {pricingBreakdown.map((service) => {
          return (
            <li key={service.solutionName} className={styles["pricing-item"]}>
              <span className={styles["solution"]}>
                <span className={styles["solution-name"]}>
                  {service.solutionName}
                </span>
                <span className={styles["from"]}>{"\tfrom\t"}</span>
                <span className={styles["solution-price"]}>
                  {service.solutionPrice}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
