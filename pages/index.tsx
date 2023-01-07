import BlogSection from "components/BlogSection";
import BookmarksSection from "components/BookmarksSection";
import MailCard from "components/MailCard";
import SummarySection from "components/SummarySection";
import TwitterCard from "components/TwitterCard";
import Container from "components/Container";
import { Suspense } from "react";
import MapCard from "components/MapCard";
import ToolSection from "components/ToolSection";
import { getClient } from "lib/sanity-client";
import { latestPostQuery } from "lib/queries";
import { Post } from "lib/types";

const Index = ({ post }) => {
  return (
    <Container>
      <Suspense fallback={false}>
        <div className="mx-auto flex w-[390px] flex-wrap justify-center gap-4 md:w-[768px] lg:w-[1000px]">
          <SummarySection />

          <div className="flex w-full flex-col justify-between gap-4 md:hidden md:flex-row lg:flex">
            <BlogSection post={post} />
            <MapCard />
          </div>

          <div className="hidden w-full flex-col justify-center gap-4  md:flex md:flex-row lg:hidden">
            <BlogSection post={post} />
          </div>

          <div className="hidden h-fit flex-col justify-between gap-4 md:flex md:w-[698px] md:flex-row lg:hidden">
            <MapCard />
            <TwitterCard />
          </div>

          <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
            <div className="flex md:hidden lg:flex">
              <TwitterCard />
            </div>
            <BookmarksSection />
          </div>

          <div className="flex w-full flex-col justify-between gap-4 md:flex-col lg:flex-row">
            <MailCard />
            <ToolSection />
          </div>
        </div>
      </Suspense>
    </Container>
  );
};

export async function getStaticProps({ preview = false }) {
  const post: Post = await getClient(preview).fetch(latestPostQuery);

  return {
    props: {
      post: post,
    },
  };
}

export default Index;
