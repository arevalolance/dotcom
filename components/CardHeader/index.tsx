import { Inter } from '@next/font/google';

interface CardHeaderProps {
  title: string;
  desc?: string;
  className?: string;
  size?: string;
}

const inter = Inter({ subsets: ['latin'], weight: '500' });

const CardHeader = (props: CardHeaderProps) => {
  return (
    <div className={`flex items-center ${props.className}`}>
      <p
        className={`${inter.className} ${
          props.size ? props.size : 'text-lg'
        } text-gray-500`}
      >
        <span className="text-gray-900">{props.title}</span>
        {props.desc ? `—${props.desc}` : null}
      </p>
    </div>
  );
};

export default CardHeader;
