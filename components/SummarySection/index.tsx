import { Inter } from "@next/font/google";
import { aboutSummary } from "lib/info";
import CardContainer from "components/CardContainer";
import CardHeader from "components/CardHeader";
import Divider from "components/Divider";

const inter = Inter({ subsets: ["latin"] });

const SummarySection = () => {
  return (
    <CardContainer className="max-w-[500px]">
      <>
        <CardHeader
          title={"Lance Arevalo"}
          desc={
            "I create softwares from time to time. Oftentimes, I just watch movies and listen to music.  "
          }
        />
        <Divider thickness="light" color="light" />
        <div className="mt-4 flex flex-col">
          {aboutSummary.map((item) => (
            <span
              className={`${inter.className} py-2 text-base text-gray-900`}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </>
    </CardContainer>
  );
};

export default SummarySection;
