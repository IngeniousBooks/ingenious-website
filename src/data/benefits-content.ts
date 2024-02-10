export type BenefitContent = {
  heading: string;
  bodyText: string;
  list: string[];
  image: { src: string; alt: string };
};

const benefitsContent: Array<BenefitContent> = [
  {
    heading: "Editorial",
    bodyText:
      "Ensure flawless accuracy and readability by engaging our award-winning editors to guide and polish your text.",
    list: [
      "Editorial guidance",
      "Structural, developmental, and copy editing",
      "Proofreading",
      "Indexing",
    ],
    image: {
      src: "/assets/benefit-editorial.png",
      alt: "Text flow for titled work 'The Stag', exhibiting a range of text types.",
    },
  },
  {
    heading: "Design",
    bodyText:
      "Crafting a visual journey for your readers, our design services ensure every element complements your narrative.",
    list: [
      "Expert art direction",
      "Striking cover designs",
      "Innovative page layouts",
      "Perfect typography pairings",
      "Bespoke graphics and illustrations",
      "Detailed image research",
      "Copyright clearance",
    ],
    image: {
      src: "/assets/benefit-design.png",
      alt: "Recipe book open to reveal a 2-page spread design for pork & beef ramen recipe. Two thirds of the spread is occupied by a stylised outline illustration of chopsticks lifting noodles from a ramen dish",
    },
  },
  {
    heading: "Project Management",
    bodyText:
      "From conception to completion, our project managers ensure every step is meticulously planned and executed.",
    list: [
      "Projects of all scales and complexities",
      "Author-centric approach",
      "Clear and timely communication",
      "Streamlined workflows",
      "Flexible and tailored scheduling",
    ],
    image: {
      src: "/assets/benefit-project-management.png",
      alt: "A laptop, the hands of its owner visibly at the keyboard. On screen is a kanban project being capably managed.",
    },
  },
];

export default benefitsContent;
