import Card from "@/components/Card"
import { projects } from "@/data"

export default function Projects() {
  return (
    <main className="min-h-screen w-full px-6 max-w-6xl mx-auto">
      <h1 className="font-bold text-3xl mt-4 sm:mt-16 mb-4">Projects</h1>
      <div className="grid md:grid-cols-3 gap-8 w-full">
        {projects.map((item) => (
          <Card
            key={item.id}
            href={`/projects/${item.id}`}
            title={item.title}
            description={item.summary}
            imgUrl={item.thumbnailPath}
          />
        ))}
      </div>
    </main>
  )
}