import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import QueriedImage from "@/components/queried-image"
import { AccentText } from "@/components/accent-text"
import { CourseSignupForm } from "@/components/courses/course-signup-form"

export const metadata = {
  title: "Courses Coming Soon | Au Natural Company",
  description: "Sign up to be notified when our hair twisting and loc maintenance courses are available.",
}

export default function CoursesComingSoon() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-primary text-primary rounded-full text-sm font-medium mb-2">
                  Coming Soon
                </div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Learn to <AccentText variant="primary" shade="base">Twist</AccentText> and <AccentText variant="secondary">Maintain</AccentText> Your Locs
                </h1>
                <p className="text-muted-foreground text-lg">
                  Our expert-led courses on hair twisting and loc maintenance are coming soon.
                  Be the first to know when they're available and get exclusive early access.
                </p>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-8">
                  <h3 className="text-xl font-medium mb-4">Get Notified</h3>
                  <CourseSignupForm />
                </div>
              </div>

              <div className="rounded-lg overflow-hidden bg-muted aspect-square">
                <QueriedImage
                  alt="Hair twisting tutorial"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  query="natural-hair-twisting-tutorial-demonstration"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Course Preview Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                What You'll <AccentText variant="primary" shade="base">Learn</AccentText>
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Our comprehensive courses will cover everything you need to know about twisting and maintaining your natural hair
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Beginner Twisting Techniques",
                  description: "Learn the fundamentals of twisting your natural hair with our step-by-step guidance.",
                  image: "natural-hair-twisting-beginners-tutorial",
                  price: "$50",
                },
                {
                  title: "Advanced Loc Maintenance",
                  description: "Master the art of maintaining healthy, beautiful locs with professional techniques.",
                  image: "advanced-dreadlock-maintenance-tutorial",
                  price: "$75",
                },
                {
                  title: "Styling Your Locs",
                  description: "Discover creative styling options to showcase your locs in various stunning ways.",
                  image: "creative-dreadlock-styling-tutorial",
                  price: "$65",
                }
              ].map((course, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                  <div className="h-48 relative bg-gray-200">
                    <QueriedImage
                      alt={course.title}
                      fill
                      className="object-cover"
                      query={course.image}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium text-lg">{course.title}</h3>
                      <span className="text-primary font-medium">{course.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">{course.description}</p>
                    <div className="inline-block px-3 py-1 bg-primary text-primary rounded-full text-xs font-medium">
                      Coming Soon
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                Frequently Asked <AccentText variant="primary" shade="base">Questions</AccentText>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "When will the courses be available?",
                  answer: "We're currently finalizing our course content and expect to launch within the next few months. Sign up for notifications to be the first to know!"
                },
                {
                  question: "What skill level are the courses designed for?",
                  answer: "We'll offer courses for all skill levels, from complete beginners to those looking to refine their techniques."
                },
                {
                  question: "Will I need special tools or products?",
                  answer: "Each course will include a list of recommended tools and products. Many basics can be found at home, while some specialized items will be available for purchase through our salon."
                },
                {
                  question: "How will the courses be delivered?",
                  answer: "Courses will be available as on-demand video tutorials that you can access anytime. We'll also offer live virtual sessions for more interactive learning."
                },
                {
                  question: "Will I get personalized feedback on my technique?",
                  answer: "Our premium course packages will include options for personalized feedback from our expert locticians."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">
              Can't Wait for Our <AccentText variant="primary" shade="base">Courses</AccentText>?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Book an appointment with our expert locticians for professional service while you wait for our courses to launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-au-primary hover:bg-au-primary-dark text-black" asChild>
                <Link href="/booking">Book an Appointment</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
