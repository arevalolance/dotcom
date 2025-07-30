import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TravelCardProps {
  location: string;
  title: string;
  description: string;
  images: string[];
  date: string;
}

export default function TravelCard({ location, title, description, images, date }: TravelCardProps) {
  const displayImages = images.slice(0, 3);
  const locationSlug = location.toLowerCase().replace(/[^a-z0-9]/g, '-');
  
  return (
    <Link href={`/travel/${locationSlug}`} className="block">
      <div className="group relative bg-neutral-50 rounded-lg border border-neutral-100 hover:border-neutral-200 hover:bg-neutral-100 transition-all duration-300 ease-in-out overflow-hidden">
      <div className="relative overflow-hidden rounded-t-lg h-48">
        {displayImages.length === 1 ? (
          <Image 
            src={displayImages[0]} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" 
            width={400} 
            height={300} 
          />
        ) : (
          <div className="relative w-full h-full">
            <div className="grid grid-cols-2 gap-1 h-full">
              <Image 
                src={displayImages[0]} 
                alt={`${title} - 1`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" 
                width={200} 
                height={192} 
              />
              <div className="flex flex-col gap-1">
                <Image 
                  src={displayImages[1]} 
                  alt={`${title} - 2`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" 
                  width={200} 
                  height={95} 
                />
                {displayImages.length === 3 && (
                  <Image 
                    src={displayImages[2]} 
                    alt={`${title} - 3`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" 
                    width={200} 
                    height={95} 
                  />
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          Travel
        </div>
        
        {displayImages.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {displayImages.length} photos
          </div>
        )}
      </div>
      
      <div className="p-3">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-medium text-sm text-gray-900 line-clamp-1">{title}</h3>
          <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">
            {new Date(date).toLocaleDateString()}
          </span>
        </div>
        <p className="text-xs text-gray-600 mb-2 font-medium">{location}</p>
        <p className="text-xs text-gray-500 line-clamp-2 mb-2">{description}</p>
        <div className="flex items-center justify-start">
          <div className="w-fit rounded border px-2 font-mono text-sm tracking-tight drop-shadow-sm border-purple-500 bg-purple-400/40">
            <span>TRAVEL</span>
          </div>
        </div>
      </div>
      </div>
    </Link>
  );
}