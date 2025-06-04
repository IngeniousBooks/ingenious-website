import styles from "./meet-the-team.module.css";
import { teamProfiles } from "../../data/team-member-content";
import TeamMemberProfile from "./team-member-profile";

export default function MeetTheTeam() {
  return (
    <section className={styles["meet-the-team-section"]}>
      <h2 id="meet-the-team" className={styles["meet-the-team-heading"]}>
        Meet the Team
      </h2>
      <ul className={styles["team-list"]}>
        {teamProfiles.map(
          ({ personName, jobTitle, bioText, imageLink }, index) => {
            return (
              <TeamMemberProfile
                personName={personName}
                jobTitle={jobTitle}
                bioText={bioText}
                imageLink={imageLink}
                isOdd={index % 2 === 1}
                key={personName}
              />
            );
          }
        )}
      </ul>
    </section>
  );
}
