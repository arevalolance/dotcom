import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { allBlogs } from "contentlayer/generated"
import Balancer from "react-wrap-balancer"
import readingTime from "reading-time"

import { formatDate } from "@/lib/format-date"
import { Mdx } from "@/components/mdx"

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post
  const ogImage = image
    ? `https://arevalolance.com${image}`
    : `https://arevalolance.com/api/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://arevalolance.com/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
  }
}

export default async function Blog({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="my-16 px-4 md:p-0">
      <script type="application/ld+json">
        {JSON.stringify(post.structuredData)}
      </script>

      <div className="mx-auto mb-2 flex w-[650px] flex-col">
        <span className="font-medium text-gray-500">
          {formatDate(post.publishedAt)} · {readingTime(post.body.raw).text}
        </span>
      </div>
      <h1 className="mx-auto max-w-[650px] text-4xl font-bold text-black drop-shadow-md lg:text-6xl">
        <Balancer>{post.title}</Balancer>
      </h1>

      <Mdx code={post.body.code} />
    </section>
  )
}
