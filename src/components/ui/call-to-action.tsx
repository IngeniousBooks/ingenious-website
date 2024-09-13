import { HashLink as Link } from "react-router-hash-link";
export default function CallToAction({ ctaText }: { ctaText: string }) {
  return (
    <section className="call-to-action">
      <h2>{ctaText}</h2>
      <Link smooth to="#contact">
        <button>book a meeting</button>
      </Link>
    </section>
  );
}
