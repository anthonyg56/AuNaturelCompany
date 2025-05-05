"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ShoppingCartDrawer } from "@/components/layouts/cart-drawer"

export function ShoppingCartButton() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Mock cart item count - replace with your actual cart state
  const cartItemCount = 3

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={() => setIsCartOpen(true)}
        aria-label="Open shopping cart"
      >
        <ShoppingCart className="h-5 w-5" />
        {cartItemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-xs font-medium text-black">
            {cartItemCount}
          </span>
        )}
      </Button>

      <ShoppingCartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  )
}
