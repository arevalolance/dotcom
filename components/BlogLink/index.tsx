import { Inter } from '@next/font/google';
import Image from 'next/image';
import BlogLinkHeader from 'components/BlogLinkHeader';
import { useEffect, useState } from 'react';
import getYoutubeData from 'lib/getYoutubeData';
import { shortener } from 'lib/stringMan';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

interface YoutubeDetails {
  title: string;
  creator: string;
  creator_url: string;
}

const BlogLink = (props: {
  title: string;
  publishedAt: string;
  slug: string;
  summary: string;
  tag?: string;
  embed?: {
    slug: string;
    tag: string;
    youtubeDescription: string;
  };
}) => {
  const [youtubeDetails, setYoutubeDetails] =
    useState<YoutubeDetails | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (props.embed && !mounted) {
      getYoutubeData(props.embed.slug).then(setYoutubeDetails);
    }
    setMounted(true);
  }, []);

  return (
    <div className="gap-y-1 my-2 border-[1px] border-transparent hover:border-gray-200 hover:shadow-md rounded-md p-4">
      <BlogLinkHeader
        tag={props.tag}
        title={props.title}
        publishedAt={props.publishedAt}
        slug={props.slug}
      />
      <span
        className={`${inter.className} text-gray-500 font-normal text-sm`}
      >
        {props.summary}
      </span>

      {youtubeDetails && props.embed && (
        <div className="mt-2 flex flex-row">
          {/*  IMAGE */}
          <Link
            className="hover:drop-shadow-md"
            href={`https://www.youtube.com/watch?v=${props.embed.slug}`}
          >
            <div className="min-w-[180px] min-h-[105px] max-w-[180px] max-h-[105px] overflow-hidden flex items-center rounded-md">
              <Image
                className="object-fill"
                src={`http://i3.ytimg.com/vi/${props.embed.slug}/hqdefault.jpg`}
                alt={youtubeDetails.title}
                width={180}
                height={105}
              />
            </div>
          </Link>

          {/*  TAGS */}
          <div className="ml-2 ">
            {/* TITLE */}
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col">
                <Link
                  href={`https://www.youtube.com/watch?v=${props.embed.slug}`}
                >
                  <div
                    className={`${inter.className} flex flex-row items-center gap-x-2`}
                  >
                    <span className="font-normal text-white text-sm px-2 bg-blue-400 rounded-md">
                      {props.embed.tag}
                    </span>
                    <span className="font-medium text-gray-900 text-sm hover:underline">
                      {youtubeDetails.title.length > 60
                        ? shortener(youtubeDetails.title, 60)
                        : youtubeDetails.title}
                    </span>
                  </div>
                </Link>

                <Link
                  href={youtubeDetails.creator_url}
                  className="hover:underline font-medium text-gray-500 text-xs"
                >
                  @{youtubeDetails.creator}
                </Link>
              </div>

              <p
                className={`${inter.className} text-sm font-normal text-gray-500`}
              >
                {props.embed.youtubeDescription.length > 210
                  ? shortener(props.embed.youtubeDescription, 200)
                  : props.embed.youtubeDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogLink;
