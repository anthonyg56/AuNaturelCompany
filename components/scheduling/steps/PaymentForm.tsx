"use client"

import { useState } from "react"
import { format } from "date-fns"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useBookingStore, Service, TeamMember } from "@/lib/stores/scheduling"
import { useQuery } from "@tanstack/react-query"

export default function PaymentForm() {
  const { formData, handleInputChange, nextStep, prevStep, calculateTotal, convertTo24Hour } = useBookingStore()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fetch services for summary
  const { data: services = [] } = useQuery<Service[]>({
    queryKey: ['services'],
  })

  // Fetch team members for summary
  const { data: teamMembers = [] } = useQuery<TeamMember[]>({
    queryKey: ['teamMembers'],
  })

  // Get selected services
  const selectedServices = services.filter((service) => formData.services.includes(service.id))

  // Get selected team member
  const selectedTeamMember = teamMembers.find((member) => member.id === formData.teamMember)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare booking data for Acuity
      const bookingData = {
        appointmentTypeID: formData.services[0], // Using first selected service
        datetime: `${format(formData.date!, "yyyy-MM-dd")}T${convertTo24Hour(formData.time)}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        calendarID: formData.teamMember,
        // Add any additional fields required by Acuity
      }

      const response = await fetch('/api/acuity/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })

      if (!response.ok) {
        throw new Error('Failed to book appointment')
      }

      // Move to confirmation step
      nextStep()
    } catch (error) {
      console.error('Error booking appointment:', error)
      alert('There was an error processing your booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Payment Information</h2>

      {/* Booking summary */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-medium mb-2">Booking Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Date:</span>
            <span>{formData.date && format(formData.date, "EEEE, MMMM d, yyyy")}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Time:</span>
            <span>{formData.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Stylist:</span>
            <span>{selectedTeamMember?.name || "Not selected"}</span>
          </div>
          <div className="pt-2 border-t">
            <span className="text-gray-500">Services:</span>
            <ul className="mt-1 space-y-1">
              {selectedServices.map((service) => (
                <li key={service.id} className="flex justify-between">
                  <span>{service.name}</span>
                  <span>${service.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between font-medium pt-2 border-t">
            <span>Total:</span>
            <span>${calculateTotal(services)}</span>
          </div>
        </div>
      </div>

      {/* Payment form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="cardExpiry">Expiration Date</Label>
            <Input
              id="cardExpiry"
              name="cardExpiry"
              value={formData.cardExpiry}
              onChange={handleInputChange}
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <Label htmlFor="cardCvc">CVC</Label>
            <Input
              id="cardCvc"
              name="cardCvc"
              value={formData.cardCvc}
              onChange={handleInputChange}
              placeholder="123"
              required
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="savePaymentInfo"
            name="savePaymentInfo"
            checked={formData.savePaymentInfo}
            onCheckedChange={(checked) => {
              handleInputChange({
                target: {
                  name: "savePaymentInfo",
                  type: "checkbox",
                  checked: checked === true,
                },
              } as any)
            }}
          />
          <Label htmlFor="savePaymentInfo" className="text-sm">
            Save payment information for future bookings
          </Label>
        </div>

        <div className="flex justify-between pt-4">
          <Button type="button" variant="outline" onClick={prevStep}>
            <ArrowLeft size={16} className="mr-2" /> Back
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary text-black"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin mr-2 h-4 w-4 border-2 border-b-transparent border-white rounded-full"></div>
                Processing...
              </>
            ) : (
              <>
                Complete Booking <ArrowRight size={16} className="ml-2" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
} 