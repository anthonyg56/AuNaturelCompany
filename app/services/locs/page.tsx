import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export const metadata = {
  title: "Loc Services",
  description: "Expert loc creation, maintenance, and styling services at Au Natural Company in Indianapolis.",
  keywords: ["locs", "dreadlocks", "loc maintenance", "loc styling", "natural hair"]
}

export default function LocsServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gray-700 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Elevate Your Locs</h1>
            <p className="text-lg text-gray-200 mb-6">
              Expert loc creation, maintenance, and styling services for all stages of your loc journey.
            </p>
            <div className="flex gap-4">
              <Button className="bg-amber-400 hover:bg-amber-500 text-black">Book Now</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Starter Loc Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Transform Your Look with Our Expert Starter Loc Services</h2>
              <p className="text-muted-foreground mb-6">
                Ready to begin your loc journey? Our skilled stylists will guide you through the process, ensuring your
                locs start off right with proper technique and care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-medium mb-2">Initial Consultation</h3>
                  <p className="text-sm text-muted-foreground">
                    We begin with a thorough consultation to understand your goals and determine the best approach for
                    your hair type.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Meticulous Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Our loc specialists use proven techniques to start your locs with precision and care for long-term
                    success.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="link" className="text-amber-500 hover:text-amber-600 p-0">
                  Book Now →
                </Button>
                <Button variant="link" className="text-amber-500 hover:text-amber-600 p-0">
                  Learn More →
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-200 aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop"
                alt="Starter loc services"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Essential Loc Revival and Maintenance Services</h2>
              <p className="text-muted-foreground mb-6">
                Maintain the health and appearance of your locs with our comprehensive maintenance services. Our
                specialists ensure your locs remain neat, healthy, and beautiful at every stage.
              </p>
              <p className="text-muted-foreground mb-6">
                Regular maintenance is crucial for the longevity and health of your locs. Our team uses professional
                techniques and high-quality products to keep your locs looking their best while promoting scalp health
                and natural growth.
              </p>
              <div className="flex gap-4">
                <Button variant="link" className="text-amber-500 hover:text-amber-600 p-0">
                  Book Now →
                </Button>
                <Button variant="link" className="text-amber-500 hover:text-amber-600 p-0">
                  Learn More →
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden bg-gray-200 aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop"
                alt="Loc maintenance services"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Styling Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Transform Your Look with Expert Loc Styling</h2>
              <p className="text-muted-foreground mb-6">
                Elevate your loc style with our creative styling services. From elegant updos to intricate patterns, our
                stylists can help you achieve a look that's uniquely yours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-medium mb-2">Styling Options</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore a variety of styling techniques for special occasions or everyday wear that showcase your
                    locs.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Customized Treatments</h3>
                  <p className="text-sm text-muted-foreground">
                    Nourishing treatments that enhance the appearance and health of your locs while providing styling
                    benefits.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="link" className="text-amber-500 hover:text-amber-600 p-0">
                  Book Now →
                </Button>
                <Button variant="link" className="text-amber-500 hover:text-amber-600 p-0">
                  View Gallery →
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-200 aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop"
                alt="Loc styling services"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Explore Our Specialized Loc Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our Au Natural team provides specialized loc services for all hair types and preferences, ensuring each
            client receives personalized care tailored to their unique needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Loc Repair: Restore Your Dreadlocks' Health",
                description: "Expert repair services for damaged or thinning locs, restoring strength and appearance.",
                icon: "/placeholder.svg?height=48&width=48&query=repair",
              },
              {
                title: "Interlocking: Long-Lasting Maintenance for Locs",
                description:
                  "Precision interlocking technique that provides neat, long-lasting results with minimal product use.",
                icon: "/placeholder.svg?height=48&width=48&query=interlocking",
              },
              {
                title: "Detox: Purify and Refresh Your Locs",
                description:
                  "Deep cleansing treatments that remove buildup, impurities, and residue for healthier, lighter locs.",
                icon: "/placeholder.svg?height=48&width=48&query=detox",
              },
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-amber-100 p-4">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="mt-auto pt-4">
                  <Button variant="link" className="text-amber-500 hover:text-amber-600">
                    Learn More →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium mb-6">
              "The team at Au Natural completely transformed my locs. Their expertise and care made all the difference
              in my hair journey."
            </blockquote>
            <div className="flex items-center gap-2">
              <div className="rounded-full overflow-hidden w-10 h-10 bg-gray-200">
                <Image
                  src="/placeholder.svg?height=40&width=40&query=person"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">Tasha Williams</p>
                <p className="text-sm text-muted-foreground">Client for 3 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-amber-50">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Hair Today</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Book an appointment today for expert loc services that will enhance your natural beauty and confidence.
            </p>
            <div className="flex gap-4">
              <Button className="bg-amber-400 hover:bg-amber-500 text-black">Book Now</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Image Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((image) => (
              <div key={image} className="rounded-lg overflow-hidden bg-gray-200 aspect-square">
                <Image
                  src={`/placeholder.svg?height=400&width=400&query=locs%20style%20${image}`}
                  alt={`Loc style example ${image}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
