/**
 * Email helpers.
 *
 * The email address comes from the server-only env var AUTHOR_EMAIL
 * and is never embedded in HTML or client JS bundles. It is fetched
 * on-demand via `/api/email` when a user interacts with the reveal link.
 */

const EMAIL_API = '/api/email';

let cachedEmail: string | null = null;

/** Fetches the email address from the server-side API endpoint. */
export async function fetchEmail(): Promise<string> {
  if (cachedEmail) return cachedEmail;

  const res = await fetch(EMAIL_API);
  if (!res.ok) {
    throw new Error('Failed to fetch email');
  }
  const data = await res.json();
  cachedEmail = data.email as string;
  return cachedEmail;
}

/** Returns a `mailto:` href string for the given email. */
export function mailtoHref(email: string): string {
  return `mailto:${email}`;
}

/** Clears the cached email (useful for testing). */
export function clearEmailCache(): void {
  cachedEmail = null;
}