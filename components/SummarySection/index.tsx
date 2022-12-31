import { Inter } from '@next/font/google';
import { aboutSummary } from 'lib/info';
import CardContainer from 'components/CardContainer';
import CardHeader from 'components/CardHeader';
import Divider from 'components/Divider';

const inter = Inter({ subsets: ['latin'] });

const SummarySection = () => {
  return (
    <CardContainer className="max-w-[500px]">
      <>
        <CardHeader
          title={'Lance Arevalo'}
          desc={
            'I create softwares from time to time. Oftentimes, I just watch movies and listen to music.  '
          }
        />
        <Divider thickness="light" color="light" />
        <div className="flex flex-col mt-4">
          {aboutSummary.map((item) => (
            <span
              className={`${inter.className} text-base text-gray-900 py-2`}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </>
    </CardContainer>
  );
};

export default SummarySection;
