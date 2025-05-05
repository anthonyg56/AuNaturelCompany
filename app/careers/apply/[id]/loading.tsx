import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="container py-12 flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
        <p>Loading application form...</p>
      </div>
    </div>
  )
}
