import { Post } from "lib/types";
import { PropsWithChildren, Suspense } from "react";
import Image from "next/image";
import { parseISO, format } from "date-fns";

const BlogLayout = ({ children, post }: PropsWithChildren<{ post: Post }>) => {
  return (
    <article className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
        {post.title}
      </h1>
      <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
        <div className="flex items-center">
          <Image
            alt="Lance Arevalo"
            height={24}
            width={24}
            sizes="20vw"
            src="/images/PFP.png"
            className="rounded-full"
          />
          <p className="ml-2 text-sm text-gray-700">
            {"Lance Arevalo / "}
            {format(parseISO(post.date), "MMMM dd, yyyy")}
          </p>
        </div>
      </div>
      <Suspense fallback={null}>
        <div className="prose mt-4 w-full max-w-none">{children}</div>
      </Suspense>
    </article>
  );
};

export default BlogLayout;
