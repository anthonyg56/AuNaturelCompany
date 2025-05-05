export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-16">
        <div className="w-full max-w-md mx-auto">
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-gray-200 rounded animate-pulse"></div>
            <div className="aspect-square bg-gray-200 rounded animate-pulse"></div>
            <div className="aspect-square bg-gray-200 rounded animate-pulse"></div>
            <div className="aspect-square bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
