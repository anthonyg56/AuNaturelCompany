import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Breadcrumb Skeleton */}
      <div className="bg-gray-50 py-3">
        <div className="container">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </div>

      {/* Header Skeleton */}
      <div className="relative py-16 bg-gray-900">
        <div className="container relative z-10">
          <Skeleton className="h-10 w-64 mb-4" />
          <Skeleton className="h-6 w-full max-w-2xl mb-2" />
          <Skeleton className="h-6 w-full max-w-xl mb-6" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="py-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Skeleton */}
            <div className="w-full lg:w-64 space-y-6">
              <div>
                <Skeleton className="h-6 w-24 mb-3" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div>
                <Skeleton className="h-6 w-32 mb-3" />
                <Skeleton className="h-6 w-full mb-6" />
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-10" />
                  <Skeleton className="h-4 w-10" />
                </div>
              </div>
              <div>
                <Skeleton className="h-6 w-28 mb-3" />
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-8 w-16 rounded-full" />
                  ))}
                </div>
              </div>
              <Skeleton className="h-10 w-full" />
            </div>

            {/* Products Grid Skeleton */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <Skeleton className="h-5 w-40" />
                <div className="flex items-center gap-4">
                  <Skeleton className="h-10 w-40" />
                  <Skeleton className="h-10 w-20" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="border rounded-lg overflow-hidden">
                    <Skeleton className="aspect-square w-full" />
                    <div className="p-4">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-5 w-16" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Skeleton */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-9 w-20" />
                  <Skeleton className="h-9 w-9" />
                  <Skeleton className="h-9 w-9" />
                  <Skeleton className="h-9 w-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
