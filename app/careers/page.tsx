"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Clock, Briefcase, X } from "lucide-react"
import { JobCategory, JobType, JobExperience, JobLocation, jobListings } from "@/lib/data/job-listings"

// TODO: Add metadata after converting this page to a server component
// export const metadata = {
//   title: "Careers",
//   description: "Join our team of natural hair care professionals at Au Natural Company. View open positions and career opportunities in Indianapolis.",
//   keywords: ["careers", "jobs", "hair stylist jobs", "salon careers", "Indianapolis jobs", "loc specialist"]
// }

export default function CareersPage() {

  // State for filters
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<JobCategory | "All">("All")
  const [selectedType, setSelectedType] = useState<JobType | "All">("All")
  const [selectedExperience, setSelectedExperience] = useState<JobExperience | "All">("All")
  const [selectedLocation, setSelectedLocation] = useState<JobLocation | "All">("All")

  // Filter job listings based on selected filters
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory
    const matchesType = selectedType === "All" || job.type === selectedType
    const matchesExperience = selectedExperience === "All" || job.experience === selectedExperience
    const matchesLocation = selectedLocation === "All" || job.location === selectedLocation

    return matchesSearch && matchesCategory && matchesType && matchesExperience && matchesLocation
  })

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All")
    setSelectedType("All")
    setSelectedExperience("All")
    setSelectedLocation("All")
  }

  // Check if any filters are active
  const hasActiveFilters =
    searchTerm !== "" ||
    selectedCategory !== "All" ||
    selectedType !== "All" ||
    selectedExperience !== "All" ||
    selectedLocation !== "All"

  // Calculate days since posting
  const calculateDaysSincePosting = (postedDate: string) => {
    const posted = new Date(postedDate)
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - posted.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation would typically go here */}

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="https://images.unsplash.com/photo-1520336811552-42878b67d25f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team working together" fill className="object-cover object-[50%_24%]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl mb-6">
              Build your career with Au Natural Company. We're looking for talented individuals who are passionate about
              natural hair care and providing exceptional client experiences.
            </p>
            <Button className="bg-primary hover:bg-primary text-black">View Open Positions</Button>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join Au Natural Company?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're more than just a salon. We're a community of passionate professionals dedicated to celebrating
              natural beauty and providing exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Supportive Team</h3>
              <p className="text-muted-foreground">
                Join a collaborative environment where team members support each other's growth and success.
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Access ongoing education, workshops, and training to keep your skills sharp and up-to-date.
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Career Growth</h3>
              <p className="text-muted-foreground">
                Opportunities for advancement and development as our company continues to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Benefits & Perks</h2>
              <p className="text-muted-foreground mb-6">
                We value our team members and offer competitive benefits to support your professional and personal
                well-being.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Competitive Compensation</h3>
                    <p className="text-sm text-muted-foreground">
                      Salary, commission, and tips based on experience and position
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Health Benefits</h3>
                    <p className="text-sm text-muted-foreground">
                      Medical, dental, and vision insurance for full-time employees
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Paid Time Off</h3>
                    <p className="text-sm text-muted-foreground">
                      Vacation days, sick leave, and personal days for work-life balance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Professional Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Continuing education, workshops, and conference opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Employee Discounts</h3>
                    <p className="text-sm text-muted-foreground">
                      Discounts on services and products for you and your family
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Retirement Plan</h3>
                    <p className="text-sm text-muted-foreground">401(k) with company match for eligible employees</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1695173122226-3a932002ab33?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team benefits"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as JobCategory | "All")}
                  className="px-3 py-2 border rounded-md text-sm"
                >
                  <option value="All">All Categories</option>
                  <option value="Stylist">Stylist</option>
                  <option value="Loctician">Loctician</option>
                  <option value="Barber">Barber</option>
                  <option value="Administrative">Administrative</option>
                  <option value="Management">Management</option>
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as JobType | "All")}
                  className="px-3 py-2 border rounded-md text-sm"
                >
                  <option value="All">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Apprenticeship">Apprenticeship</option>
                </select>

                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value as JobExperience | "All")}
                  className="px-3 py-2 border rounded-md text-sm"
                >
                  <option value="All">All Experience Levels</option>
                  <option value="Entry Level">Entry Level</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="Senior">Senior</option>
                  <option value="Any Level">Any Level</option>
                </select>

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value as JobLocation | "All")}
                  className="px-3 py-2 border rounded-md text-sm"
                >
                  <option value="All">All Locations</option>
                  <option value="Indianapolis, IN">Indianapolis, IN</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>

                {hasActiveFilters && (
                  <Button variant="outline" size="sm" onClick={clearFilters} className="flex items-center gap-1">
                    <X size={14} /> Clear Filters
                  </Button>
                )}
              </div>
            </div>

            {/* Active filters display */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-4">
                {searchTerm && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    Search: {searchTerm}
                    <button onClick={() => setSearchTerm("")}>
                      <X size={12} />
                    </button>
                  </Badge>
                )}
                {selectedCategory !== "All" && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    Category: {selectedCategory}
                    <button onClick={() => setSelectedCategory("All")}>
                      <X size={12} />
                    </button>
                  </Badge>
                )}
                {selectedType !== "All" && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    Type: {selectedType}
                    <button onClick={() => setSelectedType("All")}>
                      <X size={12} />
                    </button>
                  </Badge>
                )}
                {selectedExperience !== "All" && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    Experience: {selectedExperience}
                    <button onClick={() => setSelectedExperience("All")}>
                      <X size={12} />
                    </button>
                  </Badge>
                )}
                {selectedLocation !== "All" && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    Location: {selectedLocation}
                    <button onClick={() => setSelectedLocation("All")}>
                      <X size={12} />
                    </button>
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12 border rounded-lg">
                <p className="text-muted-foreground">No positions match your search criteria.</p>
                <Button variant="link" onClick={clearFilters} className="mt-2">
                  Clear filters and try again
                </Button>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div key={job.id} className="border rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin size={12} /> {job.location}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock size={12} /> {job.type}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Briefcase size={12} /> {job.experience}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{job.description}</p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {job.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 pt-4 border-t">
                    <div className="flex items-center gap-4 mb-4 sm:mb-0">
                      <span className="text-sm text-muted-foreground">
                        Posted {calculateDaysSincePosting(job.postedDate)} days ago
                      </span>
                      <span className="font-medium">{job.salary}</span>
                    </div>
                    <Link href={`/careers/apply/${job.id}`}>
                      <Button className="bg-primary hover:bg-primary text-black">Apply Now</Button>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination (simplified) */}
          {filteredJobs.length > 0 && (
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-black">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Application Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've designed a straightforward application process to help you join our team quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold">
                1
              </div>
              <h3 className="font-bold mb-2">Apply Online</h3>
              <p className="text-sm text-muted-foreground">
                Submit your application through our online portal with your resume and portfolio.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold">
                2
              </div>
              <h3 className="font-bold mb-2">Initial Review</h3>
              <p className="text-sm text-muted-foreground">
                Our team will review your application and reach out if there's a potential fit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold">
                3
              </div>
              <h3 className="font-bold mb-2">Interview & Skills Demo</h3>
              <p className="text-sm text-muted-foreground">
                Meet with our team and showcase your skills through a practical demonstration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold">
                4
              </div>
              <h3 className="font-bold mb-2">Welcome Aboard</h3>
              <p className="text-sm text-muted-foreground">
                Receive your offer and join our team of talented professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-muted-foreground mb-8">
            We're always looking for talented, passionate individuals to join the Au Natural family. Browse our open
            positions and apply today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary text-black">View Open Positions</Button>
            <Button variant="outline">Learn More About Us</Button>
          </div>
        </div>
      </section>

      {/* Footer would typically go here */}
    </div>
  )
}

