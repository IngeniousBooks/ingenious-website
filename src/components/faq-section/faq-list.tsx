import { FAQContent } from "../../data/faq-content";
import styles from "./faq-section.module.css";
import FAQItem from "./faq-item";

export default function FAQList({
  items,
  isOpen,
}: {
  items: FAQContent[];
  isOpen: boolean;
}) {
  return (
    <ul className={styles[`faq-list${isOpen ? "--open" : "--closed"}`]}>
      {items.map(({ question, response }, index) => (
        <FAQItem
          question={question}
          response={response}
          currentItemCount={index + 1}
          totalItems={items.length}
          key={question}
        />
      ))}
    </ul>
  );
}
