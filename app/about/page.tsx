"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function About() {
  return (
    <main className="container mx-auto my-16 max-w-[690px]">
      <div className="flex flex-col gap-4">
        <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Hello, I&apos;m Lance
        </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          rutrum, sapien sit amet volutpat lacinia, nisi ante gravida eros, a
          volutpat tortor eros sed nisi. Phasellus sed porta risus.
        </p>
      </div>

      <hr className="my-8 h-[1px] w-full border-t-[1px] border-dotted border-black" />

      <div className="flex flex-col gap-4">
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
      </div>

      <hr className="my-8 h-[1px] w-full border-t-[1px] border-dotted border-black" />

      <div className="flex flex-col gap-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Recent Projects
        </h4>

        <div className="flex flex-col">
          <table className="text-sm">
            <tbody>
              <tr>
                <td className="flex">
                  <Link
                    className="group flex flex-row items-center gap-[1px] text-sm hover:underline"
                    href={""}
                    target="_blank"
                  >
                    Project 1
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </td>
                <td>Description</td>
              </tr>
              <tr>
                <td className="flex">
                  <Link
                    className="group flex flex-row items-center gap-[1px] text-sm hover:underline"
                    href={""}
                    target="_blank"
                  >
                    Project 2
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </td>
                <td>Description</td>
              </tr>
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
          <Link
            className="group flex flex-row items-center gap-[1px] text-sm hover:underline"
            href={""}
            target="_blank"
          >
            Post 1
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </main>
  )
}
