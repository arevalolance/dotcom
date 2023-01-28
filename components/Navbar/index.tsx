import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import * as Tooltip from "@radix-ui/react-tooltip";
import { cn } from "lib/utils";

const IconLink = (props: { title: string; href: string; icon: string }) => {
  return (
    <Link
      className="hover:cursor-pointer "
      aria-label={props.title}
      href={props.href}
      target="_blank"
    >
      {" "}
      <Tooltip.Provider delayDuration={50}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Icon
              className={cn(
                "h-[25px] w-[25px]",
                "text-text-primary hover:text-text-secondary active:text-text-primary"
              )}
              icon={props.icon}
            />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className={cn(
                "text-text-primary",
                "bg-background-surface",
                "p-2",
                "rounded-md",
                "text-sm",
                "animate-in fade-in-25 slide-in-from-top-2"
              )}
              sideOffset={15}
              side={"bottom"}
            >
              {props.title}
              <Tooltip.Arrow className="fill-background-surface" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </Link>
  );
};

const NavItem = (props: { text: string; url: string; isActive: boolean }) => {
  return (
    <Link
      href={props.url}
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={`
      hover:background-surface/50 rounded-full border-[0.5px]
      border-transparent
      bg-background-surface
      px-4
      py-[10px]
      text-text-primary
      hover:cursor-pointer
      hover:border-border-surface hover:bg-background-primary/30
      mobile-m:px-7
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
