import IngeniousIcon from "../ui/icon";
import { BenefitContent } from "../../data/benefits-content[old]";

export default function OldBenefitPanel({
  benefit,
  index,
}: {
  benefit: BenefitContent;
  index: number;
}) {
  return (
    <article className="benefit-panel">
      <div className="benefit-panel-text-content">
        <h3>{benefit.heading}</h3>
        <p>{benefit.bodyText}</p>
        <ul>
          {benefit.list.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <img
        className="benefit-panel-img"
        src={benefit.image.src}
        alt={benefit.image.alt}
      />
      <div className={`benefit-panel-icon-${index % 2 === 0 ? "odd" : "even"}`}>
        <IngeniousIcon />
      </div>
    </article>
  );
}
