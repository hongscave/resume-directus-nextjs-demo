import { readItems } from '@directus/sdk';
import directus from '@/lib/directus';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/lib/types';

export async function ProjectsList() {
  let allProjects: Project[] = [];

  try {
    allProjects = await directus.request(
      readItems('projects', {
        filter: { status: { _eq: 'published' } },
        sort: ['-publishedDate'],
      })
    );
  } catch(error) {
    console.log(error)
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

export function ProjectsSkeleton() {
  return (
    <div className="space-y-3 animate-pulse" aria-label="Loading projects">
      <div className="h-32 w-full bg-surface-hover rounded-lg" />
      <div className="h-32 w-full bg-surface-hover rounded-lg" />
    </div>
  );
}