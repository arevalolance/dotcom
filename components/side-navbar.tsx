import Link from "next/link"

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export default function SideNavbar() {
  return (
    <nav className="flex flex-col gap-4 p-4">
      <div className="flex flex-col items-end gap-1">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
