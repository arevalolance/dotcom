import { Balancer } from 'react-wrap-balancer';

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="my-40">
        <div className="max-w-[740px]">
          <div className="rounded-full mx-auto md:mx-0 bg-gray-100 hover:bg-gray-200 hover:duration-150 ease-in w-fit px-3 py-1 text-black font-semibold text-xs">
            Nice to meet you
          </div>
          <h1 className="bg-gradient-to-r from-black to-stone-500 text-center md:text-left bg-clip-text font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-6xl md:leading-[5rem]">
            <Balancer>
              I&apos;m Lance. I&apos;m a software developer.
            </Balancer>
          </h1>
          <p className="max-w-[600px] mt-4 text-center md:text-left">
            On this site we explore different tools and technologies I
            find amusing that I wish I could share with you.
          </p>
          <div className="mt-6 hidden md:block">
            <span className="font-bold">
              Press C to connect with me
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
