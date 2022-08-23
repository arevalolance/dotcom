import { Dispatch, SetStateAction, useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const MobileMenu = ({
  open,
  setOpen,
}: {
  open: Boolean;
  setOpen: Dispatch<SetStateAction<Boolean>>;
}) => {
  return (
    <nav
      className={`md:hidden fixed top-0 left-0 h-screen w-screen bg-[#121212] transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md flex flex-col justify-between z-50`}
    >
      <div className="flex flex-col">
        <div className="flex w-full justify-end my-5 px-5">
          <button onClick={() => setOpen(false)}>
            <Icon
              className="text-[32px] text-[#dbd7caee]"
              icon="bytesize:close"
            />
          </button>
        </div>
        <div className="flex flex-col">
          <Link href="/">
            <span
              onClick={() => setOpen((prevState) => !prevState)}
              className="text-[#dbd7caee] hover:cursor-pointer hover:underline font-space-grotesk text-[35px] ml-10"
            >
              home
            </span>
          </Link>
          <Link href="/resume">
            <span
              onClick={() => setOpen((prevState) => !prevState)}
              className="text-[#dbd7caee] hover:cursor-pointer hover:underline font-space-grotesk text-[35px] ml-10"
            >
              resume
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;
