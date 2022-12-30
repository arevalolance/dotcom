import { Inter } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import {
  twitter_url,
  twitter_handle,
  twitter_pfp,
  twitter_name,
} from '../../lib/info';
import CardContainer from '../CardContainer';
import LinkButton from '../LinkButton';
import { Icon } from '@iconify/react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const TwitterCard = () => {
  return (
    <CardContainer className="w-[340px] h-[302px] px-6 py-4 flex flex-col justify-between bg-[#4a99e9]">
      <div>
        <div className="flex flex-row justify-between items-center  p-2">
          <div className="flex flex-row items-center gap-2">
            <Image
              className="rounded-full"
              src={twitter_pfp}
              width={50}
              height={50}
              alt={''}
            />

            <div className="flex flex-col">
              <span
                className={`${inter.className} font-bold text-sm text-white`}
              >
                {twitter_name}
              </span>

              <span
                className={`${inter.className} font-medium text-xs text-gray-200`}
              >
                {twitter_handle}
              </span>
            </div>
          </div>
          <Icon
            className="text-white h-[50px] w-[50px]"
            icon="mdi:twitter"
          />
        </div>

        <p
          className={`${inter.className} mt-5 text-2xl font-bold text-white`}
        >
          lorem ipsum dolor sit amet
        </p>
      </div>

      <LinkButton
        label={'Bore yourself to death'}
        link={twitter_url}
        type={'twitter'}
        icon={'eva:diagonal-arrow-right-up-fill'}
      />
    </CardContainer>
  );
};

export default TwitterCard;
