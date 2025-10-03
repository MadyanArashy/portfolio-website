import Link from "next/link";

interface CardProps {
  href?: string;
  title: string;
  description: string;
  placeholder?: string;
}

export default function Card({ href, title, description, placeholder }: CardProps) {
  const Wrapper = href ? Link : "div";

  return (
    <Wrapper
      href={href || null}
      className="rounded-lg bg-[var(--color-secondary)] hover:bg-[var(--color-hover-bg)] transition p-6 block border border-[var(--color-border)]"
    >
      <div className="w-full h-40 bg-[var(--color-border)] rounded-md mb-4 flex items-center justify-center">
        <span className="text-[var(--color-text-secondary)]">{placeholder || "Image"}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[var(--color-text-secondary)]">{description}</p>
    </Wrapper>
  );
}
