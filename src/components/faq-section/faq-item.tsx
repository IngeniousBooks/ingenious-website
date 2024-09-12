import styles from "./faq-section.module.css";
import { FAQContent } from "../../data/faq-content";
import SquigglyLine from "../ui/squiggly-line";
import { houseColours } from "../../data/house-style";

type FAQListItem = FAQContent & {
  currentItemCount: number;
  totalItems: number;
};

export default function FAQItem({
  question,
  response,
  currentItemCount,
  totalItems,
}: FAQListItem) {
  return (
    <li className={styles["faq-list-item"]}>
      <h3 className={styles["faq-question"]}>{question}</h3>
      <div className={styles["faq-question-response"]}>
        {response.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {currentItemCount < totalItems && (
        <SquigglyLine colour={houseColours["--brand-orange"]} />
      )}
    </li>
  );
}
