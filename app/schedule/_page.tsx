"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { ArrowLeft, ArrowRight, X, Check, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"

// Define types for our form data and Acuity API responses
type Service = {
  id: string
  name: string
  description: string
  duration: string
  price: number
  category: "locs" | "barber" | "natural" | "misc"
}

type TeamMember = {
  id: string
  name: string
  role: string
  image: string
  specialties: string[]
}

type AcuityService = {
  id: number
  name: string
  description: string
  duration: number
  price: string
  category: string
}

type AcuityTeamMember = {
  id: number
  firstName: string
  lastName: string
  email: string
  image: string
  category: string
}

type AcuityTimeSlot = {
  time: string
  datetime: string
}

type FormData = {
  services: string[]
  teamMember: string
  date: Date | undefined
  time: string
  firstName: string
  lastName: string
  email: string
  phone: string
  cardNumber: string
  cardExpiry: string
  cardCvc: string
  savePaymentInfo: boolean
}

export default function SchedulePage() {
  const router = useRouter()

  // State
  const [currentStep, setCurrentStep] = useState(1)
  const [activeCategory, setActiveCategory] = useState<"locs" | "barber" | "natural" | "misc">("locs")
  const [formData, setFormData] = useState<FormData>({
    services: [],
    teamMember: "",
    date: undefined,
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    savePaymentInfo: false,
  })

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

  // Fetch team members using React Query
  const {
    data: teamMembers = [],
    isLoading: isLoadingTeamMembers,
    error: teamMembersError
  } = useQuery({
    queryKey: ['teamMembers'],
    queryFn: async () => {
      const response = await fetch('/api/acuity/staff')
      if (!response.ok) {
        throw new Error('Failed to fetch team members')
      }
      const data: AcuityTeamMember[] = await response.json()

      // Transform Acuity team members to our format
      return data.map(member => ({
        id: member.id.toString(),
        name: `${member.firstName} ${member.lastName}`,
        role: member.category || "Stylist",
        image: member.image || "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&h=300&auto=format&fit=crop",
        specialties: member.category ? [member.category] : [],
      })) as TeamMember[]
    },
    // Fall back to sample data if query fails
    onError: (err) => {
      console.error("Error fetching team members:", err)
      return sampleTeamMembers
    }
  })

  // Fetch available time slots using React Query
  const {
    data: timeSlots = [],
    isLoading: isLoadingTimeSlots,
    error: timeSlotsError,
    refetch: refetchTimeSlots
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

  // Clear selected time when date or team member changes
  useEffect(() => {
    if (formData.date && formData.teamMember) {
      setFormData(prev => ({ ...prev, time: "" }))
    }
  }, [formData.date, formData.teamMember])

  // Helper function to map Acuity service categories to our categories
  const mapServiceCategory = (category: string): "locs" | "barber" | "natural" | "misc" => {
    const categoryMap: Record<string, "locs" | "barber" | "natural" | "misc"> = {
      "Locs": "locs",
      "Barber": "barber",
      "Natural Hair": "natural",
      // Add more mappings as needed
    }

    return categoryMap[category] || "misc"
  }

  // Sample data as fallback
  const sampleServices: Service[] = [
    {
      id: "s1",
      name: "Loc Maintenance",
      description: "Regular maintenance for your locs",
      duration: "60 min",
      price: 85,
      category: "locs",
    },
    {
      id: "s2",
      name: "Loc Start",
      description: "Begin your loc journey",
      duration: "120 min",
      price: 150,
      category: "locs",
    },
    {
      id: "s3",
      name: "Loc Styling",
      description: "Style your locs for a special occasion",
      duration: "45 min",
      price: 65,
      category: "locs",
    },
    {
      id: "s4",
      name: "Haircut",
      description: "Professional haircut",
      duration: "30 min",
      price: 35,
      category: "barber",
    },
    { id: "s5", name: "Lineup", description: "Clean up your edges", duration: "15 min", price: 20, category: "barber" },
    {
      id: "s6",
      name: "Beard Trim",
      description: "Shape and trim your beard",
      duration: "20 min",
      price: 25,
      category: "barber",
    },
    {
      id: "s7",
      name: "Twist Out",
      description: "Beautiful twist out style",
      duration: "60 min",
      price: 75,
      category: "natural",
    },
    {
      id: "s8",
      name: "Wash & Style",
      description: "Wash and style your natural hair",
      duration: "75 min",
      price: 85,
      category: "natural",
    },
    {
      id: "s9",
      name: "Braids",
      description: "Various braiding styles",
      duration: "120 min",
      price: 120,
      category: "natural",
    },
    {
      id: "s10",
      name: "Hair Consultation",
      description: "Professional hair care advice",
      duration: "30 min",
      price: 40,
      category: "misc",
    },
    {
      id: "s11",
      name: "Deep Conditioning",
      description: "Intensive hair treatment",
      duration: "45 min",
      price: 55,
      category: "misc",
    },
  ]

  const sampleTeamMembers: TeamMember[] = [
    {
      id: "tm1",
      name: "Tara Richardson",
      role: "Senior Loctician",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&h=300&auto=format&fit=crop",
      specialties: ["Locs", "Natural Hair"],
    },
    {
      id: "tm2",
      name: "Marcus Johnson",
      role: "Master Barber",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop",
      specialties: ["Barbering", "Fades"],
    },
    {
      id: "tm3",
      name: "Alisha Williams",
      role: "Natural Hair Specialist",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&h=300&auto=format&fit=crop",
      specialties: ["Natural Hair", "Styling"],
    },
    {
      id: "tm4",
      name: "David Thompson",
      role: "Loctician",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop",
      specialties: ["Locs", "Maintenance"],
    },
  ]

  const sampleTimeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
  ]

  // Handlers
  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => {
      if (prev.services.includes(serviceId)) {
        return { ...prev, services: prev.services.filter((id) => id !== serviceId) }
      } else {
        return { ...prev, services: [...prev.services, serviceId] }
      }
    })
  }

  const handleTeamMemberSelect = (memberId: string) => {
    setFormData((prev) => ({ ...prev, teamMember: memberId }))
  }

  const handleDateSelect = (date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, date }))
  }

  const handleTimeSelect = (time: string) => {
    setFormData((prev) => ({ ...prev, time }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

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
    } catch (err) {
      console.error("Error booking appointment:", err)
      alert("There was an error booking your appointment. Please try again.")
    }
  }

  // Helper function to convert 12-hour time to 24-hour format
  const convertTo24Hour = (time12h: string): string => {
    const [time, modifier] = time12h.split(' ')
    let [hours, minutes] = time.split(':')

    if (hours === '12') {
      hours = '00'
    }

    if (modifier === 'PM') {
      hours = (parseInt(hours, 10) + 12).toString()
    }

    return `${hours}:${minutes}:00`
  }

  // Calculate total price
  const calculateTotal = () => {
    return formData.services.reduce((total, serviceId) => {
      const service = services.find((s) => s.id === serviceId)
      return total + (service?.price || 0)
    }, 0)
  }

  // Get selected services
  const selectedServices = services.filter((service) => formData.services.includes(service.id))

  // Get selected team member
  const selectedTeamMember = teamMembers.find((member) => member.id === formData.teamMember)

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

        {/* Step 1: Service Selection */}
        {currentStep === 1 && (
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
                        <span>${calculateTotal()}</span>
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
        )}

        {/* Step 2: Team Member Selection */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Choose Your Stylist</h2>

            {/* Show loading state */}
            {isLoadingTeamMembers ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
              </div>
            ) : teamMembersError ? (
              <div className="text-red-500 text-center py-4">
                Failed to load stylists. Please try again.
                <button
                  onClick={() => window.location.reload()}
                  className="block mx-auto mt-2 text-sm underline"
                >
                  Retry
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${formData.teamMember === member.id ? "border-primary bg-primary" : "hover:border-gray-300"
                      }`}
                    onClick={() => handleTeamMemberSelect(member.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {member.specialties.map((specialty) => (
                            <span key={specialty} className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="ml-auto">
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.teamMember === member.id ? "bg-primary border-primary" : "border-gray-300"
                            }`}
                        >
                          {formData.teamMember === member.id && <Check size={12} className="text-white" />}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                <ArrowLeft size={16} className="mr-2" /> Back
              </Button>
              <Button
                onClick={nextStep}
                disabled={!formData.teamMember || isLoadingTeamMembers}
                className="bg-primary hover:bg-primary text-black"
              >
                Next <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Date & Time Selection */}
        {currentStep === 3 && (
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
        )}

        {/* Step 4: Payment Information */}
        {currentStep === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Payment Information</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
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
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cardExpiry">Expiration Date</Label>
                  <Input
                    id="cardExpiry"
                    name="cardExpiry"
                    placeholder="MM/YY"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardCvc">CVC</Label>
                  <Input
                    id="cardCvc"
                    name="cardCvc"
                    placeholder="123"
                    value={formData.cardCvc}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="savePaymentInfo"
                  name="savePaymentInfo"
                  checked={formData.savePaymentInfo}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, savePaymentInfo: checked === true }))}
                />
                <Label htmlFor="savePaymentInfo" className="text-sm">
                  Save payment information for future bookings
                </Label>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-medium mb-2">Booking Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Services:</span>
                    <span>{selectedServices.map((s) => s.name).join(", ")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stylist:</span>
                    <span>{selectedTeamMember?.name}</span>
                  </div>
                  {formData.date && (
                    <div className="flex justify-between">
                      <span>Date & Time:</span>
                      <span>
                        {format(formData.date, "MMM d, yyyy")} at {formData.time}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between font-medium">
                    <span>Total:</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={prevStep}>
                  <ArrowLeft size={16} className="mr-2" /> Back
                </Button>
                <Button type="submit" className="bg-primary hover:bg-primary text-black">
                  Confirm Booking <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Step 5: Confirmation */}
        {currentStep === 5 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">Your appointment has been successfully scheduled.</p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
              <h3 className="font-medium mb-4">Appointment Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Services:</span>
                  <span>{selectedServices.map((s) => s.name).join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Stylist:</span>
                  <span>{selectedTeamMember?.name}</span>
                </div>
                {formData.date && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date & Time:</span>
                    <span>
                      {format(formData.date, "EEEE, MMMM d, yyyy")} at {formData.time}
                    </span>
                  </div>
                )}
                <div className="flex justify-between font-medium pt-3 border-t">
                  <span>Total:</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              A confirmation email has been sent to {formData.email}.<br />
              You can manage your appointment through your account or by contacting us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/account/appointments">
                <Button variant="outline">View My Appointments</Button>
              </Link>
              <Link href="/">
                <Button className="bg-primary hover:bg-primary text-black">Return to Homepage</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
