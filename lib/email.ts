/**
 * Email helpers.
 *
 * The email address comes from NEXT_PUBLIC_AUTHOR_EMAIL (.env),
 * so it never appears in the source code itself.
 */

function decode(): string {
  // env is validated at build/startup; at runtime it's always a string
  return process.env.NEXT_PUBLIC_AUTHOR_EMAIL ?? '';
}

/** Returns a `mailto:` href string. */
export function mailtoHref(): string {
  return `mailto:${decode()}`;
}

/** Returns the raw email address. */
export function emailAddress(): string {
  return decode();
}
