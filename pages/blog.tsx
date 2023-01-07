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
    <Container>
      <div className="mx-auto w-11/12 xl:w-6/12">
        <input
          className={`text-md mx-auto w-full rounded-md border-[1px] border-transparent bg-background-surface p-2 text-text-primary placeholder:text-text-secondary focus:border-border-surface focus:outline-none`}
          placeholder="What do you want to read?"
          onChange={(e) => setSearchValue(e.target.value)}
        />

        {searchValue === "" && (
          <div className="mt-8">
            <span className={`text-xl font-medium text-text-primary`}>
              Most Popular
            </span>
            <div className="mx-auto">
              <BlogLink
                title={"A quick brown fox jumps over the lazy dog"}
                publishedAt={"09-09-2000"}
                slug={"test-slug"}
                summary={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit ac mi nec facilisis. Cras non metus tincidunt arcu lacinia maximus. Etiam ac ipsum consectetur, condimentum lectus nec, vehicula nulla. Aenean feugiat vulputate gravida."
                }
                tag={"Essay"}
              />
              <BlogLink
                title={"A quick brown fox jumps over the lazy dog"}
                publishedAt={"09-09-2000"}
                slug={"test-slug"}
                summary={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit ac mi nec facilisis. Cras non metus tincidunt arcu lacinia maximus. Etiam ac ipsum consectetur, condimentum lectus nec, vehicula nulla. Aenean feugiat vulputate gravida."
                }
              />
              <BlogLink
                title={"A quick brown fox jumps over the lazy dog"}
                publishedAt={"09-09-2000"}
                slug={"test-slug"}
                summary={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit ac mi nec facilisis. Cras non metus tincidunt arcu lacinia maximus. Etiam ac ipsum consectetur, condimentum lectus nec, vehicula nulla. Aenean feugiat vulputate gravida."
                }
              />
            </div>
          </div>
        )}

        <div className="mt-8">
          <span className={`text-xl font-medium text-text-primary`}>
            Most Recent
          </span>
          <div className="mx-auto mt-4">
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
