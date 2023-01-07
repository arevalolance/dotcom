import { Inter } from "@next/font/google";
import Link from "next/link";
import { Icon } from "@iconify/react";

const LinkButton = (props: {
  label: string;
  link: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Link href={props.link} className="w-fit">
      <button
        onClick={props.onClick}
        className={`flex flex-row items-center justify-center
        gap-1 rounded-full
        border-4 border-border-button/50
        bg-background-surface px-3 py-1 text-white
        duration-150 hover:border-border-button active:border-gray-400
        ${props.className}`}
      >
        <Icon icon="eva:diagonal-arrow-right-up-fill" className="text-lg" />
        {props.label}
      </button>
    </Link>
  );
};

export default LinkButton;
