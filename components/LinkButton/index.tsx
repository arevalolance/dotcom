import { Inter } from '@next/font/google';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const inter = Inter({ subsets: ['latin'], weight: '500' });

const LinkButton = (props: {
  label: string;
  link: string;
  type: 'twitter' | 'mail' | 'github' | 'linkedin' | 'default';
  icon?: string;
}) => {
  let btnType;
  switch (props.type) {
    case 'twitter':
      btnType = 'btn-twitter';
      break;
    case 'mail':
      btnType = 'btn-mail';
      break;
    case 'github':
      btnType = 'btn-github';
      break;
    case 'linkedin':
      btnType = 'btn-linkedin';
      break;
    default:
      btnType = 'btn-default';
      break;
  }

  return (
    <Link href={props.link}>
      <button
        className={`${inter.className} ${btnType} flex flex-row justify-center items-center text-gray-700`}
      >
        {props.label}
        {props.icon && (
          <Icon
            className="text-gray-700 text-[20px]"
            icon={props.icon}
          />
        )}
      </button>
    </Link>
  );
};

export default LinkButton;
