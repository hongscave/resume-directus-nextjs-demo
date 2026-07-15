'use client'
import { authorConfig } from '@/lib/author';
import ThemeToggle from './ThemeToggle'

const authorName = authorConfig.name;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-2xl mx-auto px-4 h-14">
        <a href="/" className="text-sm font-semibold text-foreground hover:text-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm">
          {authorName}
        </a>
        <div className="flex items-center gap-1">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}