'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Gallery({ images }: { images: string[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false)
  const [modalImageLoaded, setModalImageLoaded] = useState(false)

  const hasGallery = Array.isArray(images) && images.length > 0
  const currentImg = hasGallery ? images[currentIndex] : null

  function openGallery(index = 0) {
    if (!hasGallery) return
    setCurrentIndex(index)
    setModalImageLoaded(false)
    setIsOpen(true)
  }

  function closeGallery() {
    setIsOpen(false)
  }

  function prevImage() {
    if (!hasGallery) return
    setModalImageLoaded(false)
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
  }

  function nextImage() {
    if (!hasGallery) return
    setModalImageLoaded(false)
    setCurrentIndex(prev => (prev + 1) % images.length)
  }

  useEffect(() => {
    if (!isOpen) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeGallery()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, images.length])

  return (
    <>
      {hasGallery && (
        <div onClick={() => openGallery(0)} className="w-full relative cursor-pointer">
          {/* Thumbnail loading placeholder */}
          {!thumbnailLoaded && (
            <div className="w-full h-full absolute inset-0 bg-gray-200 animate-pulse rounded" />
          )}
          <Image
            src={images[0]}
            alt="Gallery thumbnail"
            fill
            className={`object-cover transition-opacity duration-300 ${thumbnailLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setThumbnailLoaded(true)}
          />
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={e => { if (e.target === e.currentTarget) closeGallery() }}
        >
          <button onClick={closeGallery} className="absolute top-4 right-4 text-white text-2xl">×</button>

          <p className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm md:hidden">
            Rotate phone for better viewing experience
          </p>

          {/* Modal image with loading placeholder */}
          <div className="relative w-full max-w-3xl aspect-video mx-4">
            {!modalImageLoaded && (
              <div className="absolute inset-0 bg-gray-700 animate-pulse rounded" />
            )}
            {currentImg && (
              <Image
                src={currentImg}
                alt={`Image ${currentIndex + 1}`}
                fill
                className={`object-contain transition-opacity duration-300 ${modalImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setModalImageLoaded(true)}
              />
            )}
          </div>

          <button onClick={prevImage} className="absolute left-4 text-white text-4xl">‹</button>
          <button onClick={nextImage} className="absolute right-4 text-white text-4xl">›</button>

          <div className="absolute bottom-4 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}