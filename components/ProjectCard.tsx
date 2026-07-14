import Image from 'next/image'
import { Project } from "@/lib/types"

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

const ProjectCard = ({ project }: { project: Project }) => {

    return (    
        <article className="flex p-2 w-full max-w-[420px]">
            {project.img && (
                <div className="relative w-[118px] h-[200px] shrink-0 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <Image
                        src={`/api/asset/${project.img}`}
                        alt={project.title}
                        fill
                        sizes="118px"
                        loading="eager"
                        className="object-cover"
                    />
                </div>
            )}
            <div className="ml-4 flex-col flex gap-2">
                <p className="text-lg">{project.title}</p>
                <p className="text-base ">{project.publishedDate}</p>
                <p className="text-base">{project.description}</p>
                {project.website && (
                  <a href={project.website} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} official website`} className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline">
                    <GlobeIcon />
                    Official Website
                  </a>
                )}
                <div className="text-sm  flex items-center gap-2 flex flex-wrap">
                    {project.tags.map((tag) => (
                    <span key={tag} className='p-1'>{tag}</span>
                    ))
                    }
                </div>
            </div>
        </article>
    )
}

export default ProjectCard