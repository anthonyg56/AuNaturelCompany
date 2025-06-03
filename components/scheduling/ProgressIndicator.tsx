"use client"

import { Check } from "lucide-react"
import { useBookingStore } from "@/lib/stores/scheduling"

export default function ProgressIndicator() {
  const { currentStep } = useBookingStore()

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === step
              ? "bg-primary text-black"
              : currentStep > step
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-500"
              }`}
          >
            {currentStep > step ? <Check size={16} /> : step}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-500 px-1">
        <span>Services</span>
        <span>Stylist</span>
        <span>Date</span>
        <span>Payment</span>
        <span>Confirm</span>
      </div>
    </div>
  )
}