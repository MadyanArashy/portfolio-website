// app/projects/[id]/page.tsx
import { certificates } from '@/data'
import Image from 'next/image'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'

export default async function CertificatePage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params
  const found = certificates.find(p => p.id === Number(id))
  if (!found) return <div className="mt-4 sm:mt-24 mx-auto max-w-2xl relative px-4">Certificate not found</div>
  const certificate = found

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
         <h1 className="text-3xl font-bold mb-4">{certificate.title}</h1>
          <p className="max-w-full mb-6 mdx text-justify">
            {certificate.description}
          </p>
      </div>
    </main>
  )
}
