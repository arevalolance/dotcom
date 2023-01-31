import CardContainer from "components/CardContainer";
import LinkButton from "components/LinkButton";
import { format, parseISO } from "date-fns";

const BlogSection = ({ post }) => {
  return (
    <CardContainer className="mx-auto flex h-fit w-11/12 flex-col justify-between gap-y-2 overflow-hidden p-10 md:mx-0 md:h-[300px] md:w-[700px] md:p-6">
      {post ? (
        <>
          <div className="mb-2 flex flex-col gap-y-4 text-text-primary sm:mb-0">
            <h1 className="font-chubbo text-xl font-bold">{post.title}</h1>
            <p className="font-supreme">{post.excerpt}</p>
          </div>

          <div className="flex flex-col items-center justify-between md:flex-row">
            <LinkButton label={"Read Blog Post"} link={`/blog/${post.slug}`} />
            <span className="font-supreme text-text-primary">
              {format(parseISO(post.date), "MMMM dd, yyyy")}
            </span>
          </div>
        </>
      ) : (
        <h1 className="m-auto font-chubbo text-lg text-text-primary">
          No post has been published yet.
        </h1>
      )}
    </CardContainer>
  );
};

export default BlogSection;
