import { HashLink as Link } from "react-router-hash-link";

export default function NavLinks() {
  return (
    <ul className="nav-list">
      <Link to="/about">
        <li>about</li>
      </Link>
      <Link smooth to="/#services">
        <li>services</li>
      </Link>
      <Link smooth to="/#pricing">
        <li>pricing</li>
      </Link>
    </ul>
  );
}
