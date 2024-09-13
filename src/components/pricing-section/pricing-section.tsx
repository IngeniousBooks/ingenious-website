import styles from "./pricing-section.module.css";
import { servicesContent } from "../../data/services-content";
import PricingPanel from "./pricing-panel";
import SquiggleDivider from "../ui/squiggle-divider";
import { houseColours } from "../../data/house-style";
import { HashLink as Link } from "react-router-hash-link";

export default function PricingSection() {
  return (
    <section id="pricing" className={styles["pricing-section"]}>
      <h2>Pricing</h2>
      <p className={styles["pricing-intro"]}>
        Of course, every project is unique, and prices vary according to the
        combination of time pressure, project complexity and the number of
        services required. Here are estimated costs for a 50K word fiction
        paperback requiring proofreading, page design and typesetting, and our
        signature author care.
      </p>
      <p className={styles["pricing-intro"]}></p>
      <div className={styles["service-pricing-wrapper"]}>
        {servicesContent.map(({ iconURL, serviceName, price }) => (
          <PricingPanel
            iconURL={iconURL}
            serviceName={serviceName}
            price={price}
            key={serviceName}
          />
        ))}
      </div>
      <SquiggleDivider
        topColour={houseColours["--white"]}
        bottomColour={houseColours["--l-cream"]}
        className={styles["pricing-squiggle"]}
      />
      <div className={styles["colin-testimonial"]}>
        <h2>Not Sure If You Have the Budget to Work with Us?</h2>
        <img
          src="/assets/partner-portraits/colin-velocity-press.jpg"
          alt="portrait of Colin Steven, publisher, looking directly into camera with grey Velocity Press logo in the top left corner"
        />
        <p className={styles["colin-quotation"]}>
          “I’ve worked with Ingenious for over three years and fifteen books,
          and have always found them to be cost-effective, reliable and easy to
          work with. They’ve become an extra member of my team, so I can
          concentrate on promoting my books and authors.”
        </p>
        <p className={styles["colin-title"]}>
          Colin Steven, Publisher, Velocity Press
        </p>
        <p className={styles["velocity-press-description"]}>
          A London-based indie book publisher specialising in electronic music
          and club culture non-fiction.
        </p>
        <Link smooth to="#contact">
          <button>book a meeting</button>
        </Link>
      </div>
      <img
        className={styles["ingenious-filter"]}
        src="/assets/divider-images/ingenious-colour-filter.jpg"
        alt="Ingenious logo in white against vibrant background with perceptible eye-catching books"
      />
    </section>
  );
}
