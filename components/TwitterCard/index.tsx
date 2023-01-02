import Image from "next/image";
import CardContainer from "components/CardContainer";
import LinkButton from "components/LinkButton";
import { Inter } from "@next/font/google";
import { Icon } from "@iconify/react";
import {
  twitter_url,
  twitter_handle,
  twitter_pfp,
  twitter_name,
} from "lib/info";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const TwitterCard = () => {
  return (
    <CardContainer className="flex h-[302px] w-[340px] flex-col justify-between bg-[#4a99e9] px-6 py-4">
      <div>
        <div className="flex flex-row items-center justify-between  p-2">
          <div className="flex flex-row items-center gap-2">
            <Image
              className="rounded-full"
              src={twitter_pfp}
              width={50}
              height={50}
              alt={""}
            />

            <div className="flex flex-col">
              <span
                className={`${inter.className} text-sm font-bold text-white`}
              >
                {twitter_name}
              </span>

              <span
                className={`${inter.className} text-xs font-medium text-gray-200`}
              >
                {twitter_handle}
              </span>
            </div>
          </div>
          <Icon className="h-[50px] w-[50px] text-white" icon="mdi:twitter" />
        </div>

        <p className={`${inter.className} mt-5 text-2xl font-bold text-white`}>
          lorem ipsum dolor sit amet
        </p>
      </div>

      <LinkButton
        label={"Bore yourself to death"}
        link={twitter_url}
        type={"twitter"}
        icon={"eva:diagonal-arrow-right-up-fill"}
      />
    </CardContainer>
  );
};

export default TwitterCard;
