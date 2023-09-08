import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="col-start-4 col-span-3 flex justify-around items-center z-20">
      <Link href="/about">About</Link>
      <Link href="/books">Books</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
