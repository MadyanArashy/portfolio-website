"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Briefcase, Award, FileText } from "@deemlol/next-icons";

type LinkItem = {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

function NavLink({ href, label, Icon }: LinkItem) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={isActive ? "/#" : href}
      aria-label={label}
      className={`flex flex-col items-center text-sm transition ${
        isActive
          ? "text-[var(--color-accent-primary)] font-semibold border-b-2 border-[var(--color-accent-primary)]"
          : "text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)]"
      }`}
    >
      <Icon className="w-5 h-5 mb-1" />
      <span className="sr-only sm:not-sr-only">{label}</span>
    </Link>
  );
}

export default function Navbar() {
  const links: LinkItem[] = [
    { href: "/", label: "Home", Icon: House },
    { href: "/projects", label: "Projects", Icon: Briefcase },
    { href: "/certifications", label: "Certifications", Icon: Award },
    { href: "/blogs", label: "Blogs", Icon: FileText },
  ];

  return (
    <nav className="fixed bottom-0 sm:top-0 sm:bottom-auto w-full bg-[var(--color-secondary)] border-t sm:border-b border-[var(--color-border)] z-50">
      <div className="max-w-6xl mx-auto flex justify-around sm:justify-center sm:space-x-10 p-3">
        {links.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </div>
    </nav>
  );
}
