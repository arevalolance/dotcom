import { Inter } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { shortener } from '../../lib/stringMan';
import { Tooltip } from '@mui/material';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500'] });

const ToolCard = (props: {
  name: string;
  info: string;
  icon: string;
  url: string;
}) => {
  const [imageError, setImageError] = useState(false);
  return (
    <Link href={props.url}>
      <div className="bg-white rounded-md border-[#E1E1E1] min-h-[80px] border-[1px] p-2 justify-between items-center flex">
        <div className="flex flex-row items-center w-full  gap-2">
          {/* TODO: Maybe change Image into AppIcon component */}
          <div className="max-w-[50px] max-h-[50px] rounded-md overflow-hidden">
            {props.icon && !imageError ? (
              <Image
                className="object-contain h-[50px]  flex items-center justify-center"
                src={props.icon}
                width={60}
                height={60}
                alt={props.name}
                onError={() => setImageError(true)}
              />
            ) : null}
          </div>

          <div
            className={`${inter.className} flex flex-col gap-y-1 h-full w-full overflow-hidden`}
          >
            <span className="leading-none text-md font-medium">
              {props.name}
            </span>
            {props.info ? (
              <Tooltip title={props.info}>
                <span className="text-gray-500 text-xs font-medium leading-none">
                  {props.info.length >= 60
                    ? shortener(props.info, 50)
                    : props.info}
                </span>
              </Tooltip>
            ) : null}
            {props.url ? (
              <span className="text-gray-500 text-xs font-normal">
                {props.url.length >= 50
                  ? shortener(props.url, 40)
                  : props.url}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;
