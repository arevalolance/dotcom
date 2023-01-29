import "styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { Analytics } from "@vercel/analytics/react";

const tanker = localFont({
  src: "../public/fonts/Tanker-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-chubbo",
  display: "swap",
});

const chubbo = localFont({
  src: "../public/fonts/Chubbo-Variable.woff2",
  weight: "200 700",
  style: "normal",
  variable: "--font-chubbo",
  display: "swap",
});

const supreme = localFont({
  src: "../public/fonts/Supreme-Variable.woff2",
  weight: "100 800",
  style: "normal",
  variable: "--font-supreme",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-chubbo: ${chubbo.style.fontFamily};
            --font-tanker: ${tanker.style.fontFamily};
            --font-supreme: ${supreme.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
