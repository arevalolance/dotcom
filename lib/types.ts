import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type BookmarkData = {
  name: string;
  link: string;
  icon: string;
  tag: string;
  image: string;
  description: string;
};

export type BookmarkEntry = {
  id: number;
  link: string;
  tag: string;
  bookmarkedAt: Date;
  metadata?: BookmarkData;
};

export type BookmarkLinks = {
  name: string;
  description: string;
  links: BookmarkEntry[];
};

export type YoutubeDetails = {
  title: string;
  description: string;
  creator: string;
  creator_url: string;
  image_url: string;
};

export type Post = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
  tag: string;
  embed: string;
  embedTag;
};

export type Views = {
  slug: string;
  views: number;
};

export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormState = {
  state: Form;
  message?: string;
};

export type Subscribers = {
  totalCount: number;
};
