import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Job Application | Au Natural Company",
  description: "Apply for a position at Au Natural Company",
}

export default function JobApplicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
