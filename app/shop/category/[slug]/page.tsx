"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, ShoppingCart, Heart, Star, ChevronRight } from "lucide-react"

// Define types for our products
type ProductCategory = "oils" | "shampoo" | "conditioner" | "tools" | "accessories" | "kits"

interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  image: string
  category: ProductCategory
  tags: string[]
  bestSeller?: boolean
  new?: boolean
  sale?: boolean
}

// Map for category slugs to display names and descriptions
const categoryInfo: Record<string, { name: string; description: string; image: string }> = {
  "oils-serums": {
    name: "Oils & Serums",
    description: "Nourish and hydrate your locs and natural hair with our premium oils and serums.",
    image: "/placeholder.svg?key=pihty",
  },
  shampoo: {
    name: "Shampoo",
    description: "Cleanse and refresh your hair with our specially formulated natural shampoos.",
    image: "/placeholder.svg?key=vas0a",
  },
  conditioners: {
    name: "Conditioners",
    description: "Deep condition and moisturize your hair with our restorative conditioners.",
    image: "/placeholder.svg?key=ait7p",
  },
  "styling-tools": {
    name: "Styling Tools",
    description: "Professional-grade tools for maintaining and styling your natural hair and locs.",
    image: "/placeholder.svg?key=evo3m",
  },
  accessories: {
    name: "Accessories",
    description: "Enhance and protect your hair with our selection of premium accessories.",
    image: "/placeholder.svg?key=z6xqh",
  },
  "starter-kits": {
    name: "Starter Kits",
    description: "Everything you need to begin your natural hair journey in one convenient package.",
    image: "/placeholder.svg?height=400&width=1600&query=hair+care+kits+banner",
  },
}

