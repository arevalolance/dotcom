import { movies } from "@/types/movies";
import { books } from "@/types/books";
import { travels } from "@/types/travel";
import MovieCard from "./movie-card";
import BookCard from "./book-card";
import TravelCard from "./travel-card";
import { FilterType } from "./hobby-filter";

type FeedItem = {
  type: 'movie' | 'book' | 'travel';
  date: string;
  data: any;
};

interface HobbyFeedProps {
  activeFilter: FilterType;
}

export default function HobbyFeed({ activeFilter }: HobbyFeedProps) {
  const feedItems: FeedItem[] = [
    ...movies.filter(movie => movie.image !== "").map(movie => ({
      type: 'movie' as const,
      date: movie.date,
      data: movie
    })),
    ...books.map(book => ({
      type: 'book' as const,
      date: '2024-01-01', // Since books don't have dates, using placeholder
      data: book
    })),
    ...travels.map(travel => ({
      type: 'travel' as const,
      date: travel.date,
      data: travel
    }))
  ];

  const sortedItems = feedItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filteredItems = activeFilter === 'all' 
    ? sortedItems 
    : sortedItems.filter(item => item.type === activeFilter);

  return (
    <div className="columns-1 sm:columns-2 gap-4 space-y-4">
      {filteredItems.map((item, index) => {
        const key = `${item.type}-${index}`;
        
        switch (item.type) {
          case 'movie':
            return (
              <div key={key} className="break-inside-avoid mb-4">
                <MovieCard
                  title={item.data.title}
                  image={item.data.image}
                  rating={item.data.rating}
                  date={item.data.date}
                  status={item.data.status}
                />
              </div>
            );
          case 'book':
            return (
              <div key={key} className="break-inside-avoid mb-4">
                <BookCard
                  title={item.data.title}
                  author={item.data.author}
                  image={item.data.image}
                  status={item.data.status}
                  media={item.data.media}
                />
              </div>
            );
          case 'travel':
            return (
              <div key={key} className="break-inside-avoid mb-4">
                <TravelCard
                  location={item.data.location}
                  title={item.data.title}
                  description={item.data.description}
                  images={item.data.images}
                  date={item.data.date}
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
