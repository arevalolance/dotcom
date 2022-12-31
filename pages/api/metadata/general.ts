import getMetaData from 'metadata-scraper';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { url } = req.query;
    const data = await getMetaData(url as string);
    return res.status(200).json({
      name: data.title,
      link: data.url,
      icon: data.icon,
      image: data.image,
      description: data.description,
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default handler;
