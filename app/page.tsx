import { Suspense } from 'react';
import AuthorCard from '@/components/AuthorCard';
import GetInTouchButton from '@/components/GetInTouchButton';
import { ProjectsList, ProjectsSkeleton } from '@/components/ProjectsList';
import { ExperienceList, ExperienceSkeleton } from '@/components/ExperienceList';
import { SkillsList } from '@/components/SkillsList';

export const revalidate = 3600;

export default function HomePage() {
  const allSkills = [
    "React Native (Expo)", "CloudFlare", "TailwindCSS", "Nextjs", "SwiftUI",
    "VPS", "Hetzner", "Docker", "SSG", "Astro", "Express.js", "Flask",
    "Javascript", "Typescript", "AI coding", "Tailscale", "CloudFlare Tunnel",
    "Self-Hosting", "People Skill", "Big Picture Thinking", "Self-Driven",
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: process.env.NEXT_PUBLIC_AUTHOR_NAME ?? 'Your Name',
    description: process.env.NEXT_PUBLIC_AUTHOR_BIO ?? '',
    url: 'https://hongcheung.com',
    image: process.env.NEXT_PUBLIC_AUTHOR_AVATAR,
    sameAs: ['https://bsky.app/profile/hongcheung.com'],
    jobTitle: process.env.NEXT_PUBLIC_AUTHOR_TITLE ?? 'Developer',
    knowsAbout: allSkills,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AuthorCard />
      <GetInTouchButton />

      <div className="flex flex-col gap-8 py-8 px-4 max-w-2xl mx-auto w-full">
        <section aria-labelledby="skills-heading" className="mt-8">
          <h2 id="skills-heading" className="text-xl font-semibold tracking-tight">Skills</h2>
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