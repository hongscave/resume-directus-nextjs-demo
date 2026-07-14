import { createDirectus, rest } from '@directus/sdk';
import { Project, Job } from './types';

interface Schema {
  projects: Project[];
  jobs: Job[];
}

const DIRECTUS_URL = process.env.DIRECTUS_URL;

if (!DIRECTUS_URL) {
  throw new Error('DIRECTUS_URL environment variable is required');
}

const fetchWithTimeout: typeof globalThis.fetch = (input, init) => {
  return globalThis.fetch(input, { ...init, signal: AbortSignal.timeout(15000) });
};

const directus = createDirectus<Schema>(DIRECTUS_URL, {
  globals: { fetch: fetchWithTimeout },
}).with(rest());

export default directus;