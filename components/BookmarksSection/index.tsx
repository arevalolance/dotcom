import { Inter } from '@next/font/google';
import AppIcon from '../AppIcon';
import BookmarkHeader from '../BookmarkHeader';
import CardContainer from '../CardContainer';
import CardHeader from '../CardHeader';
import Divider from '../Divider';
import LinkButton from '../LinkButton';

const inter = Inter({ subsets: ['latin'] });

const BookmarksSection = () => {
  return (
    <CardContainer className="max-w-[710px]">
      <CardHeader
        title={'My Bookmarks'}
        desc={
          'let’s take a look at some of the things I’ve found interesting or useful.'
        }
      />
      <div className="mt-2 bg-white px-[4px] pt-[4px] pb-[10px] rounded-md flex flex-row scroll-smooth overflow-auto">
        <AppIcon iconSource={'/images/PFP.png'} />
      </div>

      <div className="flex flex-col bg-white rounded-md p-5 mt-5">
        <BookmarkHeader
          title="Title"
          link="https://twitter.com/arevalolance"
          website="twitter.com"
        />
        <Divider thickness="light" color="light" className="mb-2" />
        {/* MAX LENGTH: 200 CHARS */}
        <p className={`${inter.className} text-gray-500`}>
          summary summary summary summary summary summary summary
          summary summary summary summary summary summary summary
          summary summary summary summary summary summary summary
          summary summary summary
        </p>
        <LinkButton
          label="Visit link"
          link="https://twitter.com/arevalolance"
          type="default"
        />
      </div>
    </CardContainer>
  );
};

export default BookmarksSection;
