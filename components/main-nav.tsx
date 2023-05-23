import { NavItem } from '@/types/nav';
import { siteConfig } from '@/types/site-config';
import Image from 'next/image';
import Link from 'next/link';
import { MainLogo } from './ui/logo';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="container mx-auto flex justify-between items-center py-8 px-4 md:px-0">
      <div className="flex flex-row gap-4 items-center">
        <Link href="/">
          <MainLogo />
          {/* <span>{siteConfig.name}</span> */}
        </Link>
      </div>

      <button className="hidden md:block p-2 text-sm font-semibold rounded-md bg-gray-100 hover:border-black/20 transition-colors hover:ease-in duration-150 border-gray-300/7 drop-shadow-sm shadow-inner-[1px] border-[1px]">
        Contact me
      </button>

      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 space-x-4">
        {siteConfig.mainNav.map((item) => (
          <Link
            className={cn(
              'text-[#404040] hover:text-black hover:duration-150 ease-in font-medium'
            )}
            href={item.href}
            key={item.title}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <button className="block md:hidden p-2 text-sm rounded-md bg-gray-100 hover:border-black/20 transition-colors hover:ease-in duration-150 border-gray-300/7 drop-shadow-sm shadow-inner-[1px] border-[1px]">
        <Menu />
      </button>
    </div>
  );
}
