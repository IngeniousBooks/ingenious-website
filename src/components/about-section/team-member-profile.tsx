import styles from "./meet-the-team.module.css";
import type { TeamMemberProfile } from "../../data/team-member-content";
import SquiggleDivider from "../ui/squiggle-divider";
import { houseColours } from "../../data/house-style";

interface TeamMemberProfileProps extends TeamMemberProfile {
  isOdd: boolean;
}

export default function TeamMemberProfile({
  personName,
  jobTitle,
  imageLink,
  bioText,
  isOdd,
}: TeamMemberProfileProps) {
  return (
    <>
      {isOdd && (
        <SquiggleDivider
          className={styles["squiggle"]}
          topColour={houseColours["--l-cream"]}
          bottomColour={houseColours["--white"]}
        />
      )}
      <li className={styles[`${isOdd ? "odd" : "team-member-profile"}`]}>
        <div className={styles["team-member-basic-info"]}>
          <h3 className={styles["team-member-name"]}>{personName}</h3>
          <p className={styles["team-member-job-title"]}>{jobTitle}</p>
          <img
            src={imageLink}
            alt={personName + " " + jobTitle}
            className={styles["team-member-image"]}
          />
        </div>
        <article className={styles["team-member-bio-text"]}>
          {bioText.map((paragraph) => (
            <p key={paragraph} className={styles["team-member-bio-paragraph"]}>
              {paragraph}
            </p>
          ))}
        </article>
      </li>
      {isOdd && (
        <SquiggleDivider
          className={styles["squiggle"]}
          topColour={houseColours["--white"]}
          bottomColour={houseColours["--l-cream"]}
        />
      )}
    </>
  );
}
