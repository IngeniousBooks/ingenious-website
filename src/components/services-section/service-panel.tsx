import { ServicesContent } from "../../data/services-content";
import IngeniousIcon from "../ui/icon";
import styles from "./services-section.module.css";

export default function ServicePanel({
  iconURL,
  serviceName,
  serviceDescription,
  summaryList,
}: Omit<ServicesContent, "pricingBreakdown">) {
  return (
    <article className={styles["service-panel"]}>
      {iconURL ? (
        <img src={iconURL} alt={serviceName + " icon"} />
      ) : (
        <IngeniousIcon sizeMultiplier={1} />
      )}
      <h3>{serviceName}</h3>
      <p>{serviceDescription}</p>
      <ul>
        {summaryList.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </article>
  );
}
