"use client"

import { useQuery } from "@tanstack/react-query"
import { format } from "date-fns"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useBookingStore, AcuityTimeSlot, sampleTimeSlots } from "@/lib/stores/scheduling"

export default function DateTimeSelection() {
  const { formData, handleDateSelect, handleTimeSelect, nextStep, prevStep } = useBookingStore()

  // Fetch available time slots using React Query
  const {
    data: timeSlots = [],
    isLoading: isLoadingTimeSlots,
    error: timeSlotsError
  } = useQuery({
    queryKey: ['timeSlots', formData.date, formData.teamMember, formData.services],
    queryFn: async () => {
      if (!formData.date || !formData.teamMember || formData.services.length === 0) {
        return []
      }

      const date = format(formData.date, "yyyy-MM-dd")
      const response = await fetch(`/api/acuity/availability?date=${date}&appointmentTypeID=${formData.services[0]}&calendarID=${formData.teamMember}`)

      if (!response.ok) {
        throw new Error('Failed to fetch time slots')
      }

      const data: AcuityTimeSlot[] = await response.json()

      // Format time slots
      return data.map(slot => {
        const time = new Date(slot.datetime)
        return format(time, "h:mm a")
      })
    },
    enabled: !!formData.date && !!formData.teamMember && formData.services.length > 0,
    // Fall back to sample data if query fails
    onError: (err) => {
      console.error("Error fetching time slots:", err)
      return sampleTimeSlots
    }
  })

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Select Date & Time</h2>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Select a Date</h3>
        <div className="border rounded-lg p-4">
          <Calendar
            mode="single"
            selected={formData.date}
            onSelect={handleDateSelect}
            className="mx-auto"
            disabled={(date) => {
              // Disable past dates and Sundays
              return date < new Date() || date.getDay() === 0
            }}
          />
        </div>
      </div>

      {formData.date && (
        <div className="mb-8">
          <h3 className="font-medium mb-2">Select a Time</h3>
          <p className="text-sm text-gray-500 mb-4">
            Available time slots for {format(formData.date, "EEEE, MMMM d, yyyy")}
          </p>

          {/* Show loading state for time slots */}
          {isLoadingTimeSlots ? (
            <div className="flex justify-center items-center h-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : timeSlotsError ? (
            <div className="text-red-500 text-center py-4">
              Failed to load available times. Please try again.
              <button
                onClick={() => window.location.reload()}
                className="block mx-auto mt-2 text-sm underline"
              >
                Retry
              </button>
            </div>
          ) : timeSlots.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              No available time slots for this date. Please select another date.
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`py-2 px-3 text-sm border rounded-md ${formData.time === time ? "bg-primary border-primary text-black" : "hover:border-gray-300"
                    }`}
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between">
        <Button variant="outline" onClick={prevStep}>
          <ArrowLeft size={16} className="mr-2" /> Back
        </Button>
        <Button
          onClick={nextStep}
          disabled={!formData.date || !formData.time || isLoadingTimeSlots}
          className="bg-primary hover:bg-primary text-black"
        >
          Next <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  )
} 