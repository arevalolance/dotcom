import prisma from "lib/prisma";
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
