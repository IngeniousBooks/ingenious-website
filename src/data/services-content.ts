export interface ServicesContent {
  iconURL: string;
  serviceName: string;
  serviceDescription: string;
  price: string;
  summaryList: string[];
  pricingBreakdown: PricingBreakdown[];
}

export interface PricingBreakdown {
  solutionName: string;
  solutionPrice: string;
}

export const servicesContent: Array<ServicesContent> = [
  {
    iconURL: "/assets/icons/ingenious-editorial-icon.svg",
    serviceName: "Editorial",
    serviceDescription:
      "We work meticulously to ensure your text is error-free, aligns with the author's vision, and resonates with your reading audience, bringing clarity, coherence, and polish to your publications.",
    price: "£600 ($780)",
    summaryList: ["Line editing", "Copy-editing", "Proofreading", "Indexing"],
    pricingBreakdown: [
      { solutionName: "Editing", solutionPrice: "£18 per 1,000 words" },
      { solutionName: "Proofreading", solutionPrice: "£12 per 1,000 words" },
      { solutionName: "Indexing", solutionPrice: "£10 per 1,000 words" },
    ],
  },
  {
    iconURL: "/assets/icons/ingenious-design-icon.svg",
    serviceName: "Design",
    serviceDescription:
      "At the heart of our design studio lies a fusion of creativity and deep publishing insight, and we immerse ourselves in the narrative to elevate the visual appeal of your books.",
    price: "£500 ($650)",
    summaryList: [
      "Creative direction",
      "Cover design",
      "Page layout",
      "Marketing materials",
    ],
    pricingBreakdown: [
      { solutionName: "Covers", solutionPrice: "£250" },
      { solutionName: "Page design", solutionPrice: "£100" },
      { solutionName: "Typesetting", solutionPrice: "£1 per page" },
    ],
  },
  {
    iconURL: "/assets/icons/ingenious-project-management-icon.svg",
    serviceName: "Book Management",
    serviceDescription:
      "Our experienced team simplifies the complex to ensure every aspect of the publishing process flows seamlessly.",
    price: "£250 ($350)",
    summaryList: [
      "Full project management",
      "Production management",
      "Author care",
    ],
    pricingBreakdown: [
      { solutionName: "Publishing Consultancy", solutionPrice: "£80 per hour" },
      { solutionName: "Full book service", solutionPrice: "£200" },
      { solutionName: "Production management", solutionPrice: "£150" },
    ],
  },
];
