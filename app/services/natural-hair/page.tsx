import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Sparkles, Scissors, Shield } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Natural Hair Services",
  description: "Specialized natural hair care services including styling, treatments, and maintenance at Au Natural Company.",
  keywords: ["natural hair", "hair care", "styling", "treatments", "natural hair maintenance"]
}

export default function NaturalHairServicesPage() {
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
            <h1 className="text-4xl font-bold mb-4">Natural Hair Excellence</h1>
            <p className="text-xl mb-6">
              Specialized care and styling for all natural hair textures, celebrating your hair's unique beauty.
            </p>
            <div className="flex gap-4">
              <Button className="bg-amber-400 hover:bg-amber-500 text-black" asChild>
                <Link href="/schedule?service=locs">Schedule Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Expert Natural Hair Services Tailored for You</h2>
              <p className="text-muted-foreground mb-6">
                At Au Natural, we specialize in caring for and styling natural hair of all textures. Our expert stylists
                understand the unique needs of natural hair and provide personalized services to enhance your hair's
                natural beauty.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-medium mb-2">Texture Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    Our stylists are trained in all natural hair textures from 3A to 4C, ensuring proper care for your
                    specific needs.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Healthy Approach</h3>
                  <p className="text-sm text-muted-foreground">
                    We prioritize hair health, using techniques and products that nourish and strengthen your natural
                    hair.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="link" className="text-amber-500 hover:text-amber-600 p-0" asChild>
                  <Link href="/schedule?service=natural-hair">Book Consultation →</Link>
                </Button>
                <Button variant="link" className="text-amber-500 hover:text-amber-600 p-0" asChild>
                  <Link href="/gallery">View Gallery →</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden bg-gray-200 aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1594359850729-e8953a201f85?q=80&w=800&auto=format&fit=crop"
                alt="Natural hair styling"
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
          <h2 className="text-3xl font-bold text-center mb-4">Our Specialized Natural Hair Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We offer a comprehensive range of services designed specifically for natural hair, focusing on health,
            growth, and beautiful styling options.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Silk Press & Straightening",
                description:
                  "Achieve sleek, smooth results without damage using our gentle heat styling techniques and protective products.",
                icon: <Scissors className="h-6 w-6 text-amber-500" />,
              },
              {
                title: "Protective Styling",
                description:
                  "Beautiful braids, twists, and updos that protect your natural hair while promoting growth and reducing manipulation.",
                icon: <Shield className="h-6 w-6 text-amber-500" />,
              },
              {
                title: "Curl Definition & Styling",
                description:
                  "Enhance your natural curl pattern with specialized techniques that define, moisturize, and showcase your curls.",
                icon: <Sparkles className="h-6 w-6 text-amber-500" />,
              },
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg">
                <div className="mb-4 rounded-full bg-amber-100 p-4">{service.icon}</div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2 rounded-lg overflow-hidden bg-gray-200 aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop"
                alt="Hair treatment services"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Revitalizing Hair Treatments</h2>
              <p className="text-muted-foreground mb-6">
                Our specialized treatments address common natural hair concerns like dryness, breakage, and scalp
                health, restoring moisture, strength, and vitality to your hair.
              </p>

              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-amber-400 pl-4">
                  <h3 className="font-medium mb-1">Deep Conditioning Treatments</h3>
                  <p className="text-sm text-muted-foreground">
                    Intensive moisture replenishment for dry, damaged hair using premium, natural ingredients.
                  </p>
                </div>
                <div className="border-l-4 border-amber-400 pl-4">
                  <h3 className="font-medium mb-1">Protein Treatments</h3>
                  <p className="text-sm text-muted-foreground">
                    Strengthen fragile or over-processed hair with our restorative protein treatments.
                  </p>
                </div>
                <div className="border-l-4 border-amber-400 pl-4">
                  <h3 className="font-medium mb-1">Scalp Therapy</h3>
                  <p className="text-sm text-muted-foreground">
                    Address scalp concerns and promote healthy hair growth with our specialized scalp treatments.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="link" className="text-amber-500 hover:text-amber-600 p-0" asChild>
                  <Link href="/schedule?service=natural-hair">Book Treatment →</Link>
                </Button>
                <Button variant="link" className="text-amber-500 hover:text-amber-600 p-0" asChild>
                  <Link href="/contact">Contact Us →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styling Showcase Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Natural Hair Styling Showcase</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Explore the versatility of natural hair with our styling options that celebrate texture and individuality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((image) => (
              <div key={image} className="rounded-lg overflow-hidden bg-gray-200 aspect-square">
                <Image
                  src={`/placeholder.svg?height=400&width=400&query=natural%20hair%20style%20${image}`}
                  alt={`Natural hair style example ${image}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-amber-400 text-amber-600 hover:bg-amber-50" asChild>
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hair Care Education Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Natural Hair Care Education</h2>
              <p className="text-muted-foreground mb-6">
                We believe in empowering our clients with knowledge about their natural hair. Our stylists provide
                personalized advice and demonstrations to help you maintain your hair between appointments.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-medium mb-1">Personalized Hair Care Routines</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn the best practices for your specific hair type and concerns with customized routines.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Product Recommendations</h3>
                  <p className="text-sm text-muted-foreground">
                    Get expert advice on which products will work best for your hair's unique needs.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Styling Tutorials</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn techniques to recreate salon styles at home and maintain your hair's health and beauty.
                  </p>
                </div>
              </div>

              <Button className="bg-amber-400 hover:bg-amber-500 text-black" asChild>
                <Link href="/schedule?service=natural-hair">Schedule Consultation</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden bg-gray-200 aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop"
                alt="Hair care education"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-amber-50">
        <div className="container max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium mb-6">
              "Finding stylists who truly understand natural hair can be challenging. The team at Au Natural not only
              understands my hair but has taught me how to care for it properly. My curls have never been healthier!"
            </blockquote>
            <div className="flex items-center gap-2">
              <div className="rounded-full overflow-hidden w-10 h-10 bg-gray-200">
                <Image
                  src="/placeholder.svg?height=40&width=40&query=woman"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">Michelle Johnson</p>
                <p className="text-sm text-muted-foreground">Loyal Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-4">Embrace Your Natural Beauty</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Book an appointment today and experience the difference of specialized natural hair care from our expert
              stylists.
            </p>
            <div className="flex gap-4">
              <Button className="bg-amber-400 hover:bg-amber-500 text-black" asChild>
                <Link href="/schedule?service=natural-hair">Book Now</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

