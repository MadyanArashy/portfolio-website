'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Gallery({ images }: { images: string[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [thumbnailLoading, setThumbnailLoading] = useState(true)

  const hasGallery = Array.isArray(images) && images.length > 0
  const currentImg = hasGallery ? images[currentIndex] : null

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
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
  }

  function nextImage() {
    if (!hasGallery) return
    setCurrentIndex(prev => (prev + 1) % images.length)
  }

  function handleThumbnailLoad() {
    setThumbnailLoading(false)
  }

  // Add keyboard navigation
  function handleKeyDown(e: KeyboardEvent) {
    if (!isOpen) return
    if (e.key === 'Escape') closeGallery()
    if (e.key === 'ArrowLeft') prevImage()
    if (e.key === 'ArrowRight') nextImage()
  }

  // Add keyboard listener
  if (typeof window !== 'undefined') {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    } else {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }

  return (
    <>
      {hasGallery && (
        <button onClick={() => openGallery(0)} className="w-full relative">
          {thumbnailLoading && (
            <div className="absolute inset-0 p-6 border border-border animate-pulse rounded-lg">
              <div className="w-full h-56 rounded-md mb-4 flex items-center justify-center bg-border/50 animate-pulse"></div>
              <div className="mb-2 w-1/2 bg-text-primary/50 animate-pulse py-3"></div>
              <div className="w-5/6 bg-text-secondary/50 animate-pulse py-2.5 mb-1"></div>
              <div className="w-2/3 bg-text-secondary/50 animate-pulse py-2.5"></div>
            </div>
          )}
          <Image
            src={images[0]}
            alt="thumbnail"
            className={`w-full rounded-md h-auto max-h-128 object-contain cursor-pointer transition-opacity duration-300 ${
              thumbnailLoading ? 'opacity-0' : 'opacity-100'
            }`}
            width={600}
            height={600}
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            onLoad={handleThumbnailLoad}
          />
        </button>
      )}

      {isOpen && (
        <figure 
          className="fixed inset-0 bg-[rgba(0,0,0,0.85)] flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeGallery()
          }}
        >
          <button
            onClick={closeGallery}
            className="absolute top-4 right-6 text-white text-4xl font-bold cursor-pointer hover:text-gray-300 transition-colors"
            aria-label="Close gallery"
          >
            &times;
          </button>

          <span className="absolute top-24 left-auto right-auto md:hidden text-white text-sm text-center">
            Rotate phone for better viewing experience
          </span>

          <div className="relative w-full max-w-5xl">
            {currentImg && (
              <Image
                src={currentImg}
                alt={`Gallery image ${currentIndex + 1} of ${images.length}`}
                className="w-full max-w-5xl h-auto max-h-[80vh] object-contain rounded-md shadow-lg mx-auto"
                width={1920}
                height={1920}
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1920px"
                priority
              />
            )}
          </div>

          <button
            onClick={prevImage}
            disabled={!hasGallery}
            className={`absolute left-4 sm:left-8 text-white text-6xl font-bold select-none cursor-pointer p-4 hover:bg-white/10 rounded transition-colors ${
              !hasGallery ? 'opacity-40 cursor-not-allowed' : ''
            }`}
            aria-label="Previous image"
          >
            &lsaquo;
          </button>

          <button
            onClick={nextImage}
            disabled={!hasGallery}
            className={`absolute right-4 sm:right-8 text-white text-6xl font-bold select-none cursor-pointer p-4 hover:bg-white/10 rounded transition-colors ${
              !hasGallery ? 'opacity-40 cursor-not-allowed' : ''
            }`}
            aria-label="Next image"
          >
            &rsaquo;
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded">
            {currentIndex + 1} / {images.length}
          </div>
        </figure>
      )}
    </>
  )
}