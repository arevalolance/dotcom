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
  bookmarkedAt: string;
};

export type BookmarkEntries = {
  bookmarks: BookmarkEntry[];
};

export type YoutubeDetails = {
  title: string;
  description: string;
  creator: string;
  creator_url: string;
  image_url: string;
};
