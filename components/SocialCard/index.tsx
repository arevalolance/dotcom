import CardContainer from 'components/CardContainer';
import { Inter } from '@next/font/google';
import Divider from 'components/Divider';
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'], weight: '500' });

const SocialCard = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  title: string;
  icon: string;
  subheader: string;
}) => {
  return (
    <CardContainer className="w-[340px] px-6 py-4" grow={false}>
      <div className="flex flex-row items-center hover:bg-gray-200 hover:shadow-md p-2 rounded-md gap-4">
        <Image
          src={
            'https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg'
          }
          alt={''}
          width={50}
          height={50}
        />

        <div className="flex flex-col">
          <span className={`${inter.className} text-xl leading-none`}>
            {props.title}
          </span>
          <span
            className={`${inter.className} text-md text-gray-500 leading-none`}
          >
            {props.subheader}
          </span>
        </div>
      </div>
      <Divider className="my-2" thickness="light" color="light" />

      {props.children}
    </CardContainer>
  );
};

export default SocialCard;
