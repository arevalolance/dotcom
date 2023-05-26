export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="my-40">
        <div className="max-w-[740px]">
          <div className="mx-auto w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-black ease-in hover:bg-gray-200 hover:duration-150 md:mx-0">
            Nice to meet you
          </div>
          <h1 className="font-display bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-left md:text-7xl md:leading-[5rem]">
            I&apos;m Lance. I&apos;m a software developer.
          </h1>
          <p className="mt-4 max-w-[600px] text-center md:text-left">
            On this site we explore different tools and technologies I find
            amusing that I wish I could share with you.
          </p>
          <div className="mt-6 hidden md:block">
            <span className="font-bold">Press C to connect with me</span>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  )
}
