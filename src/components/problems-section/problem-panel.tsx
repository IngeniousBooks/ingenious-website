import { ProblemContent } from "../../data/problems-content";
import ParsedTextContent from "../../utils/parsed-text-content";
import IngeniousIcon from "../ui/icon";

export default function ProblemPanel({
  heading,
  bodyText,
  solutionText,
  image,
  index,
}: ProblemContent & { index: number }) {
  return (
    <article className="problem-panel">
      <section className="problem-panel__text-content">
        <h3 className="problem-panel__text-content__heading">{heading}</h3>
        <ParsedTextContent
          textContent={bodyText}
          className={"problem-panel__text-content__body"}
        />
      </section>
      <p className="problem-panel__solution">{solutionText}</p>
      <img
        className="problem-panel__image"
        src={image.source}
        alt={image.altText}
      />
      <div
        className={`problem-panel__icon--${index % 2 === 0 ? "odd" : "even"}`}
      >
        <IngeniousIcon />
      </div>
    </article>
  );
}
