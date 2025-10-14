'use client'

import { projects } from '@/data'
import { useState, use } from 'react'
import Image from 'next/image'

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const found = projects.find(p => p.id === Number(id))
  if (!found) return <div>Project not found</div>
  const project = found

  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const hasGallery = Array.isArray(project.imgPaths) && project.imgPaths.length > 0
  const currentImg = hasGallery ? project.imgPaths[currentIndex] : null

  function openGallery(index = 0) {
    if (!hasGallery) return
    setCurrentIndex(index)
    setIsOpen(true)
  }

  function closeGallery() {
    setIsOpen(false)
  }

  function prevImage() {
    if (!hasGallery) return
    setCurrentIndex(prev => (prev - 1 + project.imgPaths.length) % project.imgPaths.length)
  }

  function nextImage() {
    if (!hasGallery) return
    setCurrentIndex(prev => (prev + 1) % project.imgPaths.length)
  }

  return (
    <>
    <main className="mt-4 sm:mt-16 mx-auto max-w-3xl relative px-4">
      <Image
        src={project.thumbnailPath}
        alt={`${project.title} homepage screenshot`}
        width={1080}
        height={250}
        className="w-full cursor-pointer rounded-md"
        onClick={() => openGallery(0)}
      />
        <div>
            <h1 className="text-3xl font-semibold mt-4 mb-4">{project.title}</h1>
            {project.description.header &&
            <div className='px-4 py-2 rounded-md bg-secondary border border-border mb-4'>
                <p className='italic'>
                    Note: {' '}
                    {project.description.header}
                </p>
            </div>
            }
            <p>
                {project.description.text}
            </p>
        </div>
    </main>

    {/* Gallery */}
    {isOpen && (
      <figure className="fixed inset-0 bg-[rgba(0,0,0,0.85)] flex items-center justify-center z-50 p-4">
        <button
          onClick={closeGallery}
          className="absolute top-4 right-6 text-white text-4xl font-bold cursor-pointer"
        >
          &times;
        </button>

        {currentImg && (
          <img
            src={currentImg}
            alt={`${project.title} gallery image`}
            className="w-full max-w-5xl h-auto max-h-[80vh] object-contain rounded-md shadow-lg mx-auto transition-all duration-300"
          />
        )}

        <button
          onClick={prevImage}
          disabled={!hasGallery}
          className={`absolute left-4 sm:left-8 text-white text-6xl font-bold select-none cursor-pointer p-4 z-50 text-shadow-sm ${
            !hasGallery ? 'opacity-40 cursor-not-allowed' : ''
          }`}
        >
          &lsaquo;
        </button>

        <button
          onClick={nextImage}
          disabled={!hasGallery}
          className={`absolute right-4 sm:right-8 text-white text-6xl font-bold select-none cursor-pointer p-4 z-50 text-shadow-sm ${
            !hasGallery ? 'opacity-40 cursor-not-allowed' : ''
          }`}
        >
          &rsaquo;
        </button>
      </figure>
    )}
    </>
  )
}
