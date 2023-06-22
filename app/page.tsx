import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  return (
    <main className="container p-0 md:px-6 2xl:p-0">
      <div className="my-40 flex w-full flex-col-reverse items-center justify-center gap-y-14 md:justify-between lg:flex-row">
        <div className="max-w-[900px]">
          <div className="mx-auto w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-black ease-in hover:bg-gray-200 hover:duration-150 md:mx-0">
            Hey there, I&apos;m Lance
          </div>
          <h1 className="font-display mt-3 bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-left md:text-7xl md:leading-[5rem]">
            Crafting Code and Design for the Web
          </h1>
          <p className="mt-4 max-w-[600px] text-center text-gray-500 md:text-left">
            I bring ideas to life through innovative software solutions.
            Currently, I&apos;m actively engaged in expanding my skill set and
            tackling exciting development projects.
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
          <Image
            className="hidden rounded-full bg-gradient-to-br from-stone-800 to-black/40 shadow-md lg:block"
            src={"/static/images/hero.webp"}
            alt={"Hero Image"}
            width={400}
            height={400}
          />
          <Image
            priority
            className="block rounded-full bg-gradient-to-br from-stone-800 to-black/40 shadow-md md:hidden "
            src={"/static/images/hero.webp"}
            alt={"Hero Image"}
            width={200}
            height={200}
          />
        </div>
      </div>
    </main>
  )
}
