import { allBlogs } from "@/.contentlayer/generated"
import PageHeader from "@/components/page-header"
import Link from "next/link"

export default async function Writing() {
  const posts = allBlogs.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <div className="flex min-h-full w-full flex-col gap-6">
      <PageHeader
        title="Writing"
      />
      
      <div className="flex flex-col gap-4">
        {posts.length === 0 ? (
          <p className="text-sm text-muted-foreground">No posts yet.</p>
        ) : (
          posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/writing/${post.slug}`}
              className="group block p-4 rounded-lg border border-transparent hover:border-border transition-colors"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium group-hover:text-foreground/80 transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-xs text-muted-foreground">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.summary}
                </p>
                
                {post.topic && (
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md w-fit">
                    {post.topic}
                  </span>
                )}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
