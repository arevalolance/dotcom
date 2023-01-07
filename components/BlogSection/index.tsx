import CardContainer from "components/CardContainer";
import LinkButton from "components/LinkButton";

const BlogSection = () => {
  return (
    <CardContainer className="mx-auto flex h-fit w-11/12 flex-col justify-between gap-y-2 overflow-hidden p-1 md:mx-0 md:h-[300px] md:w-[700px] md:p-6">
      <div className="flex flex-col gap-y-2 text-text-primary">
        <h1 className="font-chubbo text-xl font-bold">
          Instagram expands Reels to 90 seconds
        </h1>
        <p className="text-md font-supreme">
          Meta on Thursday announced a series of updates and new features for
          its Reels on Facebook and Instagram. While Instagram Reels&apos;
          length has been extended to 90 seconds from 60 seconds, users can now
          also import their own audio directly.
        </p>
      </div>

      <div className="flex flex-row items-center justify-between">
        <LinkButton label={"Read more"} link={`/blog`} />
        <span className="font-supreme text-text-primary">March 1, 2020</span>
      </div>
    </CardContainer>
  );
};

export default BlogSection;
