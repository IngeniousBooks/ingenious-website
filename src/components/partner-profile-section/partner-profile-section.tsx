import { partnerProfiles } from "../../data/partner-profile-content";
import ParsedTextContent from "../../utils/parsed-text-content";

const {
  worldChangersMedia: { headline, intro, bodyText, achievements },
} = partnerProfiles;

export default function PartnerProfileSection() {
  return (
    <section className="world-changers-section">
      <h2>{headline}</h2>
      <p className="partner-profile-intro">{intro}</p>
      <ParsedTextContent
        className="partner-profile__body-text"
        textContent={bodyText}
      />
      <ul>
        {achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </section>
  );
}
