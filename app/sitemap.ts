import { allBlogs } from "@/.contentlayer/generated"

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://arevalolance.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }))

  const routes = ["", "/about", "/work", "/projects", "/blog"].map((route) => ({
    url: `https://arevalolance.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogs]
}
