"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`navbar-link ${pathname === link.href ? "active" : ""}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
