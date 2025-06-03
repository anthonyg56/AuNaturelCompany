"use client"

import { format } from "date-fns"
import { Calendar, Clock, User, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useBookingStore, Service, TeamMember } from "@/lib/stores/scheduling"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

export default function BookingConfirmation() {
  const { formData, calculateTotal } = useBookingStore()

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

  return (
    <div className="text-center">
      <div className="mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check size={32} className="text-green-600" />
        </div>
        <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
        <p className="text-gray-500 mt-2">
          We've sent a confirmation email to {formData.email}
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
        <h3 className="font-medium mb-4 text-center">Appointment Details</h3>

        <div className="space-y-4">
          <div className="flex items-start">
            <Calendar className="w-5 h-5 mr-3 text-gray-500 mt-0.5" />
            <div>
              <p className="font-medium">Date</p>
              <p className="text-gray-500">
                {formData.date && format(formData.date, "EEEE, MMMM d, yyyy")}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="w-5 h-5 mr-3 text-gray-500 mt-0.5" />
            <div>
              <p className="font-medium">Time</p>
              <p className="text-gray-500">{formData.time}</p>
            </div>
          </div>

          <div className="flex items-start">
            <User className="w-5 h-5 mr-3 text-gray-500 mt-0.5" />
            <div>
              <p className="font-medium">Stylist</p>
              <p className="text-gray-500">{selectedTeamMember?.name || "Not selected"}</p>
            </div>
          </div>

          <div className="border-t pt-4 mt-4">
            <p className="font-medium mb-2">Services</p>
            <ul className="space-y-1">
              {selectedServices.map((service) => (
                <li key={service.id} className="flex justify-between text-gray-500">
                  <span>{service.name}</span>
                  <span>${service.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-medium mt-4 pt-4 border-t">
              <span>Total</span>
              <span>${calculateTotal(services)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-gray-500">
          Need to make changes to your appointment?
          <br />
          Please call us at (555) 123-4567
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" passHref>
            <Button variant="outline" className="w-full sm:w-auto">
              Return to Home
            </Button>
          </Link>
          <Button
            onClick={() => window.print()}
            className="w-full sm:w-auto bg-primary hover:bg-primary text-black"
          >
            Print Confirmation
          </Button>
        </div>
      </div>
    </div>
  )
} 