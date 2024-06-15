import { problemsContent } from "../../data/problems-content";
import ProblemPanel from "./problem-panel";

export default function ProblemsSection() {
  return (
    <section className="problems-section">
      <h3>Problems Section</h3>
      {problemsContent.map(
        ({ heading, bodyText, solutionText, image }, index) => (
          <ProblemPanel
            key={heading}
            heading={heading}
            bodyText={bodyText}
            solutionText={solutionText}
            image={image}
            index={index}
          />
        )
      )}
    </section>
  );
}
