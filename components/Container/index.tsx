import Navbar from "components/Navbar";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";

const Container = (props) => {
  const router = useRouter();

  const { children, ...customMeta } = props;
  const meta = {
    title: "Lance Arevalo - Your friendly neighborhood developer.",
    description: `Lance Arevalo's personal website.`,
    image: "",
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
        className="my-10 flex w-full flex-col justify-center bg-[#171717]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {children}
        </motion.div>
      </main>
    </>
  );
};

export default Container;
