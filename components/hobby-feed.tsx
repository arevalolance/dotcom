import { movies } from "@/types/movies";
import { books } from "@/types/books";
import { travels } from "@/types/travel";
import MovieCard from "./movie-card";
import BookCard from "./book-card";
import TravelCard from "./travel-card";
import { FilterType } from "./hobby-filter";
import Masonry from "react-masonry-css";

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
      date: book.date,
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

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex -ml-2 w-auto"
      columnClassName="pl-2 bg-clip-padding"
    >
      {filteredItems.map((item, index) => {
        const key = `${item.type}-${index}`;
        
        switch (item.type) {
          case 'movie':
            return (
              <div key={key} className="mb-2">
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
              <div key={key} className="mb-2">
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
              <div key={key} className="mb-2">
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
    </Masonry>
  );
}
