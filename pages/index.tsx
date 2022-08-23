import { ReactElement } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";
import { Icon } from "@iconify/react";
import Typewriter from "typewriter-effect";
import Bullet from "../components/Bullet";
import Link from "next/link";
import Head from "next/head";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home - Lance Arevalo</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <section className="h-[85vh] flex flex-col items-center justify-between">
        <div className="flex flex-col items-center mt-20">
          <Image
            src={"/images/profile.png"}
            alt="Lance Arevalo"
            height={254}
            width={255}
            layout="fixed"
          />
          <span className="min-w-[335px] font-space-grotesk text-[14px]">
            Hi my name is
          </span>
          <div className="min-w-[370px] sm:max-w-[550px] flex flex-col">
            <span className="font-space-grotesk font-bold text-[50px] sm:text-[70px] leading-none text-center underline">
              Lance Arevalo
            </span>
            <span className="font-space-grotesk text-[15px] text-center">
              <Typewriter
                options={{
                  strings: [
                    "a software developer",
                    "INTP-T",
                    "design hobbyist",
                    "gamer",
                    "full-stack developer",
                    "music enjoyer",
                    "pokemon trainer",
                    "cringe kid",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <span className="font-space-grotesk italic text-[10px] text-center text-[#C0C0C0]">{`web-{dev,design}`}</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <span className="font-space-grotesk text-[18px]">learn more</span>
          <span className="text-[20px]">
            <Icon icon="bi:chevron-bar-down" />
          </span>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row items-center m-auto h-[100vh]">
        <div className="hidden sm:flex flex-col justify-between min-h-[300px]">
          <Icon className="text-[40px]" icon="cib:typescript" />
          <Icon className="text-[40px]" icon="akar-icons:javascript-fill" />
          <Icon className="text-[40px]" icon="file-icons:go" />
        </div>

        <div className="flex flex-col justify-center font-space-grotesk sm:mx-16">
          <div className="flex flex-col">
            <span className="text-[24px]">about</span>
            <p className="text-sm mt-5">
              My passion for building helpful and exciting technology for the
              people brought me to Saint Louis University, where I study B.S.
              Computer Science. I&apos;m a third-year computer science student
              and future web developer with experience in full-stack development
              and front-end design.
            </p>
            <br />
            <p className="text-sm mt-5">
              Currently, I focus on back-end web development, building
              API&apos;s for my projects. This site is still a work in progress
              and will be a place to see how I&apos;ll grow as a developer.
            </p>

            <p className="text-sm mt-5 ">
              Here are some tools I&apos;ve been using recently:
            </p>

            <ul className="flex flex-col flex-wrap h-[100px]">
              <Bullet
                string={"TypeScript/JavaScript"}
                icon={"akar-icons:gear"}
              />
              <Bullet string={"Node.js"} icon={"akar-icons:gear"} />
              <Bullet string={"Go"} icon={"akar-icons:gear"} />
              <Bullet string={"Java"} icon={"akar-icons:gear"} />
              <Bullet string={"Rust"} icon={"akar-icons:gear"} />
              <Bullet string={"Python"} icon={"akar-icons:gear"} />
              <Bullet string={"Git"} icon={"akar-icons:gear"} />
              <Bullet string={"Linux"} icon={"akar-icons:gear"} />
            </ul>

            <div className="mt-10">
              <span className="text-[24px]">contact</span>
              <p className="text-[14px]">
                Feel free to reach me at{" "}
                <a
                  className="underline"
                  href="https://linkedin.com/in/arevalolance"
                >
                  linkedin.com/in/lancearevalo
                </a>
                <br />
                <br />
                You can also find me at{" "}
                <span className="underline">
                  <Link href="https://github.com/arevalolance">github</Link>
                </span>{" "}
                where you can check out some of my personal side projects.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex flex-col justify-between min-h-[300px]">
          <Icon className="text-[40px]" icon="akar-icons:python-fill" />
          <Icon className="text-[40px]" icon="bxl:java" />
          <Icon className="text-[40px]" icon="cib:rust" />
        </div>
      </section>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout type={"home"}>{page}</Layout>;
};

export default Home;
