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
  if(href) {
    return (
      <Link
        href={href}
        className="rounded-lg bg-[var(--color-secondary)] hover:bg-[var(--color-hover-bg)] transition p-6 block border border-[var(--color-border)]"
      >
        <div className="w-full h-40 bg-[var(--color-border)] rounded-md mb-4 flex items-center justify-center">
          <Image
            src={imgUrl || '/og-image.jpg'}
            alt={alt || title + ' ' + 'project screenshot'}
            width={100}
            height={100}
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[var(--color-text-secondary)]">{description}</p>
      </Link>
    );
  } else {
     return (
      <div
        className="rounded-lg bg-[var(--color-secondary)] hover:bg-[var(--color-hover-bg)] transition p-6 block border border-[var(--color-border)]"
      >
        <div className="w-full h-40 bg-[var(--color-border)] rounded-md mb-4 flex items-center justify-center">
           <Image
            src={imgUrl || '/og-image.jpg'}
            alt={alt || title + ' ' + 'project screenshot'}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[var(--color-text-secondary)]">{description}</p>
      </div>
    );
  }

}
