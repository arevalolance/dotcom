import BlogLink from "components/BlogLink";
import Container from "components/Container";
import { indexQuery } from "lib/queries";
import { getClient } from "lib/sanity-client";
import { Post } from "lib/types";
import { InferGetStaticPropsType } from "next";
import { useState } from "react";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container title="Blog - Lance Arevalo">
      <div className="mx-auto w-11/12 xl:w-6/12">
        <input
          className={`text-md mx-auto w-full rounded-md border-[1px] border-transparent bg-background-surface p-2 text-text-primary placeholder:text-text-secondary focus:border-border-surface focus:outline-none`}
          placeholder="What do you want to read?"
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <div className="mt-8">
          <div className="mx-auto">
            {searchValue !== "" && filteredBlogPosts.length === 0 ? (
              <span className="text-text-primary">
                No blog posts with the term &apos;{searchValue}&apos; found
              </span>
            ) : (
              filteredBlogPosts.map((post) => (
                <BlogLink
                  key={post.slug}
                  title={post.title}
                  publishedAt={post.date}
                  slug={post.slug}
                  summary={post.excerpt}
                  tag={post.tag}
                  embed={
                    post.embed ? { slug: post.embed, tag: post.embedTag } : null
                  }
                />
              ))
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps({ preview = false }) {
  const posts: Post[] = await getClient(preview).fetch(indexQuery);

  return { props: { posts } };
}

export default Blog;
