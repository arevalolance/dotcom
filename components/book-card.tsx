import Image from "next/image";
import { cn } from "@/lib/utils";

interface BookCardProps {
  title: string;
  author: string;
  image: string;
  status: string;
  media: string;
}

export default function BookCard({ title, author, image, status, media }: BookCardProps) {
  return (
    <div className="group relative bg-neutral-50 rounded-lg border border-neutral-100 hover:border-neutral-200 hover:bg-neutral-100 transition-all duration-300 ease-in-out overflow-hidden">
      <div className="relative overflow-hidden rounded-t-lg">
        <Image 
          src={image} 
          alt={title} 
          className="w-full h-72 object-cover transition-transform duration-300 ease-in-out" 
          width={300} 
          height={450} 
        />
        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {media}
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="font-medium text-sm text-gray-900 mb-1 line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-600 mb-2 line-clamp-1">{author}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div
            className={cn(
              "w-fit rounded border px-2 font-mono text-xs text-black tracking-tight drop-shadow-sm",
              status === "Read"
                ? "border-green-500 bg-green-400/40"
                : status === "Reading"
                ? "border-blue-500 bg-blue-400/40"
                : status === "To Read"
                ? "border-red-500 bg-red-400/40"
                : status === "DNF"
                ? "border-gray-500 bg-gray-400/40"
                : "border-gray-500 bg-gray-400/40"
            )}
          >
            <span>{status.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
