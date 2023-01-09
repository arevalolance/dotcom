import CardContainer from "components/CardContainer";
import Divider from "components/Divider";
import MailCard from "components/MailCard";
import { about } from "lib/info";
import Container from "components/Container";

const About = () => {
  return (
    <Container title="About - Lance Arevalo">
      <div className="mobile-m:[w-375px] mx-auto flex w-[280px] flex-wrap justify-center gap-4 mobile-s:w-[320px] mobile:w-[390px] md:w-[768px] lg:w-[1000px]">
        <div className="flex w-11/12 md:w-full">
          <CardContainer className="w-full">
            <h1 className="font-chubbo text-2xl font-bold text-text-primary">
              About Me
            </h1>
            <Divider className="my-2" thickness="light" />
            <div className="flex flex-col gap-4">
              {about.map((item, index) => (
                <div key={index}>
                  <span
                    className={`font-chubbo text-xs font-bold text-text-secondary`}
                  >
                    {item.header}
                  </span>
                  <p className={`font-supreme text-lg text-text-primary`}>
                    {item.desc}
                  </p>
                </div>
              ))}
              <div>
                <span
                  className={`font-chubbo text-xs font-bold text-text-secondary`}
                >
                  WHAT I&apos;M CURRENTLY DOING
                </span>
                <div className="flex flex-row gap-x-2">
                  <span className="font-supreme text-lg text-text-primary">
                    1.
                  </span>
                  <p className={`font-supreme text-lg text-text-primary`}>
                    I&apos;m in my senior year studying Computer Science in the
                    Philippines. On the side, I&apos;m building various projects
                    that tackle many topics, from UI/UX design to AI.
                  </p>
                </div>
                <div className="flex flex-row gap-x-2">
                  <span className="font-supreme text-lg text-text-primary">
                    2.
                  </span>
                  <p className={`font-supreme text-lg text-text-primary`}>
                    I&apos;m working on creating a weekly newsletter tackling
                    news in technology and business that is worth knowing in a
                    bite-sized manner. Aside from this, I&apos;m also exploring
                    the world of content creation (e.g., videos, podcasts, etc.)
                  </p>
                </div>
                <div className="flex flex-row gap-x-2">
                  <span className="font-supreme text-lg text-text-primary">
                    3.
                  </span>
                  <p className={`font-supreme text-lg text-text-primary`}>
                    I&apos;ll be compiling and writing about my thoughts on a
                    wide array of topics I find interesting on this website.
                    This varies from essays, tutorials, snippets, and many more.
                    Sorta making it a part of my &apos;second brain.&apos;
                  </p>
                </div>
              </div>

              <div>
                <span
                  className={`font-chubbo text-xs font-bold text-text-secondary`}
                >
                  FAVOURITE QUOTE
                </span>
                <p className={`font-supreme text-lg italic text-text-primary`}>
                  &apos;Fear is the mind-killer&apos; - Dune (Frank Herbert)
                </p>
              </div>
            </div>
          </CardContainer>
        </div>
        <div className="flex w-full flex-col justify-between gap-y-4 md:flex-row">
          <MailCard className="md:mx-auto md:w-[450px]" />
        </div>
      </div>
    </Container>
  );
};

export default About;
