'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Gallery({ images }: { images: string[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [thumbnailLoading, setThumbnailLoading] = useState(true)
  const [modalLoading, setModalLoading] = useState(true)

  const hasGallery = Array.isArray(images) && images.length > 0
  const currentImg = hasGallery ? images[currentIndex] : null

  function openGallery(index = 0) {
    if (!hasGallery) return
    setCurrentIndex(index)
    setIsOpen(true)
    setModalLoading(true)
  }

  function closeGallery() {
    setIsOpen(false)
  }

  function prevImage() {
    if (!hasGallery) return
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
    setModalLoading(true)
  }

  function nextImage() {
    if (!hasGallery) return
    setCurrentIndex(prev => (prev + 1) % images.length)
    setModalLoading(true)
  }

  function handleThumbnailLoad() {
    setThumbnailLoading(false)
  }

  function handleModalImageLoad() {
    setModalLoading(false)
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
            width={300}
            height={300}
            onLoad={handleThumbnailLoad}
          />
        </button>
      )}

      {isOpen && (
        <figure className="fixed inset-0 bg-[rgba(0,0,0,0.85)] flex items-center justify-center z-50 p-4">
          <button
            onClick={closeGallery}
            className="absolute top-4 right-6 text-white text-4xl font-bold cursor-pointer"
          >
            &times;
          </button>

          <span className="absolute top-24 left-auto right-auto md:hidden text-white">
            Rotate phone for better viewing experience
          </span>

          <div className="relative w-full max-w-5xl">
            {modalLoading && (
              <div className="absolute inset-0 flex items-center justify-center w-[80vw]">
                <div className="p-6 border border-border animate-pulse rounded-lg bg-gray-800">
                  <div className="w-full h-56 rounded-md mb-4 flex items-center justify-center bg-border/50 animate-pulse"></div>
                  <div className="mb-2 w-1/2 bg-text-primary/50 animate-pulse py-3"></div>
                  <div className="w-5/6 bg-text-secondary/50 animate-pulse py-2.5 mb-1"></div>
                  <div className="w-2/3 bg-text-secondary/50 animate-pulse py-2.5"></div>
                </div>
              </div>
            )}
            {currentImg && (
              <Image
                src={currentImg}
                alt="gallery image"
                className={`w-full max-w-5xl h-auto max-h-[80vh] object-contain rounded-md shadow-lg mx-auto transition-all duration-300 ${
                  modalLoading ? 'opacity-0' : 'opacity-100'
                }`}
                width={1080}
                height={1080}
                onLoad={handleModalImageLoad}
              />
            )}
          </div>

          <button
            onClick={prevImage}
            disabled={!hasGallery}
            className={`absolute left-4 sm:left-8 text-white text-6xl font-bold select-none cursor-pointer p-4 z-100 text-shadow-sm ${
              !hasGallery ? 'opacity-40 cursor-not-allowed' : ''
            }`}
          >
            &lsaquo;
          </button>

          <button
            onClick={nextImage}
            disabled={!hasGallery}
            className={`absolute right-4 sm:right-8 text-white text-6xl font-bold select-none cursor-pointer p-4 z-100 text-shadow-sm ${
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