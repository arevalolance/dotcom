"use client";

import { useState } from "react";
import Divider from "components/Divider";
import LinkButton from "components/LinkButton";
import SocialCard from "components/SocialCard";
import { email } from "lib/info";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

const MailCard = () => {
  const [message, setMessage] = useState<string>("");

  return (
    <SocialCard
      title={"Contact Me"}
      subheader={`Let's chat!`}
      icon={"/images/PFP.png"}
    >
      <div
        className={`${inter.className} flex flex-col gap-y-4 border-l-[3px] border-l-blue-400 bg-white p-4`}
      >
        <span className="text-sm font-medium text-gray-900">To: {email}</span>
        <span className="text-sm font-normal text-gray-900">
          Subject: Hey there!
        </span>
        <div>
          <input
            className={`${inter.className} w-full text-sm text-gray-900 focus:outline-none`}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How's it going?"
          />
          <Divider thickness="light" color="light" />
        </div>
      </div>

      <LinkButton
        label={"Email me"}
        link={`mailto:${email}?&subject=Let's chat!&body=${message}`}
        type={"mail"}
      />
    </SocialCard>
  );
};

export default MailCard;
