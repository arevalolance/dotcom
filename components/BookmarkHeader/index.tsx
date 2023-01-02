import Link from "next/link";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "500" });

const BookmarkHeader = (props: {
  title: string;
  website: string;
  link: string;
}) => {
  return (
    <div className="flex flex-col">
      <span className={`${inter.className} text-gray-900`}>{props.title}</span>
      <div className="flex flex-row">
        <Link
          className={`${inter.className} text-gray-500 hover:underline`}
          href={props.link}
        >
          {props.website}
        </Link>
      </div>
    </div>
  );
};

export default BookmarkHeader;
