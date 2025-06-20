"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { X, Phone, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { AccentText } from "../accent-text"

interface MobileNavProps {
  isOpen: boolean
  activePath: string,
  onOpenChange: (open: boolean) => void
}

export function MobileNav({ isOpen, activePath, onOpenChange }: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[85vh] rounded-t-xl pt-6 px-6">
        <div className="flex flex-col h-full max-h-full overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="font-semibold text-xl" onClick={() => onOpenChange(false)}>
              <AccentText variant="primary" shade="base">
                Au
              </AccentText>

              <AccentText variant="secondary" shade="base">
                Naturel
              </AccentText>
              <span className="text-muted-foreground text-xs items-center">©</span>
            </Link>
          </div>

          {/* Visual indicator for draggable sheet */}
          <div className="absolute top-2 left-0 right-0 flex justify-center">
            <div className="w-12 h-1.5 rounded-full bg-muted-foreground/20"></div>
          </div>

          <nav className="flex-1 overflow-y-auto pr-2">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className={cn(
                    "block py-2 text-base font-medium",
                    activePath === '/' && "text-primary font-bold"
                  )}
                  onClick={() => onOpenChange(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={cn(
                    "block py-2 text-base font-medium",
                    activePath === '/about' && "text-primary font-bold"
                  )}
                  onClick={() => onOpenChange(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-b-0">
                    <AccordionTrigger className={cn(
                      "py-2 text-base font-medium",
                      activePath.startsWith('/services') && "text-primary font-bold"
                    )}>Services</AccordionTrigger>
                    <AccordionContent>
                      <ul className="pl-4 space-y-2">
                        <li>
                          <Link
                            href="/services"
                            className={cn(
                              "block py-1.5 text-sm",
                              activePath === '/services' && "text-primary font-bold"
                            )}
                            onClick={() => onOpenChange(false)}
                          >
                            All
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/locs"
                            className={cn(
                              "block py-1.5 text-sm",
                              activePath === '/services/locs' && "text-primary font-bold"
                            )}
                            onClick={() => onOpenChange(false)}
                          >
                            Locs
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/haircuts"
                            className={cn(
                              "block py-1.5 text-sm",
                              activePath === '/services/haircuts' && "text-primary font-bold"
                            )}
                            onClick={() => onOpenChange(false)}
                          >
                            Haircuts
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/natural-hair"
                            className={cn(
                              "block py-1.5 text-sm",
                              activePath === '/services/natural-hair' && "text-primary font-bold"
                            )}
                            onClick={() => onOpenChange(false)}
                          >
                            Natural Hair
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li>
                <Link
                  href="/shop"
                  className={cn(
                    "block py-2 text-base font-medium",
                    activePath === '/shop' && "text-primary font-bold"
                  )}
                  onClick={() => onOpenChange(false)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className={cn(
                    "block py-2 text-base font-medium",
                    activePath === '/gallery' && "text-primary font-bold"
                  )}
                  onClick={() => onOpenChange(false)}
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-auto pt-4 pb-6 space-y-4">
            <Button variant="outline" className="w-full" onClick={() => onOpenChange(false)} asChild>
              <Link href="/contact" className={cn(
                "flex items-center justify-center w-full",
                activePath === '/contact' && "text-primary font-bold"
              )}>
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </Link>
            </Button>
            <Button className="w-full bg-primary hover:bg-primary text-black" onClick={() => onOpenChange(false)}>
              <Link href="/booking" className={cn(
                "flex items-center justify-center w-full",
                activePath === '/booking' && "font-bold"
              )}>
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
