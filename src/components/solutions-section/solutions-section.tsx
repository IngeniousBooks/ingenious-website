import { solutionsContent } from "../../data/solutions-content";
import SquiggleDivider from "../ui/squiggle-divider";
import SolutionPanel from "./solution-panel";
import styles from "./solutions-section.module.css";

export default function SolutionsSection() {
  const freeUpResourcesSolution = solutionsContent[0];
  const helpIndependentPublishersSolution = solutionsContent[1];

  return (
    <section className={styles["solutions-section"]}>
      <SolutionPanel
        key={freeUpResourcesSolution.heading}
        heading={freeUpResourcesSolution.heading}
        bodyText={freeUpResourcesSolution.bodyText}
        image={freeUpResourcesSolution.image}
        order="odd"
        solutionText={freeUpResourcesSolution.solutionText}
        backgroundColour="l-cream"
      />
      <SquiggleDivider className={styles["squiggle-divider"]} />
      <SolutionPanel
        key={helpIndependentPublishersSolution.heading}
        heading={helpIndependentPublishersSolution.heading}
        bodyText={helpIndependentPublishersSolution.bodyText}
        image={helpIndependentPublishersSolution.image}
        order="even"
        solutionText={helpIndependentPublishersSolution.solutionText}
        backgroundColour="white"
      />
    </section>
  );
}
