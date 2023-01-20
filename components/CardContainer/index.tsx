import { cn } from "lib/utils";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useEffect,
} from "react";

const CardContainer = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "border-[1px] border-border-surface",
        "bg-background-surface",
        "p-10",
        "rounded-3xl",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default CardContainer;
