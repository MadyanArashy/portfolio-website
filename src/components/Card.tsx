import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";

interface CardProps {
  href?: Url;
  title: string;
  description: string;
  imgUrl?: string;
  alt?: string;
}

export default function Card({ href, title, description, imgUrl, alt }: CardProps) {
  const content = (
    <div className="p-6">
      <div className="w-full h-40 bg-[var(--color-border)] rounded-md mb-4 flex items-center justify-center">
        <Image
          src={imgUrl || '/og-image.jpg'}
          alt={alt || `${title} project screenshot`}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[var(--color-text-secondary)]">{description}</p>
    </div>
  );

  return (
    <article className="rounded-lg bg-[var(--color-secondary)] hover:bg-[var(--color-hover-bg)] transition block border border-[var(--color-border)]">
      {href ? <Link href={href}>{content}</Link> : content}
    </article>
  );
}
