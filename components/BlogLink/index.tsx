import { Inter } from "@next/font/google";
import Image from "next/image";
import BlogLinkHeader from "components/BlogLinkHeader";
import { useEffect, useState } from "react";
import getYoutubeData from "lib/getYoutubeData";
import { shortener } from "lib/stringMan";
import Link from "next/link";
import fetcher from "lib/fetcher";
import useSWR from "swr";
import { YoutubeDetails } from "lib/types";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const LinkEmbed = (props: { slug: string; tag: string }) => {
  const { data, isLoading, error } = useSWR<YoutubeDetails>(
    `/api/metadata/youtube?slug=${props.slug}`,
    fetcher
  );

  return (
    <>
      <div className="mt-2 flex flex-row">
        <Link
          className="hover:drop-shadow-md"
          href={`https://www.youtube.com/watch?v=${props.slug}`}
        >
          <div className="flex max-h-[105px] min-h-[105px] min-w-[180px] max-w-[180px] items-center overflow-hidden rounded-md">
            <Image
              className="object-fill"
              src={`http://i3.ytimg.com/vi/${props.slug}/hqdefault.jpg`}
              alt={""}
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
                    ? "#"
                    : `https://www.youtube.com/watch?v=${props.slug}`
                }
              >
                <div
                  className={`${inter.className} flex flex-row items-center gap-x-2`}
                >
                  <span className="rounded-md bg-blue-400 px-2 text-sm font-normal text-white">
                    {props.tag}
                  </span>
                  <span className="text-sm font-medium text-gray-900 hover:underline">
                    {isLoading
                      ? "Loading..."
                      : data.title.length > 60
                      ? shortener(data.title, 60)
                      : data.title}
                  </span>
                </div>
              </Link>

              <Link
                href={isLoading ? "#" : data.creator_url}
                className="text-xs font-medium text-gray-500 hover:underline"
              >
                @{isLoading ? "Loading..." : data.creator}
              </Link>
            </div>

            <p
              className={`${inter.className} text-sm font-normal text-gray-500`}
            >
              {isLoading
                ? "Loading..."
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
    <div className="my-2 gap-y-1 rounded-md border-[1px] border-transparent p-4 hover:border-gray-200 hover:shadow-md">
      <BlogLinkHeader
        tag={props.tag}
        title={props.title}
        publishedAt={props.publishedAt}
        slug={props.slug}
      />
      <span className={`${inter.className} text-md font-normal text-gray-500`}>
        {props.summary}
      </span>

      {props.embed ? (
        <LinkEmbed slug={props.embed.slug} tag={props.embed.tag} />
      ) : null}
    </div>
  );
};

export default BlogLink;
