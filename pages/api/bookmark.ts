import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const entries = await prisma.bookmarks.findMany();
    return res.status(200).json({ bookmarks: entries });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}
