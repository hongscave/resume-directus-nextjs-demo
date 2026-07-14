import { readItems } from '@directus/sdk';
import directus from '@/lib/directus';
import JobCard from '@/components/JobCard';
import { Job } from '@/lib/types';

export async function ExperienceList() {
  let allJobs: Job[] = [];

  try {
    allJobs = await directus.request(
      readItems('jobs', {
        filter: { status: { _eq: 'published' } },
        sort: ['-startDate'],
      })
    );
  } catch(error) {
    console.log(error)
  }

  return (
    <ol className="relative border-s border-border">
      {allJobs.length === 0 && (
        <p className="text-muted text-sm">No experience listed yet.</p>
      )}
      {allJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </ol>
  );
}

export function ExperienceSkeleton() {
  return (
    <div className="space-y-6 mt-4 animate-pulse" aria-label="Loading experience">
      <div className="h-20 w-full bg-surface-hover rounded-lg" />
      <div className="h-20 w-full bg-surface-hover rounded-lg" />
    </div>
  );
}