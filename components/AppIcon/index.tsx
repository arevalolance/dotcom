import Image from 'next/image';

const AppIcon = (props: { iconSource: string }) => {
  return (
    <div
      className="flex p-[5px]
    border-[5px] border-transparent active:border-[#6D4AFF] hover:border-[#B7B5BB]
    justify-center items-center
    w-[90px] h-[90px]
    rounded-lg
    hover:cursor-pointer"
    >
      <Image
        className="bg-gray-300 rounded-md"
        src={props.iconSource}
        alt={''}
        width={80}
        height={80}
        priority
      />
    </div>
  );
};

export default AppIcon;
