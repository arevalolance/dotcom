import Link from 'next/link';
import Divider from '../Divider';
import { Inter } from '@next/font/google';
import Image from 'next/image';
import ArticleCardHeader from '../ArticleCardHeader';
import { shortener } from '../../lib/stringMan';
import { Icon } from '@iconify/react';

const inter = Inter({ subsets: ['latin'] });

interface ArticleCardProps {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
}

const ArticleCard = (props: ArticleCardProps) => {
  return (
    <div className="flex justify-between flex-col w-[305px] h-[180px] border-[#e1e1e1] border-[1px] p-2 bg-white rounded-lg drop-shadow-md">
      <div>
        <div className="flex flex-row justify-between ">
          <div className="w-full text-ellipsis overflow-hidden break-all">
            <Link href="/blog">
              <ArticleCardHeader
                title={props.title}
                desc={props.publishedAt}
              />
            </Link>
            <Divider
              className="mb-2"
              thickness="light"
              color="light"
            />
            <p className={`${inter.className} text-sm text-gray-500`}>
              {shortener(props.summary, 80)}
            </p>
          </div>
          {props.image ? (
            <Image
              src="/images/PFP.png"
              alt={''}
              width={84}
              height={84}
              priority
            />
          ) : null}
        </div>
      </div>
      <div className="flex w-full justify-end">
        <Link href={'/'}>
          <Icon
            className="text-gray-700 hover:text-gray-900 rounded-md text-[25px] w-[25px] h-25px]"
            icon="ri:external-link-line"
          />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
