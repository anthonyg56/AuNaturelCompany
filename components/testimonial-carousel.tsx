"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative py-32">
      <div className="container text-center max-w-3xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${index === current ? "opacity-100" : "opacity-0 absolute top-0 left-0 right-0"
              }`}
          >
            <p className="italic text-lg">"{testimonial.quote}"</p>
            <p className="mt-4 font-medium">- {testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        ))}
        <div className="flex justify-center mt-6 gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => {
              setAutoplay(false)
              prev()
            }}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`w-2 h-2 p-0 rounded-full ${index === current ? "bg-amber-400" : "bg-gray-300"}`}
              onClick={() => {
                setAutoplay(false)
                setCurrent(index)
              }}
            >
              <span className="sr-only">Go to testimonial {index + 1}</span>
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => {
              setAutoplay(false)
              next()
            }}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
