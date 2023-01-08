import { useState, useEffect } from "react";
import { BookmarkEntry } from "./types";

export default function useBookmarkEntries() {
  const [bookmarkEntries, setBookmarkEntries] = useState<
    {
      name: string;
      description: string;
      links: BookmarkEntry[];
    }[]
  >();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const filterBookmarks = (bookmarks: BookmarkEntry[], tag: string) => {
    if (bookmarks.length === 0) return [];

    let filtered = bookmarks.filter(
      function (link) {
        if (this.count < 10 && link.tag === tag) {
          this.count++;
          return true;
        } else {
          return false;
        }
      },
      { count: 0 }
    );

    return filtered;
  };

  useEffect(() => {
    async function fetchBookmarkEntries() {
      try {
        const response = await fetch("/api/bookmark");
        const data = await response.json();
        setBookmarkEntries([
          {
            name: "TECHNICAL",
            description: "Technical articles, videos, and websites",
            links: filterBookmarks(data.bookmarks, "TECHNICAL"),
          },
          {
            name: "READINGS",
            description: "Articles, videos, and websites",
            links: filterBookmarks(data.bookmarks, "READING"),
          },
          {
            name: "DESIGNS",
            description: "Articles, videos, and websites",
            links: filterBookmarks(data.bookmarks, "DESIGN"),
          },
          {
            name: "VIDEOS",
            description: "Articles, videos, and websites",
            links: filterBookmarks(data.bookmarks, "VIDEO"),
          },
          {
            name: "WEBSITES",
            description: "Articles, videos, and websites",
            links: filterBookmarks(data.bookmarks, "WEBSITE"),
          },
        ]);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    }
    fetchBookmarkEntries();
  }, []);

  return { bookmarkEntries, loading, error };
}
