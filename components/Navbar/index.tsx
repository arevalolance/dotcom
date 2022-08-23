import Link from "next/link";
import { useState, useEffect } from "react";
import MobileMenu from "../MobileMenu";
import { Icon } from "@iconify/react";
import Clock from "react-live-clock";

const Navbar = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const [loadClock, setLoadClock] = useState<Boolean>(false);

  useEffect(() => {
    setLoadClock(true);
  }, [loadClock]);

  return (
    <>
      <header className="w-full max-w-[1280px] h-[100px] mx-auto flex flex-row-reverse md:flex-row justify-between items-center sticky top-0 z-10 transition-opacity delay-500">
        <div className="hover:text-white hover:cursor-pointer">
          {loadClock ? (
            <Clock
              className="text-sm font-space-grotesk"
              format={"hh:mm:ss A"}
              ticking={true}
              timezone={"Asia/Manila"}
            />
          ) : null}
          <span className="ml-2 font-space-grotesk text-sm">Luzon, PH </span>
        </div>
        <nav className="hidden md:flex md:flex-row">
          <Link href="/">
            <span className="text-sm font-space-grotesk hover:cursor-pointer hover:text-white hover:underline mr-5">
              home
            </span>
          </Link>
          {/* <Link href="/blogs">
            <span className="text-sm font-space-grotesk hover:cursor-pointer hover:underline">
              blog
            </span>
          </Link>*/}
          <Link href="/resume">
            <span className="text-sm font-space-grotesk hover:cursor-pointer hover:text-white hover:underline">
              resume
            </span>
          </Link>
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden h-[35px] w-[35px] shadow-md"
        >
          <Icon className="text-[35px]" icon="charm:menu-hamburger" />
        </button>
      </header>
      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
