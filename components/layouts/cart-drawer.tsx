"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Trash2, Plus, Minus } from "lucide-react"
import Image from "next/image"
import { useIsMobile } from "@/hooks/use-mobile"

// Mock cart data - replace with your actual cart state management
const initialCartItems = [
  {
    id: "1",
    name: "Loc Moisturizing Spray",
    price: 24.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Scalp Treatment Oil",
    price: 32.5,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=500&auto=format&fit=crop",
  },
]

export function ShoppingCartDrawer({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const isMobile = useIsMobile()

  // Calculate cart totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 5.99 : 0
  const total = subtotal + shipping

  // Handle quantity changes
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  // Remove item from cart
  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side={isMobile ? "bottom" : "right"}
        className={`flex flex-col ${isMobile ? "h-[85vh] rounded-t-xl pt-6" : "w-[400px]"}`}
      >
        {/* Visual indicator for draggable sheet on mobile */}
        {isMobile && (
          <div className="absolute top-2 left-0 right-0 flex justify-center">
            <div className="w-12 h-1.5 rounded-full bg-muted-foreground/20"></div>
          </div>
        )}

        <SheetHeader className="px-1">
          <div className="flex items-center justify-between">
            <SheetTitle>Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</SheetTitle>
          </div>
        </SheetHeader>

        <Separator className="my-4" />

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 py-8 text-center">
            <div className="rounded-full bg-muted p-6 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-muted-foreground"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium">Your cart is empty</h3>
            <p className="text-muted-foreground mt-1 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Button onClick={() => onOpenChange(false)}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start py-4">
                    <div className="h-20 w-20 rounded-md overflow-hidden bg-muted mr-4 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end ml-2">
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive mt-2"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 mt-6">
              <Separator />
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-sm font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Shipping</span>
                  <span className="text-sm font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-base font-medium">Total</span>
                  <span className="text-base font-medium">${total.toFixed(2)}</span>
                </div>
              </div>

              <SheetFooter className="flex flex-col gap-2 sm:flex-col">
                <Button className="w-full bg-amber-400 hover:bg-amber-500 text-black">Checkout</Button>
                <Button variant="outline" className="w-full" onClick={() => onOpenChange(false)}>
                  Continue Shopping
                </Button>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
