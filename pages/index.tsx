import { Be_Vietnam_Pro, Inter } from '@next/font/google';
import Image from 'next/image';
import BlogSection from 'components/BlogSection';
import BookmarksSection from 'components/BookmarksSection';
import Divider from 'components/Divider';
import MailCard from 'components/MailCard';
import SummarySection from 'components/SummarySection';
import ToolSection from 'components/ToolSection';
import TwitterCard from 'components/TwitterCard';
import Navbar from 'components/Navbar';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: '900',
});

const Index = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="flex flex-row items-center min-h-[367px] max-w-[1040px] mx-auto">
          <div className="mr-5">
            <h1
              className={`${beVietnamPro.className} leading-none text-gray-900 text-[71px]`}
            >
              LANCE AREVALO
            </h1>
            <Divider thickness="heavy" color="dark" />
            <span>~ software developer ~</span>
          </div>

          <Image
            src="/images/PFP.png"
            alt={''}
            width={367}
            height={367}
            priority
          />
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-fit gap-8">
            <SummarySection />
            <ToolSection />
          </div>

          <div className="flex flex-col w-fit gap-8">
            <BlogSection />

            <div className="flex flex-row justify-between">
              <MailCard />
              <TwitterCard />
            </div>

            <BookmarksSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
