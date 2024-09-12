import { HashLink as Link } from "react-router-hash-link";
import styles from "./header.module.css";

export default function NavLinks() {
  return (
    <ul className={styles["nav-list"]}>
      <Link to="/about">
        <li className={styles["link"]}>about</li>
      </Link>
      <Link smooth to="/#services">
        <li className={styles["link"]}>services</li>
      </Link>
      <Link smooth to="/#pricing">
        <li className={styles["link"]}>pricing</li>
      </Link>
    </ul>
  );
}
