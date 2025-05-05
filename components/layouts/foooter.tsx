"use client"
import { Facebook, Twitter } from "lucide-react";

import { Instagram } from "lucide-react";
import { AccentText } from "../accent-text";

import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname()

  if (pathname === "/schedule") {
    return null
  }

  return (
    <footer className="bg-slate-50 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">
              <AccentText variant="primary" shade="base">Au Natural</AccentText>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-amber-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-amber-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-amber-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-muted-foreground hover:text-amber-500">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-amber-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">
              <AccentText variant="secondary">Services</AccentText>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/locs" className="text-sm text-muted-foreground hover:text-amber-500">
                  Locs
                </Link>
              </li>
              <li>
                <Link href="/services/haircuts" className="text-sm text-muted-foreground hover:text-amber-500">
                  Haircuts
                </Link>
              </li>
              <li>
                <Link href="/services/natural-hair" className="text-sm text-muted-foreground hover:text-amber-500">
                  Natural Hair
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-amber-500">
                  Color
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-amber-500">
                  Treatments
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">
              <AccentText variant="primary" shade="base">Resources</AccentText>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-amber-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-sm text-muted-foreground hover:text-amber-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-amber-500">
                  Care Guide
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm text-muted-foreground hover:text-amber-500">
                  Products
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">
              <AccentText variant="secondary">Info</AccentText>
            </h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>2605 E 62nd street #2001, Suite #121</p>
              <p>Indianapolis, IN 46220</p>
              <p className="mt-4">info@aunaturalcompany.com</p>
              <p>(317) 914-3125</p>
            </address>
            <div className="flex gap-4 mt-4">
              <Link href="https://www.instagram.com/shyntrademarked/" className="text-amber-400 hover:text-amber-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.facebook.com/ShynTrademarked/" className="text-amber-400 hover:text-amber-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.tiktok.com/@shyn_trademarked" className="text-amber-400 hover:text-amber-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <Separator className="mb-6" />
        <div className="text-center text-xs text-muted-foreground">
          <p>© 2023 Au Natural Company. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="#" className="hover:text-amber-500">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-amber-500">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-amber-500">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
