import { Inter } from '@next/font/google';
import CardContainer from '../components/CardContainer';
import CardHeader from '../components/CardHeader';
import Divider from '../components/Divider';
import MailCard from '../components/MailCard';
import TwitterCard from '../components/TwitterCard';
import { about } from '../lib/info';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row w-full gap-8">
        <div className="flex flex-col gap-8">
          <MailCard />
          <TwitterCard />
        </div>
        <div className="flex w-full">
          <CardContainer className="w-full">
            <CardHeader
              className="text-2xl"
              title={'About Me'}
              size="text-2xl"
            />
            <Divider className="my-2" />
            <div className="flex flex-col gap-4">
              {about.map((item, index) => (
                <div key={index}>
                  <span
                    className={`${inter.className} font-bold text-xs text-gray-400`}
                  >
                    {item.header}
                  </span>
                  <p
                    className={`${inter.className} text-gray-600 text-lg`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </CardContainer>
        </div>
      </div>
    </>
  );
};

export default About;
