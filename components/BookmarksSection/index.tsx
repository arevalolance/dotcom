import CardContainer from "components/CardContainer";
import { Icon } from "@iconify/react";
import Divider from "components/Divider";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const BookmarkLink = (props: { title; bookmarkedAt; link }) => {
  return (
    <Link href={`https://${props.link}`} target="_blank">
      <div className="flex h-[31px] w-full flex-col justify-center gap-y-[2px] rounded-sm bg-[#323232] p-2 hover:bg-[#5f5f5f]">
        <span className="flex flex-col text-[7px] font-medium text-white hover:underline">
          {props.title}
        </span>
        <div className="flex flex-row">
          <div className="h-[7px] w-[7px] rounded-sm bg-[#1F1F1F]" />
          <span className="text-[5px] text-[#D9D9D9]">{props.link}</span>
          <div className="h-[7px] w-[7px] rounded-full bg-[#D9D9D9]" />
          <span className="text-[5px] text-[#D9D9D9]">
            Bookmarked at: {props.bookmarkedAt}
          </span>
        </div>
      </div>
    </Link>
  );
};

const BookmarksSection = () => {
  return (
    <CardContainer className="mx-auto flex h-[357.5px] w-11/12 flex-col overflow-hidden px-0 py-0 md:w-[700px] lg:h-[300px]">
      <div className="relative h-full w-full items-end justify-end">
        <div className="absolute bottom-[15%] z-10 mb-2 ml-2 hidden md:block">
          <Image
            alt="Bookmark Tip"
            src={"/images/bookmark-tip.png"}
            width={150}
            height={150}
          />
        </div>
        <div className="absolute bottom-0 z-10 mb-2 ml-2 rounded-full border-4 border-transparent bg-white p-2 duration-150 hover:scale-[1.1] hover:border-gray-200">
          <Link href={"/bookmarks"}>
            <Icon
              className="z-25 h-[25px] w-[25px] text-black"
              icon="eva:diagonal-arrow-right-up-fill"
            />
          </Link>
        </div>
        <h1 className="absolute mt-4 ml-4 font-chubbo text-3xl font-bold text-text-primary">
          Bookmarks
        </h1>
        <motion.div
          whileHover={{ translateY: "-30px" }}
          style={{
            height: "300px",
            width: "300px",
            rotateZ: -10,
            borderRadius: "5px",
            zIndex: 1,
            position: "absolute",
            right: "30%",
            bottom: "-20%",
          }}
        >
          <div className="flex h-full w-full flex-col rounded-md border-2 border-[#3D3D3D] bg-[#1F1F1F] p-2">
            <span className="text-[11px] font-bold text-white">WEBSITES</span>
            <p className="text-[5px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum iaculis viverra sem quis scelerisque. In ac facilisis
              tellus. Donec a turpis tempus, viverra urna non, vestibulum
              sapien.
            </p>
            <Divider className="my-2" thickness="light" color="light" />
            <div className="flex w-full flex-col justify-center gap-y-[2px]">
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ translateY: "-30px" }}
          style={{
            height: "300px",
            width: "300px",
            rotateZ: -10,
            borderRadius: "5px",
            zIndex: 2,
            position: "absolute",
            right: "20%",
            bottom: "-20%",
          }}
        >
          <div className="flex h-full w-full flex-col rounded-md border-2 border-[#3D3D3D] bg-[#1F1F1F] p-2">
            <span className="text-[11px] font-bold text-white">WEBSITES</span>
            <p className="text-[5px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum iaculis viverra sem quis scelerisque. In ac facilisis
              tellus. Donec a turpis tempus, viverra urna non, vestibulum
              sapien.
            </p>
            <Divider className="my-2" thickness="light" color="light" />
            <div className="flex w-full flex-col justify-center gap-y-[2px]">
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ translateY: "-30px" }}
          style={{
            height: "300px",
            width: "300px",
            rotateZ: -10,
            borderRadius: "5px",
            zIndex: 3,
            position: "absolute",
            right: "10%",
            bottom: "-20%",
          }}
        >
          <div className="flex h-full w-full flex-col rounded-md border-2 border-[#3D3D3D] bg-[#1F1F1F] p-2">
            <span className="text-[11px] font-bold text-white">WEBSITES</span>
            <p className="text-[5px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum iaculis viverra sem quis scelerisque. In ac facilisis
              tellus. Donec a turpis tempus, viverra urna non, vestibulum
              sapien.
            </p>
            <Divider className="my-2" thickness="light" color="light" />
            <div className="flex w-full flex-col justify-center gap-y-[2px]">
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ translateY: "-30px" }}
          style={{
            height: "300px",
            width: "300px",
            rotateZ: -10,
            borderRadius: "5px",
            zIndex: 4,
            position: "absolute",
            right: 0,
            bottom: "-20%",
          }}
        >
          <div className="flex h-full w-full flex-col rounded-md border-2 border-[#3D3D3D] bg-[#1F1F1F] p-2">
            <span className="text-[11px] font-bold text-white">WEBSITES</span>
            <p className="text-[5px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum iaculis viverra sem quis scelerisque. In ac facilisis
              tellus. Donec a turpis tempus, viverra urna non, vestibulum
              sapien.
            </p>
            <Divider className="my-2" thickness="light" color="light" />
            <div className="flex w-full flex-col justify-center gap-y-[2px]">
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ translateY: "-30px" }}
          style={{
            height: "300px",
            width: "300px",
            rotateZ: -10,
            borderRadius: "5px",
            zIndex: 5,
            position: "absolute",
            right: "-10%",
            bottom: "-20%",
            padding: "10px",
          }}
        >
          <div className="flex h-full w-full flex-col rounded-md border-2 border-[#3D3D3D] bg-[#1F1F1F] p-2">
            <span className="text-[11px] font-bold text-white">WEBSITES</span>
            <p className="text-[5px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum iaculis viverra sem quis scelerisque. In ac facilisis
              tellus. Donec a turpis tempus, viverra urna non, vestibulum
              sapien.
            </p>
            <Divider className="my-2" thickness="light" color="light" />
            <div className="flex w-full flex-col justify-center gap-y-[2px]">
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
              <BookmarkLink
                title={"Lorem ipsum dolor sit amet"}
                bookmarkedAt={"September, 05, 2020"}
                link={"twitter.com/arevalolance"}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </CardContainer>
  );
};

export default BookmarksSection;
