import styles from "./footer.module.css";
import { houseColours } from "../../data/house-style";
import SquigglyLine from "../ui/squiggly-line";

export default function Footer() {
  return (
    <footer className={styles["footer-section"]}>
      <address>The Kiln, 2 Copenhagen St, Worcester WR1 2HB</address>
      <div className={styles["footer-squiggle"]}>
        <SquigglyLine colour={houseColours["--brand-orange"]} />
      </div>
      <p className={styles["copyright"]}>&copy; Copyright 2024 Ingenious</p>
    </footer>
  );
}
