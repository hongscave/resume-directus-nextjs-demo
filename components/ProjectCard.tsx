import Image from 'next/image'
import { Project } from "@/lib/types"

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

const ProjectCard = ({ project, priority = false }: { project: Project; priority?: boolean }) => {
  return (
    <article className="relative flex flex-col sm:flex-row gap-4 w-full p-4 rounded-lg border border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
      {project.pinned && (
        <span className="absolute top-2 right-2 text-muted" aria-label="Pinned project">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="12" y1="17" x2="12" y2="22" />
            <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
          </svg>
        </span>
      )}
      {project.img && (
        <div className="relative w-full sm:w-28 h-48 sm:h-28 shrink-0 bg-surface-hover rounded-md overflow-hidden">
          <Image
            src={`/api/asset/${project.img}`}
            alt={project.imgAlt ?? project.title}
            fill
            sizes="(max-width: 640px) 100vw, 112px"
            priority={priority}
            unoptimized
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
        </div>
        <time dateTime={project.publishedDate} className="text-sm text-subtle">{project.publishedDate}</time>
        <p className="text-base leading-relaxed">{project.description}</p>
        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} official website`}
            className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover text-sm font-medium underline underline-offset-2 decoration-accent/30 hover:decoration-accent w-fit transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm"
          >
            <GlobeIcon />
            Official Website
          </a>
        )}
        {project.tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mt-1">
            {project.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-surface-hover text-muted border border-border">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard