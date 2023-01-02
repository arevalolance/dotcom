import Link from "next/link";
import Divider from "components/Divider";
import { Inter } from "@next/font/google";
import Image from "next/image";
import ArticleCardHeader from "components/ArticleCardHeader";
import { Icon } from "@iconify/react";
import { shortener } from "lib/stringMan";

const inter = Inter({ subsets: ["latin"] });

interface ArticleCardProps {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
}

const ArticleCard = (props: ArticleCardProps) => {
  return (
    <div className="flex h-[180px] w-[305px] flex-col justify-between rounded-lg border-[1px] border-[#e1e1e1] bg-white p-2 drop-shadow-md">
      <div>
        <div className="flex flex-row justify-between ">
          <div className="w-full overflow-hidden text-ellipsis break-all">
            <Link href="/blog">
              <ArticleCardHeader title={props.title} desc={props.publishedAt} />
            </Link>
            <Divider className="mb-2" thickness="light" color="light" />
            <p className={`${inter.className} text-sm text-gray-500`}>
              {shortener(props.summary, 80)}
            </p>
          </div>
          {props.image ? (
            <Image
              src="/images/PFP.png"
              alt={""}
              width={84}
              height={84}
              priority
            />
          ) : null}
        </div>
      </div>
      <div className="flex w-full justify-end">
        <Link href={"/"}>
          <Icon
            className="h-25px] w-[25px] rounded-md text-[25px] text-gray-700 hover:text-gray-900"
            icon="ri:external-link-line"
          />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
