import { Dispatch, SetStateAction, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const MobileMenu = ({
  open,
  setOpen,
  time,
}: {
  open: Boolean;
  setOpen: Dispatch<SetStateAction<Boolean>>;
  time: String;
}) => {
  useEffect(() => {
    console.log('opened');
  }, [open]);

  return (
    <nav
      className={`md:hidden absolute top-0 left-0 h-screen w-screen bg-black transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md flex flex-col justify-between z-50`}
    >
      <div className="flex flex-col">
        <div className="flex w-full justify-end my-5 px-5">
          <button onClick={() => setOpen(false)}>
            <Icon className="text-[32px]" icon="bytesize:close" />
          </button>
        </div>
        <div className="flex flex-col">
          <Link href="/">
            <span className="hover:cursor-pointer hover:underline font-space-grotesk text-[35px] ml-10">
              home
            </span>
          </Link>

          <Link href="/blog">
            <span className="hover:cursor-pointer hover:underline font-space-grotesk text-[35px] ml-10">
              blog
            </span>
          </Link>

          <Link href="/resume">
            <span className="hover:cursor-pointer hover:underline font-space-grotesk text-[35px] ml-10">
              resume
            </span>
          </Link>
        </div>
      </div>
      <span className="my-10 font-space-grotesk text-center">
        {time}
      </span>
    </nav>
  );
};

export default MobileMenu;
