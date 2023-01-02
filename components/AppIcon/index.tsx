import { Icon } from "@iconify/react";
import fetcher from "lib/fetcher";
import { BookmarkData } from "lib/types";
import Image from "next/image";
import { useEffect } from "react";
import useSWR from "swr";

const AppIcon = (props: { link: string }) => {
  const { data, isLoading } = useSWR<BookmarkData>(
    `/api/metadata/general?url=${props.link}`,
    fetcher
  );

  return (
    <div
      className="flex h-[90px]
    w-[90px] items-center justify-center rounded-[20px]
    border-[5px] border-transparent
    p-[5px] hover:cursor-pointer
    hover:border-[#B7B5BB]
    active:border-[#6D4AFF]
    "
    >
      {isLoading ? (
        <Icon icon={"mdi:link-variant"} />
      ) : (
        <Image src={data.icon} alt={data.icon} width={80} height={80} />
      )}
    </div>
  );
};

export default AppIcon;
