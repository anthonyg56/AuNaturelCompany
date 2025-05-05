"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"

export function CourseSignupForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setEmail("")
    }, 1000)

    // In a real implementation, you would send the email to your backend:
    // try {
    //   await fetch('/api/course-signup', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email }),
    //   })
    //   setSubmitted(true)
    //   setEmail("")
    // } catch (error) {
    //   console.error('Error submitting form:', error)
    // } finally {
    //   setLoading(false)
    // }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-2 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-500 mb-2" />
        <p className="text-sm font-medium">Thank you for signing up!</p>
        <p className="text-xs text-muted-foreground mt-1">
          We'll notify you when our courses are available.
        </p>
        <Button
          variant="link"
          className="mt-2 text-xs"
          onClick={() => setSubmitted(false)}
        >
          Sign up another email
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />
        <p className="text-xs text-muted-foreground">
          We'll send you updates about our courses and special early access offers.
        </p>
      </div>
      <Button
        type="submit"
        className="w-full bg-au-primary hover:bg-au-primary-dark text-black"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Notify Me"}
      </Button>
    </form>
  )
} 