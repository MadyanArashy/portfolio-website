import Card from "@/components/Card";
import Link from "next/link";
import { certificates } from './../data/index';

export default function HighlightedCerts() {
  const highlights = certificates.slice(0, 2);
  return (
    <section className="py-20 px-6 bg-[var(--color-secondary)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">Highlighted Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
         {highlights.map((item) => (
          <Card
            key={item.id}
            href={`/certifications/${item.id}`}
            title={item.title}
            description={item.summary}
            imgUrl={item.thumbnailPath}
          />
         ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/certifications"
            className="px-6 py-3 rounded-lg bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-secondary)] transition"
          >
            View All Certifications
          </Link>
        </div>
      </div>
    </section>
  );
}
