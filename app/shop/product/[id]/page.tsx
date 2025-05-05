

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart, Star, Truck, ArrowLeft, Share2, ChevronRight, Minus, Plus } from "lucide-react"

// TODO: Add metadata after converting this page to a server component
// export const metadata = {
//   title: `Product Details`, // Would be: `${product.name}`
//   description: "View product details and specifications.", // Would be: product.description
//   keywords: ["hair products", "natural hair care", "product details"]
// }

export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch product data based on the ID
  // For this example, we'll use mock data
  const product = {
    id: params.id,
    name: "Loc Moisturizing Oil",
    description:
      "Our premium Loc Moisturizing Oil is specially formulated to hydrate and nourish your locs, keeping them healthy and shiny. Made with a blend of natural oils including jojoba, argan, and tea tree, this lightweight formula absorbs quickly without leaving residue.",
    price: 24.99,
    rating: 4.8,
    reviewCount: 127,
    image: "/placeholder.svg?key=lkb5w",
    additionalImages: [
      "/placeholder.svg?height=100&width=100&query=hair+oil+bottle+angle1",
      "/placeholder.svg?height=100&width=100&query=hair+oil+bottle+angle2",
      "/placeholder.svg?height=100&width=100&query=hair+oil+bottle+angle3",
    ],
    category: "oils",
    tags: ["moisturizing", "natural", "essential oils"],
    bestSeller: true,
    inStock: true,
    details: {
      ingredients: "Jojoba Oil, Argan Oil, Tea Tree Oil, Lavender Essential Oil, Rosemary Essential Oil, Vitamin E",
      howToUse:
        "Apply a small amount to fingertips and massage into locs and scalp. Use daily or as needed for moisture. Can be used on dry or damp hair.",
      size: "4 fl oz / 120ml",
      benefits: [
        "Hydrates and moisturizes locs",
        "Soothes dry, itchy scalp",
        "Adds natural shine",
        "Promotes healthy hair growth",
        "Prevents breakage",
      ],
    },
    reviews: [
      {
        id: "r1",
        user: "Michelle J.",
        rating: 5,
        date: "2023-03-15",
        title: "Best oil for my locs!",
        comment:
          "I've been using this oil for 3 months and my locs have never looked better. It's lightweight but provides amazing moisture without buildup.",
      },
      {
        id: "r2",
        user: "David W.",
        rating: 4,
        date: "2023-02-28",
        title: "Great product, love the scent",
        comment:
          "This oil has a wonderful natural scent and keeps my locs moisturized all day. The only reason I'm giving 4 stars instead of 5 is that I wish the bottle was a bit larger.",
      },
      {
        id: "r3",
        user: "Tasha R.",
        rating: 5,
        date: "2023-02-10",
        title: "Game changer for my dry scalp",
        comment:
          "I've struggled with dry scalp for years, especially with my locs. This oil has completely transformed my hair care routine. My scalp feels soothed and my locs look amazing!",
      },
    ],
    relatedProducts: [
      {
        id: "p2",
        name: "Clarifying Shampoo",
        price: 18.99,
        image: "/placeholder.svg?key=nih8p",
      },
      {
        id: "p5",
        name: "Deep Conditioning Treatment",
        price: 28.99,
        image: "/placeholder.svg?key=it7c1",
      },
      {
        id: "p7",
        name: "Scalp Soother Spray",
        price: 15.99,
        image: "/placeholder.svg?height=200&width=200&query=hair+spray+bottle",
      },
      {
        id: "p9",
        name: "Silk Loc Wrap",
        price: 34.99,
        image: "/placeholder.svg?height=200&width=200&query=silk+hair+wrap",
      },
    ],
  }

  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(product.image)

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

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
            <Link href={`/shop/category/${product.category}`} className="hover:text-primary">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative rounded-lg overflow-hidden border">
                <Image src={selectedImage || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                {product.bestSeller && (
                  <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary">Best Seller</Badge>
                )}
              </div>
              <div className="flex gap-4">
                <button
                  className={`w-20 h-20 rounded-md overflow-hidden border ${selectedImage === product.image ? "border-primary" : "border-gray-200"
                    }`}
                  onClick={() => setSelectedImage(product.image)}
                >
                  <div className="relative w-full h-full">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                </button>
                {product.additionalImages.map((img, index) => (
                  <button
                    key={index}
                    className={`w-20 h-20 rounded-md overflow-hidden border ${selectedImage === img ? "border-primary" : "border-gray-200"
                      }`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-current" : "fill-none"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>

              <p className="text-muted-foreground mb-6">{product.description}</p>

              <div className="flex items-center mb-6">
                <span className="text-sm font-medium mr-4">Quantity:</span>
                <div className="flex items-center border rounded-md">
                  <button onClick={decrementQuantity} className="px-3 py-2 hover:bg-gray-100" disabled={quantity <= 1}>
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button onClick={incrementQuantity} className="px-3 py-2 hover:bg-gray-100">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button className="bg-primary hover:bg-primary text-black flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
                </Button>
                <Button variant="outline" className="flex-1">
                  <Heart className="h-5 w-5 mr-2" /> Add to Wishlist
                </Button>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex items-start gap-3 mb-2">
                  <Truck className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Free shipping</p>
                    <p className="text-sm text-muted-foreground">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <p className="text-sm">{product.inStock ? "In stock" : "Out of stock"}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Share2 className="h-4 w-4 mr-2" /> Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <Tabs defaultValue="details">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent mb-6">
              <TabsTrigger
                value="details"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Details
              </TabsTrigger>
              <TabsTrigger
                value="how-to-use"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                How to Use
              </TabsTrigger>
              <TabsTrigger
                value="ingredients"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Ingredients
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Reviews ({product.reviews.length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-0">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-medium mb-4">Product Details</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <p className="font-medium mb-2">Benefits:</p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
                  {product.details.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground">Size: {product.details.size}</p>
              </div>
            </TabsContent>
            <TabsContent value="how-to-use" className="mt-0">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-medium mb-4">How to Use</h3>
                <p className="text-muted-foreground">{product.details.howToUse}</p>
              </div>
            </TabsContent>
            <TabsContent value="ingredients" className="mt-0">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-medium mb-4">Ingredients</h3>
                <p className="text-muted-foreground">{product.details.ingredients}</p>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-0">
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-medium">Customer Reviews</h3>
                  <Button>Write a Review</Button>
                </div>
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-b-0">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">{review.title}</h4>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <div className="flex text-primary">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-current" : "fill-none"}`} />
                          ))}
                        </div>
                        <span className="text-sm ml-2">{review.user}</span>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {product.relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/shop/product/${relatedProduct.id}`} className="group">
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center">
                      <span className="font-bold text-sm">${relatedProduct.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Shop */}
      <section className="py-6 bg-gray-50">
        <div className="container">
          <Link href="/shop" className="inline-flex items-center text-primary hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Shop
          </Link>
        </div>
      </section>

      {/* Footer would typically go here */}
    </div>
  )
}
