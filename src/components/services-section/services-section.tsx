import { servicesContent } from "../../data/services-content";
import { HashLink as Link } from "react-router-hash-link";
import ServicePanel from "./service-panel";
import styles from "./services-section.module.css";

export default function ServicesSection() {
  return (
    <section id="services" className={styles["services-section"]}>
      <h2>Our Services</h2>
      <div className={styles["services-wrapper"]}>
        {servicesContent.map(
          ({ iconURL, serviceName, serviceDescription, summaryList }) => (
            <ServicePanel
              iconURL={iconURL}
              serviceName={serviceName}
              serviceDescription={serviceDescription}
              price={"null"}
              summaryList={summaryList}
              key={serviceName}
            />
          )
        )}
      </div>
      <Link smooth to="#contact">
        <button>book a meeting</button>
      </Link>
    </section>
  );
}