// Map for converting URL slugs to category types
const slugToCategoryMap: Record<string, ProductCategory> = {
  "oils-serums": "oils",
  shampoo: "shampoo",
  conditioners: "conditioner",
  "styling-tools": "tools",
  accessories: "accessories",
  "starter-kits": "kits",
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // Sample products data - in a real app, this would come from an API or database
  const products: Product[] = [
    {
      id: "p1",
      name: "Loc Moisturizing Oil",
      description: "Hydrating oil blend for healthy, shiny locs",
      price: 24.99,
      rating: 4.8,
      reviewCount: 127,
      image: "/placeholder.svg?height=300&width=300&query=hair+oil+bottle",
      category: "oils",
      tags: ["moisturizing", "natural", "essential oils"],
      bestSeller: true,
    },
    {
      id: "p2",
      name: "Clarifying Shampoo",
      description: "Deep cleansing shampoo for locs and natural hair",
      price: 18.99,
      rating: 4.6,
      reviewCount: 94,
      image: "/placeholder.svg?height=300&width=300&query=natural+shampoo+bottle",
      category: "shampoo",
      tags: ["cleansing", "residue-free", "natural"],
    },
    {
      id: "p3",
      name: "Loc Tightening Gel",
      description: "Medium hold gel for maintaining neat locs",
      price: 16.99,
      originalPrice: 19.99,
      rating: 4.5,
      reviewCount: 78,
      image: "/placeholder.svg?height=300&width=300&query=hair+gel+jar",
      category: "accessories",
      tags: ["styling", "hold", "natural"],
      sale: true,
    },
    {
      id: "p4",
      name: "Wooden Loc Comb",
      description: "Handcrafted wooden comb for loc maintenance",
      price: 22.99,
      rating: 4.9,
      reviewCount: 56,
      image: "/placeholder.svg?height=300&width=300&query=wooden+hair+comb",
      category: "tools",
      tags: ["tools", "maintenance", "handcrafted"],
    },
    {
      id: "p5",
      name: "Deep Conditioning Treatment",
      description: "Intensive moisture treatment for dry locs and natural hair",
      price: 28.99,
      rating: 4.7,
      reviewCount: 103,
      image: "/placeholder.svg?height=300&width=300&query=hair+conditioning+mask+jar",
      category: "conditioner",
      tags: ["deep conditioning", "moisture", "repair"],
      bestSeller: true,
    },
    {
      id: "p6",
      name: "Loc Starter Kit",
      description: "Everything you need to start your loc journey",
      price: 79.99,
      originalPrice: 95.99,
      rating: 4.9,
      reviewCount: 42,
      image: "/placeholder.svg?height=300&width=300&query=hair+care+kit",
      category: "kits",
      tags: ["starter kit", "essentials", "value"],
      sale: true,
    },
    {
      id: "p7",
      name: "Scalp Soother Spray",
      description: "Cooling spray to relieve dry, itchy scalp",
      price: 15.99,
      rating: 4.6,
      reviewCount: 87,
      image: "/placeholder.svg?height=300&width=300&query=hair+spray+bottle",
      category: "accessories",
      tags: ["scalp care", "soothing", "cooling"],
    },
    {
      id: "p8",
      name: "Loc Maintenance Kit",
      description: "Professional tools for loc maintenance and styling",
      price: 65.99,
      rating: 4.8,
      reviewCount: 36,
      image: "/placeholder.svg?height=300&width=300&query=hair+tool+kit",
      category: "kits",
      tags: ["maintenance", "tools", "professional"],
    },
    {
      id: "p9",
      name: "Silk Loc Wrap",
      description: "Protect your locs while you sleep with this premium silk wrap",
      price: 34.99,
      rating: 4.7,
      reviewCount: 59,
      image: "/placeholder.svg?height=300&width=300&query=silk+hair+wrap",
      category: "accessories",
      tags: ["protection", "silk", "nighttime"],
      new: true,
    },
    {
      id: "p10",
      name: "Loc Beads Set",
      description: "Decorative beads for styling and personalizing your locs",
      price: 12.99,
      rating: 4.5,
      reviewCount: 48,
      image: "/placeholder.svg?height=300&width=300&query=hair+beads+set",
      category: "accessories",
      tags: ["styling", "decoration", "customization"],
    },
    {
      id: "p11",
      name: "Natural Bristle Brush",
      description: "Gentle brush for edges and natural hair styling",
      price: 19.99,
      rating: 4.6,
      reviewCount: 72,
      image: "/placeholder.svg?height=300&width=300&query=natural+hair+brush",
      category: "tools",
      tags: ["styling", "edges", "natural bristle"],
    },
    {
      id: "p12",
      name: "Hydrating Leave-In Conditioner",
      description: "Lightweight leave-in formula for daily moisture",
      price: 22.99,
      rating: 4.8,
      reviewCount: 91,
      image: "/placeholder.svg?height=300&width=300&query=leave+in+conditioner+bottle",
      category: "conditioner",
      tags: ["daily care", "moisture", "lightweight"],
      new: true,
    },
    {
      id: "p13",
      name: "Rosemary Growth Oil",
      description: "Stimulating oil blend to promote hair growth",
      price: 26.99,
      rating: 4.7,
      reviewCount: 64,
      image: "/placeholder.svg?height=300&width=300&query=hair+growth+oil+bottle",
      category: "oils",
      tags: ["growth", "stimulating", "rosemary"],
    },
    {
      id: "p14",
      name: "Tea Tree Scalp Oil",
      description: "Soothing oil for dry, flaky scalp",
      price: 21.99,
      rating: 4.5,
      reviewCount: 53,
      image: "/placeholder.svg?height=300&width=300&query=tea+tree+oil+bottle",
      category: "oils",
      tags: ["tea tree", "scalp care", "soothing"],
    },
    {
      id: "p15",
      name: "Protein Treatment",
      description: "Strengthening treatment for damaged hair",
      price: 32.99,
      rating: 4.9,
      reviewCount: 47,
      image: "/placeholder.svg?height=300&width=300&query=protein+hair+treatment+bottle",
      category: "conditioner",
      tags: ["protein", "strengthening", "repair"],
      new: true,
    },
  ]

  // Get the category info based on the slug
  const categoryData = categoryInfo[params.slug] || {
    name: "Products",
    description: "Browse our collection of natural hair care products.",
    image: "/placeholder.svg?height=400&width=1600&query=natural+hair+products+banner",
  }

  // Get the category type from the slug
  const categoryType = slugToCategoryMap[params.slug]

  // State for filters
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Filter products based on selected category and filters
  const filteredProducts = products.filter((product) => {
    const matchesCategory = categoryType ? product.category === categoryType : true
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

    return matchesCategory && matchesSearch && matchesPrice
  })

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low-high":
        return a.price - b.price
      case "price-high-low":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return a.new ? -1 : b.new ? 1 : 0
      default:
        // Featured - show best sellers first
        return a.bestSeller ? -1 : b.bestSeller ? 1 : 0
    }
  })

  return (
    <div className="flex min-h-screen flex-col">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/shop" className="hover:text-primary">
              Shop
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground">{categoryData.name}</span>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <section className="relative py-16 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src={categoryData.image || "/placeholder.svg"} alt={categoryData.name} fill className="object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">{categoryData.name}</h1>
            <p className="text-xl mb-6">{categoryData.description}</p>
            <Button className="bg-primary hover:bg-primary text-black">Shop Now</Button>
          </div>
        </div>
      </section>

      {/* Main Shop Section */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full lg:w-64 space-y-6">
              <div>
                <h3 className="font-medium mb-3">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 100]}
                    max={100}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-6"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">${priceRange[0]}</span>
                    <span className="text-sm">${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Product Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(products.filter((p) => p.category === categoryType).flatMap((p) => p.tags))).map(
                    (tag, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary">
                        {tag}
                      </Badge>
                    ),
                  )}
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setPriceRange([0, 100])
                  }}
                  className="w-full"
                >
                  Reset Filters
                </Button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                  <p className="text-muted-foreground">
                    Showing <span className="font-medium text-foreground">{sortedProducts.length}</span> results
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Sort by:</span>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                        <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex border rounded-md">
                    <button
                      className={`px-3 py-2 ${viewMode === "grid" ? "bg-primary text-primary" : "hover:bg-gray-100"
                        }`}
                      onClick={() => setViewMode("grid")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                    </button>
                    <button
                      className={`px-3 py-2 ${viewMode === "list" ? "bg-primary text-primary" : "hover:bg-gray-100"
                        }`}
                      onClick={() => setViewMode("list")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="8" y1="6" x2="21" y2="6" />
                        <line x1="8" y1="12" x2="21" y2="12" />
                        <line x1="8" y1="18" x2="21" y2="18" />
                        <line x1="3" y1="6" x2="3.01" y2="6" />
                        <line x1="3" y1="12" x2="3.01" y2="12" />
                        <line x1="3" y1="18" x2="3.01" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {sortedProducts.length === 0 ? (
                <div className="text-center py-12 border rounded-lg">
                  <p className="text-muted-foreground">No products match your search criteria.</p>
                  <Button
                    variant="link"
                    onClick={() => {
                      setSearchTerm("")
                      setPriceRange([0, 100])
                    }}
                    className="mt-2"
                  >
                    Clear filters and try again
                  </Button>
                </div>
              ) : viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <div key={product.id} className="border rounded-lg overflow-hidden group">
                      <div className="aspect-square relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.bestSeller && (
                          <Badge className="absolute top-2 left-2 bg-primary hover:bg-primary">Best Seller</Badge>
                        )}
                        {product.new && (
                          <Badge className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-600">New</Badge>
                        )}
                        {product.sale && (
                          <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">Sale</Badge>
                        )}
                        <div className="absolute bottom-2 right-2 flex gap-2">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="rounded-full bg-white/80 hover:bg-white text-gray-800"
                          >
                            <Heart className="h-4 w-4" />
                            <span className="sr-only">Add to wishlist</span>
                          </Button>
                          <Button size="icon" className="rounded-full bg-primary/90 hover:bg-primary text-black">
                            <ShoppingCart className="h-4 w-4" />
                            <span className="sr-only">Add to cart</span>
                          </Button>
                        </div>
                      </div>
                      <div className="p-4">
                        <Link href={`/shop/product/${product.id}`}>
                          <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <div className="flex items-center mb-2">
                          <div className="flex text-primary">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-current" : "fill-none"}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground ml-2">({product.reviewCount})</span>
                        </div>
                        <div className="flex items-center">
                          {product.originalPrice ? (
                            <>
                              <span className="font-bold">${product.price.toFixed(2)}</span>
                              <span className="text-muted-foreground line-through ml-2">
                                ${product.originalPrice.toFixed(2)}
                              </span>
                            </>
                          ) : (
                            <span className="font-bold">${product.price.toFixed(2)}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {sortedProducts.map((product) => (
                    <div key={product.id} className="border rounded-lg overflow-hidden flex">
                      <div className="w-40 h-40 relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        {product.bestSeller && (
                          <Badge className="absolute top-2 left-2 bg-primary hover:bg-primary">Best Seller</Badge>
                        )}
                        {product.new && (
                          <Badge className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-600">New</Badge>
                        )}
                        {product.sale && (
                          <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">Sale</Badge>
                        )}
                      </div>
                      <div className="flex-1 p-4 flex flex-col">
                        <Link href={`/shop/product/${product.id}`}>
                          <h3 className="font-medium mb-1 hover:text-primary transition-colors">{product.name}</h3>
                        </Link>
                        <div className="flex items-center mb-2">
                          <div className="flex text-primary">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-current" : "fill-none"}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground ml-2">({product.reviewCount})</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2 flex-grow">{product.description}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center">
                            {product.originalPrice ? (
                              <>
                                <span className="font-bold">${product.price.toFixed(2)}</span>
                                <span className="text-muted-foreground line-through ml-2">
                                  ${product.originalPrice.toFixed(2)}
                                </span>
                              </>
                            ) : (
                              <span className="font-bold">${product.price.toFixed(2)}</span>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="rounded-full">
                              <Heart className="h-4 w-4 mr-1" />
                              Wishlist
                            </Button>
                            <Button size="sm" className="rounded-full bg-primary hover:bg-primary text-black">
                              <ShoppingCart className="h-4 w-4 mr-1" />
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {sortedProducts.length > 0 && (
                <div className="flex justify-center mt-8">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="bg-primary text-black">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Related Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(categoryInfo)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 4)
              .map(([slug, info]) => (
                <Link key={slug} href={`/shop/category/${slug}`} className="group">
                  <div className="rounded-lg overflow-hidden aspect-square relative mb-2">
                    <Image
                      src={info.image || "/placeholder.svg"}
                      alt={info.name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white font-medium text-lg">{info.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive updates on new products, special offers, and hair care tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Your email address" className="flex-grow" />
            <Button className="bg-primary hover:bg-primary text-black">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer would typically go here */}
    </div>
  )
}
