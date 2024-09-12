import { useState, useEffect } from "react";
import Logo from "../ui/logo";
import NavLinks from "./nav-links";
import VerticalLine from "./vertical-line";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./header.module.css";
export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    const SHOW_THRESHOLD = 30;
    const JUMP_THRESHHOLD = 200;

    const isLargeJump =
      Math.abs(currentScrollY - lastScrollY) > JUMP_THRESHHOLD;

    if (currentScrollY > lastScrollY && window.scrollY > 70) {
      setShow(false);
    } else if (
      (!isLargeJump &&
        currentScrollY < lastScrollY &&
        currentScrollY < lastScrollY - SHOW_THRESHOLD) ||
      currentScrollY < 8
    ) {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      id="header"
      className={`${styles["header"]} ${show ? "" : "hidden"}`}
    >
      <Link smooth to="/">
        <div className={styles["logo-link"]}>
          <Logo colour={"black"} sizeMultiplier={1} />
        </div>
      </Link>
      <VerticalLine />
      <NavLinks />
      <section className={styles["header-contact"]}>
        <Link smooth to="#contact">
          <button className={styles["header-button"]}>book a meeting</button>
        </Link>
        <p className="brand">team@ingenious-books.com</p>
        <p className="brand">07822 014130</p>
      </section>
    </header>
  );
}
