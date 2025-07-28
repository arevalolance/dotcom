import Image from "next/image"
import Link from "next/link"

export function MainLogo() {
  return (
    <Link href="/">
      <Image src="/static/logo.png" alt="logo" width={50} height={50} />
    </Link>
  )
}
