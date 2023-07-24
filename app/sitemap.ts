import { allBlogs } from "@/.contentlayer/generated"

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://arevalolance.com/mind/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }))

  const routes = [
    "",
    "/about",
    "/work",
    "/projects",
    "/mind/reading",
    "/mind/watching",
    "/mind/blog",
  ].map((route) => ({
    url: `https://arevalolance.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogs]
}
