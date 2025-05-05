import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Our Services",
  description: "Explore our comprehensive natural hair care services including loc maintenance, styling, and barbering at Au Natural Company.",
  keywords: ["hair services", "loc maintenance", "natural hair care", "barbering", "hair styling"]
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gray-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight">Expert Loc Services</h1>
              <p className="text-gray-200">
                Discover our transformation magic effect, and extend full services to build for your unique style.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-full h-32 bg-gray-500 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Loc Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">Explore Our Comprehensive Loc Services for All Your Hair Needs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Transform Your Locs with Our Expert Installation Services",
                href: "/schedule?service=locs&type=starter",
                description: "Get started on your loc journey with our expert team for the best results.",
                image: "https://media.istockphoto.com/id/2152073854/photo/mens-beauty-making-braids.jpg?s=1024x1024&w=is&k=20&c=ZfP26nkGtkpj3wtfIWYWVhnD2tBMUoMpwmKf8cD0yec=",
              },
              {
                title: "Strengthen Your Hair Journey to Beautiful, Healthy Dreadlocks",
                href: "/schedule?service=locs&type=maintenance",
                description: "Regular maintenance for your locs.",
                image: "https://media.istockphoto.com/id/2152073854/photo/mens-beauty-making-braids.jpg?s=1024x1024&w=is&k=20&c=ZfP26nkGtkpj3wtfIWYWVhnD2tBMUoMpwmKf8cD0yec=",
              },
              {
                title: "Refresh, Maintain Your Locs with Precision and Care",
                href: "/schedule?service=locs&type=retwist",
                description: "Our professional team ensures the longevity and overall health of your locs.",
                image: "https://media.istockphoto.com/id/2152073854/photo/mens-beauty-making-braids.jpg?s=1024x1024&w=is&k=20&c=ZfP26nkGtkpj3wtfIWYWVhnD2tBMUoMpwmKf8cD0yec=",
              },
            ].map((service, index) => (
              <div key={index} className="border rounded-lg overflow-hidden flex flex-col h-full">
                <div className="aspect-video w-full bg-gray-100">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-medium text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.description}</p>
                  <div className="flex gap-4">
                    <Button variant="link" className="text-amber-500 hover:text-amber-600 p-0" asChild>
                      <Link href={service.href}>Book Now <ArrowRight className="h-4 w-4 ml-1" /></Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" className="mt-8" asChild>
              <Link href="/services/locs">View All Loc Services <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Barbering Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Expert Barbering Services</h2>
            <p className="text-muted-foreground mt-2">Precision cuts and stylish finishes for every look</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Full Barbering Services",
                href: "/schedule?service=haircuts&type=full",
                description: "Haircuts and fades.",
                image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=300&auto=format&fit=crop",
              },
              {
                title: "Haircuts Tailored to You",
                href: "/schedule?service=haircuts&type=custom",
                description: "Fresh cuts, fades, and more for every style.",
                image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=300&auto=format&fit=crop",
              },
              {
                title: "Lineups",
                href: "/schedule?service=haircuts&type=lineup",
                description: "Sharp, straight edges for a clean look.",
                image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=300&auto=format&fit=crop",
              },
            ].map((service, index) => (
              <div key={index} className="border rounded-lg overflow-hidden flex flex-col h-full">
                <div className="aspect-video w-full bg-gray-100">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-[375px] object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-medium text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.description}</p>
                  <div className="flex gap-4">
                    <Button variant="link" className="text-amber-500 hover:text-amber-600 p-0" asChild>
                      <Link href={service.href}>Book Now →</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" className="mt-8" asChild>
              <Link href="/services/haircuts">View All Barbering Services <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Natural Hair Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Explore Our Natural Hair Services</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              At Au Natural Company, we offer a range of specialized natural hair services designed to enhance your
              natural beauty. From styling to treatments, our expert team is here to help you achieve your natural
              beauty goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Silk Press: Smooth and Sleek Finish",
                href: "/schedule?service=natural-hair&type=silk-press",
                description:
                  "Achieve a silky, straight style without the damage of heat styling tools. Our silk press service leaves your hair smooth and shiny.",
                image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=300&auto=format&fit=crop",
              },
              {
                title: "Braids: Versatile Styles for Every Occasion",
                href: "/schedule?service=natural-hair&type=braids",
                description:
                  "From simple to intricate, our braiding services offer versatile styles that protect and enhance your natural hair.",
                image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=300&auto=format&fit=crop",
              },
              {
                title: "Customized Hair Care: Tailored Just for You",
                href: "/schedule?service=natural-hair&type=custom",
                description:
                  "Our personalized hair care services are designed to address your specific hair needs and goals.",
                image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=300&auto=format&fit=crop",
              },
            ].map((service, index) => (
              <div key={index} className="border rounded-lg overflow-hidden flex flex-col h-full">
                <div className="aspect-video w-full bg-gray-100">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-medium text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.description}</p>
                  <div className="flex gap-4">
                    <Button variant="link" className="text-amber-500 hover:text-amber-600 p-0" asChild>
                      <Link href={service.href}>Book Now <ArrowRight className="h-4 w-4 ml-1" /></Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" className="mt-8" asChild>
              <Link href="/services/natural-hair">View All Natural Hair Services <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Ready for Your New Look?</h2>
              <p className="text-muted-foreground">
                Transform your hair with our expert loc services and natural hair care. Book your appointment today and
                let our skilled team bring out your best look.
              </p>
              <div className="flex gap-4">
                <Button className="bg-amber-400 hover:bg-amber-500 text-black" asChild>
                  <Link href="/bookings">Book Now</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">{/* This would be an image in the actual design */}</div>
          </div>
        </div>
      </section>
    </div>
  )
}
