"use client"

import { notFound } from "next/navigation"
import { allBlogs } from "@/.contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import Link from "next/link"
import { useEffect, useState } from "react"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

function MDXRenderer({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code)
  return <MDXContent />
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [slug, setSlug] = useState<string | null>(null)
  const [post, setPost] = useState<typeof allBlogs[0] | null>(null)

  useEffect(() => {
    params.then((resolvedParams) => {
      const postSlug = resolvedParams.slug
      setSlug(postSlug)
      
      const foundPost = allBlogs.find((post) => post.slug === postSlug)
      
      if (!foundPost) {
        notFound()
      } else {
        setPost(foundPost)
      }
    })
  }, [params])

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <header className="mb-12">
        <Link href="/writing" className="text-sm text-gray-600 hover:text-gray-900 mb-8 inline-block">
          ← back
        </Link>
        <h1 className="text-2xl font-normal text-gray-900 mb-4 lowercase">
          {post.title}
        </h1>
      </header>

      <article className="prose prose-gray max-w-none prose-p:text-gray-700 prose-p:leading-relaxed prose-headings:font-normal prose-headings:lowercase prose-headings:text-gray-900 prose-a:text-gray-900 prose-a:underline prose-a:decoration-1 prose-a:underline-offset-2">
        <MDXRenderer code={post.body.code} />
      </article>

      <footer className="mt-16 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </footer>
    </div>
  )
}
