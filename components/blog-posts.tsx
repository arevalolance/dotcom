"use client"

import { useState } from "react"
import Link from "next/link"
import { allBlogs } from "@/.contentlayer/generated"
import { ArrowUpRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Input } from "./ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

const topics = ["Productivity", "Tools and Technology", "Thoughts", "Others"]

export default function BlogPosts() {
  const [topicFilter, setTopicFilter] = useState("")
  const [searchEntry, setSearchEntry] = useState("")
  const [searchFilter, setSearchFilter] = useState("")

  return (
    <>
      <section className="w-full">
        <div className="mb-4 flex max-w-[400px] flex-col gap-3">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Writings
          </h3>
          <p className="text-sm text-gray-500">
            Here is where you&apos;ll find tutorials, life updates, and thoughts
            on anything I find interesting.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
          {allBlogs
            .filter(
              (e) =>
                e.title.toLowerCase().includes(searchFilter) ||
                e.summary.toLowerCase().includes(searchFilter) ||
                e.body.raw.toLowerCase().includes(searchFilter)
            )
            .filter((e) => {
              if (topicFilter !== "") {
                return topicFilter === e.topic
              } else {
                return true
              }
            })
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1
              }
              return 1
            })
            .map((post) => (
              <div className="group relative">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="absolute right-0 top-0 m-2 rounded-full border-[1px] border-transparent p-2 duration-150 ease-in group-hover:border-gray-200 group-hover:bg-white group-hover:drop-shadow-sm">
                      <Link href={`/blog/${post.slug}`}>
                        <ArrowUpRightIcon className="h-4 w-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      Read full blog post
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <div className="flex h-[300px] flex-col justify-between rounded-md bg-stone-50/50 p-4 duration-150 ease-in hover:bg-stone-100/50">
                  <div className="text-sm text-gray-500">Writing · Blog</div>
                  <div className="flex flex-col gap-2">
                    <div className="grid grid-cols-1">
                      <span className="text-xl font-medium">{post.title}</span>
                      <span className="text-sm text-gray-500">
                        {post.publishedAt}
                      </span>
                    </div>
                    <span className="text-justify text-sm">{post.summary}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="flex w-full flex-col gap-6 lg:w-3/12">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Browse Topics
            </h3>
          </div>

          <div className="flex flex-col border-l-2 border-gray-400 pl-4">
            {topics.map((item) => (
              <div
                className={cn(
                  topicFilter !== item
                    ? "text-black/80"
                    : "font-semibold text-black",
                  "hover:cursor-pointer hover:text-black"
                )}
                onClick={() => setTopicFilter(topicFilter === item ? "" : item)}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Search
          </h3>
          <Input
            placeholder={"Search content"}
            value={searchEntry}
            onChange={(e) => setSearchEntry(e.target.value)}
          />
          <button
            onClick={() => setSearchFilter(searchEntry.toLowerCase())}
            className="border-gray-300/7 shadow-inner-[1px] rounded-md border-[1px] bg-gray-100 p-2 text-sm font-semibold drop-shadow-sm transition-colors duration-150 hover:border-black/20 hover:ease-in md:block"
          >
            Search
          </button>
        </div>
        {(topicFilter !== "" || searchEntry !== "" || searchEntry !== "") && (
          <div
            className="text-sm hover:cursor-pointer hover:underline"
            onClick={() => {
              setTopicFilter("")
              setSearchEntry("")
              setSearchFilter("")
            }}
          >
            reset all filters
          </div>
        )}
      </section>
    </>
  )
}
