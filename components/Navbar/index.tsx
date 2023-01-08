import Link from "next/link";
import { Icon } from "@iconify/react";
import { Tooltip } from "@mui/material";
import { useRouter } from "next/router";

const IconLink = (props: { title: string; href: string; icon: string }) => {
  return (
    <Link
      className="hover:cursor-pointer "
      aria-label={props.title}
      href={props.href}
      target="_blank"
    >
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
      aria-label={props.text}
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
          href={
            "https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website:%20https://arevalolance.me"
          }
          icon={"eva:share-fill"}
        />
        <IconLink
          title={"DM me on Twitter"}
          href={
            "https://twitter.com/messages/compose?recipient_id=1562404850637639680&text=Hi!"
          }
          icon={"eva:message-square-fill"}
        />
        {/* <IconLink
          title={"Resume/CV"}
          href={"/resume"}
          icon={"mingcute:paper-fill"}
        /> */}
        <IconLink
          title={"Connect with me"}
          href={"https://linkedin.com/in/arevalolance"}
          icon={"eva:linkedin-fill"}
        />
        <IconLink title={"RSS Feed"} href={"/feed.xml"} icon={"bi:rss-fill"} />
      </div>
    </div>
  );
};

export default Navbar;
