"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, Phone, ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ClientWrapper } from "@/components/layouts/navbar-client-wrapper";
import { AccentText } from "@/components/accent-text";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  if (pathname === "/schedule") {
    return null
  }


  return (
    <header className="border-b sticky top-0 bg-background z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-xl flex items-center gap-0.5">
          <AccentText variant="primary" shade="base">
            Au
          </AccentText>

          <AccentText variant="secondary" shade="base">
            Naturel
          </AccentText>
          <span className="text-muted-foreground text-xs items-center">©</span>
        </Link>

        {/* Mobile menu trigger */}
        <Button variant="ghost" size="icon" className="md:hidden" id="mobile-menu-trigger">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Mobile navigation drawer */}
        <ClientWrapper />

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  isActive('/') && "text-amber-400"
                )}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  isActive('/about') && "text-amber-400"
                )}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-row gap-3 p-4 w-[600px]">
                  <li className="flex-1">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/locs"
                        className="block select-none h-full space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Locs</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Expert loc creation and maintenance
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="flex-1">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/haircuts"
                        className="block select-none h-full space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Haircuts</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professional cuts and styling
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="flex-1">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/natural-hair"
                        className="block select-none h-full space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Natural Hair</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Treatments for natural hair textures
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/shop" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  isActive('/shop') && "text-amber-400"
                )}>
                  Shop
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/gallery" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  isActive('/gallery') && "text-amber-400"
                )}>
                  Gallery
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/contact">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Link>
          </Button>
          <Button size="sm" className="bg-amber-400 hover:bg-amber-500 text-black" asChild>
            <Link href="/booking">
              Book Now
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}