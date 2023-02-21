import { Post } from "lib/types";
import { PropsWithChildren, Suspense, useRef, useState } from "react";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import Container from "components/Container";
import { urlForImage } from "lib/sanity";
import ViewCounter from "components/ViewCounter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/Dialog";
import * as Toast from "@radix-ui/react-toast";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import { DialogOverlay } from "@radix-ui/react-dialog";

const ShareContent = (props: { label: string; icon: string }) => {
  return (
    <div className="flex flex-col items-center gap-y-2 text-text-primary">
      <Icon
        className="rounded-full bg-background-surface p-2 text-[45px]"
        icon={props.icon}
      />
      <span className="text-center text-xs">{props.label}</span>
    </div>
  );
};

const ShareLink = (props: { label: string; icon: string; link: string }) => {
  return (
    <Link href={props.link} target={"_blank"}>
      <ShareContent label={props.label} icon={props.icon} />
    </Link>
  );
};

const BlogLayout = ({ children, post }: PropsWithChildren<{ post: Post }>) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Container
      title={`${post.title} - Lance Arevalo`}
      description={post.excerpt}
      image={urlForImage(post.coverImage).url()}
      date={new Date(post.date).toISOString()}
      type="article"
    >
      <article className="mx-auto mb-16 flex w-11/12 max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 font-chubbo text-5xl font-bold tracking-tight text-text-primary">
          {post.title}
        </h1>
        <div className="mt-2 flex w-full flex-row items-center justify-between">
          <div className="flex items-center">
            <Image
              alt="Lance Arevalo"
              height={24}
              width={24}
              sizes="20vw"
              src="/static/images/PFP.webp"
              className="rounded-full"
            />
            <p className="ml-2 font-supreme text-text-secondary">
              {"Lance Arevalo / "}
              {format(parseISO(post.date), "MMMM dd, yyyy")}
            </p>
          </div>

          <div className="flex flex-row items-center gap-x-2">
            <span className="font-supreme text-text-secondary">
              {post.readingTime}
            </span>
            <ViewCounter slug={post.slug} count={true} />

            <div>
              <Dialog>
                <DialogOverlay>
                  <Toast.Provider swipeDirection="right">
                    <Toast.Root
                      className="rounded-md border-[1px] border-border-surface bg-background-surface p-2 animate-in slide-in-from-right duration-500"
                      open={open}
                      onOpenChange={setOpen}
                    >
                      <Toast.Title className="text-sm text-text-primary">
                        Copied to clipboard
                      </Toast.Title>
                    </Toast.Root>
                    <Toast.Viewport className="fixed right-0  bottom-0 z-[60] mb-5 mr-5 " />
                  </Toast.Provider>
                </DialogOverlay>
                <DialogTrigger>
                  <div className="rounded-full border-[1px] border-border-surface px-2 py-1 text-[20px] text-white hover:bg-background-surface">
                    <Icon icon="mdi:share" />
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-background-primary">
                  <DialogHeader>
                    <DialogTitle className="text-text-primary">
                      Share this post
                    </DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col items-center justify-center gap-x-5 rounded-md border-[1px] border-border-surface p-5 text-center sm:flex-row sm:text-start">
                    <Image
                      src={urlForImage(post.coverImage).url()}
                      alt="Lance Arevalo"
                      width={170}
                      height={100}
                      className="rounded-md border-[1px] border-border-surface/50"
                    />
                    <div className="flex flex-col">
                      <span className="font-chubbo text-lg font-bold text-text-primary">
                        {post.title}
                      </span>
                      <p className="font-supreme text-text-secondary">
                        https://arevalolance.me
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="mt-4 flex w-fit flex-row gap-x-8">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `https://arevalolance.me/blog/${post.slug}`
                          );
                          setOpen(false);
                          window.clearTimeout(timerRef.current);
                          timerRef.current = window.setTimeout(() => {
                            setOpen(true);
                          }, 100);
                        }}
                      >
                        <ShareContent
                          label={"Copy link"}
                          icon={"mdi:link-variant"}
                        />
                      </button>
                      <ShareLink
                        link={`https://twitter.com/intent/tweet?text=${post.title}&url=https://arevalolance.me/blog/${post.slug}`}
                        icon="ph:twitter-logo"
                        label="Twitter"
                      />
                      <ShareLink
                        link={`https://www.facebook.com/sharer/sharer.php?u=https://arevalolance.me/blog/${post.slug}&amp%3Bsrc=sdkpreparse`}
                        icon="ic:baseline-facebook"
                        label="Facebook"
                      />
                      <ShareLink
                        link={`mailto:""?&subject=${post.title}&body=https://arevalolance.me/blog/${post.slug}`}
                        icon="ic:outline-email"
                        label="Email"
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <Suspense fallback={null}>
          <div className="prose mt-4 w-full max-w-none font-supreme">
            {children}
          </div>
        </Suspense>
      </article>
    </Container>
  );
};

export default BlogLayout;
