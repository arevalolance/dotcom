"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export default function ContactModal() {
  const [message, setMessage] = useState<string>("")
  const [isModalOpen, openModal] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)

  let pathname = usePathname() || "/"
  if (pathname.includes("/blog/")) {
    pathname = "/blog"
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Ignore key presses with modifiers
      if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) {
        return
      }

      if ((event.key === "c" || event.key === "C") && pathname !== "/blog") {
        openModal(true)
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      openModal(false)
      setMessage("")
    }
  }, [pathname])

  return (
    <Dialog open={isModalOpen} onOpenChange={openModal}>
      <DialogTrigger asChild>
        <button className="border-gray-300/7 shadow-inner-[1px] hidden rounded-md border-[1px] bg-gray-100 p-2 text-sm font-semibold drop-shadow-sm transition-colors duration-150 hover:border-black/20 hover:ease-in md:block">
          Contact me
        </button>
      </DialogTrigger>
      <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            If you&apos;re interested in reaching out, write a message below.
            I&apos;ll get back to you as soon as I can.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <Input
                  id="email"
                  value="to: hi@arevalolance.com"
                  disabled
                  className="w-fit"
                />
              </div>

              <Textarea
                placeholder="How's it going?"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                autoFocus={false}
              />
            </div>
            <Link
              onClick={() => setSubmitted(true)}
              href={`mailto:hi@arevalolance.com?&subject=Let's chat!&body=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-gray-300/7 shadow-inner-[1px] hidden rounded-md border-[1px] bg-gray-100 p-2 text-center text-sm font-semibold drop-shadow-sm transition-colors duration-150 hover:border-black/20 hover:ease-in md:block"
            >
              Send
            </Link>
          </div>
        </div>

        <DialogFooter>
          <p className="group text-center text-xs italic text-gray-400">
            Clicking send opens your system default mail app. Otherwise, feel
            free to send me an email at{" "}
            <Link
              className="underline duration-150 ease-in group-hover:text-black"
              href={`mailto:hi@arevalolance.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              hi@arevalolance.com
            </Link>
            .
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
