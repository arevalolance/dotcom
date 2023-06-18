import Image from "next/image"

export default function Home() {
  return (
    <main className="container p-0 md:px-6 2xl:p-0">
      <div className="my-40 flex w-full flex-col-reverse items-center justify-center gap-y-14 md:justify-between lg:flex-row">
        <div className="max-w-[900px]">
          <div className="mx-auto w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-black ease-in hover:bg-gray-200 hover:duration-150 md:mx-0">
            Hello there
          </div>
          <h1 className="font-display bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-left md:text-7xl md:leading-[5rem]">
            I&apos;m Lance. I&apos;m a software developer.
          </h1>
          <p className="mt-4 max-w-[600px] text-center md:text-left">
            On this site we explore different tools and technologies I find
            amusing that I wish I could share with you.
          </p>
          <div className="mt-6 hidden md:block">
            <span className="font-bold">
              Press{" "}
              <span className="rounded-sm bg-gradient-to-b from-black to-stone-700 p-[5px] text-white">
                C
              </span>{" "}
              to connect with me
            </span>
          </div>
        </div>
        <div className="w-fit">
          <Image className="hidden rounded-full bg-gradient-to-br from-stone-800 to-black/40 shadow-md lg:block" src={"/static/images/PFP_BNW.png"} alt={"Hero Image"} width={400} height={400} />
          <Image className="block rounded-full bg-gradient-to-br from-stone-800 to-black/40 shadow-md md:hidden " src={"/static/images/PFP_BNW.png"} alt={"Hero Image"} width={200} height={200} />
        </div>
      </div>
    </main>
  )
}
