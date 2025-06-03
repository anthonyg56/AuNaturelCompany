"use client"

import { useQuery } from "@tanstack/react-query"
import { Clock, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useBookingStore, Service, AcuityService, mapServiceCategory, sampleServices } from "../store"

export default function ServiceSelection() {
  const {
    activeCategory,
    formData,
    setActiveCategory,
    handleServiceToggle,
    nextStep,
    calculateTotal
  } = useBookingStore()

  // Fetch services using React Query
  const {
    data: services = [],
    isLoading: isLoadingServices,
    error: servicesError
  } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await fetch('/api/acuity/services')
      if (!response.ok) {
        throw new Error('Failed to fetch services')
      }
      const data: AcuityService[] = await response.json()

      // Transform Acuity services to our format
      return data.map(service => ({
        id: service.id.toString(),
        name: service.name,
        description: service.description || "",
        duration: `${service.duration} min`,
        price: parseFloat(service.price),
        category: mapServiceCategory(service.category),
      })) as Service[]
    },
    // Fall back to sample data if query fails
    onError: (err) => {
      console.error("Error fetching services:", err)
      return sampleServices
    }
  })

  // Get selected services
  const selectedServices = services.filter((service) => formData.services.includes(service.id))

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Select Your Services</h2>

      {/* Show loading state */}
      {isLoadingServices ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
        </div>
      ) : servicesError ? (
        <div className="text-red-500 text-center py-4">
          Failed to load services. Please try again.
          <button
            onClick={() => window.location.reload()}
            className="block mx-auto mt-2 text-sm underline"
          >
            Retry
          </button>
        </div>
      ) : (
        <>
          {/* Category tabs */}
          <div className="flex mb-6 border-b">
            <button
              className={`px-4 py-2 ${activeCategory === "locs" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
              onClick={() => setActiveCategory("locs")}
            >
              Locs
            </button>
            <button
              className={`px-4 py-2 ${activeCategory === "barber" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
              onClick={() => setActiveCategory("barber")}
            >
              Barber
            </button>
            <button
              className={`px-4 py-2 ${activeCategory === "natural" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
              onClick={() => setActiveCategory("natural")}
            >
              Natural Hair
            </button>
            <button
              className={`px-4 py-2 ${activeCategory === "misc" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
              onClick={() => setActiveCategory("misc")}
            >
              Misc
            </button>
          </div>

          {/* Service list */}
          <div className="space-y-4 mb-8">
            {services
              .filter((service) => service.category === activeCategory)
              .map((service) => (
                <div
                  key={service.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${formData.services.includes(service.id) ? "border-primary bg-primary" : "hover:border-gray-300"
                    }`}
                  onClick={() => handleServiceToggle(service.id)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{service.name}</h3>
                      <p className="text-sm text-gray-500">{service.description}</p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Clock size={14} />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-medium">${service.price}</span>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.services.includes(service.id) ? "bg-primary border-primary" : "border-gray-300"
                          }`}
                      >
                        {formData.services.includes(service.id) && <Check size={12} className="text-white" />}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Selected services summary */}
          {formData.services.length > 0 && (
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Selected Services:</h3>
              <ul className="space-y-1">
                {selectedServices.map((service) => (
                  <li key={service.id} className="flex justify-between text-sm">
                    <span>{service.name}</span>
                    <span>${service.price}</span>
                  </li>
                ))}
                <li className="flex justify-between font-medium pt-2 border-t mt-2">
                  <span>Total:</span>
                  <span>${calculateTotal(services)}</span>
                </li>
              </ul>
            </div>
          )}
        </>
      )}

      <div className="flex justify-end">
        <Button
          onClick={nextStep}
          disabled={formData.services.length === 0 || isLoadingServices}
          className="bg-primary hover:bg-primary text-black"
        >
          Next <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  )
} 