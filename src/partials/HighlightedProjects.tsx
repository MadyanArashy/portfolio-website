import Card from "@/components/Card";
import Link from "next/link";

export default function HighlightedProjects() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">Highlighted Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <Card
              key={id}
              href={`/projects/${id}`}
              title={`Project ${id}`}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              placeholder="Screenshot"
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
