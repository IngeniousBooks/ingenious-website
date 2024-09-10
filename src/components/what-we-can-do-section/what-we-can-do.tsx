import whatWeCanDo from "../../data/what-we-can-do";
import Service from "./service";
import styles from "./what-we-can-do.module.css";

export default function WhatWeCanDoSection() {
  return (
    <section className={styles["what-we-can-do-section"]}>
      <div className={styles["what-we-can-do-title"]}>
        <h2>Here's What We Can Do For You</h2>
      </div>
      <div className={styles["what-we-can-do-text"]}>
        <p className={styles["what-we-can-do-intro"]}>
          From individual services to full book management, our skilled team
          will ensure you meet your deadlines without compromising quality.
        </p>
        <ul className={styles["what-we-can-do-list"]}>
          {whatWeCanDo.map(({ title, text }) => (
            <Service service={title} description={text} />
          ))}
        </ul>
      </div>
    </section>
  );
}
