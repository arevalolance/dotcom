'use client'

import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter();

  return <div className="container mx-auto my-60 text-center">
    <span className="text-6xl">💀</span>
    <br />
    <br />
    <span className="text-xl font-medium">Oh no, something went wrong... </span>
    <br />
    <span className="text-xl font-medium">Just kidding, you went to a non-existent page kiddo.</span>

    <button onClick={() => router.push("/")} className="border-gray-300/7 shadow-inner-[1px] mx-auto my-6 hidden rounded-md border-[1px] bg-gray-100 p-2 text-sm font-semibold drop-shadow-sm transition-colors duration-150 hover:border-black/20 hover:ease-in md:block">
      Go back home
    </button>
  </div>
}