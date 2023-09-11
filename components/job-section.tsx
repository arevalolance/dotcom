"use client"

import SectionHeading from "./section-heading"

interface Responsibility {
  title: string;
  description: string;
}

interface ResumeInfo {
  company: string
  link?: string
  duration: string
  responsibilities: Responsibility[]
}

export default function JobSection({ info }: { info: ResumeInfo }) {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeading
        left={info.duration}
        right={info.company}
        link={info.link}
      />
      <div className="flex flex-col gap-4">
        {info.responsibilities.map((resp) => (
          <div className="flex flex-row justify-between gap-10">
            <span className="whitespace-normal text-left sm:whitespace-nowrap">
              {resp.title}
            </span>
            <span className="text-right text-gray-500">
              {resp.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
