import styles from "./the-ingenious-way-section.module.css";
import { CollaborationContent } from "../../data/collaboration-content";
import ParsedTextContent from "../../utils/parsed-text-content";

type CollaborationPanelProps = CollaborationContent & { isOddPanel: boolean };

export default function CollaborationPanel({
  quote,
  clientName,
  clientTitle,
  imageLink,
  logoLink,
  isOddPanel,
}: CollaborationPanelProps) {
  return (
    <article
      className={styles[`${isOddPanel ? "odd" : "collaboration-panel"}`]}
    >
      <div className={styles["collaboration-text"]}>
        <p className={styles["collaboration-quote"]}>{quote}</p>
        <p className={styles["collaboration-client-name"]}>{clientName}</p>

        {clientTitle.map((ct) => (
          <ParsedTextContent
            key={ct}
            textContent={ct}
            className={styles["collaboration-client-title"]}
          />
        ))}
      </div>
      <div className={styles["collaboration-imagery"]}>
        <img
          className={styles["collaboration-imagery__portrait"]}
          src={imageLink}
          alt={"headshot portrait of " + clientName}
        />
        <img
          className={styles["collaboration-imagery__logo"]}
          src={logoLink}
          alt="company logo"
        />
      </div>
    </article>
  );
}
