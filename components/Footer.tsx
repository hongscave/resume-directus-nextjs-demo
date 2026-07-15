import { authorConfig } from '@/lib/author';

const authorName = authorConfig.name;

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mt-auto pt-8 pb-6 px-4">
      <hr className="border-border mb-6" />
      <p className="text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} {authorName}. All rights reserved.
      </p>
      <div className="flex justify-center mt-3">
        <a
          href="https://github.com/hongscave/resume-directus-nextjs-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
        >
          <GitHubIcon />
          <span>View Source</span>
        </a>
      </div>
    </footer>
  )
}