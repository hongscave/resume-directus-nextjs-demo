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

const directus = createDirectus<Schema>(DIRECTUS_URL).with(rest());

export default directus;