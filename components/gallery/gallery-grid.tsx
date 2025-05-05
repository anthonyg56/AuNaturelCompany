"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { galleryImages, type GalleryImage } from "@/lib/data/gallery-data"
import GalleryFilter from "./gallery-filter"
import GalleryModal from "./gallery-modal"

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredImages(galleryImages)
    } else {
      setFilteredImages(galleryImages.filter((image) => image.categories.includes(activeCategory)))
    }
  }, [activeCategory])

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setModalOpen(true)
  }

  return (
    <>
      <GalleryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        <AnimatePresence>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid"
            >
              <div
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No images found for this category.</p>
        </div>
      )}

      <GalleryModal
        images={filteredImages}
        currentIndex={currentImageIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </>
  )
}
