import styles from "./pricing-section.module.css";
import { servicesContent } from "../../data/services-content";
import PricingPanel from "./pricing-panel";
import SquiggleDivider from "../ui/squiggle-divider";
import { houseColours } from "../../data/house-style";

export default function PricingSection() {
  return (
    <section className={styles["pricing-section"]}>
      <h2>Pricing</h2>
      <div className={styles["service-pricing-wrapper"]}>
        {servicesContent.map(({ iconURL, serviceName }) => (
          <PricingPanel
            iconURL={iconURL}
            serviceName={serviceName}
            price={"X,XXX"}
          />
        ))}
      </div>
      <button>find out more</button>
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
        <button>book a meeting</button>
      </div>
    </section>
  );
}
