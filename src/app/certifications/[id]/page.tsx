// app/projects/[id]/page.tsx
import { certificates } from '@/data'
import Image from 'next/image'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'

// Simulate async delay
// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
export default async function CertificatePage({ params }: { params: Promise<{ id: number }> }) {
  // await delay(1000);
  // compile and evaluate MDX safely in ESM mode
  
  const { id } = await params
  const found = certificates.find(p => p.id === Number(id))
  if (!found) return <div className="mt-4 sm:mt-24 mx-auto max-w-2xl relative px-4">Certificate not found</div>
  const certificate = found

  const { default: Content } = await evaluate(certificate.description, {
    ...runtime,
    baseUrl: import.meta.url,
  })

  return (
    <main className="mt-4 sm:mt-24 mx-auto max-w-4xl grid md:grid-cols-2 gap-8 items-center relative px-4">
      {
      certificate.imgPaths?.length ?
      <div className='grid grid-cols-2 md:flex md:flex-col gap-4 w-full'>
        {
          certificate.imgPaths.map((item, index) => (
            <Image
            key={index}
            src={item}
            alt={certificate.title + ' certificate picture ' + index}
            width={300}
            height={300}
            className='w-full'
            />
          ))
        }
      </div> :
      <div className='w-full'>
        <Image
        src={certificate.thumbnailPath}
        alt={certificate.title + ' certificate picture'}
        width={300}
        height={300}
        className='w-full h-auto'
        />
      </div>
      }
      <div className='w-full mt-6 md:mt-0'>
         <h1 className="text-3xl font-bold">{certificate.title}</h1>
         {certificate.date &&
          <div>
            <h3 className='text-text-secondary'><span className="sr-only">Created on</span> {certificate.date}</h3>
          </div>
         }
          <article className="prose max-w-full mb-6 mdx text-justify mt-4">
            <Content />
          </article>
      </div>
    </main>
  )
}
