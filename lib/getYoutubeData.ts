import axios from 'axios';

const getYoutubeData = async (slug: string) => {
  try {
    // Make a request to the YouTube Data API to get the video details
    const response = await axios.get(`https://noembed.com/embed`, {
      params: {
        url: `https://www.youtube.com/watch?v=${slug}`,
      },
    });

    return {
      title: response.data.title,
      creator: response.data.author_name,
      creator_url: response.data.author_url,
    };
  } catch (err) {
    return null;
  }
};

export default getYoutubeData;
