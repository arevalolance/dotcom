import Image from "next/image"

export default async function Home() {
  return (
    <section>
      <div className="relative group cursor-pointer">
        {/*
        <Image
          src={"/static/images/banner.jpeg"}
          width={2000}
          height={500}
          alt="banner"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-100 group-hover:opacity-0 transition-opacity duration-300 rounded-lg flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold mb-2">Currently at my office.</h2>
            <p className="text-lg">Moving shapes until they make sense.</p>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">listening to some good music.</span>
            </div>
          </div>
        </div>
        */}

      </div>

      <div>
        <h1 className="text-4xl font-bold">Hello World</h1>
      </div>
    </section>
  )
}
