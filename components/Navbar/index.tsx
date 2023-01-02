import Link from "next/link";
import NavItem from "components/NavItem";
import { Icon } from "@iconify/react";
import { Tooltip } from "@mui/material";

const IconLink = (props: { title: string; href: string; icon: string }) => {
  return (
    <Link className="hover:cursor-pointer " href={props.href}>
      <Tooltip title={props.title}>
        <Icon className="h-[25px] w-[25px] text-[#231F20]" icon={props.icon} />
      </Tooltip>
    </Link>
  );
};

const Navbar = () => {
  return (
    <div className="my-10 flex items-center justify-between">
      <nav className="my-auto flex w-fit flex-row rounded-full border-[0.5px] border-gray-100 bg-white p-1 shadow-lg">
        <NavItem url={"/"} text={"Home"} />
        <NavItem url={"/about"} text={"About"} />
        <NavItem url={"/blog"} text={"Blog"} />
      </nav>

      <div className="flex flex-row gap-4">
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
