import styles from "./faq-section.module.css";
import { faqContent } from "../../data/faq-content";
import ExpandArrow from "../ui/expand-arrow";
import { useRef, useState } from "react";
import FAQList from "./faq-list";

export default function FAQDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);

  function handleClick(isOpen: boolean) {
    setIsOpen(!isOpen);
    if (isOpen && headerRef.current) {
      headerRef.current.scrollIntoView({
        behavior: "instant",
        block: "center",
      });
    }
  }

  return (
    <div className={styles["faq-dropdown-container"]}>
      <div
        className={styles["faq-container-header"]}
        onClick={() => handleClick(isOpen)}
      >
        <h2 ref={headerRef}>FAQs</h2>
      </div>
      <FAQList isOpen={isOpen} items={faqContent} />
      <div className={styles["faq-container-footer"]}>
        <ExpandArrow handleClick={() => handleClick(isOpen)} isOpen={isOpen} />
      </div>
    </div>
  );
}
