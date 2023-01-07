import { Inter } from "@next/font/google";

interface CardHeaderProps {
  title: string;
  desc?: string;
  className?: string;
  size?: string;
}

const CardHeader = (props: CardHeaderProps) => {
  return (
    <div className={`flex items-center ${props.className}`}>
      <p className={`${props.size ? props.size : "text-lg"} font-supreme`}>
        <span className="font-chubbo text-xl font-bold text-black">
          {props.title}
        </span>
        {props.desc ? `—${props.desc}` : null}
      </p>
    </div>
  );
};

export default CardHeader;
