import { HashLink as Link } from "react-router-hash-link";
import Logo from "../ui/logo";
import styles from "./hero-section.module.css";

export default function HeroSection() {
  return (
    <section id="hero" className={styles["hero-section"]}>
      <img
        className={styles["hero-image"]}
        src="/assets/hero-books/hero-books.jpg"
        srcSet="/assets/hero-books/hero-books@0.5x.jpg 500w, /assets/hero-books/hero-books.jpg 1200w"
        alt="a colourful collection of beautiful books"
      />
      <div className={styles["hero-logo"]}>
        <Logo colour={"black"} sizeMultiplier={2} />
      </div>
      <h2>
        <span className="heavy-heading upper brand">Beautiful Books,</span>
        <span className="mid-heading upper brand"> Happy Authors,</span>
        <span className="slim-heading upper brand"> Peace of Mind</span>
      </h2>
      <p>
        Exceptional editorial, design and book management services for
        independent publishers
      </p>
      <Link smooth to="#contact">
        <button className={styles["hero-button"]}>book a meeting</button>
      </Link>
    </section>
  );
}
