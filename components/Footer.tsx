'use client'
import { useState, ReactNode } from 'react'

function RevealLink({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  const [revealed, setRevealed] = useState(false)
  return (
    <a
      href={revealed ? href : '#'}
      onClick={(e) => { if (!revealed) { e.preventDefault(); setRevealed(true) } }}
      className={`transition-transform duration-200 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm ${revealed ? 'scale-110' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

function BlueskyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 10c-1.5-2.5-4-4-7-4-3 0-5 2-5 5 0 3 2 5 5 5h14c3 0 5-2 5-5 0-3-2-5-5-5-3 0-5.5 1.5-7 4z" />
      <path d="M12 10v8" />
      <path d="M8 14l4-4 4 4" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mt-auto pt-8 pb-6 px-4">
      <hr className="border-gray-300 dark:border-gray-600 mb-6" />
      <div className="flex justify-center gap-6">
        <RevealLink href="https://bsky.app/profile/hongcheung.com" icon={<BlueskyIcon />} label="Bluesky" />
        <RevealLink href="https://hongcheung.com" icon={<GlobeIcon />} label="Website" />
        <RevealLink href="mailto:info@hongcheung.com" icon={<EmailIcon />} label="Email" />
      </div>
    </footer>
  )
}
