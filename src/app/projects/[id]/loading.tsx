// app/projects/[id]/loading.tsx
export default function ProjectLoading() {
  return (
    <main className="mt-4 sm:mt-24 mx-auto max-w-2xl relative px-4">
      {/* Image/Gallery Skeleton */}
      <div className="w-full h-[224px] md:h-[300px] rounded-md bg-secondary/50 animate-pulse" />

      <div className="mt-6">
        {/* Title Skeleton */}
        <div className="h-9 w-2/3 bg-secondary/50 rounded-md mb-4 animate-pulse" />

        {/* Tech Stack & Header Grid */}
        <div className="grid sm:grid-cols-3 gap-2 mb-6">
          {/* Tech Stack Card */}
          <div className="px-4 py-2 rounded-md bg-secondary border border-border">
            <div className="h-5 w-24 bg-secondary/50 rounded mb-2 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-32 bg-secondary/50 rounded animate-pulse" />
              <div className="h-4 w-28 bg-secondary/50 rounded animate-pulse" />
              <div className="h-4 w-36 bg-secondary/50 rounded animate-pulse" />
            </div>
          </div>

          {/* Header Card */}
          <div className="flex items-center justify-center px-4 py-2 rounded-md bg-secondary border border-border sm:col-span-2">
            <div className="h-5 w-3/4 bg-secondary/50 rounded animate-pulse" />
          </div>
        </div>

        {/* Article Content Skeleton */}
        <article className="prose max-w-full mb-6 space-y-3">
          <div className="h-4 w-full bg-secondary/50 rounded animate-pulse" />
          <div className="h-4 w-full bg-secondary/50 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-secondary/50 rounded animate-pulse" />
          <div className="h-4 w-full bg-secondary/50 rounded animate-pulse" />
          <div className="h-4 w-4/5 bg-secondary/50 rounded animate-pulse" />
          <div className="h-4 w-full bg-secondary/50 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-secondary/50 rounded animate-pulse" />
        </article>

        {/* Repository Button Skeleton */}
        <div className="inline-flex flex-row gap-2 rounded-lg bg-black/50 border border-border px-4 py-2 mb-6 animate-pulse">
          <div className="w-6 h-6 bg-secondary/50 rounded" />
          <div className="h-6 w-24 bg-secondary/50 rounded" />
        </div>
      </div>
    </main>
  )
}