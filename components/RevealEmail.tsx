'use client'

import { useState, useCallback } from 'react'
import { fetchEmail, mailtoHref } from '@/lib/email'

interface RevealEmailProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick' | 'children'> {
  children?: React.ReactNode
  /**
   * When `true`, clicking the element opens the mailto link directly
   * after fetching the email. When `false`, the email is revealed in the UI
   * and the user must click again to open. Defaults to `false`.
   */
  autoOpen?: boolean
}

/**
 * A tap-to-reveal email link.
 *
 * The email address is never embedded in HTML or client JS bundles.
 * It is fetched on-demand from `/api/email` (backed by the server-only
 * `AUTHOR_EMAIL` env var) only when the user clicks the link.
 * This prevents simple scrapers and crawlers from harvesting the address.
 */
export default function RevealEmail({
  children,
  className = '',
  autoOpen = false,
  ...anchorProps
}: RevealEmailProps) {
  const [revealed, setRevealed] = useState(false)
  const [email, setEmail] = useState<string | null>(null)

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!email) {
        e.preventDefault()
        try {
          const fetched = await fetchEmail()
          setEmail(fetched)
          if (autoOpen) {
            window.location.href = mailtoHref(fetched)
          } else {
            setRevealed(true)
          }
        } catch {
          // Silently fail — the email could not be fetched
        }
      }
    },
    [email, autoOpen],
  )

  return (
    <a
      href={email ? mailtoHref(email) : '#'}
      onClick={handleClick}
      className={className}
      aria-label={email ? `Send email to ${email}` : 'Reveal email address'}
      {...anchorProps}
    >
      {revealed && email ? email : children ?? 'Email'}
    </a>
  )
}