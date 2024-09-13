import styles from "./what-we-can-do.module.css";
export default function Service({
  service,
  description,
}: {
  service: string;
  description: string;
}) {
  return (
    <li>
      <img
        src="/assets/icons/ingenious-tick-icon.svg"
        alt="check or tick icon"
      />
      <h3 className="brand">{service}</h3>
      <p className={styles["service-description"]}>{description}</p>
    </li>
  );
}
