import { cn } from "@/lib/utils";
import { Star, StarHalf, StarIcon } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

type BlogProps = {
  type: 'Blog';
  title: string;
  publishedAt: string;
  summary: string;
  topic: string;
};

type MediaProps = {
  type: 'Media';
  media: "Book" | "Audiobook" | "Movie" | "Series";
  title: string;
  author: string;
  image: string;
  status: "Read" | "Reading" | "To Read" | "Watched" | "To Watch" | "Watching";
  rating?: number;
};

// Union of all possible types
type MindProps = BlogProps | MediaProps;

interface MindComponentProps<T> {
  data: T;
  page: "Blog" | "Read" | "Watch";
}

const getStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = (rating % 1 !== 0);

  let stars: React.ReactNode[] | null = null;

  if (fullStars > 0 || hasHalfStar) {
    stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star className="h-4 w-4 fill-yellow-400/70 text-yellow-700" key={`full-star-${i}`} />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf className="h-4 w-4 fill-yellow-400/70 text-yellow-700" key="half-star" />);
    }
  }

  return stars;
};

export default function MindCard(props: MindComponentProps<MindProps>) {
  const { data, page } = props;

  switch (data.type) {
    case 'Blog':
      return (
        <div className="group flex h-[300px] flex-col justify-between rounded-lg border-[1px] border-transparent bg-stone-50/50 p-4 duration-100 ease-in focus-within:bg-stone-100/60 hover:border-stone-200 hover:bg-stone-100/60 hover:shadow-sm">
          <div className="h-fit w-fit text-sm text-gray-500">
            {data.topic} · {page}
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="text-xl font-medium decoration-2">
                {data.title}
              </span>
              <span className="text-gray-501 text-sm">
                {data.publishedAt}
              </span>
            </div>
            <span className="line-clamp-4 text-justify text-sm text-gray-500">
              {data.summary}
            </span>
          </div>
        </div>
      );
    case 'Media':
      return (
        <AspectRatio ratio={1 / 1}>
          <div className="group flex h-full w-full flex-col justify-between gap-4 rounded-lg border-[1px] border-transparent bg-stone-50/50 p-4 duration-100 ease-in focus-within:bg-stone-100/60 hover:border-stone-200 hover:bg-stone-100/60 hover:shadow-sm">
            <div className="h-fit w-fit text-sm text-gray-500">
              {data.media} · {page}
            </div>
            <div className="grid h-full w-full grid-cols-2 items-end gap-6 p-4">
              <Image className="duration-125 rounded-sm drop-shadow-lg transition ease-in group-hover:-translate-y-4 group-hover:rotate-2 group-hover:scale-110 group-hover:shadow-xl"
                src={data.image} fill={false} alt={"test"} height={500} width={325} />
              <div className="flex h-fit flex-col gap-2">
                <div className={cn("w-fit rounded border-[1px] px-2 font-mono text-sm tracking-tight drop-shadow-sm md:mx-0",
                  data.status === "Read" || data.status === "Watched" ? "border-green-500 bg-green-400/40" :
                    data.status === "Reading" || data.status === "Watching" ? "border-blue-500 bg-blue-400/40" :
                      data.status === "To Read" || data.status === "To Watch" ? "border-red-500 bg-blue-400/40" : ""
                )}><span>{data.status.toUpperCase()}</span></div>
                <div className="flex flex-col">
                  <span className="line-clamp-4 break-words">{data.title}</span>
                  {data.author !== undefined &&
                    <span className="line-clamp-2 text-gray-500">{data.author}</span>}
                  {data.rating &&
                    <div className="flex flex-row">
                      {getStars(data.rating)}
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </AspectRatio>

      );
    default:
      throw new Error('Invalid data'); // Throw an error if the data has an invalid type
  }
}
