"use client"

import { useState } from "react"
import { MobileNav } from "@/components/layouts/mobile-nav"

interface ClientWrapperProps {
  activePath: string
}

export function ClientWrapper({ activePath }: ClientWrapperProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Add event listener to the mobile menu trigger
  if (typeof window !== "undefined") {
    const mobileMenuTrigger = document.getElementById("mobile-menu-trigger")
    if (mobileMenuTrigger) {
      mobileMenuTrigger.addEventListener("click", () => setIsOpen(true))
    }
  }

  return <MobileNav isOpen={isOpen} onOpenChange={setIsOpen} activePath={activePath} />
}
