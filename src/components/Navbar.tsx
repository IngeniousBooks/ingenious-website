import { FC } from "react";
import Link from "next/link";
import { useState } from "react";
import UseAnimation from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import NAVIGATION_LINKS, { NavLink } from "@/utils/navigationLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="hidden col-start-4 col-span-3 md:flex justify-evenly items-center z-20 w-full">
        {NAVIGATION_LINKS.map(({ href, pageName }) => {
          return (
            <li key={href} className="list-none text-xl hover:font-bold pl-4">
              <Link href={href}>{pageName}</Link>
            </li>
          );
        })}
      </nav>
      <nav className="md:hidden col-start-6 flex justify-center items-center z-20 p-4">
        <UseAnimation
          size={50}
          animation={menu2}
          speed={3}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </nav>
      {isOpen && <VerticalNav />}
    </>
  );
}

export function VerticalNav<FC>() {
  return (
    <ul className="flex flex-col z-10 bg-brand-accent absolute top-24 right-20 text-right px-2 w-2/7 rounded-md">
      {NAVIGATION_LINKS.map(({ href, pageName }) => {
        return (
          <li key={href} className="p-3">
            <Link className="hover:font-bold px-3 py-2" href={href}>
              {pageName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
