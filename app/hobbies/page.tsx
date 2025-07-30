"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PageHeader from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import HobbyFeed from "@/components/hobby-feed";
import HobbyFilter, { FilterType } from "@/components/hobby-filter";
import { movies } from "@/types/movies";
import { books } from "@/types/books";
import { travels } from "@/types/travel";

function HobbiesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [activeFilter, setActiveFilter] = useState<FilterType>(() => {
    const filter = searchParams?.get('filter') as FilterType;
    return ['all', 'movie', 'book', 'travel'].includes(filter) ? filter : 'all';
  });

  // Calculate counts for each category
  const movieCount = movies.filter(movie => movie.image !== "").length;
  const bookCount = books.length;
  const travelCount = travels.length;
  const totalCount = movieCount + bookCount + travelCount;

  const counts = {
    all: totalCount,
    movie: movieCount,
    book: bookCount,
    travel: travelCount,
  };

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    const newParams = new URLSearchParams(searchParams?.toString() || '');
    if (filter === 'all') {
      newParams.delete('filter');
    } else {
      newParams.set('filter', filter);
    }
    const newUrl = newParams.toString() ? `?${newParams.toString()}` : '/hobbies';
    router.push(newUrl);
  };

  return (
    <div className="flex min-h-full w-full flex-col gap-6">
      <PageHeader
        title={"Hobbies"}
        description={"I tend to spend my time watching movies, playing video games, and reading books. Sometimes I travel."}
      />

      <Separator />

      <HobbyFilter 
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        counts={counts}
      />

      <HobbyFeed activeFilter={activeFilter} />
    </div>
  )
}

export default function Hobbies() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HobbiesContent />
    </Suspense>
  );
}
