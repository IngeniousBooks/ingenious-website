import { ServicesContent } from "../../data/services-content";
import IngeniousIcon from "../ui/icon";
import styles from "./pricing-section.module.css";

type PricingPanelProps = { price: string } & Pick<
  ServicesContent,
  "iconURL" | "serviceName"
>;

export default function PricingPanel({
  iconURL,
  serviceName,
  price,
}: PricingPanelProps) {
  return (
    <article className={styles["pricing-panel"]}>
      {iconURL ? (
        <img src={iconURL} alt={serviceName + " icon"} />
      ) : (
        <IngeniousIcon sizeMultiplier={1} />
      )}
      <h3 className="brand">{serviceName}</h3>
      <p>from</p>
      <p>{price}</p>
    </article>
  );
}
