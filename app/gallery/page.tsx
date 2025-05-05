import type { Metadata } from "next"
import GalleryGrid from "@/components/gallery/gallery-grid"

export const metadata: Metadata = {
  title: "Gallery",
  description: "View our portfolio of natural hairstyles, loc work, and transformations at Au Natural Company.",
  keywords: ["hair gallery", "natural hairstyles", "loc styles", "hair transformations", "salon portfolio"]
}

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work Gallery</h1>
        <p className="text-lg text-muted-foreground">
          Browse through our collection of natural hair transformations, loc styles, and expert barbering work.
        </p>
      </div>

      <GalleryGrid />
    </div>
  )
}
