export interface CollaborationContent {
  quote: string;
  clientName: string;
  clientTitle: string[];
  imageLink: string;
  logoLink: string;
}

export const collaborationContent: { [key: string]: CollaborationContent } = {
  toby: {
    quote:
      "“For projects requiring commitment and high quality in printed and digital publishing, Ingenious comes highly recommended. Their dedication to each project is evident in every book they touch.”",
    clientName: "Toby Trotman",
    clientTitle: ["Publisher, Vision Sports Publishing"],
    imageLink: "/assets/partner-portraits/toby-trotman-portrait.png",
    logoLink: "/assets/partner-logos/VSP-logo.svg",
  },
  bryna: {
    quote:
      "“If you’re an independent author, small publisher or book coach, or looking for support with producing books for clients as a hybrid publisher, you definitely want to consider Paul and his team.”",
    clientName: "Bryna Haynes",
    clientTitle: ["CEO and Founder, World Changers Media"],
    imageLink: "/assets/partner-portraits/bryna-haynes-portrait.png",
    logoLink: "/assets/partner-logos/world-changers-media-logo.svg",
  },
  mark: {
    quote:
      "“Throughout the whole editorial and design process, I felt their enthusiasm and support for creating the best possible version of my book.”",
    clientName: "Mark Angelo Harrison",
    clientTitle: [
      "Author of __A Darker Electricity__",
      "Published by Velocity Press",
    ],
    imageLink: "/assets/partner-portraits/mark-angelo-harrison-portrait.png",
    logoLink: "/assets/partner-logos/Velocity_Press_Logo.svg",
  },
};
