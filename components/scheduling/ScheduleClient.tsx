"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useBookingStore } from "@/lib/stores/scheduling"
import ServiceSelection from "@/components/scheduling/steps/ServiceSelection"
import TeamMemberSelection from "@/components/scheduling/steps/TeamMemberSelection"
import DateTimeSelection from "@/components/scheduling/steps/DateTimeSelection"
import PaymentForm from "@/components/scheduling/steps/PaymentForm"
import BookingConfirmation from "@/components/scheduling/steps/BookingConfirmation"
import ProgressIndicator from "@/components/scheduling/ProgressIndicator"
import { ArrowLeft, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScheduleClient() {
  const router = useRouter()
  const { currentStep, prevStep } = useBookingStore()

  return (
    <div className="flex min-h-screen">
      {/* Left side - Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop"
            alt="Natural hair styling"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-6 left-6">
          <Link href="/" className="text-white text-xl font-bold hover:text-primary transition-colors">
            Au Natural
          </Link>
        </div>
      </div>

      {/* Right side - Booking Form */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-12 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="md:hidden text-xl font-bold">
            Au Natural
          </Link>
          <button
            onClick={() => router.back()}
            className="text-gray-500 hover:text-gray-700 flex items-center gap-1"
          >
            <X size={18} /> Exit
          </button>
        </div>

        {/* Progress indicator */}
        <ProgressIndicator />

        {/* Step 1: Service Selection */}
        {currentStep === 1 && <ServiceSelection />}

        {/* Step 2: Team Member Selection */}
        {currentStep === 2 && <TeamMemberSelection />}

        {/* Step 3: Date & Time Selection */}
        {currentStep === 3 && <DateTimeSelection />}

        {/* Step 4: Payment Information */}
        {currentStep === 4 && <PaymentForm />}

        {/* Step 5: Confirmation */}
        {currentStep === 5 && <BookingConfirmation />}
      </div>
    </div>
  )
}