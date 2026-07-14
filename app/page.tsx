import { Suspense } from 'react';
import AuthorCard from '@/components/AuthorCard';
import GetInTouchButton from '@/components/GetInTouchButton';
import { ProjectsList, ProjectsSkeleton } from '@/components/ProjectsList';
import { ExperienceList, ExperienceSkeleton } from '@/components/ExperienceList';

export const dynamic = 'force-dynamic';

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