import { Metadata } from "next"

import { projects } from "@/types/projects"
import ProjectCard from "@/components/project-card"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Learn more about the fun projects that I built since the beginning of my software development journey.",
}

export default async function Projects() {
  return (
    <main className="container mx-auto my-16 flex flex-col gap-y-10 lg:w-10/12 xl:w-[60%] 2xl:w-1/2">
      <div className="flex flex-col gap-4">
        <div className="mb-4 flex flex-col gap-2">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Side Projects
          </h3>
          <p className="text-justify">
            This contains the fun side projects I have made so far. Some of
            these projects are aimed at helping me have a better experience
            writing code, while others are an experimentation with unfamiliar
            technologies.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {projects.side.map((item) => (
            <ProjectCard key={item.name} item={item} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="mb-4 flex flex-col gap-2">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            University Projects
          </h3>
          <p className="text-justify">
            This section contains the fun projects I made to fulfill
            requirements from different classes throughout my college years. I
            only added projects where I was either the creator or major
            contributor. Most of these projects were made in collaboration with
            a group, which you can find at{" "}
            <a
              className="text-blue-500 hover:text-blue-600 hover:underline"
              href="https://github.com/abcd-edu"
              target="_blank"
            >
              ABCD-EDU
            </a>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {projects.college.map((item) => (
            <ProjectCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
}
