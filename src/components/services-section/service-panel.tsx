import { ServicesContent } from "../../data/services-content";
import IngeniousIcon from "../ui/icon";

export default function ServicePanel({
  iconURL,
  serviceName,
  serviceDescription,
}: ServicesContent) {
  return (
    <article className="services-section__service-panel">
      {iconURL ? (
        <img src={iconURL} alt={serviceName + " icon"} />
      ) : (
        <IngeniousIcon />
      )}
      <h3>{serviceName}</h3>
      <p>{serviceDescription}</p>
      <button>find out more</button>
    </article>
  );
}
