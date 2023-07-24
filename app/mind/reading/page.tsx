import MindCard from "@/components/mind-card";
import { books } from "@/types/books";

const sortOrder = {
  "Reading": 0,
  "To Read": 1,
  "Read": 2,
}

export default function ReadingPage() {
  return (
    <main className="container mx-auto my-16 flex flex-col-reverse gap-16 lg:flex-row lg:gap-20">
      <section className="w-full">
        <div className="mb-4 flex max-w-[600px] flex-col gap-1">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Reading
          </h3>
          <p className="text-sm text-gray-500">
            I rarely read self-help books. You&apos;ll be surprised on the things I read. Although, I&apos;m planning to read more non-fiction books in the future.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.sort((a, b) => sortOrder[a.status] - sortOrder[b.status]).map((book) => (
            <MindCard key={book.title} data={{
              type: "Media",
              media: book.media as "Book" | "Audiobook" | "Movie" | "Series",
              title: book.title,
              author: book.author,
              status: book.status as "Read" | "Reading" | "To Read" | "Watched" | "To Watch" | "Watching",
              image: book.image
            }}
              page={"Read"} />
          ))}
        </div>
      </section>
    </main >
  )
}