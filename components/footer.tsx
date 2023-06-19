import Link from "next/link"
import { Github, Twitter } from "lucide-react"

interface FooterItem {
  link: string
  title: string
  pop?: boolean
}

function FooterItem({ link, title, pop }: FooterItem) {
  return (
    <Link
      className="text-sm text-[#404040] hover:text-black hover:underline"
      href={link}
      target={pop ? "_blank" : ""}
    >
      {title}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="container mx-auto my-4 flex flex-col items-center gap-y-10 p-4 md:flex-row md:justify-between md:gap-0 md:py-0 2xl:px-0">
      <div className="flex flex-col items-center gap-y-2 md:items-start">
        <div className="flex flex-row gap-x-2">
          <Github />
          <Twitter />
        </div>
        <span className="text-sm font-medium text-black">
          © 2023 arevalolance.com
        </span>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-y-2">
          <span className="text-black/50">Learn more</span>
          <FooterItem link={"/about"} title={"About"} />
          <FooterItem link={"/work"} title={"Work"} />
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="text-black/50">Stay connected</span>
          <FooterItem link={"/blog"} title={"Blog"} />
          <FooterItem
            link={"https://github.com/arevalolance"}
            title={"GitHub"}
            pop={true}
          />
          <FooterItem
            link={"https://linkedin.com/in/arevalolance"}
            title={"LinkedIn"}
            pop={true}
          />
          <FooterItem
            link={"https:///arevalolance.com/feed.xml"}
            title={"RSS"}
            pop={true}
          />
        </div>
      </div>
    </footer>
  )
}
