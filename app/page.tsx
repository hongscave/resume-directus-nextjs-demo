import { readItems } from '@directus/sdk';
import { Suspense } from 'react';
import { connection } from 'next/server';
import directus from '@/lib/directus';
import AuthorCard from '@/components/AuthorCard';
import ProjectCard from '@/components/ProjectCard';
import JobCard from '@/components/JobCard';
import { Project, Job } from '@/lib/types';
import RevealEmail from '@/components/RevealEmail';

async function ProjectsList() {
  await connection();
  let allProjects: Project[] = [];

  try {
    allProjects = await directus.request(
      readItems('projects', {
        filter: { status: { _eq: 'published' } },
        sort: ['-publishedDate'],
      })
    );
  } catch {
    // fall through
  }

  return (
    <>
      {allProjects.length === 0 && (
        <p className="text-muted text-sm">No projects yet.</p>
      )}
      {allProjects.map((project, i) => (
        <ProjectCard key={project.id} project={project} priority={i === 0} />
      ))}
    </>
  );
}

async function ExperienceList() {
  await connection();
  let allJobs: Job[] = [];

  try {
    allJobs = await directus.request(
      readItems('jobs', {
        filter: { status: { _eq: 'published' } },
        sort: ['-startDate'],
      })
    );
  } catch {
    // fall through
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

function ProjectsSkeleton() {
  return (
    <div className="space-y-3 animate-pulse" aria-label="Loading projects">
      <div className="h-32 w-full bg-surface-hover rounded-lg" />
      <div className="h-32 w-full bg-surface-hover rounded-lg" />
    </div>
  );
}

function ExperienceSkeleton() {
  return (
    <div className="space-y-6 mt-4 animate-pulse" aria-label="Loading experience">
      <div className="h-20 w-full bg-surface-hover rounded-lg" />
      <div className="h-20 w-full bg-surface-hover rounded-lg" />
    </div>
  );
}

function GetInTouchButton() {
  return (
    <div className="flex justify-center py-6">
      <RevealEmail
        autoOpen
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Get in touch
      </RevealEmail>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <AuthorCard />
      <GetInTouchButton />

      <div className="flex flex-col gap-8 py-16 px-4 max-w-2xl mx-auto w-full">

        <section aria-labelledby="projects-heading" className="mt-8">
          <h2 id="projects-heading" className="text-xl font-semibold tracking-tight">Projects</h2>
          <div className="flex flex-col gap-3 mt-4">
            <Suspense fallback={<ProjectsSkeleton />}>
              <ProjectsList />
            </Suspense>
          </div>
        </section>

        <section aria-labelledby="experience-heading" className="mt-8">
          <h2 id="experience-heading" className="text-xl font-semibold tracking-tight">Experience</h2>
          <div className="mt-4">
            <Suspense fallback={<ExperienceSkeleton />}>
              <ExperienceList />
            </Suspense>
          </div>
        </section>

        {/* Download resume at the very bottom */}
        <div className="flex justify-center pt-8 pb-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-accent hover:text-white hover:border-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Download resume
          </a>
        </div>
      </div>
    </div>
  );
}