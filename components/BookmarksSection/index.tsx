import CardContainer from 'components/CardContainer';
import fetcher from 'lib/fetcher';
import {
  BookmarkData,
  BookmarkEntries,
  BookmarkEntry,
} from 'lib/types';
import { Inter } from '@next/font/google';
import React, {
  Dispatch,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { shortener } from 'lib/stringMan';
import CardHeader from 'components/CardHeader';
import Divider from 'components/Divider';
import LinkButton from 'components/LinkButton';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const InfoHeader = (props: { title: string }) => {
  return (
    <span className={`${inter.className} font-medium`}>
      {props.title.length > 23
        ? shortener(props.title, 20)
        : props.title}
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
    <div className="w-fit h-fit max-w-[20px] max-h-[20px] rounded-md overflow-hidden border-gray-300 border-[1px]">
      {props.isLoading || props.error ? (
        <Icon icon={'mdi:link-variant'} />
      ) : (
        <Image
          className="object-contain flex items-center justify-center"
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
    `/api/metadata?url=${props.link}`,
    fetcher
  );

  return (
    <div
      onClick={() => props.setBookmark(props.link)}
      className="hover:cursor-pointer flex flex-col border-[1px] border-transparent rounded-lg active:bg-gray-100 p-2 hover:border-gray-300"
    >
      <InfoHeader title={isLoading ? 'Loading...' : data.name} />
      <div className="flex flex-row items-center gap-x-1">
        <LinkIcon
          isLoading={isLoading}
          error={error}
          icon={data?.icon}
          alt={data?.link}
        />
        <span className={`${inter.className} text-sm text-gray-400`}>
          {!isLoading && !error
            ? new URL(data.link).hostname
            : 'Loading...'}
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
      className={`bg-[#fff] overflow-auto gap-y-2 p-2 rounded-[10px] shadow-xl ${props.className}`}
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
  const { data, isLoading } = useSWR<BookmarkEntries>(
    `/api/bookmark`,
    fetcher
  );

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
    <Container className="min-w-[230px] max-w-[230px] max-h-[370px]">
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
    `api/metadata?url=${props.bookmark}`,
    fetcher
  );

  return (
    <Container className="min-w-[432px] h-fit max-h-[339px] overflow-auto p-4">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <span
            className={`${inter.className} my-1 px-2 py-1 bg-gray-800 text-white text-xs w-fit rounded-md`}
          >
            {props.entry ? props.entry.tag : 'Loading...'}
          </span>
          <span className={`${inter.className} font-medium text-lg`}>
            {isLoading ? 'Loading...' : data.name}
          </span>
          <div className="flex flex-row gap-x-1 items-center">
            {!isLoading && (
              <LinkIcon
                isLoading={isLoading}
                error={error}
                icon={data.icon}
                alt={data.link}
              />
            )}
            <Link href={isLoading ? '/' : data.link} target="_blank">
              <span
                className={`${inter.className} text-sm text-gray-400 hover:underline`}
              >
                {isLoading
                  ? 'Loading...'
                  : new URL(data.link).hostname}
              </span>
            </Link>
          </div>
        </div>

        {!isLoading && data?.image && (
          <Link
            href={data.link}
            className="min-w-[130px] flex min-h-fit hover:shadow-md rounded-md overflow-hidden origin-center hover:scale-[1.1]"
          >
            <Image
              src={data.image}
              width={130}
              height={135}
              alt={data.link}
            />
          </Link>
        )}
      </div>
      <Divider className="mt-2 mb-4" />
      <span
        className={`${inter.className} font-medium text-sm text-gray-500`}
      >
        {data?.description}
      </span>
      <LinkButton label={'Visit link'} link={''} type={'default'} />
      <span
        className={`${inter.className} text-xs font-medium text-gray-500`}
      >
        {props.entry
          ? `Date Bookmarked: ${
              props.entry.bookmarkedAt.split('T')[0]
            }`
          : 'Loading...'}
      </span>
    </Container>
  );
};

const BookmarksSection = () => {
  const [bookmark, setBookmark] = useState<string>('');
  const [entry, setEntry] = useState<BookmarkEntry>(null);

  useEffect(() => {
    console.log('THIS AINT IT', bookmark);
  }, [bookmark]);

  return (
    <CardContainer className="max-w-[710px] h-[500px] px-4 flex flex-col">
      <CardHeader
        className="px-8"
        title={'My Bookmarks'}
        desc={
          'let’s take a look at some of the things I’ve found interesting or useful.'
        }
      />
      <Divider className="mt-2 mb-4" />
      <div className="flex flex-row h-full justify-center gap-x-4">
        {bookmark !== '' ? (
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
