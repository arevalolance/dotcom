import CardContainer from "components/CardContainer";
import LinkButton from "components/LinkButton";
import { format, parseISO } from "date-fns";

const BlogSection = ({ post }) => {
  return (
    <CardContainer className="mx-auto flex h-fit w-11/12 flex-col justify-between gap-y-2 overflow-hidden p-1 md:mx-0 md:h-[300px] md:w-[700px] md:p-6">
      <div className="flex flex-col gap-y-2 text-text-primary">
        <h1 className="font-chubbo text-xl font-bold">{post.title}</h1>
        <p className="text-md font-supreme">{post.excerpt}</p>
      </div>

      <div className="flex flex-row items-center justify-between">
        <LinkButton label={"Read more"} link={`/blog/${post.slug}`} />
        <span className="font-supreme text-text-primary">
          {format(parseISO(post.date), "MMMM dd, yyyy")}
        </span>
      </div>
    </CardContainer>
  );
};

export default BlogSection;
