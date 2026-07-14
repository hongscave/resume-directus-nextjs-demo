// lib/directus.ts (Extended version)
import { readItems, readItem } from '@directus/sdk';
import directus from '@/lib/directus';

// Optional: Helper functions for common queries
export async function getProjects() {
  return directus.request(
    readItems('projects', {
      sort: ['-publishedDate'],
    })
  );
}

export async function getJobs() {
  return directus.request(
    readItems('jobs', {
      sort: ['-startDate'],
    })
  );
}

const allProjects = await getProjects();
const allJobs = await getJobs();

function HomePage() {
  return (
    <div>
      hi
    </div>
  )
}

export default HomePage;