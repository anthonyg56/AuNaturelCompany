import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Haircut Services",
  description: "Professional haircuts, fades, and barbering services at Au Natural Company in Indianapolis.",
  keywords: ["haircuts", "fades", "barbering", "men's haircuts", "Indianapolis barber"]
}

export default function BarberServicesPage() {
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
            <h1 className="text-4xl font-bold mb-4">Expert Barber Services</h1>
            <p className="text-xl mb-6">
              Experience precision haircuts, custom lineups, and expert styling from our team of skilled barbers.
            </p>
            <div className="flex gap-4">
              <Button className="bg-amber-400 hover:bg-amber-500 text-black" asChild>
                <Link href="/schedule?service=locs">Schedule Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tailored Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="block md:hidden rounded-lg overflow-hidden bg-gray-200 aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop"
                alt="Barbering services"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Expert Barbering Services Tailored for You</h2>
              <p className="text-muted-foreground mb-6">
                Our barbering services are designed to deliver exactly what you need. From classic cuts to modern
                styles, our skilled barbers bring expertise and attention to detail to every appointment.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-medium mb-2">Skilled Barbers</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team of experienced barbers are experts in all hair types and styles.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Clean Facilities</h3>
                  <p className="text-sm text-muted-foreground">
                    We maintain a clean, modern environment for your comfort and safety.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="link" className="text-amber-500 hover:text-amber-600 p-0" asChild>
                  <Link href="/schedule?service=haircut">Book Now →</Link>
                </Button>
                <Button variant="link" className="text-amber-500 hover:text-amber-600 p-0" asChild>
                  <Link href="/contact">Contact Us →</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block rounded-lg overflow-hidden bg-gray-200 aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop"
                alt="Barbering services"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Expert Barbering Services Tailored for You</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Haircuts and Grooming",
                description:
                  "Expert cuts tailored to your face shape and style preferences. Includes consultation, wash, cut, and styling.",
                icon: "/placeholder.svg?key=uvvwz",
              },
              {
                title: "Custom Lineups for a Polished Look",
                description:
                  "Precision edge work and lineups to define your style. Perfect for maintaining a clean, sharp appearance between cuts.",
                icon: "/placeholder.svg?key=qf0z7",
              },
              {
                title: "Barbering Services for Every Style",
                description:
                  "From classic cuts to modern trends, our barbers are skilled in creating the perfect look for any preference or occasion.",
                icon: "/placeholder.svg?key=9ubzq",
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

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="block md:hidden rounded-lg overflow-hidden bg-gray-200 aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop"
                alt="Barbering experience"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Experience Exceptional Barbering at Our Salon</h2>
              <p className="text-muted-foreground mb-6">
                At Au Natural Company, we offer more than just haircuts – we provide a complete grooming experience. Our
                skilled barbers combine traditional techniques with modern trends to deliver results that exceed
                expectations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Expert Craftsmanship</h3>
                  <p className="text-sm text-muted-foreground">
                    Our barbers combine technical expertise with artistic vision to create perfect cuts every time.
                  </p>
                </div>
                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Relaxing Atmosphere</h3>
                  <p className="text-sm text-muted-foreground">
                    Enjoy a comfortable environment designed for relaxation during your grooming experience.
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
            <div className="hidden md:block rounded-lg overflow-hidden bg-gray-200 aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop"
                alt="Barbering experience"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Meet our skilled barbers with years of grooming expertise.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mike Barber",
                title: "Master Barber",
                bio: "With over 10 years of experience, Mike specializes in classic cuts and precision fading.",
                image: "/placeholder.svg?key=ji70r",
              },
              {
                name: "Jordan Smith",
                title: "Style Specialist",
                bio: "Jordan brings creativity and technical skill to every haircut, specializing in modern trends.",
                image: "/placeholder.svg?key=9ulja",
              },
              {
                name: "Alex Johnson",
                title: "Senior Barber",
                bio: "Alex is known for attention to detail and creating custom styles that match each client's unique look.",
                image: "/placeholder.svg?height=300&width=300&query=barber%20portrait%203",
              },
              {
                name: "Taylor Lee",
                title: "Barber Stylist",
                bio: "Taylor's passion for hair makes every client feel confident and looking their best.",
                image: "/placeholder.svg?height=300&width=300&query=barber%20portrait%204",
              },
              {
                name: "Morgan Davis",
                title: "Master Specialist",
                bio: "Morgan specializes in beard grooming and facial hair styling for a complete look.",
                image: "/placeholder.svg?height=300&width=300&query=barber%20portrait%205",
              },
              {
                name: "Riley Mitchell",
                title: "Junior Barber",
                bio: "Coming up through our training program, Riley brings fresh ideas and enthusiasm to our team.",
                image: "/placeholder.svg?height=300&width=300&query=barber%20portrait%206",
              },
            ].map((barber, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full overflow-hidden w-32 h-32 bg-gray-200">
                  <Image
                    src={barber.image || "/placeholder.svg"}
                    alt={barber.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">{barber.name}</h3>
                <p className="text-amber-500 mb-2">{barber.title}</p>
                <p className="text-sm text-muted-foreground mb-4">{barber.bio}</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-6">Open Positions</h2>
          <p className="text-center text-muted-foreground mb-8">
            Looking to join our team? We are currently hiring for the following positions.
          </p>
          <div className="flex justify-center">
            <Button className="bg-amber-400 hover:bg-amber-500 text-black">Apply Now</Button>
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
              "They transformed my look with a perfect blend of my ideas and their expertise. I'll definitely be back
              for my next haircut!"
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
                <p className="font-medium">James Rodriguez</p>
                <p className="text-sm text-muted-foreground">Loyal Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-amber-50">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Look Today</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Book an appointment today for a professional barbering experience that will exceed your expectations.
            </p>
            <div className="flex gap-4">
              <Button className="bg-amber-400 hover:bg-amber-500 text-black">Book Now</Button>
              <Button variant="outline">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
