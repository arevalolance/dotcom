'use client';

import { useState } from 'react';
import Divider from '../Divider';
import LinkButton from '../LinkButton';
import SocialCard from '../SocialCard';
import { email } from '../../lib/info';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500'] });

const MailCard = () => {
  const [message, setMessage] = useState<string>('');

  return (
    <SocialCard
      title={'Contact Me'}
      subheader={`Let's chat!`}
      icon={'/images/PFP.png'}
    >
      <div
        className={`${inter.className} gap-y-4 flex flex-col border-l-[3px] border-l-blue-400 bg-white p-4`}
      >
        <span className="text-gray-900 font-medium text-sm">
          To: {email}
        </span>
        <span className="text-gray-900 font-normal text-sm">
          Subject: Hey there!
        </span>
        <div>
          <input
            className={`${inter.className} w-full text-gray-900 text-sm focus:outline-none`}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How's it going?"
          />
          <Divider thickness="light" color="light" />
        </div>
      </div>

      <LinkButton
        label={'Email me'}
        link={`mailto:${email}?&subject=Let's chat!&body=${message}`}
        type={'mail'}
      />
    </SocialCard>
  );
};

export default MailCard;
