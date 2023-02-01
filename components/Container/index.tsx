import Divider from "components/Divider";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Subscribe from "components/Subscribe";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

const Container = (props) => {
  const router = useRouter();

  const { children, ...customMeta } = props;
  const meta = {
    title: "Lance Arevalo - Your friendly neighborhood developer.",
    description: `Learn more about my journey as a developer. I write about various topics, including technology, business, and self-development. I'm based in the Philippines, and specialize in React and Typescript development.`,
    image: "https://arevalolance.me/static/images/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://arevalolance.me${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://arevalolance.me${router.asPath}`}
        />
        <link href="https://github.com/arevalolance" rel="me" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lance Arevalo" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arevalolance" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar />
      <main
        id="skip"
        className="mb-10 flex w-full flex-col justify-center bg-[#171717]"
      >
        {children}
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Container;
