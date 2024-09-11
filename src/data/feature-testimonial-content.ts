export interface FeatureTestimonialContent {
  title: string;
  fullName: string;
  intro: string;
  bodyText: string;
  list: ListProperties;
  multimediaProperties: MultimediaProperties;
  logoIconLink: string;
}

export interface MultimediaProperties {
  width: number;
  height: number;
  embedId: string;
}

export interface ListProperties {
  intro: string;
  items: string[];
}

export const featureTestimonialContent: {
  [key: string]: FeatureTestimonialContent;
} = {
  bryna: {
    title: "We Help Indie Publishers Win Awards and Launch Bestsellers",
    fullName: "Bryna Haynes",
    intro:
      "is the CEO and Founder of World Changers Media, a US-based independent publisher committed to delivering superior-quality transformational nonfiction by, and for, the next generation of thought leaders.",
    bodyText: `A new publisher with a **busy schedule** — and, in her words, 'draconian' standards — Bryna required **cost-effective, reliable, and professional services** for managing the pre-press process.
      \r 
      That’s why she connected with Ingenious, and since 2022, **we’ve collaborated together on over 25 books**.
      \r
      From raw manuscript to final print-ready and digital files, we provided book management, copyediting, proofreading, page design, typesetting and eBook services, allowing Bryna **to reclaim her time to operate in her zone of genius and serve her clients at the highest level**.`,
    list: {
      intro:
        "With our support, World Changers Media continues to go from strength to strength, achieving:",
      items: [
        "An over 70% win rate for authors in major indie book award competitions",
        "Wall Street Journal and USA Today bestselling authors",
        "Sustained publishing success",
      ],
    },
    multimediaProperties: {
      width: 560,
      height: 315,
      embedId: "9Wz0vov5spQ?si=jnzOnQwm6MYjGhzi",
    },
    logoIconLink: "public/assets/partner-logos/world-changers-media-logo.svg",
  },
};
