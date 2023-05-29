import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { allBlogs } from "contentlayer/generated"
import Balancer from "react-wrap-balancer"

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
      <h1 className="mx-auto max-w-[650px] text-3xl font-bold">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="mx-auto mb-8 mt-4 grid max-w-[650px] grid-cols-[auto_1fr_auto] items-center font-mono text-sm">
        <div className="rounded-md bg-neutral-100 px-2 py-1 tracking-tighter dark:bg-neutral-800">
          {post.publishedAt}
        </div>
      </div>
      <Mdx code={post.body.code} />
    </section>
  )
}
