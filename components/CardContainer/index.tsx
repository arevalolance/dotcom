import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react';
import styles from './CardContainer.module.css';

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
  grow?: boolean;
}) => {
  return (
    <div
      className={`drop-shadow-md hover:drop-shadow-xl rounded-3xl bg-[#F8F8F8] p-10 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default CardContainer;
