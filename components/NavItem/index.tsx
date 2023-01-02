import { Be_Vietnam_Pro } from "@next/font/google";
import Link from "next/link";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "500",
});

const NavItem = (props: { text: string; url: string }) => {
  return (
    <Link
      href={props.url}
      className="
    rounded-full border-[0.5px] border-transparent px-7
    py-[10px]
    text-gray-500
    hover:cursor-pointer
    hover:border-gray-300 hover:bg-gray-100
    hover:text-gray-900
    active:border-gray-400 active:bg-gray-200"
    >
      <span className={`${beVietnamPro.className}`}>{props.text}</span>
    </Link>
  );
};

export default NavItem;
