import { Metadata } from "next"

import BlogPosts from "@/components/blog-posts"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my thoughts and tutorials on software development and more.",
}

export default function BlogPage() {
  return (
    <main className="container mx-auto my-16 flex flex-col-reverse gap-16 lg:flex-row lg:gap-20">
      <BlogPosts />
    </main>
  )
}
