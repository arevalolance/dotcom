import Link from 'next/link';
import NavItem from '../NavItem';
import { Icon } from '@iconify/react';
import { Tooltip } from '@mui/material';

const IconLink = (props: {
  title: string;
  href: string;
  icon: string;
}) => {
  return (
    <Link className="hover:cursor-pointer " href={props.href}>
      <Tooltip title={props.title}>
        <Icon
          className="w-[25px] h-[25px] text-[#231F20]"
          icon={props.icon}
        />
      </Tooltip>
    </Link>
  );
};

const Navbar = () => {
  return (
    <div className="flex items-center my-10 justify-between">
      <nav className="flex flex-row border-gray-100 border-[0.5px] rounded-full my-auto p-1 w-fit shadow-lg bg-white">
        <NavItem url={'/'} text={'Home'} />
        <NavItem url={'/about'} text={'About'} />
        <NavItem url={'/blog'} text={'Blog'} />
      </nav>

      <div className="flex flex-row gap-4">
        <IconLink
          title={'Share to your friends'}
          href={''}
          icon={'eva:share-fill'}
        />
        <IconLink
          title={'DM me on Twitter'}
          href={''}
          icon={'eva:message-square-fill'}
        />
        <IconLink
          title={'Resume/CV'}
          href={''}
          icon={'mingcute:paper-fill'}
        />
        <IconLink
          title={'Connect with me'}
          href={''}
          icon={'eva:linkedin-fill'}
        />
      </div>
    </div>
  );
};

export default Navbar;
