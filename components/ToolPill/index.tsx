import { Inter } from "@next/font/google";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";

const inter = Inter({ subsets: ["latin"] });

const ToolPill = (props: {
  onClick: Dispatch<SetStateAction<string>>;
  label: string;
  className?: string;
  isActive: boolean;
  color: string;
}) => {
  let pillColor = props.color;

  return (
    <div
      onClick={() => props.onClick(props.label)}
      className={`flex items-center justify-center rounded-md
      bg-[#F8F8F8] px-2
      py-[3px] hover:cursor-pointer hover:bg-[#D9D9D9] ${inter.className} ${
        props.isActive ? "bg-[#D9D9D9] text-[#231F20]" : "text-gray-500"
      } ${props.className}`}
    >
      <div
        className={`mr-2 min-h-[10px] min-w-[10px] rounded-full ${pillColor}`}
      />
      {props.label}
    </div>
  );
};

export default ToolPill;
