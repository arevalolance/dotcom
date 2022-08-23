import { FC } from "react";

interface DescriptionType {
  job: string;
  description: string;
}

export interface ResumeRowType {
  role: string;
  date: string;
  company: string;
  place: string;
  description: DescriptionType[];
  listLabel: string;
  list: string[];
}

const ResumeRow: FC<ResumeRowType> = (data: ResumeRowType) => {
  return (
    <>
      <div className="font-space-grotesk flex flex-row justify-between w-full">
        <span>{data.role}</span>
        <span>{data.date}</span>
      </div>
      <div className="font-space-grotesk flex flex-row justify-between w-full text-[#C0C0C0]">
        <span>{data.company}</span>
        <span>{data.place}</span>
      </div>
      <ul>
        {data.description.map((item) => (
          <li key={item.job} className="font-space-grotesk mt-2 text-sm">
            &gt; {item.job}: {item.description}
          </li>
        ))}
      </ul>
      <p className="font-space-grotesk my-5 mb-7 text-sm">
        {data.listLabel}
        {":"}&emsp;&emsp; {data.list.join(", ")}
      </p>
    </>
  );
};

export default ResumeRow;
