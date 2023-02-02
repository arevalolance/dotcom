import CardContainer from "components/CardContainer";
import { Icon } from "@iconify/react";
import Divider from "components/Divider";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import useWindowDimensions from "lib/useWindowDimensions";
import { BookmarkData, BookmarkEntry, BookmarkLinks } from "lib/types";
import useSWR from "swr";
import fetcher from "lib/fetcher";
import { shortener } from "lib/stringMan";

const normalPos = [-10, 0, 10, 20, 30];
const smallPos = [-30, -20, -10, 0, 10];

const BookmarkLink = (props: { bookmarks: BookmarkData }) => {
  return (
    <Link href={props.bookmarks.link} target="_blank">
      <div className="flex h-[31px] w-full flex-col justify-center gap-y-[2px] rounded-sm bg-[#323232] p-2 hover:bg-[#5f5f5f]">
        <h1 className="flex flex-col text-ellipsis text-[7px] font-medium text-white hover:underline">
          {shortener(props.bookmarks.name, 65)}
        </h1>
        <div className="flex flex-row items-center gap-[2px]">
          <div className="flex h-[7px] w-[7px]  items-center justify-center overflow-hidden rounded-sm">
            {props.bookmarks.icon ? (
              <Image
                src={props.bookmarks.icon}
                width={7}
                height={7}
                alt={props.bookmarks.name}
              />
            ) : (
              <Icon className="h-[7px] w-[7px]" icon="mdi:link-variant" />
            )}
          </div>
          <span className="text-[5px] text-[#D9D9D9]">
            {props.bookmarks.link}
          </span>
          <div className="mx-2 h-[3px] w-[3px] rounded-full bg-[#D9D9D9]" />
          <span className="text-[5px] text-[#D9D9D9]">
            {/* Bookmarked at: {props.bookmark.bookmarkedAt} */}
          </span>
        </div>
      </div>
    </Link>
  );
};

const BookmarksSection = (props: { bookmarks: BookmarkLinks[] }) => {
  const { width } = useWindowDimensions();

  return (
    <CardContainer className="mx-auto flex h-[357.5px] w-11/12 flex-col overflow-hidden p-0 md:w-[700px] lg:h-[300px]">
      <div className="relative h-full w-full items-end justify-end">
        <div className="absolute bottom-[15%] z-10 mb-2 ml-2 hidden md:block">
          <Image
            alt="Bookmark Tip"
            src={"/static/images/bookmark-tip.webp"}
            width={150}
            height={150}
          />
        </div>
        <Link
          className="absolute bottom-0 z-10 mb-2 ml-2 rounded-full border-4 border-border-button bg-background-surface p-2 duration-150 hover:scale-[1.1] hover:border-gray-200"
          href={"/bookmarks"}
          aria-label="Bookmarks"
        >
          <Icon
            className="z-20 h-[25px] w-[25px] text-text-primary"
            icon="eva:diagonal-arrow-right-up-fill"
          />
        </Link>
        <h1 className="absolute mt-4 ml-4 font-chubbo text-3xl font-bold text-text-primary">
          Bookmarks
        </h1>

        {props.bookmarks.map((link, index) => (
          <motion.div
            key={link.name}
            whileHover={{ translateY: "-30px" }}
            style={{
              height: "300px",
              width: "300px",
              rotateZ: -10,
              borderRadius: "5px",
              zIndex: Math.abs(5 - index),
              position: "absolute",
              right: `${width > 768 ? normalPos[index] : smallPos[index]}%`,
              bottom: "-20%",
            }}
          >
            <div className="flex h-full w-full flex-col rounded-md border-2 border-[#3D3D3D] bg-[#1F1F1F] p-2">
              <span className="text-[11px] font-bold text-white">
                {link.name}
              </span>
              <p className="text-[5px] text-white">{link.description}</p>
              <Divider className="my-2" thickness="light" color="light" />
              <div className="flex w-full flex-col justify-center gap-y-[2px]">
                {link.links.map((link) => (
                  <BookmarkLink key={link.link} bookmarks={link.metadata} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </CardContainer>
  );
};

export default BookmarksSection;
