"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, ShoppingCart, Heart, Star, Filter, ChevronDown, X, Plus, Minus } from 'lucide-react'

// TODO: Add metadata after converting this page to a server component
// export const metadata = {
//   title: "Shop Hair Products",
//   description: "Shop our curated selection of natural hair care products and tools at Au Natural Company.",
//   keywords: ["hair products", "natural hair care", "loc products", "hair tools", "hair care products"]
// }

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


export default function ShopPage() {
  // Sample products data
  const products: Product[] = [
    {
      id: "p1",
      name: "Loc Moisturizing Oil",
      description: "Hydrating oil blend for healthy, shiny locs",
      price: 24.99,
      rating: 4.8,
      reviewCount: 127,
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=800&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=800&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=800&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?w=800&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=800&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1590159763121-7c9fd312190d?w=800&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&auto=format&fit=crop&q=60",
      category: "conditioner",
      tags: ["daily care", "moisture", "lightweight"],
      new: true,
    },
  ]

  // State for filters
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

    return matchesSearch && matchesCategory && matchesPrice
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

  // Featured products (best sellers or new)
  const featuredProducts = products.filter((product) => product.bestSeller || product.new).slice(0, 4)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-16 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=1600&auto=format&fit=crop&q=60"
            alt="Natural hair products"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Shop Our Premium Hair Care Collection</h1>
            <p className="text-xl mb-6">
              Discover our curated selection of natural hair care products designed specifically for locs and natural
              hair textures.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Oils & Serums", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&auto=format&fit=crop&q=60" },
              { name: "Shampoo", image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=800&auto=format&fit=crop&q=60" },
              {
                name: "Conditioners",
                image: "https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?w=800&auto=format&fit=crop&q=60",
              },
              { name: "Styling Tools", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=60" },
              { name: "Accessories", image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&auto=format&fit=crop&q=60" },
              { name: "Starter Kits", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&auto=format&fit=crop&q=60" },
            ].map((category, index) => (
              <Link
                key={index}
                href={`/shop/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group"
              >
                <div className="rounded-lg overflow-hidden aspect-square relative mb-2">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white font-medium text-lg">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link href="#" className="text-amber-600 hover:text-amber-700 font-medium">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden group">
                <div className="aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.bestSeller && (
                    <Badge className="absolute top-2 left-2 bg-amber-500 hover:bg-amber-600">Best Seller</Badge>
                  )}
                  {product.new && <Badge className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-600">New</Badge>}
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
                    <Button
                      size="icon"
                      className="rounded-full bg-amber-400/90 hover:bg-amber-400 text-black"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <Link href={`/shop/product/${product.id}`}>
                    <h3 className="font-medium mb-1 group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center mb-2">
                    <div className="flex text-amber-400">
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
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cat-all"
                      name="category"
                      checked={selectedCategory === "all"}
                      onChange={() => setSelectedCategory("all")}
                      className="mr-2"
                    />
                    <label htmlFor="cat-all" className="text-sm">
                      All Products
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cat-oils"
                      name="category"
                      checked={selectedCategory === "oils"}
                      onChange={() => setSelectedCategory("oils")}
                      className="mr-2"
                    />
                    <label htmlFor="cat-oils" className="text-sm">
                      Oils & Serums
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cat-shampoo"
                      name="category"
                      checked={selectedCategory === "shampoo"}
                      onChange={() => setSelectedCategory("shampoo")}
                      className="mr-2"
                    />
                    <label htmlFor="cat-shampoo" className="text-sm">
                      Shampoo
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cat-conditioner"
                      name="category"
                      checked={selectedCategory === "conditioner"}
                      onChange={() => setSelectedCategory("conditioner")}
                      className="mr-2"
                    />
                    <label htmlFor="cat-conditioner" className="text-sm">
                      Conditioners
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cat-tools"
                      name="category"
                      checked={selectedCategory === "tools"}
                      onChange={() => setSelectedCategory("tools")}
                      className="mr-2"
                    />
                    <label htmlFor="cat-tools" className="text-sm">
                      Tools
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cat-accessories"
                      name="category"
                      checked={selectedCategory === "accessories"}
                      onChange={() => setSelectedCategory("accessories")}
                      className="mr-2"
                    />
                    <label htmlFor="cat-accessories" className="text-sm">
                      Accessories
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cat-kits"
                      name="category"
                      checked={selectedCategory === "kits"}
                      onChange={() => setSelectedCategory("kits")}
                      className="mr-2"
                    />
                    <label htmlFor="cat-kits" className="text-sm">
                      Kits
                    </label>
                  </div>
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

              <div className="pt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
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
                      className={`px-3 py-2 ${viewMode === "grid" ? "bg-amber-100 text-amber-600" : "hover:bg-gray-100"
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
                      className={`px-3 py-2 ${viewMode === "list" ? "bg-amber-100 text-amber-600" : "hover:bg-gray-100"
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
                      setSelectedCategory("all")
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
                          <Badge className="absolute top-2 left-2 bg-amber-500 hover:bg-amber-600">Best Seller</Badge>
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
                          <Button
                            size="icon"
                            className="rounded-full bg-amber-400/90 hover:bg-amber-400 text-black"
                          >
                            <ShoppingCart className="h-4 w-4" />
                            <span className="sr-only">Add to cart</span>
                          </Button>
                        </div>
                      </div>
                      <div className="p-4">
                        <Link href={`/shop/product/${product.id}`}>
                          <h3 className="font-medium mb-1 group-hover:text-amber-600 transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <div className="flex items-center mb-2">
                          <div className="flex text-amber-400">
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
                        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                        {product.bestSeller && (
                          <Badge className="absolute top-2 left-2 bg-amber-500 hover:bg-amber-600">Best Seller</Badge>
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
                          <h3 className="font-medium mb-1 hover:text-amber-600 transition-colors">{product.name}</h3>
                        </Link>
                        <div className="flex items-center mb-2">
                          <div className="flex text-amber-400">
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
                            <Button
                              size="sm"
                              variant="outline"
                              className="rounded-full"
                            >
                              <Heart className="h-4 w-4 mr-1" />
                              Wishlist
                            </Button>
                            <Button
                              size="sm"
                              className="rounded-full bg-amber-400 hover:bg-amber-500 text-black"
                            >
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
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-amber-400 text-black">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive updates on new products, special offers, and hair care tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Your email address" className="flex-grow" />
            <Button className="bg-amber-400 hover:bg-amber-500 text-black">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Recently Viewed */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden group">
                <div className="aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <Link href={`/shop/product/${product.id}`}>
                    <h3 className="font-medium text-sm mb-1 group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center">
                    <span className="font-bold text-sm">${product.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer would typically go here */}
    </div>
  )
}
