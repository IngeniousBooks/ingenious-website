export interface FeatureTestimonialContent {
  title: string;
  fullName: string;
  intro: string;
  bodyText: string;
  list: ListProperties;
  multimediaProperties: MultimediaProperties;
  logoIconLink: string;
  logoIconAltText: string;
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
      "is the CEO and Founder of World Changers Media, a US-based independent publisher committed to delivering superior-quality transformational non-fiction by, and for, the next generation of thought leaders.",
    bodyText: `A new publisher with a **busy schedule** — and, in her words, "draconian" standards — Bryna required **cost-effective, reliable, and professional services** for managing the pre-press process.
      \r 
      That’s why she connected with Ingenious, and since 2022, **we’ve collaborated on over twenty-five books**.
      \r
      From raw manuscript to final print-ready and digital files, we provide book management, copy-editing, proofreading, page design, typesetting, and eBook services, allowing Bryna **to reclaim her time to operate in her zone of genius and serve her clients at the highest level**.`,
    list: {
      intro:
        "With our support, World Changers Media continues to go from strength to strength, achieving:",
      items: [
        "An over 70% win rate for authors in major indie book award competitions",
        "__Wall Street Journal__ and __USA Today__ bestselling authors",
        "Sustained publishing success",
      ],
    },
    multimediaProperties: {
      width: 560,
      height: 315,
      embedId: "9Wz0vov5spQ?si=jnzOnQwm6MYjGhzi",
    },
    logoIconLink: "/assets/partner-logos/world-changers-media-logo.svg",
    logoIconAltText: "World Changers Media Logo",
  },
};
