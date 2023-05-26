"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowUpRight, ExternalLink } from "lucide-react"

interface ResumeInfo {
  year: number
  company: string
  role: string
  description: string[]
}

function SectionHeading({
  left,
  right,
  link,
}: {
  left: string | number
  right: string
  link?: string
}) {
  return (
    <div className="flex flex-row items-center gap-2 text-sm">
      <span>{left}</span>
      <hr className="h-[1px] w-full border-t-[1px] border-dotted border-black" />
      {link ? (
        <Link
          className="group flex flex-row items-center gap-[1px] hover:underline"
          href={link}
          target="_blank"
        >
          {right}
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      ) : (
        <span>{right}</span>
      )}
    </div>
  )
}

function JobSection({ info }: { info?: ResumeInfo }) {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeading left={2023} right={"Company"} />
      <div className="flex flex-row items-start gap-10 text-sm">
        <div className="flex">
          <span className="whitespace-nowrap">Job Role</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-justify text-black/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, sapien sit amet volutpat lacinia, nisi ante gravida eros, a
            volutpat tortor eros sed nisi.
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Resume() {
  const router = useRouter()

  return (
    <main className="container mx-auto my-16 max-w-[690px]">
      <div className="flex flex-col gap-4">
        <span className="text-sm">LANCE AREVALO</span>
        <div className="flex flex-row justify-between text-sm">
          <span>SOFTWARE DEVELOPER</span>
          <div className="flex flex-row items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span>PHILIPPINES</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Experience
          </h4>
          <JobSection />
          <JobSection />
          <JobSection />
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Experience
          </h4>
          <SectionHeading
            left={"Email"}
            right={"hi@arevalolance.com"}
            link="mailto:hi@arevalolance.com"
          />
          <SectionHeading
            left={"LinkedIn"}
            right={"arevalolance"}
            link="https://linkedin.com/in/arevalolance"
          />
          <SectionHeading
            left={"Read.cv"}
            right={"arevalolance"}
            link="https://read.cv/arevalolance"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            About
          </h4>
          <p className="text-justify text-sm text-black/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, sapien sit amet volutpat lacinia, nisi ante gravida eros, a
            volutpat tortor eros sed nisi.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam rutrum, sapien sit amet volutpat
            lacinia, nisi ante gravida eros, a volutpat tortor eros sed
            nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, sapien sit amet volutpat lacinia, nisi ante gravida eros, a
            volutpat tortor eros sed nisi.
          </p>
        </div>

        <button
          onClick={() => router.push("/static/resume/arevalolance-resume.pdf")}
          className="border-gray-300/7 shadow-inner-[1px] hidden rounded-md border-[1px] bg-gray-100 p-2 text-sm font-semibold drop-shadow-sm transition-colors duration-150 hover:border-black/20 hover:ease-in md:block"
        >
          Download PDF
        </button>
      </div>
    </main>
  )
}
