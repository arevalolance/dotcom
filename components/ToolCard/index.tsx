import { Inter } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { shortener } from "lib/stringMan";
import { useState } from "react";

const ToolCard = (props: {
  name: string;
  info: string;
  icon: string;
  url: string;
}) => {
  const [imageError, setImageError] = useState(false);
  return (
    <Link href={props.url} target="_blank">
      <div className="flex min-h-[80px] items-center justify-between rounded-md border-[1px] border-tan-gray-light p-2 hover:border-tan-gray-dark">
        <div className="flex w-full flex-row items-center  gap-x-4">
          <div className="max-h-[50px] max-w-[50px] overflow-hidden rounded-md">
            {props.icon && !imageError ? (
              <Image
                className="flex h-[50px]  items-center justify-center object-contain"
                src={props.icon}
                width={60}
                height={60}
                alt={props.name}
                onError={() => setImageError(true)}
              />
            ) : null}
          </div>

          <div
            className={`flex h-full w-full flex-col gap-y-1 overflow-hidden`}
          >
            <span className={`text-md font-medium leading-none`}>
              {props.name}
            </span>
            {props.url ? (
              <span
                className={`text-xs font-normal text-blue-500 hover:text-blue-700`}
              >
                {props.url.length >= 50 ? shortener(props.url, 40) : props.url}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;
