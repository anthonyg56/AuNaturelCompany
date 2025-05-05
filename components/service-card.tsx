import Link from "next/link"
import Image from "next/image"
import { Box, ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  linkText: string
  linkHref: string
  variant?: "default" | "split"
  imageUrl?: string
}

export function ServiceCard({
  title,
  description,
  linkText,
  linkHref,
  variant = "default",
  imageUrl,
}: ServiceCardProps) {
  if (variant === "split") {
    return (
      <div className="bg-gray-100 rounded-xl overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-48 md:h-auto relative bg-gray-200">
          {imageUrl && <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />}
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-medium text-lg mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
          </div>
          <Link
            href={linkHref}
            className="text-sm font-medium flex items-center hover:text-amber-600 transition-colors"
          >
            {linkText} <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-100 rounded-xl p-6 flex flex-col h-full">
      <div className="mb-4">
        <Box className="h-6 w-6" />
      </div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>
      <Link href={linkHref} className="text-sm font-medium flex items-center hover:text-amber-600 transition-colors">
        {linkText} <ArrowRight className="h-4 w-4 ml-1" />
      </Link>
    </div>
  )
}
