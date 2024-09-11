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
    const currentScroll = window.scrollY;
    const SHOW_THRESHOLD = 40;
    if (currentScroll > lastScrollY && window.scrollY > 70) {
      setShow(false);
    } else if (
      (currentScroll < lastScrollY &&
        currentScroll < lastScrollY - SHOW_THRESHOLD) ||
      currentScroll < 5
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
    <header className={`${styles["header"]} ${show ? "" : "hidden"}`}>
      <Link to="/">{<Logo colour={"black"} sizeMultiplier={1} />}</Link>
      <VerticalLine />
      <NavLinks />
      <section>
        <Link smooth to="/#contact">
          <button className="header-button">book a meeting</button>
        </Link>
        <p className="brand">team@ingenious-books.com</p>
        <p className="brand">07822 014130</p>
      </section>
    </header>
  );
}
