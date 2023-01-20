import fetcher from "lib/fetcher";
import useSWR from "swr";
import Image from "next/image";
import { BookmarkData, BookmarkEntry } from "lib/types";
import { Suspense, useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { getBookmarks } from "./api/bookmark";
import Divider from "components/Divider";

const SubLink = (props: { name; icon; link }) => {
  return (
    <div className="flex w-full flex-row items-center gap-x-2">
      <div className="flex h-[15px] w-[15px] overflow-hidden rounded-sm">
        {props.icon && (
          <Image src={props.icon} width={15} height={15} alt={props.name} />
        )}
      </div>
      <span className="text-text-secondary">
        {props.link ? new URL(props.link).hostname : "---"}
      </span>
    </div>
  );
};

const BookmarkLink = (props: {
  link: string;
  setBookmark;
  bookmark: BookmarkData;
}) => {
  const { data, isLoading } = useSWR<BookmarkData>(
    `/api/metadata/general?url=${props.link}`,
    fetcher
  );

  return (
    <Suspense fallback={false}>
      {!isLoading && (
        <div
          onClick={() => props.setBookmark({ ...data, link: props.link })}
          className={`flex w-full flex-col rounded-md border-[1px] border-border-surface ${
            props.bookmark?.link === data?.link
              ? "bg-background-surface"
              : "bg-background-primary/75"
          } p-2 hover:cursor-pointer hover:bg-background-surface`}
        >
          <span className="overflow-hidden text-ellipsis whitespace-nowrap  text-text-primary">
            {data?.name}
          </span>
          <SubLink name={data?.name} icon={data?.icon} link={data?.link} />
        </div>
      )}
    </Suspense>
  );
};

const DesktopLinks = (props: {
  setBookmark;
  links: BookmarkEntry[];
  bookmark: BookmarkData;
}) => {
  return (
    <div className="hidden w-[300px] shrink-0 grow-0 flex-col gap-y-2 overflow-auto border-r-[1px] border-border-surface p-2 md:flex">
      {props.links &&
        props.links.map((bookmark) => (
          <BookmarkLink
            bookmark={props.bookmark}
            key={bookmark.link}
            link={bookmark.link}
            setBookmark={props.setBookmark}
          />
        ))}
    </div>
  );
};

const MobileLinks = (props: {
  setBookmark;
  links: BookmarkEntry[];
  bookmark: BookmarkData;
}) => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => setOpen(!isOpen)}
        className="absolute top-0 left-0 z-10 mt-6 ml-6 text-3xl text-white duration-150 md:hidden"
      >
        {isOpen ? (
          <Icon icon="material-symbols:close" />
        ) : (
          <Icon icon="akar-icons:two-line-horizontal" />
        )}
      </button>

      <div
        onClick={() => setOpen(false)}
        style={{
          display: isOpen ? "block" : "none",
        }}
        className="absolute top-0 left-0 h-screen w-screen"
      />

      <div
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(-280px)",
        }}
        className={`absolute top-0 left-0 z-10 h-screen w-[280px] translate-y-[-280px] border-r-[1px] border-border-surface bg-background-primary  pt-16 duration-200 md:hidden`}
      >
        <div className="flex h-full w-full flex-col gap-y-2 overflow-auto scroll-smooth p-4">
          <button
            onClick={() => router.push("/")}
            className="w-full rounded-md border-4 border-border-surface bg-background-primary p-2"
          >
            <span className="text-white">Go Back</span>
          </button>
          {props.links &&
            props.links.map((bookmark) => (
              <BookmarkLink
                bookmark={props.bookmark}
                key={bookmark.link}
                link={bookmark.link}
                setBookmark={props.setBookmark}
              />
            ))}
        </div>
      </div>
    </>
  );
};

const Closer = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="absolute top-[20px] left-1/2 z-10 hidden -translate-x-1/2 cursor-pointer rounded-full border-4 border-border-button bg-background-surface p-2 duration-150 hover:scale-[1.1] hover:border-gray-200 md:block"
    >
      <Icon
        className="z-20 h-[25px] w-[25px] text-text-primary"
        icon="material-symbols:close"
      />
    </div>
  );
};

const Bookmarks = ({ bookmarks }: { bookmarks: BookmarkEntry[] }) => {
  const [bookmark, setBookmark] = useState<BookmarkData>(undefined);
  const bookmarkTag = bookmarks.filter(
    (b) => b.link.toLowerCase() === bookmark?.link.toLowerCase()
  )[0]?.tag;

  return (
    <>
      <Closer />
      <MobileLinks
        bookmark={bookmark}
        setBookmark={setBookmark}
        links={bookmarks}
      />

      <div className="m-auto flex h-screen w-screen flex-row rounded-md border-border-surface bg-background-surface md:h-[600px] md:w-[700px] md:border-[1px] lg:w-[1000px]">
        <DesktopLinks
          bookmark={bookmark}
          setBookmark={setBookmark}
          links={bookmarks}
        />
        {bookmark ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="m-auto flex h-fit w-11/12 justify-center rounded-md border-[1px] border-border-surface bg-background-primary py-10 md:border-y-[1px]">
              <div className="flex h-fit w-8/12 flex-col">
                {bookmarkTag && (
                  <span className="mb-2 w-fit rounded-md border-[1px] border-border-surface py-1 px-2 text-sm text-text-primary">
                    {bookmarkTag}
                  </span>
                )}
                <h1 className="text-xl font-bold text-text-primary">
                  {bookmark.name}
                </h1>
                <SubLink
                  name={bookmark.name}
                  icon={bookmark.icon}
                  link={bookmark.link}
                />
                <Divider className="mt-2" thickness="light" color="light" />
                <p className="my-5 w-full overflow-hidden text-ellipsis italic text-text-secondary">
                  {bookmark.description}
                </p>
                <button
                  className="flex w-full flex-row items-center justify-center
                  gap-x-1 rounded-md border-4 border-transparent
                bg-background-surface py-1 text-white duration-150 hover:border-border-button"
                >
                  <Icon
                    className="text-lg"
                    icon="eva:diagonal-arrow-right-up-fill"
                  />
                  Visit
                </button>
              </div>
            </div>
          </div>
        ) : (
          <span className="m-auto text-lg text-text-primary">
            {bookmarks.length === 0
              ? "Lance hasn't made any bookmarks yet"
              : "Select a bookmark"}
          </span>
        )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await getBookmarks();
  const bookmarks = JSON.parse(res);

  return {
    props: {
      bookmarks,
    },
  };
}

export default Bookmarks;
