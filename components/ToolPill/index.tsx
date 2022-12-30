import { Inter } from '@next/font/google';
import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

const inter = Inter({ subsets: ['latin'] });

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
      className={`flex items-center justify-center hover:cursor-pointer
      bg-[#F8F8F8] hover:bg-[#D9D9D9]
      rounded-md px-2 py-[3px] ${inter.className} ${
        props.isActive
          ? 'text-[#231F20] bg-[#D9D9D9]'
          : 'text-gray-500'
      } ${props.className}`}
    >
      <div
        className={`rounded-full min-h-[10px] min-w-[10px] mr-2 ${pillColor}`}
      />
      {props.label}
    </div>
  );
};

export default ToolPill;
