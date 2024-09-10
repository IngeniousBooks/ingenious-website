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
        <section className={styles["solution-panel__text-content"]}>
          <h3 className={styles["solution-panel__text-content__heading"]}>
            {heading}
          </h3>
          <ParsedTextContent
            textContent={bodyText}
            className={styles["solution-panel__text-content__body"]}
          />
          <h3 className={"brand " + styles["solutions-section__solution-text"]}>
            {solutionText}
          </h3>
        </section>
        <img
          className={styles["solution-panel__image"]}
          src={image.source}
          alt={image.altText}
        />
        <div className={styles[`solution-panel__icon--${order}`]}>
          <IngeniousIcon sizeMultiplier={1.5} />
        </div>
      </article>
    </>
  );
}
