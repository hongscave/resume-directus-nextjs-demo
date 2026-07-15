import { Suspense } from 'react';
import AuthorCard from '@/components/AuthorCard';
import GetInTouchButton from '@/components/GetInTouchButton';
import { ProjectsList, ProjectsSkeleton } from '@/components/ProjectsList';
import { ExperienceList, ExperienceSkeleton } from '@/components/ExperienceList';
import { SkillsList } from '@/components/SkillsList';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div>
      <AuthorCard />
      <GetInTouchButton />

      <div className="flex flex-col gap-8 py-8 px-4 max-w-2xl mx-auto w-full">
        <section aria-labelledby="projects-heading" className="mt-8">
          <h2 id="projects-heading" className="text-xl font-semibold tracking-tight">Skills</h2>
          <div className="flex flex-wrap gap-3 mt-4">
              <SkillsList />
          </div>
        </section>

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

      </div>
    </div>
  );
}