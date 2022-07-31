import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import MobileMenu from '../MobileMenu';
import useTime from '../../hooks/useTime';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const time = useTime();
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <>
      <header className="w-full h-[100px] flex flex-row-reverse md:flex-row justify-between items-center sticky top-0 bg-[#0D0D0D] z-10">
        <span className="label">{time}</span>

        <nav className="hidden md:flex md:flex-row">
          <Link href="/">
            <span className="label hover:cursor-pointer hover:underline">
              home
            </span>
          </Link>
          {/* <Link href="/blogs">
            <span className="label hover:cursor-pointer hover:underline">
              blog
            </span>
          </Link>
          <Link href="/resume">
            <span className="label hover:cursor-pointer hover:underline">
              resume
            </span>
          </Link> */}
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden h-[35px] w-[35px] shadow-md"
        >
          <Icon className="text-[35px]" icon="charm:menu-hamburger" />
        </button>
      </header>
      <MobileMenu open={open} setOpen={setOpen} time={time} />
    </>
  );
};

export default Navbar;
