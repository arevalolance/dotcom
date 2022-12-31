import { Inter } from '@next/font/google';
import { shortener } from 'lib/stringMan';
import Link from 'next/link';

interface ArticleCardHeaderProps {
  title: string;
  desc: string;
  className?: string;
}

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

const ArticleCardHeader = (props: ArticleCardHeaderProps) => {
  return (
    <div
      className={`${inter.className} hover:underline ${props.className}`}
    >
      <span className="text-gray-900 text-md">{props.title}</span>
      <span className="text-gray-500 text-sm">—{props.desc}</span>
    </div>
  );
};

export default ArticleCardHeader;
