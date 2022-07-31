import { Icon } from '@iconify/react';
import { FC } from 'react';

interface BulletProps {
  string: string;
  icon?: string | undefined;
}

const Bullet: FC<BulletProps> = ({ string, icon }: BulletProps) => {
  return (
    <li className="flex flex-row items-center font-space-grotesk text-[14px]">
      {icon ? (
        <span className="text-[10px]">
          <Icon icon={icon} />
        </span>
      ) : null}
      <span className="ml-5">{string}</span>
    </li>
  );
};

export default Bullet;
