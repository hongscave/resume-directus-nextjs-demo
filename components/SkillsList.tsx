import { skillCategories } from '@/lib/author';

export async function SkillsList() {
  return (
    <>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-sm font-semibold text-muted shrink-0">{category}</span>
          {skills.map((skill) => (
            <span key={skill} className="inline-flex items-center px-2.5 py-0.5 text-sm bg-surface-hover text-muted border border-border">{skill}</span>
          ))}
        </div>
      ))}
    </>
  );
}
