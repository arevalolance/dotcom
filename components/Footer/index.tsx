import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center my-10 hover:text-white hover:cursor-pointer">
      <Link href="https://github.com/arevalolance" target="_blank">
        <p className="text-sm font-space-grotesk ">Lance Arevalo</p>
      </Link>
      <Link href="https://github.com/arevalolance" target="_blank">
        <p className="text-sm font-space-grotesk">
          All rights reserved &copy; 2022
        </p>
      </Link>
    </footer>
  );
};

export default Footer;
