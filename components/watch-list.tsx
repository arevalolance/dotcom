import Image from "next/image";

import { movies } from "@/types/movies";

export default function WatchList() {
  const sortedMovies = [...movies].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-1">
      {
        sortedMovies.filter((movie) => movie.image !== "").map((movie, idx) => (
          <div key={`${movie.title}-${idx}`} className="flex flex-col items-between justify-center rounded-lg border transition-all group duration-100 ease-in border-transparent hover:border-neutral-200 bg-neutral-50 hover:bg-neutral-100 p-2">
            <Image src={movie.image} alt={movie.title} className="w-full h-full object-contain rounded group-hover:shadow group-hover:translate-z-4 overflow-hidden" width={576} height={384} />
          </div>
        ))
      }
    </div>
  )
}
