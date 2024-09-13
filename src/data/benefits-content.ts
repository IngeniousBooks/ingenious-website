export interface BenefitContent {
  iconURL: string;
  benefitName: string;
  benefitDescription: string;
}

export const benefitsContent: Array<BenefitContent> = [
  {
    iconURL: "/assets/icons/ingenious-book-icon.svg",
    benefitName: "Beautiful Books",
    benefitDescription:
      "Create visually appealing and error-free books with our experienceds and imaginative team, so you can build passionate reading audiences, impress the judges, and boost sales.",
  },
  {
    iconURL: "/assets/icons/ingenious-happy-icon.svg",
    benefitName: "Happy Authors",
    benefitDescription:
      "Our signature personal service ensures that your authors feel loved and supported during the publishing process, allowing them to focus on writing and promoting their books with joy.",
  },
  {
    iconURL: "/assets/icons/ingenious-roadmap-icon.svg",
    benefitName: "Peace of Mind",
    benefitDescription:
      "You'll get a tailored roadmap, dedicated book manager and regular updates, so you can feel confident and in control of your busy publishing schedule.",
  },
];
