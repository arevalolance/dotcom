import { Be_Vietnam_Pro } from '@next/font/google';
import Link from 'next/link';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: '500',
});

const NavItem = (props: { text: string; url: string }) => {
  return (
    <Link
      href={props.url}
      className="
    border-transparent border-[0.5px] hover:border-gray-300 active:border-gray-400
    hover:cursor-pointer
    hover:bg-gray-100
    active:bg-gray-200
    px-7 py-[10px]
    rounded-full
    text-gray-500 hover:text-gray-900"
    >
      <span className={`${beVietnamPro.className}`}>
        {props.text}
      </span>
    </Link>
  );
};

export default NavItem;
