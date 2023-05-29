"use client"

import { useState } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { allBlogs } from "contentlayer/generated"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
}

const topics = ["Productivity", "Technology", "Film", "Tools and Technology"]

export default function BlogPage() {
  const [topicFilter, setTopicFilter] = useState("")
  const [searchEntry, setSearchEntry] = useState("")
  const [searchFilter, setSearchFilter] = useState("")

  return (
    <main className="container mx-auto my-16 flex flex-col-reverse gap-16 lg:flex-row lg:gap-20">
      <section className="w-full lg:w-9/12">
        <div className="mb-4">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            All posts by date
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum, sapien sit amet volutpat lacinia, nisi ante gravida eros, a
            volutpat tortor eros sed nisi.{" "}
          </p>
        </div>
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
            <Link
              key={post.slug}
              className="group mb-4 flex flex-col space-y-1"
              href={`/blog/${post.slug}`}
            >
              <div className="flex flex-col gap-2 rounded-md border-[1px] border-gray-300 p-3 duration-150 ease-in hover:shadow-md">
                <div className="flex flex-col justify-between gap-2 lg:flex-row">
                  <span className="font-semibold leading-none group-hover:underline">
                    {post.title}
                  </span>
                  {post.topic && (
                    <div className="flex flex-row items-start gap-2">
                      <span className="whitespace-nowrap font-mono text-sm">
                        {post.publishedAt}
                      </span>
                      <div className="h-fit w-fit whitespace-nowrap rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-black ease-in hover:bg-gray-200 hover:duration-150 md:mx-0">
                        {post.topic}
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-sm text-black/80">{post.summary}</p>
              </div>
            </Link>
          ))}
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
                onClick={() => {
                  setTopicFilter(topicFilter === item ? "" : item)
                  console.log(topicFilter === item ? "" : item)
                }}
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
    </main>
  )
}
