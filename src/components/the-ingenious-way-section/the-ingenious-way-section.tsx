import CollaborationPanel from "./collaboration-panel";
import TheIngeniousWayPanel from "./the-ingenious-way-panel";
import styles from "./the-ingenious-way-section.module.css";
import { collaborationContent } from "../../data/collaboration-content";
import SquiggleDivider from "../ui/squiggle-divider";
import { houseColours } from "../../data/house-style";

export default function TheIngeniousWaySection() {
  const { toby, bryna, mark } = collaborationContent;

  return (
    <section className={styles["the-ingenious-way-section"]}>
      <h2>The Ingenious Way</h2>
      <h3>An extension of your publishing team</h3>
      <div className={styles["the-ingenious-way-trio-image"]}>
        <img src="/assets/the-ingenious-way/trio-logos.svg" alt="" />
      </div>
      <div className={styles["the-ingenious-way-steps"]}>
        <TheIngeniousWayPanel
          step="Meet"
          stepDescription="We'll speak over Zoom to discuss your requirements and answer all your questions."
        />
        <TheIngeniousWayPanel
          step="Collaborate"
          stepDescription="We'll create a project roadmap, assign a dedicated project manager, and deliver our exceptional services to deadline, so you can rest assured that your book is in safe hands."
        />
        <TheIngeniousWayPanel
          step="Celebrate"
          stepDescription="You'll celebrate publishing success with your author and publishing team!"
        />
      </div>
      <SquiggleDivider
        bottomColour={houseColours["--l-cream"]}
        topColour={houseColours["--white"]}
        className={styles["collaboration-panel-top-squiggle"]}
      />
      <CollaborationPanel
        quote={toby.quote}
        clientName={toby.clientName}
        clientTitle={toby.clientTitle}
        imageLink={toby.imageLink}
        logoLink={toby.logoLink}
        isOddPanel={true}
      />

      <SquiggleDivider
        topColour={houseColours["--l-cream"]}
        bottomColour={houseColours["--white"]}
        className={styles["collaboration-panel-middle-squiggle"]}
      />

      <CollaborationPanel
        quote={bryna.quote}
        clientName={bryna.clientName}
        clientTitle={bryna.clientTitle}
        imageLink={bryna.imageLink}
        logoLink={bryna.logoLink}
        isOddPanel={false}
      />
      <SquiggleDivider
        bottomColour={houseColours["--l-cream"]}
        topColour={houseColours["--white"]}
        className={styles["collaboration-panel-bottom-squiggle"]}
      />
      <CollaborationPanel
        quote={mark.quote}
        clientName={mark.clientName}
        clientTitle={mark.clientTitle}
        imageLink={mark.imageLink}
        logoLink={mark.logoLink}
        isOddPanel={true}
      />
    </section>
  );
}
