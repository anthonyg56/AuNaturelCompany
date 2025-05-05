"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, MapPin } from "lucide-react"
import { GOOGLE_API_KEY } from "@/lib/constants"

// TODO: Add metadata after converting this page to a server component
// export const metadata = {
//   title: "Contact Us",
//   description: "Get in touch with Au Natural Company. Contact our team for appointments, questions, or consultations.",
//   keywords: ["contact", "hair salon", "Indianapolis salon", "appointment", "consultation"]
// }

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    preferredContact: "email",
    serviceInterest: [],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Contact Form Section */}
      <section className="py-12">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-sm text-primary mb-2">Contact</p>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject & Topic</Label>
              <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[120px]"
                required
              />
            </div>

            <div className="space-y-4">
              <Label>Preferred Contact Method</Label>
              <RadioGroup
                defaultValue="email"
                onValueChange={(value) => setFormData((prev) => ({ ...prev, preferredContact: value }))}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email-option" />
                  <Label htmlFor="email-option">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="phone-option" />
                  <Label htmlFor="phone-option">Phone Call</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="office" id="office-option" />
                  <Label htmlFor="office-option">Office</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  terms of service
                </Link>
              </Label>
            </div>

            <div className="flex justify-end">
              <Button type="submit" className="bg-primary hover:bg-primary text-black">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-32 bg-gray-50">
        <div className="container">
          <div className="text-center mb-8">
            <p className="text-sm text-primary mb-2">Support</p>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">We're here to assist you with any questions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Reach out via email for any inquiries or appointment requests.
              </p>
              <a href="mailto:info@aunaturalcompany.com" className="text-primary hover:underline">
                info@aunaturalcompany.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Call us for immediate assistance or booking inquiries.
              </p>
              <a href="tel:+13179143125" className="text-primary hover:underline">
                (317) 914-3125
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Office</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Visit our location for in-person consultations and services.
              </p>
              <address className="not-italic text-primary">2605 E 62nd St, Suite 2001, Indianapolis, IN 46220</address>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container">
          <div className="text-center mb-8">
            <p className="text-sm text-primary mb-2">Location</p>
            <h2 className="text-3xl font-bold mb-4">Come Visit Us</h2>
            <p className="text-muted-foreground">We're located north east of Indianapolis at 2605 E 62nd St, Suite 2001, Indianapolis, IN 46220.</p>
          </div>

          <div className="w-full h-[300px] bg-gray-200 rounded-lg relative">
            <iframe
              width="450"
              height="250"
              frameBorder="0" style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(GOOGLE_API_KEY)}&q=${encodeURIComponent("2605 E 62nd St 2001 121 2021")}`}
              allowFullScreen
              className="rounded-lg w-full h-full"
            >
            </iframe>
          </div>

          {/* Store Hours */}
          <div className="mt-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center">Store Hours</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="py-2 border-b">Sunday</div>
              <div className="py-2 border-b text-right">Closed</div>

              <div className="py-2 border-b">Monday</div>
              <div className="py-2 border-b text-right">Closed</div>

              <div className="py-2 border-b">Tuesday</div>
              <div className="py-2 border-b text-right">11:30 AM - 05:00 PM</div>

              <div className="py-2 border-b">Wednesday</div>
              <div className="py-2 border-b text-right">10:00 AM - 08:00 PM</div>

              <div className="py-2 border-b">Thursday</div>
              <div className="py-2 border-b text-right">11:30 AM - 09:00 PM</div>

              <div className="py-2 border-b">Friday</div>
              <div className="py-2 border-b text-right">09:00 AM - 05:00 PM</div>

              <div className="py-2 border-b">Saturday</div>
              <div className="py-2 border-b text-right">08:00 AM - 04:30 PM</div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
