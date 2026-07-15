import { Job } from "@/lib/types"

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "Present"
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  })
}

const JobCard = ({ job }: { job: Job }) => {
  return (
    <li className="mb-10 ms-6">
      <div className="absolute w-3 h-3 bg-muted rounded-full mt-1.5 -start-1.5 border-2 border-surface" />
      <time dateTime={job.startDate} className="text-sm text-muted">
        {formatDate(job.startDate)} — {formatDate(job.finishDate)}
      </time>
      <h3 className="text-lg font-semibold mt-2">
        {job.title} <span className="text-muted">·</span> <span className="text-muted">{job.companyName}</span>
      </h3>
      <p className="mt-2 text-base leading-relaxed">{job.description}</p>
      <span className="inline-flex items-center mt-3 text-sm text-muted">
        {job.location}
      </span>
    </li>
  )
}

export default JobCard