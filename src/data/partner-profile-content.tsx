export interface PartnerProfile {
  headline: string;
  intro: JSX.Element;
  bodyText: string;
  achievements: Array<string>;
  multimedia: Array<string>;
}

type PartnerProfiles = {
  [key: string]: PartnerProfile;
};

export const partnerProfiles: PartnerProfiles = {
  worldChangersMedia: {
    headline: "We Help Indie Publishers Win Awards and Launch Bestsellers",
    intro: (
      <p>
        <span className="partner-name">Bryna Haynes</span> is the CEO and
        Founder of World Changers Media, a US-based independent publisher
        committed to delivering superior-quality transformational nonfiction by,
        and for, the next generation of thought leaders.
      </p>
    ),
    bodyText: `A solopreneur with a **demanding schedule and limited resources**, Bryna required **cost-effective, reliable, and professional services** for managing the pre-press process.
      \n
      That's why she connected with Ingenious, and since 2022, **we've collaborated together on over 25 books**.
      \n
      From unedited manuscript to final print-ready and digital files, we provided book management, copyediting, proofreading, page design, typesetting and eBook services, allowing Bryna **to reclaim her time to operate in her zone of genius and navigate a dynamic future**.
      \n
      With our support, World Changers Media continues to go from strength to strength by achieving:
      \n`,
    achievements: [
      "Multiple industry awards",
      "Bestselling authors",
      "Sustained publishing success",
    ],
    multimedia: [],
  },
};
