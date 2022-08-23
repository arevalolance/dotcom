type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

const ResumeHeading = ({ children }: Props) => {
  return (
    <div className="flex flex-row">
      <h1 className="font-space-grotesk font-bold mt-[1.2rem] mb-2 text-xl">
        {children}
      </h1>
      <hr />
    </div>
  );
};

export default ResumeHeading;
