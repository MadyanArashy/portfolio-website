'use client'

import { useState } from 'react'

export default function Gallery({ images }: { images: string[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

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

  return (
    <>
      {hasGallery && (
        <img
          src={images[0]}
          alt="thumbnail"
          className="w-full cursor-pointer rounded-md"
          onClick={() => openGallery(0)}
        />
      )}

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
              alt="gallery image"
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