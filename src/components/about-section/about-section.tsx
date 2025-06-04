import { houseColours } from "../../data/house-style";
import IngeniousIcon from "../ui/icon";
import SquiggleDivider from "../ui/squiggle-divider";
import styles from "./about-section.module.css";
import ContactSection from "../contact-section/contact-section";
import { HashLink as Link } from "react-router-hash-link";
import MeetTheTeam from "./meet-the-team";

export default function AboutSection() {
  return (
    <>
      <section className={styles["about-section"]}>
        <div id="about" className={styles["about-hero"]}>
          <h2>
            <span className="slim-heading">About</span>{" "}
            <span className="heavy-heading">Us</span>
          </h2>
          <img
            src="/assets/hero-books/stack-of-books.jpg"
            alt="stack of vibrant books"
          />
        </div>
      </section>
      <section className={styles["about-section"]}>
        <div className={styles["about-info"]}>
          <p className={styles["our-belief"]}>
            We believe that independent publishers are the spirit and soul of
            the book industry — and we want to keep it that way.
          </p>
          <p className={styles["you-are"]}>
            You’re the paradigm-shifters, the risk-takers, the megaphones for
            marginalised voices.
          </p>
          <p className={styles["you-are"]}>
            You’re the Davids vs the “Big Five” Goliaths.
          </p>
          <div className={styles["ingenious-icon"]}>
            <IngeniousIcon />
          </div>
          <p className={styles["about-the-team"]}>
            Our experienced team have learned from the best as in-house staff
            and freelancers for well-known publishers such as Faber & Faber,
            Hachette and Penguin/Random House, but our love of indie presses has
            led to a vital mission:
          </p>
          <p className={styles["about-the-team"]}>
            Celebrating and serving independent publishers through expert
            assistance in pushing literary boundaries, sustaining financial
            success and preparing confidently for the seismic shifts ahead.
          </p>
          <p className={styles["about-the-team"]}>
            We created Ingenious for your publishing house, your authors, and
            you. Our maxim is beautiful books, happy authors and peace of mind —
            need we say more?
          </p>
          <p className={styles["call-to-action"]}>
            If you want to experience the serenity and support that comes with
            hiring a team of publishing experts to help your independent press
            to thrive, book a meeting with us today!
          </p>
          <Link to="#contact">
            <button>Book a Meeting</button>
          </Link>
        </div>
        <SquiggleDivider
          topColour={houseColours["--l-cream"]}
          bottomColour={houseColours["--white"]}
          className={styles["about-squiggle"]}
        />
        <div className={styles["partners"]}>
          <h3>Our team have previously collaborated with</h3>
          <img
            src="/assets/partner-logos/partner-logos.jpg"
            alt="A collection of company logos for satisfied clients of ours to include Faber & Faber, Penguin Random House, Hachette Book Group, The FA, Museum of London, and The Open University."
          />
        </div>
        <SquiggleDivider
          topColour={houseColours["--white"]}
          bottomColour={houseColours["--l-cream"]}
          className={styles["about-squiggle"]}
        />
      </section>
      <MeetTheTeam />
      <ContactSection />
    </>
  );
}
