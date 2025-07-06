"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

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
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <div className="w-full flex flex-col gap-3 lg:sticky lg:bottom-4">
      <div className="relative">
        <Carousel
          plugins={[autoplay.current]}
          className="w-full"
          opts={{
            loop: true,
            dragFree: true,
            containScroll: false,
          }}
        >
          <CarouselContent className="flex -ml-2">
            {companies.map((company, index) => (
              <CarouselItem key={index} className="basis-auto">
                <Link
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src={company.src}
                    alt={company.alt}
                    width={100}
                    height={24}
                    className="h-6 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
      <p className="text-xs text-muted-foreground">
        Companies I've had the privilege to work with and contribute to.
      </p>
    </div>
  )
}
