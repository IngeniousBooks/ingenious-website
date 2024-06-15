import { HashLink as Link } from "react-router-hash-link";
import Logo from "../ui/logo";
import SquigglyLine from "./squiggly-line";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <Logo colour={"white"} />
      <h3>Beautiful Books, Happy Authors, Peace of Mind</h3>
      <SquigglyLine />
      <p>
        Exceptional editorial, design and book management services for
        independent publishers
      </p>
      <Link smooth to="/#contact">
        <button className="hero-button">book a meeting</button>
      </Link>
    </section>
  );
}
