"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { Marquee } from "@/components/magicui/marquee"
import GuestbookGrid from "@/components/guestbook-grid"

const companies = [
  { src: "/work/cobi.svg", alt: "Cobi", url: "https://hellocobi.com" },
  {
    src: "/work/spring-studios.svg",
    alt: "Spring Studios",
    url: "https://springstudios.io",
  },
  { src: "/work/fgi.svg", alt: "FGI", url: "https://focusglobalinc.com" },
  {
    src: "/work/external/wrestlingiq.svg",
    alt: "WrestlingIQ",
    url: "https://wrestlingiq.com",
  },
  {
    src: "/work/external/openfarming.svg",
    alt: "OpenFarming",
    url: "https://openfarming.earth",
  },
  {
    src: "/work/external/cohire.svg",
    alt: "CoHire",
    url: "https://getcohire.io",
  },
]

export default function BottomProfile() {
  return (
    <div className="w-full flex flex-col gap-3 lg:sticky lg:bottom-4">
      <GuestbookGrid />
      <div className="relative">
        <div className="[mask-image:linear-gradient(to_right,transparent,black_48px,black_calc(100%-48px),transparent)]">
          <Marquee pauseOnHover className="[--duration:20s]">
            {companies.map((company, index) => (
              <Link
                key={index}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-4"
              >
                <Image
                  src={company.src}
                  alt={company.alt}
                  width={100}
                  height={24}
                  className="h-6 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
                />
              </Link>
            ))}
          </Marquee>
        </div>
      </div>
      <p className="text-xs text-muted-foreground text-center">
        Companies I've had the privilege to work with and contribute to.
      </p>
    </div>
  )
}
