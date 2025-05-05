"use client"

import { Button } from "@/components/ui/button"
import { categories } from "@/lib/data/gallery-data"

interface GalleryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function GalleryFilter({ activeCategory, onCategoryChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "outline"}
          onClick={() => onCategoryChange(category.id)}
          className="transition-all"
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}
