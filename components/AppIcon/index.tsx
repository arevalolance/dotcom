import { Icon } from '@iconify/react';
import fetcher from 'lib/fetcher';
import { BookmarkData } from 'lib/types';
import Image from 'next/image';
import { useEffect } from 'react';
import useSWR from 'swr';

const AppIcon = (props: { link: string }) => {
  const { data, isLoading } = useSWR<BookmarkData>(
    `/api/metadata/general?url=${props.link}`,
    fetcher
  );

  useEffect(() => {
    if (!isLoading) {
      console.log('TEST:', data);
    }
  });

  return (
    <div
      className="flex p-[5px]
    border-[5px] border-transparent active:border-[#6D4AFF] hover:border-[#B7B5BB]
    justify-center items-center
    w-[90px] h-[90px]
    rounded-[20px]
    hover:cursor-pointer
    "
    >
      {isLoading ? (
        <Icon icon={'mdi:link-variant'} />
      ) : (
        <Image
          src={data.icon}
          alt={data.icon}
          width={80}
          height={80}
        />
      )}
    </div>
  );
};

export default AppIcon;
