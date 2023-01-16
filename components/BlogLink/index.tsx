import Image from "next/image";
import { Suspense } from "react";
import { shortener } from "lib/stringMan";
import Link from "next/link";
import fetcher from "lib/fetcher";
import useSWR from "swr";
import { YoutubeDetails } from "lib/types";
import ViewCounter from "components/ViewCounter";

const TagPill = (props: { tag: string; tagColor: string }) => {
  return (
    <span
      className={`mr-2 h-fit w-fit rounded-md px-2 py-1 text-xs font-normal text-white ${props.tagColor}`}
    >
      {props.tag}
    </span>
  );
};

const LinkEmbed = (props: { slug: string; tag: string }) => {
  const { data, isLoading } = useSWR<YoutubeDetails>(
    `/api/metadata/youtube?slug=${props.slug}`,
    fetcher
  );

  return (
    <div className="mt-2 flex flex-col items-center sm:flex-row">
      <Link
        className="hover:drop-shadow-md"
        href={`https://www.youtube.com/watch?v=${props.slug}`}
      >
        <div className="my-2 flex max-h-[105px] min-h-[105px] min-w-[180px] max-w-[180px] items-center overflow-hidden rounded-md">
          <Image
            className="object-fill"
            src={`http://i3.ytimg.com/vi/${props.slug}/hqdefault.jpg`}
            alt={""}
            width={180}
            height={105}
          />
        </div>
      </Link>

      <div className="ml-2 h-fit">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col">
            <Link
              href={
                isLoading
                  ? "#"
                  : `https://www.youtube.com/watch?v=${props.slug}`
              }
            >
              <div className={`flex flex-row items-center gap-x-2`}>
                <TagPill tag={props.tag} tagColor={"bg-green-700"} />
                <span className="text-sm font-medium text-text-primary hover:underline">
                  {isLoading
                    ? "Loading..."
                    : data?.title.length > 60
                    ? shortener(data?.title, 60)
                    : data?.title}
                </span>
              </div>
            </Link>

            <Link
              href={isLoading ? "#" : data?.creator_url}
              className="text-xs font-medium text-text-secondary hover:underline"
            >
              @{isLoading ? "Loading..." : data?.creator}
            </Link>
          </div>

          <p className={`text-sm font-normal text-text-secondary`}>
            {isLoading
              ? "Loading..."
              : data?.description.length > 210
              ? shortener(data?.description, 200)
              : data?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const BlogLinkHeader = (props: {
  tag?: string;
  title: string;
  publishedAt: string;
  slug: string;
}) => {
  let tagColor: string;
  switch (props.tag) {
    case "Essay":
      tagColor = "bg-blue-700";
      break;
    case "Tutorial":
      tagColor = "bg-green-700";
      break;
    case "Review":
      tagColor = "bg-yellow-700";
      break;
    case "News":
      tagColor = "bg-red-700";
      break;
    default:
      tagColor = "bg-gray-700";
  }

  return (
    <Link href={`/blog/${props.slug}`}>
      <div className="mb-2 flex flex-col justify-between md:flex-row md:items-center">
        <div className="flex flex-col-reverse justify-start md:flex-row">
          {props.tag && <TagPill tag={props.tag} tagColor={tagColor} />}
          <span
            className={`whitespace-normal text-lg font-bold text-text-primary hover:underline md:max-w-[500px] lg:max-w-[680px]`}
          >
            {props.title}
          </span>
        </div>
        <div className="mt-2 flex flex-row gap-x-4">
          <ViewCounter slug={props.slug} count={false} />
          <span className={`text-sm font-medium text-text-secondary`}>
            {props.publishedAt.split("T")[0]}
          </span>
        </div>
      </div>
    </Link>
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
    <Suspense fallback={false}>
      <div className="my-2 gap-y-1 rounded-md border-[1px] border-transparent p-4 hover:border-border-surface hover:shadow-md">
        <BlogLinkHeader
          tag={props.tag}
          title={props.title}
          publishedAt={props.publishedAt}
          slug={props.slug}
        />
        <span className={`text-md font-normal text-text-secondary`}>
          {props.summary}
        </span>

        {props.embed ? (
          <LinkEmbed slug={props.embed.slug} tag={props.embed.tag} />
        ) : null}
      </div>
    </Suspense>
  );
};

export default BlogLink;
