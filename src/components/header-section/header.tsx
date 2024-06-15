import { useState, useEffect } from "react";
import Logo from "../ui/logo";
import NavLinks from "./nav-links";
import VerticalLine from "./vertical-line";
import { Link } from "react-router-dom";
export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) {
      setShow(false);
    } else {
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
    <header className={`header ${show ? "" : "hidden"}`}>
      <Link to="/">{<Logo colour={"black"} />}</Link>
      <VerticalLine />
      <NavLinks />
      <button className="header-button">book a meeting</button>
    </header>
  );
}
