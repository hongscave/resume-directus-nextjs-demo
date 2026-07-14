import { createDirectus, rest } from '@directus/sdk';
import { Project, Job } from './types';

interface Schema {
  projects: Project[];
  jobs: Job[];
}

const DIRECTUS_URL = process.env.DIRECTUS_URL!;

const fetchWithTimeout: typeof globalThis.fetch = (input, init) => {
  return globalThis.fetch(input, { ...init, signal: AbortSignal.timeout(5000) });
};

const directus = createDirectus<Schema>(DIRECTUS_URL, {
  globals: { fetch: fetchWithTimeout },
}).with(rest());

export default directus;