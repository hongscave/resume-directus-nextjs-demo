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
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-gray-200 dark:border-gray-600" />
      <time className="text-sm font-normal leading-none ">
        {formatDate(job.startDate)} — {formatDate(job.finishDate)}
      </time>
      <h3 className="text-lg font-semibold  my-2">
        {job.title} · {job.companyName}
      </h3>
      <p className="mb-4 text-base font-normal ">{job.description}</p>
      <span className="inline-flex items-center text-sm px-3 py-1 ">
        {job.location}
      </span>
    </li>
  )
}

export default JobCard
