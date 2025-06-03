"use client"

import { create } from "zustand"
import { format } from "date-fns"

// Define types for our form data and Acuity API responses
export type Service = {
  id: string
  name: string
  description: string
  duration: string
  price: number
  category: "locs" | "barber" | "natural" | "misc"
}

export type TeamMember = {
  id: string
  name: string
  role: string
  image: string
  specialties: string[]
}

export type AcuityService = {
  id: number
  name: string
  description: string
  duration: number
  price: string
  category: string
}

export type AcuityTeamMember = {
  id: number
  firstName: string
  lastName: string
  email: string
  image: string
  category: string
}

export type AcuityTimeSlot = {
  time: string
  datetime: string
}

export type FormData = {
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

type BookingState = {
  currentStep: number
  activeCategory: "locs" | "barber" | "natural" | "misc"
  formData: FormData

  // Actions
  setCurrentStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
  setActiveCategory: (category: "locs" | "barber" | "natural" | "misc") => void
  setFormData: (formData: Partial<FormData>) => void
  handleServiceToggle: (serviceId: string) => void
  handleTeamMemberSelect: (memberId: string) => void
  handleDateSelect: (date: Date | undefined) => void
  handleTimeSelect: (time: string) => void
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void

  // Helper functions
  calculateTotal: (services: Service[]) => number
  convertTo24Hour: (time12h: string) => string
}

export const useBookingStore = create<BookingState>((set, get) => ({
  currentStep: 1,
  activeCategory: "locs",
  formData: {
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
  },

  setCurrentStep: (step) => set({ currentStep: step }),

  nextStep: () => set((state) => ({
    currentStep: state.currentStep < 5 ? state.currentStep + 1 : state.currentStep
  })),

  prevStep: () => set((state) => ({
    currentStep: state.currentStep > 1 ? state.currentStep - 1 : state.currentStep
  })),

  setActiveCategory: (category) => set({ activeCategory: category }),

  setFormData: (formData) => set((state) => ({
    formData: { ...state.formData, ...formData }
  })),

  handleServiceToggle: (serviceId) => set((state) => {
    if (state.formData.services.includes(serviceId)) {
      return {
        formData: {
          ...state.formData,
          services: state.formData.services.filter((id) => id !== serviceId)
        }
      }
    } else {
      return {
        formData: {
          ...state.formData,
          services: [...state.formData.services, serviceId]
        }
      }
    }
  }),

  handleTeamMemberSelect: (memberId) => set((state) => ({
    formData: { ...state.formData, teamMember: memberId }
  })),

  handleDateSelect: (date) => set((state) => ({
    formData: { ...state.formData, date, time: "" }
  })),

  handleTimeSelect: (time) => set((state) => ({
    formData: { ...state.formData, time }
  })),

  handleInputChange: (e) => set((state) => {
    const { name, value, type, checked } = e.target
    return {
      formData: {
        ...state.formData,
        [name]: type === "checkbox" ? checked : value,
      }
    }
  }),

  calculateTotal: (services) => {
    const { formData } = get()
    return formData.services.reduce((total, serviceId) => {
      const service = services.find((s) => s.id === serviceId)
      return total + (service?.price || 0)
    }, 0)
  },

  convertTo24Hour: (time12h) => {
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
}))

// Sample data as fallback
export const sampleServices: Service[] = [
  {
    id: "s1",
    name: "Loc Maintenance",
    description: "Regular maintenance for your locs",
    duration: "60 min",
    price: 85,
    category: "locs",
  },
  // ... rest of sample services
]

export const sampleTeamMembers: TeamMember[] = [
  {
    id: "tm1",
    name: "Tara Richardson",
    role: "Senior Loctician",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&h=300&auto=format&fit=crop",
    specialties: ["Locs", "Natural Hair"],
  },
  // ... rest of sample team members
]

export const sampleTimeSlots = [
  "9:00 AM",
  "9:30 AM",
  // ... rest of sample time slots
]

// Helper function to map Acuity service categories to our categories
export const mapServiceCategory = (category: string): "locs" | "barber" | "natural" | "misc" => {
  const categoryMap: Record<string, "locs" | "barber" | "natural" | "misc"> = {
    "Locs": "locs",
    "Barber": "barber",
    "Natural Hair": "natural",
    // Add more mappings as needed
  }

  return categoryMap[category] || "misc"
}