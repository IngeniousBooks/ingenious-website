export interface TeamMemberProfile {
  personName: string;
  jobTitle: string;
  imageLink: string;
  bioText: string[];
}

export const teamProfiles: TeamMemberProfile[] = [
  {
    personName: "Paul Baillie-Lane",
    jobTitle: "Chief Executive Officer",
    imageLink: "/assets/staff/pbl.jpeg",
    bioText: [
      "Hi, I’m Paul, co-founder and CEO of Ingenious. With over 15 years of experience in editorial, design, and book production, I’ve dedicated my career to guiding independent authors and publishers through the complex journey from manuscript to finished book, providing comprehensive publishing support co-ordinating copy-editing, proofreading, page design, typesetting, and eBook services — giving clients confidence to focus on their creative vision, unburdened of the technical details.",

      "I’m passionate about creating beautiful, reader-friendly books and helping authors navigate the often overwhelming pre-press process. Whether you're publishing traditionally, independently, or somewhere in between, expert guidance makes all the difference.",

      "When I'm not deep in discussion on the finer points of typography, design and suchlike, you'll likely find me reading, travelling or enjoying a game of football.",

      "If you're ready to bring your book to life, let's connect.",
    ],
  },
  {
    personName: "Alex Davis",
    jobTitle: "Director of Technology",
    imageLink: "/assets/staff/ad.png",
    bioText: [
      "Hi, I’m Alex, and I look after all things tech at Ingenious.",
      "In addition to crafting brilliant digital experiences for our readers, I'm here to ensure the systems behind the scenes run smoothly, so we can focus on what's important – making great books.",
      "An English major and lifelong bibliophile, I'm convinced the printed book is among humankind's greatest ever inventions; we in publishing are honoured to bear custodianship of this remarkable achievement.",
      "Outside of books and publishing, you’ll find me tinkering with side projects and new tech, out in nature with my family, writing music, or playing Street Fighter.",
    ],
  },
  {
    personName: "James Pople",
    jobTitle: "Creative Director",
    imageLink: "/assets/staff/jp.jpg",
    bioText: [
      "Hi, I’m James, Creative Director at Ingenious. My career in book design started in 2008, cutting my teeth at a small local firm before moving to a large independent publishing house in London, designing and art directing for a wide range of books on the entertainment and reference lists.",
      "I love the variety and creative challenge of my work, as well as the relationships I build with brilliant business owners, agency directors, campaigners, facilitators and strategists along the way.",
      "I'm especially passionate about collaborating with purpose-driven clients — grassroots publishers & global nonprofits — creating work that informs, inspires, and makes a difference.",
      "Outside of publishing I love to hike, travel, sit in a cosy pub with my dog, cook, watch footy, and occasionally do a bit of carpentry.",
    ],
  },
];
