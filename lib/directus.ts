import { createDirectus, rest } from '@directus/sdk';
import { Project, Job } from './types';

interface Schema {
  projects: Project[];
  jobs: Job[];
}

const DIRECTUS_URL = process.env.DIRECTUS_URL!; 

const directus = createDirectus<Schema>(DIRECTUS_URL).with(rest());

export default directus;