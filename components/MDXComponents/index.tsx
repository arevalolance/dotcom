import Link from "next/link";
import Image from "next/image";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props) {
  return (
    <div className="my-8 flex rounded-lg bg-gray-800 p-4">
      <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
      <div className="callout w-full text-white">{props.children}</div>
    </div>
  );
}

const Conversation = (props) => {
  return (
    <div className="flex flex-row items-center gap-x-4 rounded-md bg-background-surface p-2">
      <div className="h-[50px] shrink-0 overflow-hidden rounded-full">
        <Image
          src={`/static/characters/${props.type}.png`}
          alt={`${props.type} character`}
          height={50}
          width={50}
        />
      </div>
      <div className="italic text-text-secondary">{props.children}</div>
    </div>
  );
};

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  Conversation,
};

export default MDXComponents;
