import prisma from "lib/prisma";
import { BookmarkEntry } from "lib/types";
import { NextApiRequest, NextApiResponse } from "next";

export async function getBookmarks() {
  try {
    const entries = await prisma.bookmarks.findMany({
      orderBy: {
        bookmarkedAt: "desc",
      },
    });
    return JSON.stringify(entries);
  } catch (err) {
    return "";
  }
}

export async function getFilteredBookmarks() {
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

  try {
    const entries = await prisma.bookmarks.findMany({
      orderBy: {
        bookmarkedAt: "desc",
      },
    });
    return JSON.stringify([
      {
        name: "TECHNICAL",
        description: "Technical articles, videos, and websites",
        links: filterBookmarks(entries, "TECHNICAL"),
      },
      {
        name: "READINGS",
        description: "Interesting articles, blogs, etc to read",
        links: filterBookmarks(entries, "READING"),
      },
      {
        name: "DESIGNS",
        description: "Awesome design ideas",
        links: filterBookmarks(entries, "DESIGN"),
      },
      {
        name: "VIDEOS",
        description: "Cool videos to watch",
        links: filterBookmarks(entries, "VIDEO"),
      },
      {
        name: "WEBSITES",
        description: "Informative or useful sites that I often visit",
        links: filterBookmarks(entries, "WEBSITE"),
      },
    ]);
  } catch (err) {
    return [];
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const entries = await prisma.bookmarks.findMany({
      orderBy: {
        bookmarkedAt: "desc",
      },
    });

    return res.status(200).json({ bookmarks: entries });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
}
