import { ReactElement } from "react";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";
import ResumeRow, { ResumeRowType } from "../components/ResumeRow";
import ResumeHeading from "../components/ResumeHeading";
import Bullet from "../components/Bullet";
import Head from "next/head";

const Resume: NextPageWithLayout = () => {
  const tools = [
    "JavaScript/TypeScript",
    "Python",
    "Go",
    "Java",
    "Git",
    "Docker",
    "Linux",
    "SQL",
  ];

  const experience: ResumeRowType[] = [
    {
      role: "Business Applications Developer",
      place: "(Remote) Makati, PH",
      company: "Noah Business Applications",
      date: "July - August, 2022",
      description: [
        {
          job: "Quality Assurance",
          description:
            "Assured that each component's functionality in their system was up to date and withhold standards that is made by the company",
        },
      ],
      listLabel: "Technologies and Tools",
      list: ["Excel"],
    },
    {
      role: "Student Developer",
      place: "Baguio, PH",
      company: "SLU Comelec",
      date: "September 2020",
      description: [
        {
          job: "Dashboard UI/UX Design",
          description:
            "Built and designed a dashboard page that displays system statistic and status for the administrator using HTML5 and CSS3",
        },
        {
          job: "Quality Assurance",
          description:
            "Assured the robustness of the functionalities of the system through hands-on testing in different campuses",
        },
        {
          job: "On-site Technical Support",
          description:
            "Implemented fair voting policies through on-site administration of system.",
        },
      ],
      listLabel: "Technologies and Tools",
      list: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      role: "On-the-job Training",
      place: "Cabanatuan, PH",
      company: "Cabanatuan City Police Station",
      date: "November 2018",
      description: [
        {
          job: "Database Management",
          description:
            "Managed and sorted Intel documents on different cases in the precinct.",
        },
        {
          job: "Clerkship",
          description:
            "Handled clerkship for police clearances and led the team to produce efficient work.",
        },
        {
          job: "Seminar",
          description:
            "Was introduced to the different procedures that the PNP does to manage crime in the city.",
        },
      ],
      listLabel: "Technologies and Tools",
      list: ["Excel", "Internal Applications in PNP"],
    },
  ];

  return (
    <>
      <Head>
        <title>Resume - Lance Arevalo</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <section className="mt-10 mb-20">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col text-left font-space-grotesk">
            <span>Lance Arevalo</span>
            <a
              className="underline hover:text-white hover:cursor-pointer"
              href="https://www.linkedin.com/in/arevalolance/"
            >
              contact me!
            </a>
          </div>
          <div className="flex flex-col text-right font-space-grotesk">
            <span>Full-Stack Developer</span>
            <span>Luzon, Philippines</span>
          </div>
        </div>

        <ResumeHeading>Tools and Technologies</ResumeHeading>
        <ul className="flex flex-col flex-wrap max-h-[100px]">
          {tools.map((item) => (
            <Bullet key={item} string={item} icon={"akar-icons:gear"} />
          ))}
        </ul>

        <ResumeHeading>Experience</ResumeHeading>
        {experience.map((item) => (
          <ResumeRow
            key={item.company}
            place={item.place}
            role={item.role}
            company={item.company}
            date={item.date}
            description={item.description}
            listLabel={item.listLabel}
            list={item.list}
          />
        ))}
      </section>
    </>
  );
};

Resume.getLayout = function getLayout(page: ReactElement) {
  return <Layout type={"others"}>{page}</Layout>;
};

export default Resume;
