import Link from "next/link";
import { Icon } from "@iconify/react";
import { Tooltip } from "@mui/material";
import { useRouter } from "next/router";

const IconLink = (props: { title: string; href: string; icon: string }) => {
  return (
    <Link className="hover:cursor-pointer " href={props.href}>
      <Tooltip title={props.title}>
        <Icon
          className="h-[25px] w-[25px] text-text-primary"
          icon={props.icon}
        />
      </Tooltip>
    </Link>
  );
};

const NavItem = (props: { text: string; url: string; isActive: boolean }) => {
  return (
    <Link
      href={props.url}
      className={`
      hover:background-surface/50 rounded-full border-[0.5px] border-transparent
      bg-background-surface
      px-7
      py-[10px]
      text-text-primary hover:cursor-pointer
      hover:border-border-surface hover:bg-background-primary/30
      ${props.isActive ? "border-border-surface bg-background-primary" : ""}`}
    >
      <span>{props.text}</span>
    </Link>
  );
};

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="sticky top-[20px] z-10 my-10 mx-auto w-11/12 items-center justify-between md:visible md:static md:flex md:w-[760px] lg:w-[1000px]">
      <nav className="m-auto flex w-fit flex-row rounded-full border-[1px] border-border-surface bg-background-surface p-1 shadow-lg md:mx-0">
        <NavItem url={"/"} text={"Home"} isActive={router.asPath === "/"} />
        <NavItem
          url={"/about"}
          text={"About"}
          isActive={router.asPath === "/about"}
        />
        <NavItem
          url={"/blog"}
          text={"Blog"}
          isActive={router.asPath === "/blog"}
        />
      </nav>

      <div className="hidden flex-row gap-4 md:flex">
        <IconLink
          title={"Share to your friends"}
          href={""}
          icon={"eva:share-fill"}
        />
        <IconLink
          title={"DM me on Twitter"}
          href={""}
          icon={"eva:message-square-fill"}
        />
        <IconLink title={"Resume/CV"} href={""} icon={"mingcute:paper-fill"} />
        <IconLink
          title={"Connect with me"}
          href={""}
          icon={"eva:linkedin-fill"}
        />
      </div>
    </div>
  );
};

export default Navbar;
