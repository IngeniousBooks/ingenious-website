export type NavLink = { href: string; pageName: string };

const NAVIGATION_LINKS: NavLink[] = [
  { href: "/about", pageName: "About" },
  { href: "/books", pageName: "Books" },
  { href: "/services", pageName: "Services" },
  { href: "/contact", pageName: "Contact" },
];

export default NAVIGATION_LINKS;
