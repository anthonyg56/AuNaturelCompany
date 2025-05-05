"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { GalleryImage } from "@/lib/data/gallery-data"

interface GalleryModalProps {
  images: GalleryImage[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function GalleryModal({ images, currentIndex, isOpen, onClose, onNavigate }: GalleryModalProps) {
  const [loaded, setLoaded] = useState(false)
  const currentImage = images[currentIndex]

  useEffect(() => {
    setLoaded(false)
  }, [currentIndex])

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    onNavigate(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    onNavigate(newIndex)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "ArrowLeft":
          handlePrevious()
          break
        case "ArrowRight":
          handleNext()
          break
        case "Escape":
          onClose()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex, images.length])

  if (!currentImage) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[90vw] h-[90vh] p-0 bg-black/90">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-50 text-white bg-black/50 hover:bg-black/70"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="relative flex flex-col items-center justify-center w-full h-full">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 z-50 text-white bg-black/50 hover:bg-black/70"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous image</span>
          </Button>

          <div className="w-full h-full flex items-center justify-center">
            <div className={`transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}>
              <Image
                src={currentImage.src || "/placeholder.svg"}
                alt={currentImage.alt}
                width={currentImage.width}
                height={currentImage.height}
                className="max-h-full max-w-full object-contain"
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 z-50 text-white bg-black/50 hover:bg-black/70"
            onClick={handleNext}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next image</span>
          </Button>

          {/* Caption section */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
            <h3 className="text-lg font-medium">{currentImage.alt}</h3>
            <div className="flex gap-2 mt-1">
              {currentImage.categories?.map((category) => (
                <span
                  key={category}
                  className="text-xs bg-amber-500/80 text-black px-2 py-1 rounded-full"
                >
                  {category.replace('-', ' ')}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-300 mt-1">
              Image {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
