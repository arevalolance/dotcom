import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto mb-10 flex w-full flex-col items-center justify-center border-t-[1px] border-border-surface py-4 sm:w-11/12 md:w-[768px] lg:w-[1000px]">
      <div className="mx-auto flex w-[250px] flex-row justify-between sm:w-[390px]">
        <div className="flex flex-col gap-2">
          <Link
            className="text-text-secondary hover:underline"
            href={"https://github.com/arevalolance"}
          >
            Github
          </Link>
          <Link
            className="text-text-secondary hover:underline"
            href={"https://twitter.com/arevalolance"}
          >
            Twitter
          </Link>
          <Link
            className="text-text-secondary hover:underline"
            href={"https://www.linkedin.com/in/arevalolance/"}
          >
            LinkedIn
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            className="text-text-secondary hover:underline"
            href={"https://www.linkedin.com/in/arevalolance/"}
          >
            Home
          </Link>
          <Link
            className="text-text-secondary hover:underline"
            href={"https://www.linkedin.com/in/arevalolance/"}
          >
            About
          </Link>
          <Link
            className="text-text-secondary hover:underline"
            href={"https://www.linkedin.com/in/arevalolance/"}
          >
            Blogs
          </Link>
          <Link
            className="text-text-secondary hover:underline"
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
