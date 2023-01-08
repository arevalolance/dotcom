import { Icon } from "@iconify/react";
import { twitter_url } from "lib/info";
import Link from "next/link";
import { useState } from "react";

const TwitterCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="mx-auto flex h-[357.5px] w-11/12 md:mx-0 md:h-[300px] md:w-[300px]">
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#98D0FF]">
        <div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
          <Icon
            className="z-25 my-auto text-9xl text-white"
            icon="mdi:twitter"
          />
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute bottom-0 z-10 mb-2 ml-2 rounded-full border-4 border-transparent border-border-button bg-background-surface p-2 duration-150 hover:scale-[1.1] hover:border-gray-200"
        >
          <Link href={twitter_url} target="_blank" aria-label="Twitter Card">
            <Icon
              className="z-25 h-[25px] w-[25px] text-text-primary"
              icon="eva:diagonal-arrow-right-up-fill"
            />
          </Link>
        </div>
        <div
          className={`${
            isHovered ? "scale-[20]" : ""
          } absolute bottom-0 z-0 mb-3 ml-3 h-[40px] w-[40px] rounded-full border-4 border-transparent bg-[#0d95e8] p-2 duration-300 hover:border-gray-200`}
        />
      </div>
    </div>
  );
};

export default TwitterCard;
