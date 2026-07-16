import 'dotenv/config';
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_FILE = join(__dirname, 'resume-data.json');

async function fetchAll(url: string, token: string, collection: string): Promise<Record<string, unknown>[]> {
  const response = await fetch(`${url}/items/${collection}?limit=-1`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${collection}: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as { data: Record<string, unknown>[] };
  return data.data ?? [];
}

async function main() {
  const directusUrl = process.env.DIRECTUS_URL;
  const directusToken = process.env.DIRECTUS_TOKEN;

  if (!directusUrl || !directusToken) {
    console.error('DIRECTUS_URL and DIRECTUS_TOKEN must be set in .env');
    process.exit(1);
  }

  try {
    const [rawProjects, rawJobs] = await Promise.all([
      fetchAll(directusUrl, directusToken, 'projects'),
      fetchAll(directusUrl, directusToken, 'jobs'),
    ]);

    const projects = rawProjects
      .filter((p) => (p.status as string) === 'published')
      .sort((a, b) => String(b.publishedDate ?? '').localeCompare(String(a.publishedDate ?? '')))
      .map(({ status: _status, ...rest }) => rest);

    const jobs = rawJobs
      .filter((j) => (j.status as string) === 'published')
      .sort((a, b) => String(b.startDate ?? '').localeCompare(String(a.startDate ?? '')))
      .map(({ status: _status, ...rest }) => rest);

    writeFileSync(DATA_FILE, JSON.stringify({ projects, jobs }, null, 2), 'utf-8');
    console.log(`Exported ${projects.length} projects and ${jobs.length} jobs to ${DATA_FILE}`);
  } catch (error) {
    console.error('Failed to export resume data from Directus:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main();