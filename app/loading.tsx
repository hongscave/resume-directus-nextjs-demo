export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-8 py-16 px-4 max-w-2xl mx-auto w-full" aria-label="Loading content">
      {/* Author card skeleton */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 w-full animate-pulse">
        <div className="w-20 h-20 rounded-full bg-surface-hover shrink-0" />
        <div className="flex-1 space-y-3 w-full">
          <div className="h-7 w-48 bg-surface-hover rounded mx-auto sm:mx-0" />
          <div className="h-4 w-32 bg-surface-hover rounded mx-auto sm:mx-0" />
          <div className="h-4 w-full max-w-sm bg-surface-hover rounded mx-auto sm:mx-0" />
        </div>
      </div>

      {/* Projects section skeleton */}
      <div className="w-full space-y-4 mt-8">
        <div className="h-6 w-24 bg-surface-hover rounded" />
        <div className="h-32 w-full bg-surface-hover rounded-lg" />
        <div className="h-32 w-full bg-surface-hover rounded-lg" />
      </div>

      {/* Experience section skeleton */}
      <div className="w-full space-y-4 mt-8">
        <div className="h-6 w-28 bg-surface-hover rounded" />
        <div className="h-24 w-full bg-surface-hover rounded-lg" />
        <div className="h-24 w-full bg-surface-hover rounded-lg" />
      </div>
    </div>
  );
}