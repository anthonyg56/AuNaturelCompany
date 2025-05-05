import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter, ArrowRight } from "lucide-react"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import QueriedImage from "@/components/queried-image"
import { AccentText } from "@/components/accent-text"

export const metadata = {
  title: "Au Natural Company",
  description: "Au Natural Company is a natural hair salon in Indianapolis, Indiana.",
}

export default function Home() {

  const testimonials = [
    {
      quote: "The best locs are created with love and care, and that's exactly what we deliver.",
      author: "Tara Richardson",
      role: "Founder, Au Natural Company",
    },
    {
      quote: "I've never felt more confident with my hair. The team at Au Natural truly understands natural hair.",
      author: "Michelle Johnson",
      role: "Client",
    },
    {
      quote:
        "Professional, knowledgeable, and truly passionate about their craft. I wouldn't trust my locs with anyone else.",
      author: "David Williams",
      role: "Client",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Transform Your <AccentText variant="primary" shade="base">Hair</AccentText>,
                  <br />
                  Transform Your <AccentText variant="secondary">Life</AccentText>
                </h1>
                <p className="text-muted-foreground">
                  At Au Natural Company, we specialize in creating{" "}
                  <AccentText variant="primary" shade="base">beautiful locs</AccentText> that enhance your natural beauty. Our expert
                  locticians are dedicated to providing{" "}
                  <AccentText variant="secondary">exceptional service</AccentText> and
                  care for your hair journey.
                </p>
                <Button className="bg-primary hover:bg-primary-dark text-black" asChild>
                  <Link href="/booking">Book Now</Link>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden bg-muted aspect-square">
                <QueriedImage
                  alt="Natural hair styling"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  query="natural-hair-styling-professional-salon"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Excellence Section */}
        <section className="py-16 md:py-32 bg-slate-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden bg-muted aspect-square">
                <QueriedImage
                  alt="Dreadlock styling"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  query="professional-dreadlock-styling-expert"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-sm font-medium uppercase">
                  <AccentText variant="primary" shade="base">Excellence</AccentText>
                </h2>
                <h3 className="text-3xl font-bold">
                  Your Destination for <AccentText variant="primary" shade="base">Dreadlock</AccentText> Excellence
                </h3>
                <p className="text-muted-foreground">
                  At Au Natural Company, we take <AccentText variant="secondary">pride</AccentText> in our expertise in
                  creating and maintaining beautiful locs. Our skilled locticians use the finest techniques and products
                  to ensure your locs look their <AccentText variant="primary" shade="base">best</AccentText>. Whether you're starting
                  your loc journey or maintaining your style, we're here to help.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" className="text-primary hover:text-primary hover:bg-primary" asChild>
                    <Link href="/services">
                      View Services
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-32">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                Your <AccentText variant="primary" shade="base">Hair</AccentText>, Your{" "}
                <AccentText variant="secondary">Style</AccentText>
              </h2>
              <p className="text-muted-foreground mt-2">Expert care for beautiful locs that suit your unique style</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 rounded-xl overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-48 md:h-auto relative bg-gray-200">
                  <QueriedImage
                    alt="Gallery"
                    fill
                    className="object-cover"
                    query="hair cut"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium text-lg mb-1">Our work speaks for itself</h3>
                    <p className="text-sm text-muted-foreground mb-4">Check out our gallery of work over the years</p>
                  </div>
                  <Link
                    href="/gallery"
                    className="text-sm font-medium flex items-center hover:text-primary transition-colors"
                  >
                    View <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-48 md:h-auto relative bg-gray-200">
                  <QueriedImage
                    alt="Booking Appointment"
                    fill
                    className="object-cover"
                    query="booking-appointment"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium text-lg mb-1">Informative classes on locing hair (coming soon)</h3>
                    <p className="text-sm text-muted-foreground mb-4">Check out our courses starting at $50</p>
                  </div>
                  <Link
                    href="/courses"
                    className="text-sm font-medium flex items-center hover:text-primary transition-colors"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-48 md:h-auto relative bg-gray-200">
                  <QueriedImage
                    alt="Natural Barbering and Styling Services"
                    fill
                    className="object-cover"
                    query="natural-barbering-styling-services"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium text-lg mb-1">Natural Barbering and Styling Services</h3>
                    <p className="text-sm text-muted-foreground mb-4">Starting as low as $30.</p>
                  </div>
                  <Link
                    href="/services"
                    className="text-sm font-medium flex items-center hover:text-primary transition-colors"
                  >
                    Explore <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Team Section */}
        <section className="py-16 md:py-32 bg-slate-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Experience <AccentText variant="primary" shade="base">Exceptional</AccentText> Loc Care with Our{" "}
                  <AccentText variant="secondary">Expert Team</AccentText> in Indianapolis
                </h2>
                <p className="text-muted-foreground">
                  At Au Natural Company, our skilled team is dedicated to providing the highest quality loc services.
                  With years of <AccentText variant="primary" shade="base">experience</AccentText> and continuous education, our
                  locticians are experts in all aspects of loc creation, maintenance, and styling. We take pride in our
                  work and are committed to helping you achieve the look you{" "}
                  <AccentText variant="secondary">desire</AccentText>.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden bg-muted aspect-square">
                <QueriedImage
                  alt="Our expert team"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  query="professional-hair-stylist-team-salon"
                />
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" className="text-primary hover:text-primary hover:bg-primary" asChild>
                <Link href="/about#team">
                  View All Team Members
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-32">
          <div className="container grid gap-y-9">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">
                Our <AccentText variant="primary" shade="base">Team</AccentText>
              </h2>
              <p className="text-muted-foreground mt-2">Meet our talented team of locticians at Au Natural Company</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  name: "Tara Richardson",
                  role: "Founder",
                  bio: "With over 10 years of experience, Tara brings expertise and passion to every client.",
                  image: "portrait-professional-black-woman-business-attire",
                },
                {
                  name: "Jasmine Smith",
                  role: "Senior Loctician",
                  bio: "Jasmine specializes in intricate loc designs and maintenance techniques.",
                  image: "portrait-confident-black-woman-stylist",
                },
                {
                  name: "John Coleman",
                  role: "Loctician",
                  bio: "John is known for his precision and attention to detail in creating perfect locs.",
                  image: "portrait-professional-black-man-smiling",
                },
                {
                  name: "Olivia Lee",
                  role: "Stylist",
                  bio: "Olivia brings creativity and innovation to styling and maintaining locs.",
                  image: "portrait-creative-black-woman-stylist",
                },
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-muted mb-4 overflow-hidden">
                    <QueriedImage
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                      query={member.image}
                    />
                  </div>
                  <h3 className="font-medium text-lg">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="text-xs mt-2 mb-4 text-slate-600">{member.bio}</p>
                  <div className="flex gap-3 mb-4">
                    <button className="text-primary hover:text-primary transition-colors">
                      <Instagram className="h-5 w-5" />
                    </button>
                    <button className="text-primary hover:text-primary transition-colors">
                      <Facebook className="h-5 w-5" />
                    </button>
                    <button className="text-primary hover:text-primary transition-colors">
                      <Twitter className="h-5 w-5" />
                    </button>
                  </div>
                  <Button variant="outline" size="sm" className="">
                    <Link href="/services">Book Now</Link>
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold mb-2">
                We're <span className="text-primary">hiring</span>!
              </h3>
              <p className="text-muted-foreground mb-4">If you're passionate about natural hair, join our team!</p>
              <Button variant="outline" asChild>
                <Link href="/careers">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialCarousel testimonials={testimonials} />

        {/* CTA Section */}
        <section className="py-16 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="block md:hidden rounded-lg overflow-hidden bg-muted aspect-video">
                <QueriedImage
                  alt="Our salon"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  query="modern-hair-salon-interior"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Transform Your <AccentText variant="primary" shade="base">Hair</AccentText> Today
                </h2>
                <p className="text-muted-foreground">
                  Book a professional consultation with our{" "}
                  <AccentText variant="secondary">expert locticians</AccentText> to
                  start your loc journey.
                </p>
                <Button className="bg-primary hover:bg-primary-dark text-black" asChild>
                  <Link href="/booking">Book Now</Link>
                </Button>
              </div>
              <div className="hidden md:block rounded-lg overflow-hidden bg-muted aspect-video">
                <QueriedImage
                  alt="Our salon"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  query="modern-hair-salon-interior"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
