import { Github, Twitter } from 'lucide-react';
import Link from 'next/link';

interface FooterItem {
  link: string;
  title: string;
}

function FooterItem({ link, title }: FooterItem) {
  return (
    <Link
      className="text-sm hover:underline text-[#404040] hover:text-black"
      href={link}
    >
      {title}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="p-4 md:p-0 gap-y-10 md:gap-0 container mx-auto flex flex-col md:flex-row items-center md:justify-between">
      <div className="flex flex-col gap-y-2 items-center md:items-start">
        <div className="flex flex-row gap-x-2">
          <Github />
          <Twitter />
        </div>
        <span className="text-sm text-black font-medium">
          © 2023 arevalolance.com
        </span>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-y-2">
          <span className="text-black/50">Learn more</span>
          <FooterItem link={'/about'} title={'About me'} />
          <FooterItem link={'/resume'} title={'Resume'} />
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="text-black/50">Stay connected</span>
          <FooterItem link={'/blog'} title={'Blog'} />
          <FooterItem
            link={'https://github.com/arevalolance'}
            title={'GitHub'}
          />
          <FooterItem
            link={'https://linkedin.com/in/arevalolance'}
            title={'LinkedIn'}
          />
          <FooterItem link={'/contact-me'} title={'Contact me'} />
        </div>
      </div>
    </footer>
  );
}
