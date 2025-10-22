import Card from "@/components/Card"
import { certificates } from "@/data"

export default function Certifications() {
  return (
    <main className="min-h-screen w-full px-6 max-w-6xl mx-auto">
      <h1 className="font-bold text-3xl mt-4 sm:mt-24 mb-4">Certifications</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full pb-16">
        {certificates.map((item) => (
          <Card
            key={item.id}
            href={`/certifications/${item.id}`}
            title={item.title}
            description={item.description}
            imgUrl={item.thumbnailPath}
          />
        ))}
      </div>
    </main>
  )
}