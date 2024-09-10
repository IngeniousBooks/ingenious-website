import { servicesContent } from "../../data/services-content";
import ServicePanel from "./service-panel";

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      {servicesContent.map(({ iconURL, serviceName, serviceDescription }) => (
        <ServicePanel
          iconURL={iconURL}
          serviceName={serviceName}
          serviceDescription={serviceDescription}
        />
      ))}
    </section>
  );
}
