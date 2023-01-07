import { Dispatch, SetStateAction } from "react";

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
      className={`flex w-fit flex-row items-center rounded-md px-2 hover:cursor-pointer  hover:bg-[#D9D9D9] ${
        props.isActive ? "bg-[#D9D9D9] text-[#231F20]" : "text-gray-500"
      } ${props.className}`}
    >
      <div className={`mr-2 h-[10px] w-[10px] rounded-full ${pillColor}`} />
      <span>{props.label}</span>
    </div>
  );
};

export default ToolPill;
