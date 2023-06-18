"use client"

import { useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

import { AspectRatio } from "./ui/aspect-ratio"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

interface ImageCarouselProps {
  title: string
  description: string
  images: string[]
}

export default function ImageCarousel({
  title,
  description,
  images,
}: ImageCarouselProps) {
  const [currImageIndex, setCurrImageIndex] = useState<number>(0)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          className="cursor-pointer rounded-md bg-white/30 object-cover shadow-sm duration-150 ease-in hover:shadow-lg hover:backdrop-grayscale-0"
          src={images[0]}
          alt={"Picture"}
          width={232}
          height={149}
        />
      </DialogTrigger>
      <DialogContent className="flex flex-col md:min-w-[70%]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div className="relative">
            <div className="absolute flex h-full w-full flex-row">
              <div
                onClick={() =>
                  setCurrImageIndex((prev) =>
                    currImageIndex === 0 ? images.length - 1 : prev - 1
                  )
                }
                className={cn("z-20 h-full w-1/2", "leftCursor")}
              />
              <div
                onClick={() =>
                  setCurrImageIndex((prev) =>
                    currImageIndex === images.length - 1 ? 0 : prev + 1
                  )
                }
                className={cn("z-20 h-full w-1/2", "rightCursor")}
              />
            </div>
            <AspectRatio className="z-0" ratio={16 / 9}>
              <Image
                src={images[currImageIndex]}
                alt={"Project Photo"}
                fill
                className="rounded-md object-contain"
              />
            </AspectRatio>
          </div>
          <div className="mx-auto h-fit w-fit rounded-full border-[1px] border-gray-200 px-3 py-1 text-sm font-semibold shadow-sm">
            {currImageIndex + 1} / {images.length}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
