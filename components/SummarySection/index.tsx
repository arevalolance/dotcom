import Link from "next/link";
import Image from "next/image";

const SummarySection = () => {
  return (
    <div className="flex w-11/12 flex-col-reverse items-center gap-x-4 md:flex-row md:justify-between lg:w-[1000px]">
      <div className="flex flex-col text-text-primary">
        <span className="font-tanker text-4xl">👋 Hi, I&apos;m</span>
        <h1 className="font-tanker text-6xl md:text-9xl">LANCE AREVALO</h1>
        <p className="font-tanker text-lg">
          I study computer science,{" "}
          <Link
            href="https://github.com/arevalolance"
            className="underline hover:text-text-primary/75"
          >
            build softwares
          </Link>
          , and write{" "}
          <Link className="underline hover:text-text-primary/75" href="/blogs">
            blogs
          </Link>
          .
        </p>
      </div>
      <div className="h-[250px] w-[250px] shrink-0 grow-0 overflow-hidden rounded-full">
        <Image
          src="/images/PFP.webp"
          width={250}
          height={250}
          alt="Lance Arevalo"
          priority
        />
      </div>
    </div>
  );
};

export default SummarySection;
