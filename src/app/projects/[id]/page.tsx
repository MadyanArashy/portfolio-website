// app/projects/[id]/page.tsx
import { projects } from '@/data'
import Image from 'next/image'
import Gallery from '@/partials/Gallery'
import { compile } from '@mdx-js/mdx'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import Link from 'next/link'
import { Github } from "@deemlol/next-icons";

// Simulate async delay
// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function ProjectPage({ params }: { params: Promise<{ id: number }> }) {
  // await delay(1000);
  
  const { id } = await params
  const found = projects.find(p => p.id === Number(id))
  if (!found) return <div className="mt-4 sm:mt-24 mx-auto max-w-2xl relative px-4">Project not found</div>
  const project = found

  // compile and evaluate MDX safely in ESM mode
  const { default: Content } = await evaluate(project.description.text, {
    ...runtime,
    baseUrl: import.meta.url,
  })

  return (
    <main className="mt-4 sm:mt-24 mx-auto max-w-2xl relative px-4">
      {project.imgPaths?.length ? (
        <Gallery images={project.imgPaths} />
      ) : (
          <Image
            src={project.thumbnailPath}
            alt={`${project.title} homepage screenshot`}
            width={1080}
            height={250}
            className="w-full rounded-md h-auto max-h-128 object-contain"
          />
      )}

      <div className="mt-6">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <div className="grid sm:grid-cols-3 gap-2 mb-6">
              <div className="px-4 py-2 rounded-md bg-secondary border border-border">
                <h3 className='text-nowrap'>Tech Stack:</h3>
                <ol>
                    {project.description.techStack.map((item, id) => (
                        <li key={id} className='text-nowrap'>
                            - {item}
                        </li>
                    ))}
                </ol>
              </div>
              {project.description.header && (
                <div className="flex items-center justify-center px-4 py-2 rounded-md bg-secondary border border-border sm:col-span-2">
                  <p className="italic">{project.description.header}</p>
                </div>
              )}
          </div>
          <article className="prose max-w-full mb-6 mdx text-justify">
            <Content />
          </article>
            <Link
                href={project.href}
                className="relative inline-flex flex-row gap-2 rounded-lg bg-black border border-border px-4 py-2 transition mb-6"
                target='_blank'
            >
                <Github size={24} color="#fff" />
                <p className="text-text-primary">Repository</p>
            </Link>
      </div>
    </main>
  )
}
