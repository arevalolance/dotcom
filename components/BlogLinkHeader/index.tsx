import { Icon } from '@iconify/react';
import { Inter } from '@next/font/google';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const BlogLinkHeader = (props: {
  tag?: string;
  title: string;
  publishedAt: string;
  slug: string;
}) => {
  return (
    <Link href={`/blog/posts/${props.slug}`} className="">
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-row gap-x-2">
          {props.tag && (
            <span className="font-normal text-white text-sm px-2 py-1 bg-blue-400 rounded-md w-fit h-fit">
              {props.tag}
            </span>
          )}
          <span
            className={`${inter.className} font-medium text-lg hover:underline`}
          >
            {props.title}
          </span>
        </div>
        <div className="flex flex-row gap-x-6">
          <div className="flex flex-row items-center gap-x-1">
            <Icon
              className="text-sm font-medium text-gray-900"
              icon="ic:outline-remove-red-eye"
            />
            <span
              className={`${inter.className} text-sm font-medium text-gray-900`}
            >
              9000
            </span>
          </div>
          <span
            className={`${inter.className} text-sm font-medium text-gray-500`}
          >
            {props.publishedAt}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogLinkHeader;
