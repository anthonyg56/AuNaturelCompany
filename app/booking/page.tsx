import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Scissors, User, Phone, Mail, MessageSquare, ChevronRight } from "lucide-react"

export const metadata = {
  title: "Book an Appointment",
  description: "Schedule your natural hair care appointment with our expert stylists at Au Natural Company in Indianapolis.",
  keywords: ["book appointment", "hair salon booking", "loc maintenance", "Indianapolis salon", "schedule haircut"]
}

export default function BookingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Info Bar
      <section className="py-6 border-b">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <User className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-sm">About Us</h3>
                <p className="text-xs text-muted-foreground">Discover our expertise in loc and natural hair services</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <MessageSquare className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Testimonials</h3>
                <p className="text-xs text-muted-foreground">Read what our clients say about our services</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <Phone className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Contact Us</h3>
                <p className="text-xs text-muted-foreground">Call or email us for any further needs</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <Mail className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Connect</h3>
                <p className="text-xs text-muted-foreground">Connect with our team of hair professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      {/*<section className="py-4 bg-gray-50">
        <div className="container">
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Looking for a new stylist? Get in touch"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="absolute right-1 top-1 bg-primary hover:bg-primary text-black h-8">Search</Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Hero Section */}
      <section className="relative py-32 md:py-48">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop"
            alt="Natural hair styling"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <p className="text-primary font-medium mb-4">Effortless Booking</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Book Your Style</h1>
            <p className="text-xl mb-8 text-gray-100">
              Schedule your perfect loc maintenance or barbering appointment with just a few clicks. Experience
              professional, personalized hair care tailored to your unique style at The Au Natural Company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-primary hover:bg-primary text-black text-lg px-8 py-6">
                <Link href="/schedule">
                  Schedule Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Description */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Effortless Booking: Secure Your Appointment with Just a Few Clicks
            </h2>
            <p className="text-muted-foreground mb-8">
              Booking your appointment at The Au Natural Company is simple and straightforward. Start by selecting the
              service you require, optionally pick a loc technician or a hair stylist. Then choose your preferred time &
              you&apos;re confirmed! Quick and easy, future-proof booking for you.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4 shadow-sm">
                <Scissors className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Step 1: Choose Your Desired Service</h3>
              <p className="text-sm text-muted-foreground mb-4">Select our range of loc and natural hair services</p>
              <Button variant="link" className="text-primary hover:text-primary">
                Select <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4 shadow-sm">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Step 2: Optional Stylist Selection</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Choose from our talented stylists (skip this step if you prefer)
              </p>
              <Button variant="link" className="text-primary hover:text-primary">
                Choose <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4 shadow-sm">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Step 3: Pick Your Date and Time</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Select a convenient time slot that fits your schedule
              </p>
              <Button variant="link" className="text-primary hover:text-primary">
                Book <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
          <p className="text-center text-muted-foreground mb-12">
            Find answers to your booking questions and learn about our policies.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg p-2">
              <AccordionTrigger className="text-left font-medium">How do I book?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Booking is simple! Click on the &quot;Book Now&quot; button on our scheduling system, select your
                desired service, and choose a date and time that works for you. You can also call us at (317) 555-1234
                if you prefer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg p-2">
              <AccordionTrigger className="text-left font-medium">Can I change my stylist?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                If you&apos;ve already booked but would like to change the booking for another stylist, just give us a
                call or send an email. We&apos;ll be happy to accommodate you based on availability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg p-2">
              <AccordionTrigger className="text-left font-medium">What is your cancellation policy?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We understand that plans change. If you need to cancel or reschedule, please do so at least 24 hours in
                advance to avoid any cancellation fees. You can do this online or give us a call or email.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg p-2">
              <AccordionTrigger className="text-left font-medium">What services do you offer?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer a wide range of services including loc creation, maintenance, advanced styling, and natural
                hair care. Our skilled team is also experienced in professional barbering services. You can view all our
                services, pricing, and what to expect before your visit on our website.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg p-2">
              <AccordionTrigger className="text-left font-medium">Can I reschedule my appointment?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, you can easily reschedule your appointment through our online booking system. Simply log in with
                your email and booking number, select your existing appointment, and choose a new time. If you have any
                issues, feel free to reach out to us.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg p-2">
              <AccordionTrigger className="text-left font-medium">How do I pay?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We accept most payment methods, including credit cards, debit cards, and cash. Payments can be made
                directly through our online booking system or in person at the salon. For convenience, we also accept
                tips electronically.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg p-2">
              <AccordionTrigger className="text-left font-medium">What if I&apos;m late?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                If you arrive late, we&apos;ll do our best to accommodate you. However, please note that your service
                may be shortened to ensure we stay on schedule for other clients. If you&apos;re running more than 15
                minutes late, please call us to confirm if we can still accommodate your appointment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg p-2">
              <AccordionTrigger className="text-left font-medium">Do you take walk-ins?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                While we prioritize appointments, we do accept walk-ins based on availability. For the best service
                experience, we recommend booking in advance whenever possible, especially for more complex services like
                loc maintenance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border rounded-lg p-2">
              <AccordionTrigger className="text-left font-medium">Do you offer refunds?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We strive for 100% customer satisfaction and believe our customers are fair. If you have any concerns
                about your service, we want to make it right. Our team is always ready to address any issues to ensure
                your complete satisfaction.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border rounded-lg p-2">
              <AccordionTrigger className="text-left font-medium">Still have questions?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                If you have more questions or need assistance, we&apos;re here to help! Reach out via our contact form
                or give us a call. Our team is ready to answer any additional questions you may have.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
            <Button variant="outline" className="text-primary hover:text-primary" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Appointment Today!</h2>
          <p className="text-muted-foreground mb-8">
            Experience the best in loc care and styling. Special offers available for first-time clients!
          </p>
          <Button className="bg-primary hover:bg-primary text-black">Book Now</Button>
          <Button variant="link" className="ml-4">
            Learn More
          </Button>
        </div>
      </section>
    </div>
  )
}
