import { allBlogs } from "@/.contentlayer/generated"
import RSS from "rss"

export async function GET() {
  const posts = allBlogs

  const feed = new RSS({
    title: "Lance Arevalo",
    site_url: "https://arevalolance.com",
    feed_url: "https://arevalolance.com/feed.xml",
    language: "en",
  })

  posts.map((post) => {
    feed.item({
      title: post.title,
      description: post.summary,
      url: `https://arevalolance.com/mind/blog/${post.slug}`,
      date: post.publishedAt,
    })
  })

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600",
    },
  })
}
