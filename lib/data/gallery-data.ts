export type GalleryImage = {
  id: string
  src: string
  alt: string
  categories: string[]
  width: number
  height: number
}

export const categories = [
  { id: "all", name: "All" },
  { id: "locs", name: "Locs" },
  { id: "barbering", name: "Barbering" },
  { id: "natural-hair", name: "Natural Hair" },
  { id: "styling", name: "Styling" },
]

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1535571393765-ea44927160be",
    alt: "Professional loc styling with intricate patterns",
    categories: ["locs", "styling"],
    width: 800,
    height: 1000,
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8",
    alt: "Fresh fade haircut with clean lines",
    categories: ["barbering"],
    width: 800,
    height: 800,
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1520699697851-3dc68aa3a474",
    alt: "Natural hair styled in an elegant updo",
    categories: ["natural-hair", "styling"],
    width: 800,
    height: 1200,
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
    alt: "Starter locs with neat partitioning",
    categories: ["locs"],
    width: 800,
    height: 900,
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033",
    alt: "Precision beard trim and shape up",
    categories: ["barbering"],
    width: 800,
    height: 1100,
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
    alt: "Voluminous natural curls with definition",
    categories: ["natural-hair"],
    width: 800,
    height: 800,
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8",
    alt: "Maintained locs with styling",
    categories: ["locs", "styling"],
    width: 800,
    height: 1000,
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c",
    alt: "Classic taper fade with textured top",
    categories: ["barbering"],
    width: 800,
    height: 900,
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0",
    alt: "Protective braided style with accessories",
    categories: ["natural-hair", "styling"],
    width: 800,
    height: 1200,
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da",
    alt: "Interlocked locs with color accents",
    categories: ["locs"],
    width: 800,
    height: 1000,
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1",
    alt: "Skin fade with detailed line work",
    categories: ["barbering"],
    width: 800,
    height: 800,
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f",
    alt: "Twist out with amazing definition",
    categories: ["natural-hair"],
    width: 800,
    height: 1100,
  },
]
