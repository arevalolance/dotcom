"use client";

import { notFound, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHeader from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import ZoomableImage from "@/components/zoomable-image";
import { travels } from "@/types/travel";
import { Button } from "@/components/ui/button";

interface TravelDetailPageProps {
  params: { location: string };
}

export default function TravelDetailPage({ params }: TravelDetailPageProps) {
  const router = useRouter();

  // Decode the location parameter and find matching travel
  const decodedLocation = decodeURIComponent(params.location);
  const travel = travels.find(t =>
    t.location.toLowerCase().replace(/[^a-z0-9]/g, '-') === decodedLocation.toLowerCase()
  );

  if (!travel) {
    notFound();
  }

  return (
    <div className="flex min-h-full w-full flex-col gap-6">
      <PageHeader
        title={travel.title}
        description={`${travel.description} • ${travel.location} • ${new Date(travel.date).toLocaleDateString()}`}
      />

      <Separator />

      <Button
        onClick={() => router.back()}
        variant="secondary"
        className="w-fit"
      >
        <ArrowLeft className="w-4 h-4" />
        Go back
      </Button>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {travel.images.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100">
            <ZoomableImage
              src={image}
              alt={`${travel.title} - ${index + 1}`}
              width={2000}
              height={2000}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out cursor-zoom-in"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
