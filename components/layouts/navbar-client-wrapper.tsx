"use client"

import { useState } from "react"
import { MobileNav } from "@/components/layouts/mobile-nav"

export function ClientWrapper() {
  const [isOpen, setIsOpen] = useState(false)

  // Add event listener to the mobile menu trigger
  if (typeof window !== "undefined") {
    const mobileMenuTrigger = document.getElementById("mobile-menu-trigger")
    if (mobileMenuTrigger) {
      mobileMenuTrigger.addEventListener("click", () => setIsOpen(true))
    }
  }

  return <MobileNav isOpen={isOpen} onOpenChange={setIsOpen} />
}
