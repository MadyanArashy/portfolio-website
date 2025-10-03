// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 md:top-0 md:bottom-auto w-full bg-[var(--color-secondary)] border-t md:border-b border-[var(--color-border)] z-50">
      <div className="max-w-6xl mx-auto flex justify-around md:justify-center md:space-x-10 p-3">
        <Link
          href="/"
          className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition"
        >
          Projects
        </Link>
        <Link
          href="/certifications"
          className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition"
        >
          Certifications
        </Link>
        <Link
          href="/blogs"
          className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition"
        >
          Blogs
        </Link>
      </div>
    </nav>
  );
}
