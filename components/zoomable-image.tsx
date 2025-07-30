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
    <Zoom 
      zoomMargin={20}
      wrapStyle={{ 
        width: '100%', 
        height: '100%' 
      }}
      overlayBgColorEnd="rgba(0, 0, 0, 0.95)"
      overlayBgColorStart="rgba(0, 0, 0, 0)"
      zoomImg={{
        src: src,
        alt: alt,
        style: {
          maxWidth: '90vw',
          maxHeight: '90vh',
          objectFit: 'contain',
          imageRendering: 'high-quality'
        }
      }}
    >
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