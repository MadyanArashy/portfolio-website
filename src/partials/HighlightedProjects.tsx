import Card from "@/components/Card";
import Link from "next/link";
import { projects } from "@/data";

export default function HighlightedProjects() {
  const highlights = projects.slice(0, 3);
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">Highlighted Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <Card
              key={item.id}
              href={`/projects/${item.id}`}
              title={item.title}
              description={item.summary}
              imgUrl={item.thumbnailPath}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-secondary)] transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
