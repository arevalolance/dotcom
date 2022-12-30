import { Html, Head, Main, NextScript } from 'next/document';
import Navbar from '../components/Navbar';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="w-[1250px] mx-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
