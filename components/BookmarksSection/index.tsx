import CardContainer from "components/CardContainer";
import fetcher from "lib/fetcher";
import { BookmarkData, BookmarkEntries, BookmarkEntry } from "lib/types";
import { Inter } from "@next/font/google";
import React, {
  Dispatch,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import useSWR from "swr";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { shortener } from "lib/stringMan";
import CardHeader from "components/CardHeader";
import Divider from "components/Divider";
import LinkButton from "components/LinkButton";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const InfoHeader = (props: { title: string }) => {
  return (
    <span className={`${inter.className} font-medium`}>
      {props.title.length > 23 ? shortener(props.title, 20) : props.title}
    </span>
  );
};

const LinkIcon = (props: {
  isLoading: boolean;
  error: boolean;
  icon?: string;
  alt?: string;
}) => {
  return (
    <div className="h-fit max-h-[20px] w-fit max-w-[20px] overflow-hidden rounded-md border-[1px] border-gray-300">
      {props.isLoading || props.error ? (
        <Icon icon={"mdi:link-variant"} />
      ) : (
        <Image
          className="flex items-center justify-center object-contain"
          src={props.icon}
          width={15}
          height={15}
          alt={props.alt}
        />
      )}
    </div>
  );
};

const BookmarkInfo = (props: {
  link: string;
  setBookmark: Dispatch<SetStateAction<string>>;
}) => {
  const { data, isLoading, error } = useSWR<BookmarkData>(
    `/api/metadata/general?url=${props.link}`,
    fetcher
  );

  return (
    <div
      onClick={() => props.setBookmark(props.link)}
      className="flex flex-col rounded-lg border-[1px] border-transparent p-2 hover:cursor-pointer hover:border-gray-300 active:bg-gray-100"
    >
      <InfoHeader title={isLoading ? "Loading..." : data.name} />
      <div className="flex flex-row items-center gap-x-1">
        <LinkIcon
          isLoading={isLoading}
          error={error}
          icon={data?.icon}
          alt={data?.link}
        />
        <span className={`${inter.className} text-sm text-gray-400`}>
          {!isLoading && !error ? new URL(data.link).hostname : "Loading..."}
        </span>
      </div>
    </div>
  );
};

const Container = (props: {
  children?:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  className?: string;
}) => {
  return (
    <div
      className={`gap-y-2 overflow-auto rounded-[10px] bg-[#fff] p-2 shadow-xl ${props.className}`}
    >
      {props.children}
    </div>
  );
};

const LinksContainer = (props: {
  bookmark: string;
  setBookmark: Dispatch<SetStateAction<string>>;
  setEntry: Dispatch<SetStateAction<BookmarkEntry>>;
}) => {
  const { data, isLoading } = useSWR<BookmarkEntries>(`/api/bookmark`, fetcher);

  useEffect(() => {
    if (!isLoading) {
      props.setBookmark(data.bookmarks[0].link);
      props.setEntry(data.bookmarks[0]);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      const entry = data.bookmarks.filter(
        (item) => item.link === props.bookmark
      );
      props.setEntry(entry[0]);
    }
  }, [props.bookmark]);

  return (
    <Container className="max-h-[370px] min-w-[230px] max-w-[230px]">
      {isLoading
        ? null
        : data.bookmarks.map((bookmark) => (
            <BookmarkInfo
              key={bookmark.link}
              link={bookmark.link}
              setBookmark={props.setBookmark}
            />
          ))}
    </Container>
  );
};

const BookmarkInformation = (props: {
  bookmark: string;
  entry: BookmarkEntry;
}) => {
  const { data, isLoading, error } = useSWR<BookmarkData>(
    `api/metadata/general?url=${props.bookmark}`,
    fetcher
  );

  return (
    <Container className="h-fit max-h-[339px] min-w-[432px] overflow-auto p-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <span
            className={`${inter.className} my-1 w-fit rounded-md bg-gray-800 px-2 py-1 text-xs text-white`}
          >
            {props.entry ? props.entry.tag : "Loading..."}
          </span>
          <span className={`${inter.className} text-lg font-medium`}>
            {isLoading ? "Loading..." : data.name}
          </span>
          <div className="flex flex-row items-center gap-x-1">
            {!isLoading && (
              <LinkIcon
                isLoading={isLoading}
                error={error}
                icon={data.icon}
                alt={data.link}
              />
            )}
            <Link href={isLoading ? "/" : data.link} target="_blank">
              <span
                className={`${inter.className} text-sm text-gray-400 hover:underline`}
              >
                {isLoading ? "Loading..." : new URL(data.link).hostname}
              </span>
            </Link>
          </div>
        </div>

        {!isLoading && data?.image && (
          <Link
            href={data.link}
            target="_blank"
            className="flex min-h-fit min-w-[130px] origin-center overflow-hidden rounded-md hover:scale-[1.1] hover:shadow-md"
          >
            <Image src={data.image} width={130} height={135} alt={data.link} />
          </Link>
        )}
      </div>
      <Divider className="mt-2 mb-4" />
      <span className={`${inter.className} text-sm font-medium text-gray-500`}>
        {data?.description}
      </span>
      <LinkButton label={"Visit link"} link={""} type={"default"} />
      <span className={`${inter.className} text-xs font-medium text-gray-500`}>
        {props.entry
          ? `Date Bookmarked: ${props.entry.bookmarkedAt.split("T")[0]}`
          : "Loading..."}
      </span>
    </Container>
  );
};

const BookmarksSection = () => {
  const [bookmark, setBookmark] = useState<string>("");
  const [entry, setEntry] = useState<BookmarkEntry>(null);

  return (
    <CardContainer className="flex h-[500px] max-w-[710px] flex-col px-4">
      <CardHeader
        className="px-8"
        title={"My Bookmarks"}
        desc={
          "let’s take a look at some of the things I’ve found interesting or useful."
        }
      />
      <Divider className="mt-2 mb-4" />
      <div className="flex h-full flex-row justify-center gap-x-4">
        {bookmark !== "" ? (
          <BookmarkInformation entry={entry} bookmark={bookmark} />
        ) : null}
        <LinksContainer
          setEntry={setEntry}
          setBookmark={setBookmark}
          bookmark={bookmark}
        />
      </div>
    </CardContainer>
  );
};

export default BookmarksSection;
