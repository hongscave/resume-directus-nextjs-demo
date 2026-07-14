import RevealEmail from './RevealEmail'

function BlueskyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 10c-1.5-2.5-4-4-7-4-3 0-5 2-5 5 0 3 2 5 5 5h14c3 0 5-2 5-5 0-3-2-5-5-5-3 0-5.5 1.5-7 4z" />
      <path d="M12 10v8" />
      <path d="M8 14l4-4 4 4" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const links = [
  { href: "https://bsky.app/profile/hongcheung.com", icon: <BlueskyIcon />, label: "Bluesky" },
  { href: "https://hongcheung.com", icon: <GlobeIcon />, label: "Website" },
]

export default function Footer() {
  return (
    <footer className="mt-auto pt-8 pb-6 px-4">
      <hr className="border-border mb-6" />
      <nav aria-label="Social links" className="flex justify-center gap-8">
        {links.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted hover:text-foreground transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm"
          >
            {icon}
          </a>
        ))}
        <RevealEmail className="text-muted hover:text-foreground transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm">
          <EmailIcon />
        </RevealEmail>
      </nav>
    </footer>
  )
}