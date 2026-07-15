import { allSkills } from '@/lib/author';

export async function SkillsList() {
  return (
    <>
      {allSkills.map((skill) => (
        <span key={skill} className="inline-flex items-center px-2.5 py-0.5 bg-surface-hover text-muted border border-border">{skill}</span>
      ))}
    </>
  );
}

