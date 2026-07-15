import { readItems } from '@directus/sdk';
import directus from '@/lib/directus';


export async function SkillsList() {
    // to be modified
//   let allProjects: Skill[] = [];

//   try {
//     allProjects = await directus.request(
//       readItems('projects', {
//         filter: { status: { _eq: 'published' } },
//         sort: ['-publishedDate'],
//       })
//     );
//   } catch(error) {
//     console.log(error)
//   }

  const SkillCard = ({skill}: {skill :any}) => {
    return (
        <span key={skill} className="inline-flex items-center px-2.5 py-0.5 bg-surface-hover text-muted border border-border">{skill}</span>
        
    )
  } 

  const allSkills: string[] = ["React Native (Expo)", "CloudFlare", "TailwindCSS", "Nextjs", "SwiftUI", "VPS", "Hetzner", "Docker", "SSG", "Astro", "Express.js", "Flask", "Javascript", "Typescript", "AI coding", "Tailscale", "CloudFlare Tunnel", "Self-Hosting", "People Skill", "Big Picture Thinking", "Self-Driven"]

  return (
    <>
      {allSkills.length === 0 && (
        <p className="text-muted text-sm">No skills yet.</p>
      )}
      {allSkills.map((skill) => (
        <SkillCard key={skill} skill={skill} />
      ))}
    </>
  );
}

