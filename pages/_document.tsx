import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "components/Navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="mx-auto w-[1250px]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
