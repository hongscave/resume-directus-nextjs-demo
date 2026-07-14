import { readItems } from '@directus/sdk';
import directus from '@/lib/directus';
import AuthorCard from '@/components/AuthorCard';
import ProjectCard from '@/components/ProjectCard';
import JobCard from '@/components/JobCard';
import { Project, Job } from '@/lib/types';

async function HomePage() {
  let allProjects: Project[] = [];
  let allJobs: Job[] = [];

  try {
    [allProjects, allJobs] = await Promise.all([
      directus.request(
        readItems('projects', {
          filter: { status: { _eq: 'published' } },
          sort: ['-publishedDate'],
        })
      ),
      directus.request(
        readItems('jobs', {
          filter: { status: { _eq: 'published' } },
          sort: ['-startDate'],
        })
      ),
    ]);
  } catch {
    // fall through — empty arrays
  }

  return (
    <div>
      <AuthorCard />
      <div className="flex flex-col gap-3 py-20 px-4 max-w-2xl mx-auto w-full">
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <div className="flex flex-col gap-2">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          </div>
        </section>

        <section id="jobs">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <ol className="relative border-s border-default">
            {allJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}

export default HomePage;