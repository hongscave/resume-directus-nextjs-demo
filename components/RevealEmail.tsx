'use client'

import { useState, useCallback } from 'react'
import { mailtoHref, emailAddress } from '@/lib/email'

interface RevealEmailProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick' | 'children'> {
  children?: React.ReactNode
  /**
   * When `true`, clicking the element opens the mailto link directly
   * after revealing. When `false`, the email is revealed in the UI
   * and the user must click again to open. Defaults to `false`.
   */
  autoOpen?: boolean
}

/**
 * A tap-to-reveal email link.
 *
 * First tap reveals the email address in the UI or navigates directly
 * to the mailto link. This prevents simple scrapers from harvesting
 * the address from the DOM on initial page load.
 */
export default function RevealEmail({
  children,
  className = '',
  autoOpen = false,
  ...anchorProps
}: RevealEmailProps) {
  const [revealed, setRevealed] = useState(false)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!revealed) {
        e.preventDefault()
        setRevealed(true)
        if (autoOpen) {
          setTimeout(() => {
            window.location.href = mailtoHref()
          }, 0)
        }
      }
    },
    [revealed, autoOpen],
  )

  return (
    <a
      href={mailtoHref()}
      onClick={handleClick}
      className={className}
      aria-label={revealed ? `Send email to ${emailAddress()}` : 'Reveal email address'}
      {...anchorProps}
    >
      {revealed ? children ?? emailAddress() : children ?? 'Email'}
    </a>
  )
}
