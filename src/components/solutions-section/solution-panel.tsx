import { SolutionContent } from "../../data/solutions-content";
import ParsedTextContent from "../../utils/parsed-text-content";
import IngeniousIcon from "../ui/icon";
import styles from "./solutions-section.module.css";

export default function SolutionPanel({
  heading,
  bodyText,
  solutionText,
  image,
  order,
  backgroundColour,
}: SolutionContent & { order: string; backgroundColour: string }) {
  return (
    <>
      <article
        className={`${styles["solution-panel"]} ${styles[order]} ${styles[backgroundColour]}`}
      >
        <h3
          id={styles["intro-heading"]}
          className={styles["solution-panel__text-content__heading"]}
        >
          {heading}
        </h3>
        <div className={styles["image-wrapper"]}>
          <img
            className={styles["solution-panel__image"]}
            src={image.source}
            alt={image.altText}
          />
        </div>
        <section className={styles["solution-panel__text-content"]}>
          <ParsedTextContent
            textContent={bodyText}
            className={styles["solution-panel__text-content__paragraph"]}
          />
        </section>
        <h3
          id={styles["conclusion"]}
          className={"brand " + styles["solutions-section__solution-text"]}
        >
          {solutionText}
        </h3>
        <div className={styles[`solution-panel__icon--${order}`]}>
          <IngeniousIcon sizeMultiplier={1.5} />
        </div>
      </article>
    </>
  );
}
