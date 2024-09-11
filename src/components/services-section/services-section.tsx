import { servicesContent } from "../../data/services-content";
import ServicePanel from "./service-panel";
import styles from "./services-section.module.css";

export default function ServicesSection() {
  return (
    <section id="services" className={styles["services-section"]}>
      <h2>Our Services</h2>
      <div className={styles["services-wrapper"]}>
        {servicesContent.map(({ iconURL, serviceName, serviceDescription }) => (
          <ServicePanel
            iconURL={iconURL}
            serviceName={serviceName}
            serviceDescription={serviceDescription}
          />
        ))}
      </div>
    </section>
  );
}
