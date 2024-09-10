export interface ServicesContent {
  iconURL: string;
  serviceName: string;
  serviceDescription: string;
}

export const servicesContent: Array<ServicesContent> = [
  {
    iconURL: "public/assets/icons/ingenious-editorial-icon.svg",
    serviceName: "Editorial",
    serviceDescription:
      "We work meticulously to ensure your text is error-free, aligns with the author's vision and resonates with their audience, bringing clarity, coherence, and polish to your publications.",
  },
  {
    iconURL: "public/assets/icons/ingenious-design-icon.svg",
    serviceName: "Design",
    serviceDescription:
      "At the heart of our design studio lies a fusion of creativity and deep publishing insight, and we immerse ourselves in the narrative to elevate the visual appeal of your books.",
  },
  {
    iconURL: "public/assets/icons/ingenious-project-management-icon.svg",
    serviceName: "Book Management",
    serviceDescription:
      "Our experienced team simplifies the complex to ensure every aspect of the publishing process flows seamlessly.",
  },
];
