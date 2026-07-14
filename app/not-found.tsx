import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-32 px-4 max-w-md mx-auto text-center">
      <div className="w-16 h-16 rounded-full bg-surface-hover border border-border flex items-center justify-center text-2xl font-bold text-muted">
        ?
      </div>
      <h1 className="text-2xl font-bold tracking-tight">Page not found</h1>
      <p className="text-muted text-base leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Back to home
      </Link>
    </div>
  )
}