'use client'
import { authorConfig } from '@/lib/author';
import Image from 'next/image';
import RevealEmail from './RevealEmail'

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function BlueskyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026"/>
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const socialLinks = [
  { href: "https://bsky.app/profile/hongcheung.com", icon: <BlueskyIcon />, label: "Bluesky" },
]

export default function AuthorCard() {
  const name = authorConfig.name;
  const fullName = authorConfig.fullName;
  const title = authorConfig.title;
  const bio = authorConfig.bio;
  const avatar = authorConfig.avatar;
  const initials = authorConfig.initials;

  return (
    <section className="flex flex-col sm:flex-row items-center sm:items-start gap-8 py-8 pt-20 px-4 max-w-2xl mx-auto">
      <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 bg-surface border border-border flex items-center justify-center text-2xl font-bold text-muted">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        ) : (
          initials
        )}
      </div>
      <div className="text-center sm:text-left flex-1">
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
          <span className="text-sm text-muted mt-0.5">{fullName}</span>
        </div>
        <nav aria-label="Social links" className="flex items-center justify-center sm:justify-start gap-0.5 mt-2">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-md text-muted hover:text-foreground hover:bg-surface-hover transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {icon}
            </a>
          ))}
          <a
            href="https://hongcheung.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
            className="p-2 rounded-md text-muted hover:text-foreground hover:bg-surface-hover transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <GlobeIcon />
          </a>
          <RevealEmail
            className="p-2 rounded-md text-muted hover:text-foreground hover:bg-surface-hover transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <EmailIcon />
          </RevealEmail>
        </nav>
        <p className="text-lg text-muted mt-2">{title}</p>
        {bio && (
          <p className="text-base text-muted mt-4 max-w-prose leading-relaxed">
            {bio}
          </p>
        )}
      </div>
    </section>
  )
}