"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { jobListings } from "@/lib/data/job-listings"
// Form schema using Zod for validation
const formSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  address: z.string().min(5, { message: "Please enter your full address." }),
  city: z.string().min(2, { message: "Please enter your city." }),
  state: z.string().min(2, { message: "Please enter your state." }),
  zipCode: z.string().min(5, { message: "Please enter a valid zip code." }),

  // Professional Information
  experience: z.string().min(1, { message: "Please select your experience level." }),
  currentEmployer: z.string().optional(),
  startDate: z.string().min(1, { message: "Please indicate when you can start." }),

  // Education & Certifications
  education: z.string().min(1, { message: "Please provide your education information." }),
  certifications: z.string().optional(),

  // Additional Information
  coverLetter: z.string().min(50, { message: "Please write a brief cover letter (minimum 50 characters)." }),
  portfolioUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),

  // Legal Information
  workAuthorization: z.boolean({ required_error: "You must confirm your work authorization." }),
  backgroundCheck: z.boolean({ required_error: "You must agree to a background check." }),
  termsAgreement: z.boolean({ required_error: "You must agree to the terms and conditions." }),

  // Availability
  availability: z.array(z.string()).min(1, { message: "Please select at least one availability option." }),

  // Referral
  referralSource: z.string().min(1, { message: "Please indicate how you heard about us." }),
})

export default function JobApplicationPage() {
  const params = useParams()
  const router = useRouter()
  const [job, setJob] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Form definition using react-hook-form with zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      experience: "",
      currentEmployer: "",
      startDate: "",
      education: "",
      certifications: "",
      coverLetter: "",
      portfolioUrl: "",
      workAuthorization: false,
      backgroundCheck: false,
      termsAgreement: false,
      availability: [],
      referralSource: "",
    },
  })

  // Find the job based on the ID from the URL
  useEffect(() => {
    if (params.id) {
      const foundJob = jobListings.find((job) => job.id === params.id)
      if (foundJob) {
        setJob(foundJob)
      } else {
        setError("Job not found. Please return to the careers page and try again.")
      }
      setIsLoading(false)
    }
  }, [params.id])

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)

    try {
      // In a real application, you would send this data to your server
      console.log("Form submitted:", values)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Show success state
      setIsSubmitted(true)
      window.scrollTo(0, 0)
    } catch (err) {
      setError("There was an error submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Availability options
  const availabilityOptions = [
    { id: "weekdays", label: "Weekdays" },
    { id: "evenings", label: "Evenings" },
    { id: "weekends", label: "Weekends" },
    { id: "flexible", label: "Flexible" },
  ]

  // If the page is loading, show a loading state
  if (isLoading) {
    return (
      <div className="container py-12 flex items-center justify-center min-h-[50vh]">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
          <p>Loading job details...</p>
        </div>
      </div>
    )
  }

  // If there's an error, show an error message
  if (error) {
    return (
      <div className="container py-12">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <div className="mt-6">
          <Link href="/careers">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to Careers Page
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  // If the form has been submitted successfully, show a success message
  if (isSubmitted) {
    return (
      <div className="container py-12 max-w-3xl mx-auto">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Application Submitted!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for applying to the {job?.title} position at Au Natural Company. We've received your application
            and will review it shortly. If your qualifications match our needs, we'll contact you for the next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Return to Careers Page
              </Button>
            </Link>
            <Link href="/">
              <Button className="bg-amber-400 hover:bg-amber-500 text-black">Return to Homepage</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      {/* Back button */}
      <div className="mb-6">
        <Link href="/careers">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Careers
          </Button>
        </Link>
      </div>

      {/* Job details header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{job?.title}</h1>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">Location: {job?.location}</span>
          <span>•</span>
          <span className="flex items-center gap-1">Type: {job?.type}</span>
          <span>•</span>
          <span className="flex items-center gap-1">Salary: {job?.salary}</span>
        </div>
        <p className="text-lg mb-4">{job?.description}</p>
      </div>

      <Separator className="my-8" />

      {/* Application form */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Application Form</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Personal Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="(123) 456-7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your street address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="col-span-2 md:col-span-2">
                      <FormLabel>City *</FormLabel>
                      <FormControl>
                        <Input placeholder="City" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State *</FormLabel>
                      <FormControl>
                        <Input placeholder="State" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zip Code *</FormLabel>
                      <FormControl>
                        <Input placeholder="Zip Code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Separator />

            {/* Professional Information Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Professional Information</h3>

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years of Experience *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currentEmployer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Employer</FormLabel>
                    <FormControl>
                      <Input placeholder="Current or most recent employer" {...field} />
                    </FormControl>
                    <FormDescription>Leave blank if not currently employed</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Availability to Start *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="When can you start?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="immediately">Immediately</SelectItem>
                        <SelectItem value="2-weeks">2 weeks notice</SelectItem>
                        <SelectItem value="1-month">1 month notice</SelectItem>
                        <SelectItem value="other">Other (specify in cover letter)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator />

            {/* Education & Certifications Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Education & Certifications</h3>

              <FormField
                control={form.control}
                name="education"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Education *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="List your educational background, including schools, degrees, and graduation years"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="certifications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Licenses & Certifications</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="List any relevant licenses, certifications, or specialized training"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Include license numbers and expiration dates if applicable</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator />

            {/* Availability Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Availability</h3>

              <FormField
                control={form.control}
                name="availability"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>When are you available to work? *</FormLabel>
                      <FormDescription>Select all that apply</FormDescription>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {availabilityOptions.map((option) => (
                        <FormField
                          key={option.id}
                          control={form.control}
                          name="availability"
                          render={({ field }) => {
                            return (
                              <FormItem key={option.id} className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(option.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, option.id])
                                        : field.onChange(field.value?.filter((value) => value !== option.id))
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">{option.label}</FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator />

            {/* Additional Information Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Additional Information</h3>

              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Letter / Personal Statement *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us why you're interested in this position and what makes you a great fit"
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="portfolioUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portfolio URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://your-portfolio-site.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      Link to your online portfolio, Instagram, or other platform showcasing your work
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="referralSource"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How did you hear about us? *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="website">Company Website</SelectItem>
                        <SelectItem value="social-media">Social Media</SelectItem>
                        <SelectItem value="job-board">Job Board</SelectItem>
                        <SelectItem value="referral">Employee Referral</SelectItem>
                        <SelectItem value="client">I'm a Client</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator />

            {/* Legal Information Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Legal Information</h3>

              <FormField
                control={form.control}
                name="workAuthorization"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>I am legally authorized to work in the United States *</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="backgroundCheck"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I understand that employment may be contingent upon passing a background check *
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="termsAgreement"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I certify that all information provided is true and complete to the best of my knowledge *
                      </FormLabel>
                      <FormDescription>
                        By checking this box, you acknowledge that providing false information may result in
                        disqualification from employment.
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-black"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
