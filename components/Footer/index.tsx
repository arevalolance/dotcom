import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto mb-10 flex w-[390px] flex-col items-center justify-center border-t-[1px] border-border-surface py-4 md:w-[768px] lg:w-[1000px]">
      <div className="mx-auto flex w-[390px] flex-row justify-between">
        <div className="flex flex-col gap-2">
          <Link
            className="text-md text-text-secondary hover:underline"
            href={"https://github.com/arevalolance"}
          >
            Github
          </Link>
          <Link
            className="text-md text-text-secondary hover:underline"
            href={"https://twitter.com/arevalolance"}
          >
            Twitter
          </Link>
          <Link
            className="text-md text-text-secondary hover:underline"
            href={"https://www.linkedin.com/in/arevalolance/"}
          >
            LinkedIn
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            className="text-md text-text-secondary hover:underline"
            href={"https://www.linkedin.com/in/arevalolance/"}
          >
            Home
          </Link>
          <Link
            className="text-md text-text-secondary hover:underline"
            href={"https://www.linkedin.com/in/arevalolance/"}
          >
            About
          </Link>
          <Link
            className="text-md text-text-secondary hover:underline"
            href={"https://www.linkedin.com/in/arevalolance/"}
          >
            Blogs
          </Link>
          <Link
            className="text-md text-text-secondary hover:underline"
            href={"https://www.linkedin.com/in/arevalolance/"}
          >
            RSS
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
