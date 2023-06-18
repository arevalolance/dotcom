import { Metadata } from "next"
import Link from "next/link"
import { allBlogs } from "@/.contentlayer/generated"
import { ArrowUpRight } from "lucide-react"

import { projects } from "@/types/projects"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: "About",
  description: "Lance Arevalo - Software Developer.",
}

export default function About() {
  return (
    <main className="container mx-auto my-16 lg:w-10/12 xl:w-[60%] 2xl:w-1/2">
      <div className="flex flex-col gap-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Hi, I&apos;m Lance
        </h3>

        <p>
          I like to build fun projects. I also like to read and watch movies.
        </p>

        <p>
          In this website, you&apos;ll find tutorials, life updates, or thoughts
          about anything that I find interesting. To receive the latest updates,
          you can subscribe via RSS or{" "}
        </p>

        <p>
          Chat with me via{" "}
          <Link
            className="text-blue-500 underline"
            href={"mailto:lancearevalo2000@gmail.com"}
          >
            email
          </Link>{" "}
          or{" "}
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="text-gray-500 hover:cursor-not-allowed">
                phone
              </TooltipTrigger>
              <TooltipContent>Coming soon</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          . I&apos;ll get back to you as soon as I can when I receive your
          message.
        </p>
      </div>

      {/* <hr className="my-8 h-[1px] w-full border-t-[1px] border-dotted border-black" /> */}

      {/* <div className="flex flex-col gap-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          The Plan
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          rutrum, sapien sit amet volutpat lacinia, nisi ante gravida eros, a
          volutpat tortor eros sed nisi. Phasellus sed porta risus.
        </p>

        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          My Interests
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          rutrum, sapien sit amet volutpat lacinia, nisi ante gravida eros, a
          volutpat tortor eros sed nisi. Phasellus sed porta risus.
        </p>
      </div> */}

      <hr className="my-8 h-[1px] w-full border-t-[1px] border-dotted border-black" />

      <div className="flex flex-col gap-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Recent Projects
        </h4>

        <div className="flex flex-col">
          <table className="text-sm">
            <tbody>
              {projects.recent.map((item) => (
                <tr key={item.name}>
                  <td className="m-0 w-[200px] border-spacing-0">
                    <div className="flex">
                      <Link
                        className="group flex flex-row items-center gap-[1px] text-sm hover:underline"
                        href={""}
                        target="_blank"
                      >
                        {item.name}
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr className="my-8 h-[1px] w-full border-t-[1px] border-dotted border-black" />

      <div className="flex flex-col gap-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Recent musings
        </h4>

        <div className="flex flex-col">
          {allBlogs
            .slice(-3)
            .reverse()
            .map((item) => (
              <Link
                key={item.title}
                className="group flex flex-row items-center gap-[1px] text-sm hover:underline"
                href={`/blog/${item.slug}`}
                target="_blank"
              >
                {item.title}
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            ))}
        </div>
      </div>
    </main>
  )
}
