import { FeatureTestimonialContent } from "../../data/feature-testimonial-content";
import { houseColours } from "../../data/house-style";
import ParsedTextContent from "../../utils/parsed-text-content";
import IngeniousIcon from "../ui/icon";
import SquiggleDivider from "../ui/squiggle-divider";
import YoutubeEmbed from "../ui/youtube-embed";
import styles from "./feature-testimonial.module.css";

export default function FeatureTestimonial({
  props: {
    title,
    intro,
    fullName,
    bodyText,
    list,
    multimediaProperties,
    logoIconLink,
  },
}: {
  props: FeatureTestimonialContent;
}) {
  return (
    <section className={styles["feature-testimonial-section"]}>
      <h2>{title}</h2>
      <SquiggleDivider
        topColour={houseColours["--brand-orange"]}
        bottomColour={houseColours["--l-cream"]}
        className={styles["feature-squiggle"]}
      />
      <h3>
        <span className="brand heavy-heading">{fullName}</span> {intro}
      </h3>
      <div className={styles["feature-testimonial"]}>
        <div className={styles["feature-testimonial__text"]}>
          <ParsedTextContent
            textContent={bodyText}
            className={styles["feature-testimonial__text__body"]}
          />
        </div>
        <div className={styles["feature-testimonial-achievements"]}>
          <p className={styles["feature-testimonial__list-intro"]}>
            {list.intro}
          </p>
          <ul className={styles["feature-testimonial__text__list"]}>
            {list.items.map((item) => (
              <li key={item}>
                <ParsedTextContent textContent={item} className="" />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["feature-testimonial__media"]}>
          <YoutubeEmbed
            embedId={multimediaProperties.embedId}
            width={multimediaProperties.width}
            height={multimediaProperties.height}
            className={styles["feature-testimonial__media__video"]}
          />
          <img
            src={logoIconLink}
            className={styles["feature-testimonial__partner-logo"]}
          />
        </div>
      </div>
      <div className={styles["feature-testimonial-icon"]}>
        <IngeniousIcon sizeMultiplier={1.8} />
      </div>
    </section>
  );
}
