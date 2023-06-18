import SectionHeading from "./section-heading"

interface ResumeInfo {
  title: string
  company: string
  link?: string
  duration: string
  responsibilities: string
}

export default function JobSection({ info }: { info: ResumeInfo }) {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeading
        left={info.duration}
        right={info.company}
        link={info.link}
      />
      <div className="flex flex-row justify-between gap-10">
        <span className="whitespace-normal text-left sm:whitespace-nowrap">
          {info.title}
        </span>
        <span className="text-right text-gray-500">
          {info.responsibilities}
        </span>
      </div>
    </div>
  )
}
