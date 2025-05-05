"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { X, Phone } from "lucide-react"

interface MobileNavProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileNav({ isOpen, onOpenChange }: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[85vh] rounded-t-xl pt-6 px-6">
        <div className="flex flex-col h-full max-h-full overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="font-semibold text-xl" onClick={() => onOpenChange(false)}>
              Au Natural
            </Link>
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          {/* Visual indicator for draggable sheet */}
          <div className="absolute top-2 left-0 right-0 flex justify-center">
            <div className="w-12 h-1.5 rounded-full bg-muted-foreground/20"></div>
          </div>

          <nav className="flex-1 overflow-y-auto pr-2">
            <ul className="space-y-2">
              <li>
                <Link href="/" className="block py-2 text-base font-medium" onClick={() => onOpenChange(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 text-base font-medium" onClick={() => onOpenChange(false)}>
                  About
                </Link>
              </li>
              <li>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-b-0">
                    <AccordionTrigger className="py-2 text-base font-medium">Services</AccordionTrigger>
                    <AccordionContent>
                      <ul className="pl-4 space-y-2">
                        <li>
                          <Link
                            href="/services/locs"
                            className="block py-1.5 text-sm"
                            onClick={() => onOpenChange(false)}
                          >
                            Locs
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/barbering"
                            className="block py-1.5 text-sm"
                            onClick={() => onOpenChange(false)}
                          >
                            Barbering
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/natural-hair"
                            className="block py-1.5 text-sm"
                            onClick={() => onOpenChange(false)}
                          >
                            Natural Hair
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/starter"
                            className="block py-1.5 text-sm"
                            onClick={() => onOpenChange(false)}
                          >
                            Starter
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li>
                <Link href="/shop" className="block py-2 text-base font-medium" onClick={() => onOpenChange(false)}>
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="block py-2 text-base font-medium" onClick={() => onOpenChange(false)}>
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-auto pt-4 pb-6 space-y-4">
            <Button variant="outline" className="w-full" onClick={() => onOpenChange(false)} asChild>
              <Link href="/contact" className="flex items-center justify-center w-full">
                <Phone className="h-4 w-4 mr-2" />
                Contact Now
              </Link>
            </Button>
            <Button className="w-full bg-amber-400 hover:bg-amber-500 text-black" onClick={() => onOpenChange(false)}>
              <Link href="/booking" className="flex items-center justify-center w-full">
                <Phone className="h-4 w-4 mr-2" />
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
