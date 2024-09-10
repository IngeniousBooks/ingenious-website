import { FeatureTestimonialContent } from "../../data/feature-testimonial-content";
import ParsedTextContent from "../../utils/parsed-text-content";
import IngeniousIcon from "../ui/icon";
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
      <div className={styles["feature-testimonial-title"]}>
        <h2>{title}</h2>
      </div>
      <h3>
        <span className="brand heavy-heading">{fullName}</span> {intro}
      </h3>
      <div className={styles["feature-testimonial"]}>
        <div className={styles["feature-testimonial__text"]}>
          <ParsedTextContent
            textContent={bodyText}
            className={styles["feature-testimonial__text__body"]}
          />
          <p className={styles["feature-testimonial__list-intro"]}>
            {list.intro}
          </p>
          <ul className={styles["feature-testimonial__text__list"]}>
            {list.items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles["feature-testimonial__media"]}>
          <YoutubeEmbed
            embedId={multimediaProperties.embedId}
            width={multimediaProperties.width}
            height={multimediaProperties.height}
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
