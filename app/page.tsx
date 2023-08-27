import Image from "next/image"
import { Balancer } from "react-wrap-balancer"

import useDeviceType from "@/lib/hook/useDeviceType"
import PressConnectLabel from "@/components/press-connect-label"

export default async function Home() {
  return (
    <main className="container p-0 md:px-6 2xl:p-0">
      <div className="my-40 flex w-full flex-col-reverse items-center justify-center gap-x-10 gap-y-14 px-4 lg:flex-row lg:justify-between">
        <div className="max-w-[900px] duration-700 animate-in fade-in">
          <div className="mx-auto flex w-fit flex-row items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-black ease-in hover:bg-gray-200 hover:duration-150 lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>

            Available for work
          </div>
          <h1 className="font-display z-10 mt-3 bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent md:text-6xl md:leading-[5rem] lg:text-left">
            <Balancer ratio={0.4}>
              Crafting Code and Design for the Web
            </Balancer>
          </h1>
          <p className="mx-auto mt-4 max-w-[600px] text-center text-gray-500 lg:mx-0 lg:text-left">
            <Balancer ratio={0.4}>
              I bring ideas to life through innovative software solutions.
              Currently, I&apos;m actively engaged in expanding my skill set and
              tackling exciting development projects.
            </Balancer>
          </p>
          <PressConnectLabel />
        </div>
        <div className="w-fit duration-700 animate-in fade-in">
          <Image
            className="hidden rounded-full bg-gradient-to-br from-stone-800 to-black/40 shadow-md lg:block"
            src={"/static/images/hero.webp"}
            alt={"Hero Image"}
            width={400}
            height={400}
          />
          <Image
            priority
            className="block rounded-full bg-gradient-to-br from-stone-800 to-black/40 shadow-md lg:hidden "
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
