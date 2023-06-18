import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowUpRight } from "lucide-react"

import { Resume, resume } from "@/types/resume"
import { Metadata } from "next"

interface ResumeInfo {
  title: string
  company: string
  link?: string
  duration: string
  responsibilities: string
}

export const metadata: Metadata = {
  title: "Hire",
  description: "Know more about my skills and how we can work together to build something amazing."
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
    <div className="flex flex-row items-center gap-2 ">
      <span className="whitespace-nowrap break-keep">{left}</span>
      <hr className="h-[1px] w-full border-t-[1px] border-dotted border-black" />
      {link ? (
        <Link
          className="group flex flex-row items-center gap-[1px] text-right hover:underline sm:whitespace-nowrap"
          href={link}
          target="_blank"
        >
          {right}
          <ArrowUpRight className="hidden h-3 w-3 sm:block" />
        </Link>
      ) : (
        <span className="whitespace-nowrap break-keep">{right}</span>
      )}
    </div>
  )
}

function JobSection({ info }: { info: ResumeInfo }) {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeading left={info.duration} right={info.company} link={info.link} />
      <div className="flex flex-row justify-between gap-10">
        <span className="whitespace-normal text-left sm:whitespace-nowrap">{info.title}</span>
        <span className="text-right text-gray-500">{info.responsibilities}</span>
      </div>
    </div>
  )
}

export default function Resume() {
  const router = useRouter()

  return (
    <main className="container mx-auto my-14 text-sm lg:w-10/12 xl:w-[60%] 2xl:w-1/2">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="">LANCE AREVALO</span>
          <div className="flex flex-row justify-between ">
            <span>SOFTWARE DEVELOPER</span>
            <div className="flex flex-row items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span>PHILIPPINES</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Experience
          </h4>
          {resume.experiences.map((item) => (
            <JobSection key={item.company} info={item} />
          ))}
        </div>


        <div className="flex flex-col gap-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Achivements & Awards
          </h4>
          <SectionHeading
            left={"2023"}
            right={"Graduated w/ Magna Cum Laude"}
          />
          <SectionHeading
            left={"2020"}
            right={"Runner Up at 14th National Business Idea and Development (BIDA)"}
            link={"https://www.philippinechamber.com/"}
          />
          <SectionHeading
            left={"2019-2023"}
            right={"Dean's Lister"}
          />
        </div>


        <div className="flex flex-col gap-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Contact
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
            left={"CV"}
            right={"arevalolance"}
            link="https://read.cv/arevalolance"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Background
          </h4>
          <p className="group text-justify text-black/80">
            Hi, I&apos;m Lance, a Software Developer with a passion in building innovative and fun things. With my interests in the web, I&apos;ve built several <Link className="text-blue-600 underline" href={"/projects"}>projects</Link> on the web focusing on both frontend and backend on Social Networking, Data Visualization, Process Pipelines, and many more.
            <br />
            <br />
            Beyond my professional pursuits, I&apos;m an avid film lover. Exploring the art of films fuels my creativity, influencing my design choices with a discerning eye for composition and the power of visual communication.
            <br />
            <br />
            I&apos;m excited to collaborate on meaningful projects and contribute my expertise. If you&apos;d like to discuss potential opportunities or learn more about my work, please don&apos;t hesitate to contact me through <Link className="text-blue-600 underline" href={"mailto:lancearevalo2000@gmail.com"}>email</Link>.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={() => router.push("/static/resume/arevalolance-resume.pdf")}
            className="border-gray-300/7 shadow-inner-[1px] rounded-md border-[1px] bg-gray-100 p-2  font-semibold drop-shadow-sm transition-colors duration-150 hover:border-black/20 hover:ease-in"
          >
            Download PDF
          </button>
          <span className="text-center text-gray-500">(Click &apos;Download PDF&apos; for a more detailed resume)</span>

        </div>
      </div>
    </main>
  )
}
