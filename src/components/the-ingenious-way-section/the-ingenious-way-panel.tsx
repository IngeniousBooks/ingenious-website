import styles from "./the-ingenious-way-section.module.css";

export default function TheIngeniousWayPanel({
  step,
  stepDescription,
}: {
  step: string;
  stepDescription: string;
}) {
  return (
    <article className={styles["the-ingenious-way-step-panel"]}>
      <h3>{step}</h3>
      <p>{stepDescription}</p>
    </article>
  );
}
