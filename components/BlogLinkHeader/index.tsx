import { Icon } from "@iconify/react";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const BlogLinkHeader = (props: {
  tag?: string;
  title: string;
  publishedAt: string;
  slug: string;
}) => {
  let tagColor: string;
  switch (props.tag) {
    case "Essay":
      tagColor = "bg-blue-200";
      break;
    case "Tutorial":
      tagColor = "bg-green-200";
      break;
    case "Review":
      tagColor = "bg-yellow-200";
      break;
    case "News":
      tagColor = "bg-red-200";
      break;
    default:
      tagColor = "bg-gray-200";
  }

  return (
    <Link href={`/blog/${props.slug}`} className="">
      <div className="mb-2 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-x-1">
          {props.tag && (
            <span
              className={`${inter.className} h-fit w-fit rounded-md px-2 py-1 text-xs font-normal text-black ${tagColor}`}
            >
              {props.tag}
            </span>
          )}
          <span
            className={`${inter.className} text-lg font-medium hover:underline`}
          >
            {props.title}
          </span>
        </div>
        <div className="flex flex-row gap-x-4">
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
            {props.publishedAt.split("T")[0]}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogLinkHeader;
