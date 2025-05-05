import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const accentTextVariants = cva("transition-colors", {
  variants: {
    variant: {
      primary: "",
      secondary: "",
    },
    shade: {
      lightest: "",
      lighter: "",
      light: "",
      base: "",
      dark: "",
      darker: "",
      darkest: "",
    },
  },
  compoundVariants: [
    // Primary variants
    {
      variant: "primary",
      shade: "lightest",
      className: "text-primary-lightest",
    },
    {
      variant: "primary",
      shade: "lighter",
      className: "text-primary-lighter",
    },
    {
      variant: "primary",
      shade: "light",
      className: "text-primary-light",
    },
    {
      variant: "primary",
      shade: "base",
      className: "!text-primary",
    },
    {
      variant: "primary",
      shade: "dark",
      className: "text-primary-dark",
    },
    {
      variant: "primary",
      shade: "darker",
      className: "text-primary-darker",
    },
    {
      variant: "primary",
      shade: "darkest",
      className: "text-primary-darkest",
    },
    // Secondary variants
    {
      variant: "secondary",
      shade: "lightest",
      className: "text-au-secondary-lightest",
    },
    {
      variant: "secondary",
      shade: "lighter",
      className: "text-au-secondary-lighter",
    },
    {
      variant: "secondary",
      shade: "light",
      className: "text-au-secondary-light",
    },
    {
      variant: "secondary",
      shade: "base",
      className: "text-au-secondary",
    },
    {
      variant: "secondary",
      shade: "dark",
      className: "text-au-secondary-dark",
    },
    {
      variant: "secondary",
      shade: "darker",
      className: "text-au-secondary-darker",
    },
    {
      variant: "secondary",
      shade: "darkest",
      className: "text-au-secondary-darkest",
    },
  ],
  defaultVariants: {
    variant: "primary",
    shade: "base",
  },
})

export interface AccentTextProps
  extends React.ComponentPropsWithoutRef<"span">,
  VariantProps<typeof accentTextVariants> { }

const AccentText = ({ className, variant, shade, children, ...props }: AccentTextProps) => {
  return (
    <span
      className={cn(accentTextVariants({ variant, shade, className }))}
      {...props}
    >
      {children}
    </span>
  )
}

export { AccentText, accentTextVariants }
