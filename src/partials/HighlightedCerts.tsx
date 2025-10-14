import Card from "@/components/Card";
import Link from "next/link";

export default function HighlightedCerts() {
  return (
    <section className="py-20 px-6 bg-[var(--color-secondary)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">Highlighted Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card
            title="TOEIC"
            description="Lorem ipsum dolor sit amet."
            imgUrl="/images/TOEIC-madyan-arashy.jpg"
          />
          <Card
            title="Programming Certificate"
            description="Lorem ipsum dolor sit amet."
            
          />
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
