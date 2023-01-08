import { Post } from "lib/types";
import { PropsWithChildren, Suspense } from "react";
import Image from "next/image";
import { parseISO, format } from "date-fns";

const BlogLayout = ({ children, post }: PropsWithChildren<{ post: Post }>) => {
  return (
    <article className="article mx-auto mb-16 flex w-11/12 max-w-2xl flex-col items-start justify-center">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-text-primary">
        {post.title}
      </h1>
      <div className="mt-2 flex w-full flex-row items-start justify-between">
        <div className="flex items-center">
          <Image
            alt="Lance Arevalo"
            height={24}
            width={24}
            sizes="20vw"
            src="/images/PFP.webp"
            className="rounded-full"
          />
          <p className="ml-2 text-sm text-text-secondary">
            {"Lance Arevalo / "}
            {format(parseISO(post.date), "MMMM dd, yyyy")}
          </p>
        </div>

        <span className="text-sm text-text-secondary">{post.readingTime}</span>
      </div>
      <Suspense fallback={null}>
        <div className="prose mt-4 w-full max-w-none">{children}</div>
      </Suspense>
    </article>
  );
};

export default BlogLayout;
