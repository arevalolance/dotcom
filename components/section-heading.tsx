import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function SectionHeading({
  left,
  right,
  link,
}: {
  left: string | number
  right: string
  link?: string
}) {
  return (
    <div className="flex flex-row items-center gap-2 ">
      <span className="whitespace-nowrap break-keep">{left}</span>
      <hr className="h-[1px] w-full border-t-[1px] border-dotted border-black" />
      {link ? (
        <Link
          className="group flex flex-row items-center gap-[1px] text-right hover:underline sm:whitespace-nowrap"
          href={link}
          target="_blank"
        >
          {right}
          <ArrowUpRight className="hidden h-3 w-3 sm:block" />
        </Link>
      ) : (
        <span className="whitespace-nowrap break-keep">{right}</span>
      )}
    </div>
  )
}
