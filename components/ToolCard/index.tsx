import { Inter } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { shortener } from "lib/stringMan";
import { Tooltip } from "@mui/material";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

const ToolCard = (props: {
  name: string;
  info: string;
  icon: string;
  url: string;
}) => {
  const [imageError, setImageError] = useState(false);
  return (
    <Link href={props.url}>
      <div className="flex min-h-[80px] items-center justify-between rounded-md border-[1px] border-[#E1E1E1] bg-white p-2">
        <div className="flex w-full flex-row items-center  gap-2">
          {/* TODO: Maybe change Image into AppIcon component */}
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
            className={`${inter.className} flex h-full w-full flex-col gap-y-1 overflow-hidden`}
          >
            <span className="text-md font-medium leading-none">
              {props.name}
            </span>
            {props.info ? (
              <Tooltip title={props.info}>
                <span className="text-xs font-medium leading-none text-gray-500">
                  {props.info.length >= 60
                    ? shortener(props.info, 50)
                    : props.info}
                </span>
              </Tooltip>
            ) : null}
            {props.url ? (
              <span className="text-xs font-normal text-gray-500">
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
