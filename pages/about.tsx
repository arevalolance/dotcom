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
