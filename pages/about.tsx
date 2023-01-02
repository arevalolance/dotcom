import { Inter } from "@next/font/google";
import CardContainer from "components/CardContainer";
import CardHeader from "components/CardHeader";
import Divider from "components/Divider";
import MailCard from "components/MailCard";
import TwitterCard from "components/TwitterCard";
import { about } from "lib/info";
import Container from "components/Container";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

const About = () => {
  return (
    <Container>
      <div className="flex w-full flex-row gap-8">
        <div className="flex flex-col gap-8">
          <MailCard />
          <TwitterCard />
        </div>
        <div className="flex w-full">
          <CardContainer className="w-full">
            <CardHeader
              className="text-2xl"
              title={"About Me"}
              size="text-2xl"
            />
            <Divider className="my-2" thickness="light" />
            <div className="flex flex-col gap-4">
              {about.map((item, index) => (
                <div key={index}>
                  <span
                    className={`${inter.className} text-xs font-bold text-gray-400`}
                  >
                    {item.header}
                  </span>
                  <p className={`${inter.className} text-lg text-gray-600`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </CardContainer>
        </div>
      </div>
    </Container>
  );
};

export default About;
