import getYoutubeData from "lib/getYoutubeData";
import getMetaData from "metadata-scraper";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { slug } = req.query;
    const youtubeData = await getYoutubeData(slug as string);
    const data = await getMetaData(
      `https://youtube.com/watch?v=${slug as string}`
    );
    return res.status(200).json({
      title: youtubeData.title,
      description: data.description,
      creator: youtubeData.creator,
      creator_url: youtubeData.creator_url,
      image_url: `http://i3.ytimg.com/vi/${slug}/hqdefault.jpg`,
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
