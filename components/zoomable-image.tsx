"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ZoomableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
}

export default function ZoomableImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = "",
  sizes 
}: ZoomableImageProps) {
  return (
    <Zoom>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        sizes={sizes}
      />
    </Zoom>
  );
}