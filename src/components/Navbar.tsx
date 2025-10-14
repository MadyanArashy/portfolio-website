"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition ${
        isActive
          ? "text-[var(--color-accent-primary)] font-semibold border-b-2 border-[var(--color-accent-primary)]"
          : "text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)]"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/certifications", label: "Certifications" },
    { href: "/blogs", label: "Blogs" },
  ];

  return (
    <nav className="fixed bottom-0 sm:top-0 sm:bottom-auto w-full bg-[var(--color-secondary)] border-t sm:border-b border-[var(--color-border)] z-50">
      <div className="max-w-6xl mx-auto flex justify-around sm:justify-center sm:space-x-10 p-3">
        {links.map((link) => (
          <NavLink key={link.href} href={link.href} label={link.label} />
        ))}
      </div>
    </nav>
  );
}
