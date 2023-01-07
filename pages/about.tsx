import { Inter } from "@next/font/google";
import CardContainer from "components/CardContainer";
import CardHeader from "components/CardHeader";
import Divider from "components/Divider";
import MailCard from "components/MailCard";
import TwitterCard from "components/TwitterCard";
import { about } from "lib/info";
import Container from "components/Container";

const About = () => {
  return (
    <Container>
      <div className="mx-auto flex w-[390px] flex-wrap justify-center gap-4 md:w-[768px] lg:w-[1000px]">
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
            </div>
          </CardContainer>
        </div>
        <div className="flex w-full flex-col justify-between gap-y-4 md:flex-row">
          <MailCard className="md:mx-0 md:w-[450px]" />
          <TwitterCard />
        </div>
      </div>
    </Container>
  );
};

export default About;
