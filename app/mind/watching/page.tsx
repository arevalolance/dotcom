import MindCard from "@/components/mind-card";
import { movies } from "@/types/movies";
import { Metadata } from "next";

const sortOrder = {
  "Watching": 0,
  "To Watch": 1,
  "Watched": 2,
}

export const metadata: Metadata = {
  title: "Watching", description: "I like watching movies of any kind. Also, I started rating movies recently. Here are some of the movies I've watched that, the good and the bad.",
}

export default async function WatchingPage() {
  return (
    <main className="container mx-auto my-16 flex flex-col-reverse gap-16 lg:flex-row lg:gap-20">
      <section className="w-full">
        <div className="mb-4 flex max-w-[600px] flex-col gap-1">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Watching
          </h3>
          <p className="text-sm text-gray-500">
            I like watching movies of any kind. Also, I started rating movies recently. Here are some of the movies I&apos;ve watched that I found interesting, the good and the bad.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .sort((a, b) => sortOrder[a.status] - sortOrder[b.status])
            .reverse()
            .map((movie) => (
              <MindCard key={movie.title} data={{
                type: "Media",
                media: movie.media as "Series" | "Book" | "Movie" | "Audiobook",
                title: movie.title,
                author: movie.author.toString(),
                status: movie.status as "Read" | "Reading" | "To Read" | "Watched" | "To Watch" | "Watching",
                image: movie.image,
                rating: movie.rating
              }}
                page={"Watch"} />
            ))}
        </div>
      </section>
    </main >
  )
}
