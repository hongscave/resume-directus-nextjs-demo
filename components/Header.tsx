'use client'
import { authorConfig } from '@/lib/author';
import ThemeToggle from './ThemeToggle'

const authorName = authorConfig.name;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-3xl mx-auto px-4 h-14">
        <a href="/" className="text-sm font-semibold text-foreground hover:text-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm">
          {authorName}
        </a>
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/hongscave/resume-directus-nextjs-demo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code"
            className="p-1.5 rounded-md text-muted hover:text-foreground hover:bg-surface-hover transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <div className="flex flex- gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span className="text-xs">Source</span>
            </div>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}