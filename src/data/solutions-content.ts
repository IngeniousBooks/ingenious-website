export interface SolutionContent {
  heading: string;
  bodyText: string;
  solutionText: string;
  image: { source: string; altText: string };
}

export const solutionsContent: Array<SolutionContent> = [
  {
    heading:
      "Are you ready to free up resources, publish with confidence and navigate the future?",
    bodyText: `We believe that independent publishers are the **spirit and soul of the book industry**.
    \r
    But they often work with **limited resources and tight budgets**. They either **do ALL the work themselves** – commissioning, editorial, design, marketing, and coordinating the publishing schedule, among many other tasks – **or hire and manage multiple freelance contractors** of varying cost and reliability.
    \r
    The truth is, **book publishing is a complex process** that requires specialist knowledge and skills. And with the pressure of financial risk in a rapidly changing industry, **it's a difficult decision to hire outside help**.
    \r
    That's why we created Ingenious.`,
    solutionText:
      "You should have cost-effective, expert support to publish and promote books with confidence and plan effectively for the future.",
    image: {
      source: "/assets/solutions-images/solutions-desk.jpg",
      altText: "post-it notes on desk",
    },
  },
  {
    heading: "We help independent book publishers to thrive.",
    bodyText: `We understand that book publishing is a **unique and passionate industry**, and indie publishers not only focus on selling books but also on **changing existing paradigms** and **enchanting reading audiences** with impactful literature.
    \r
    We know this because our in-house team have **decades of combined experience** and have collaborated on **hundreds of books of every genre and category**.
    \r
    It's the reason we created Ingenious.
    \r
    Every day we share our expertise and love for literature by building long-term relationships with publishers, allowing them to **enhance resources, boost book sales, and remain nimble in an everchanging marketplace**.`,
    solutionText: "And we can do the same for you.",
    image: {
      source: "/assets/solutions-images/solutions-page-spread.jpg",
      altText:
        "stylised two-page spread to introduce pork & beef ramen cookbook recipe",
    },
  },
];
