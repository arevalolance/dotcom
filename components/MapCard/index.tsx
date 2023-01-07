import { Icon } from "@iconify/react";
import Image from "next/image";

const MapCard = () => {
  return (
    <div
      className="mx-auto flex
    h-[357.5px] w-11/12
    items-center justify-center
    rounded-3xl
    border-[1px] border-border-surface bg-[url('/images/MAP.jpg')]
    bg-contain bg-no-repeat md:mx-0 md:h-[300px]
    md:min-w-[300px] md:max-w-[300px]"
    >
      <div
        className="flex
      h-[120px] w-[120px]
      cursor-pointer
      items-center justify-center overflow-hidden
      rounded-full
      border-4 border-transparent border-gray-200
      bg-blue-500/50 p-2 duration-150 hover:scale-[1.1]"
      >
        <Image
          alt="Ttestse"
          src={"/images/MAP_MEMOJI.png"}
          className="rounded-full"
          width={90}
          height={90}
        />
      </div>
    </div>
  );
};

export default MapCard;
