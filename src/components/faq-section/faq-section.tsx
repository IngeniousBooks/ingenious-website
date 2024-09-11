import styles from "./faq-section.module.css";
import FAQDropDown from "./faq-dropdown";

export default function FAQSection() {
  return (
    <section className={styles["faq-section"]}>
      <FAQDropDown />
    </section>
  );
}
