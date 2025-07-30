import Image from "next/image";
import { cn } from "@/lib/utils";

interface MovieCardProps {
  title: string;
  image: string;
  rating: number;
  date: string;
  status: string;
}

export default function MovieCard({ title, image, rating, date, status }: MovieCardProps) {
  return (
    <div className="group relative bg-neutral-50 rounded-lg border border-neutral-100 hover:border-neutral-200 hover:bg-neutral-100 transition-all duration-300 ease-in-out overflow-hidden">
      <div className="relative overflow-hidden rounded-t-lg">
        <Image 
          src={image} 
          alt={title} 
          className="w-full h-auto object-contain transition-transform duration-300 ease-in-out" 
          width={400} 
          height={600} 
        />
        <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm border border-border text-foreground text-xs px-2 py-1 rounded-md font-medium shadow-sm">
          ★ {rating}
        </div>
      </div>
    </div>
  );
}
