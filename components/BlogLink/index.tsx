import { Inter } from '@next/font/google';
import Image from 'next/image';
import BlogLinkHeader from 'components/BlogLinkHeader';
import { useEffect, useState } from 'react';
import getYoutubeData from 'lib/getYoutubeData';
import { shortener } from 'lib/stringMan';
import Link from 'next/link';
import fetcher from 'lib/fetcher';
import useSWR from 'swr';
import { YoutubeDetails } from 'lib/types';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const LinkEmbed = (props: { slug: string; tag: string }) => {
  const { data, isLoading, error } = useSWR<YoutubeDetails>(
    `/api/metadata/youtube?slug=${props.slug}`,
    fetcher
  );

  useEffect(() => {
    if (!isLoading) {
      console.log('YOUTUBE', data);
    } else if (error) {
      console.log('ERROR', error);
    }
  }, [isLoading]);

  return (
    <>
      <div className="mt-2 flex flex-row">
        <Link
          className="hover:drop-shadow-md"
          href={`https://www.youtube.com/watch?v=${props.slug}`}
        >
          <div className="min-w-[180px] min-h-[105px] max-w-[180px] max-h-[105px] overflow-hidden flex items-center rounded-md">
            <Image
              className="object-fill"
              src={`http://i3.ytimg.com/vi/${props.slug}/hqdefault.jpg`}
              alt={''}
              width={180}
              height={105}
            />
          </div>
        </Link>

        <div className="ml-2 ">
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-col">
              <Link
                href={
                  isLoading
                    ? '#'
                    : `https://www.youtube.com/watch?v=${props.slug}`
                }
              >
                <div
                  className={`${inter.className} flex flex-row items-center gap-x-2`}
                >
                  <span className="font-normal text-white text-sm px-2 bg-blue-400 rounded-md">
                    {props.tag}
                  </span>
                  <span className="font-medium text-gray-900 text-sm hover:underline">
                    {isLoading
                      ? 'Loading...'
                      : data.title.length > 60
                      ? shortener(data.title, 60)
                      : data.title}
                  </span>
                </div>
              </Link>

              <Link
                href={isLoading ? '#' : data.creator_url}
                className="hover:underline font-medium text-gray-500 text-xs"
              >
                @{isLoading ? 'Loading...' : data.creator}
              </Link>
            </div>

            <p
              className={`${inter.className} text-sm font-normal text-gray-500`}
            >
              {isLoading
                ? 'Loading...'
                : data.description.length > 210
                ? shortener(data.description, 200)
                : data.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const BlogLink = (props: {
  title: string;
  publishedAt: string;
  slug: string;
  summary: string;
  tag?: string;
  embed?: {
    slug: string;
    tag: string;
  };
}) => {
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

      {props.embed ? (
        <LinkEmbed slug={props.embed.slug} tag={props.embed.tag} />
      ) : null}
    </div>
  );
};

export default BlogLink;
