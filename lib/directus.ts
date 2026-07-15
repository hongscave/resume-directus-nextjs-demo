import { createDirectus, rest, staticToken } from '@directus/sdk';
import { Project, Job } from './types';

interface Schema {
  projects: Project[];
  jobs: Job[];
}

const DIRECTUS_URL = process.env.DIRECTUS_URL;
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN;

if (!DIRECTUS_URL) {
  throw new Error('DIRECTUS_URL environment variable is required');
}

/**
 * Custom fetch wrapper that:
 * - Attaches the static auth token (was previously unused!)
 * - Uses a 15-second timeout so stalled connections don't pile up
 * - Signals keepalive to allow TCP connection reuse
 *
 * Connection reuse is critical in dev mode: HMR can trigger rapid
 * re-renders, each spawning parallel requests from multiple components.
 * Without keepalive, every request opens a fresh TCP connection,
 * exhausting the server's connection pool → ETIMEDOUT → error → retry → loop.
 */
function createDirectusFetch(): typeof fetch {
  return async (input, init) => {
    const headers = new Headers(init?.headers);

    if (DIRECTUS_TOKEN) {
      headers.set('Authorization', `Bearer ${DIRECTUS_TOKEN}`);
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15_000);

    try {
      const response = await fetch(input, {
        ...init,
        headers,
        signal: controller.signal,
        // Enable TCP connection reuse in Node.js (undici).
        // Specifically mitigates the dev-mode HMR fetch storm.
        keepalive: true,
      } as RequestInit);

      return response;
    } finally {
      clearTimeout(timeout);
    }
  };
}

const directus = createDirectus<Schema>(DIRECTUS_URL, {
  globals: {
    fetch: createDirectusFetch(),
  },
})
  .with(staticToken(DIRECTUS_TOKEN ?? ''))
  .with(rest());

export default directus;