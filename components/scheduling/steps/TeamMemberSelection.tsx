"use client"

import { useQuery } from "@tanstack/react-query"
import { Check, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useBookingStore, TeamMember, AcuityTeamMember } from "@/lib/stores/scheduling"

export default function TeamMemberSelection() {
  const { formData, handleTeamMemberSelect, nextStep, prevStep } = useBookingStore()

  const {
    data,
    isLoading,
    error
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
  })

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Choose Your Stylist</h2>

      {/* Show loading state */}
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
        </div>
      ) : error ? (
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
          {data?.map((member) => (
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
          disabled={!formData.teamMember || isLoading}
          className="bg-primary hover:bg-primary text-black"
        >
          Next <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  )
} 