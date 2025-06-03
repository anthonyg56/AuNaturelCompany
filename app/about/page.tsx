import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { Input } from "@/components/ui/input"
import PageSection from "@/components/PageSection"

export const metadata = {
  title: "About Us",
  description: "Learn about Au Natural Company's mission, values, and expert team of natural hair care professionals in Indianapolis.",
  keywords: ["about us", "hair salon", "natural hair care", "Indianapolis salon", "loc specialists"]
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <PageSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-sm text-primary">About</p>
            <h1 className="text-4xl font-bold tracking-tight">Your Natural Beauty</h1>
            <p className="text-muted-foreground">
              At Au Natural Company, we are dedicated to providing exceptional natural hair services in Indianapolis.
              Our mission is to enhance your natural beauty through expert craftsmanship and personalized care.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary text-black" asChild>
                <Link href="/booking">Book Now</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Commitment Section */}
      <PageSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-sm text-primary">Values</p>
            <h2 className="text-3xl font-bold">Our Commitment to Natural Hair Excellence</h2>
            <p className="text-muted-foreground">
              At Au Natural Company, we take excellence as our daily source of inspiration. We believe in the power of
              natural beauty and are committed to helping each client express themselves through high-quality,
              low-fuss, stunning locks. Commitment to excellence is what we stand by.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden bg-muted aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&h=600&auto=format&fit=crop"
              alt="Natural hair styling"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </PageSection>

      {/* Team Section */}
      <PageSection id="team">
        <div className="mb-12">
          <p className="text-sm text-primary">Expertise</p>
          <h2 className="text-3xl font-bold">Our Team</h2>
          <p className="text-muted-foreground mt-2">Meet our talented professionals dedicated to your hair needs</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            {
              name: "Tara Richardson",
              role: "Lead Stylist",
              bio: "With 10 years of experience, Tara brings creativity and precision to every client's natural hair journey.",
              image:
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&h=150&auto=format&fit=crop",
            },
            {
              name: "Jordan Smith",
              role: "Stylist",
              bio: "Jordan brings creativity and passion to creating stunning natural hairstyles.",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
            },
            {
              name: "Mia Johnson",
              role: "Senior Loctician",
              bio: "Mia is known for her precision and care in creating beautiful, healthy locs.",
              image:
                "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&h=150&auto=format&fit=crop",
            },
            {
              name: "Taylor Lee",
              role: "Hair Technician",
              bio: "Taylor focuses on hair health and brings scientific knowledge to natural hair care.",
              image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop",
            },
            {
              name: "Olivia Rivera",
              role: "Colorist",
              bio: "A color specialist who creates beautiful, natural-looking color that enhances your style.",
              image:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
            },
            {
              name: "We're Hiring",
              role: "",
              bio: "Join our team! Send your application to careers@aunaturalcompany.com",
              image: "",
            },
            {
              name: "Open Position",
              role: "Receptionist",
              bio: "We're looking for a passionate, organized individual to join our front desk team.",
              image: "",
            },
            {
              name: "Join Us",
              role: "Apprentice",
              bio: "Start your career in hair design! We offer training and mentorship opportunities.",
              image: "",
            },
          ].map((member, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-16 h-16 rounded-full bg-muted mb-4 overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                    <span className="text-slate-400 text-xs">+</span>
                  </div>
                )}
              </div>
              <h3 className="font-medium">{member.name}</h3>
              {member.role && <p className="text-sm text-primary">{member.role}</p>}
              <p className="text-xs mt-2 mb-3 text-slate-600">{member.bio}</p>
              <div className="flex gap-2 mt-auto">
                {member.image && (
                  <>
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <Instagram className="h-4 w-4" />
                    </button>
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <Facebook className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* We're Hiring Section */}
      <PageSection className="py-12 bg-slate-50">
        <h2 className="text-2xl font-bold mb-4">We're Hiring!</h2>
        <p className="text-muted-foreground mb-6">Join our team of talented hair professionals and grow with us!</p>
        <Button variant="outline" asChild>
          <Link href="/careers">View Positions</Link>
        </Button>
      </PageSection>

      {/* Journey Section */}
      <PageSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Discover Our Journey: Years of Excellence in Dreadlock Services</h2>
            <p className="text-muted-foreground">
              With over a decade of experience, we have proudly served thousands of satisfied clients. Our commitment
              to quality and customer service sets us apart in the industry.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <p className="text-4xl font-bold text-primary">95%</p>
                <p className="text-sm text-muted-foreground">
                  Client satisfaction rate based on feedback and reviews
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">1000+</p>
                <p className="text-sm text-muted-foreground">
                  Happy clients served, returning, and loyal since years ago
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden bg-muted aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=600&h=600&auto=format&fit=crop"
              alt="Our journey"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </PageSection>

      {/* Join Our Journey Section */}
      <PageSection className="py-16 bg-slate-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Join Our Natural Hair Journey</h2>
          <p className="text-muted-foreground">Book your appointment today or explore our service menu</p>
        </div>
        <div className="flex justify-center gap-4">
          <Button className="bg-primary hover:bg-primary text-black" asChild>
            <Link href="/bookings">Book</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/shop">Shop</Link>
          </Button>
        </div>
      </PageSection>
    </div>
  )
}
