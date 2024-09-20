import styles from "./footer.module.css";
import { houseColours } from "../../data/house-style";
import { HashLink as Link } from "react-router-hash-link";
import SquigglyLine from "../ui/squiggly-line";
import UpArrow from "../ui/up-arrow";
export default function Footer() {
  return (
    <footer className={styles["footer-section"]}>
      {
        <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <UpArrow />
          <h3>back to top</h3>
        </div>
      }
      <address>The Kiln, 2 Copenhagen St, Worcester WR1 2HB</address>
      <div className={styles["footer-squiggle"]}>
        <SquigglyLine colour={houseColours["--brand-orange"]} />
      </div>
      <p className={styles["copyright"]}>&copy; Copyright 2024 Ingenious</p>
      <Link
        className={styles["privacy-link"]}
        target="_blank"
        to="/assets/ingenious-privacy-notice-professional-services.pdf"
      >
        privacy policy
      </Link>
    </footer>
  );
}
