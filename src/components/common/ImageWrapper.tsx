import React from 'react';
import Image from 'next/image';
import { getImageSizes } from '@/lib/config/images';

interface ImageWrapperProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  type?: 'hero' | 'tile' | 'logo' | 'icon' | 'carousel' | 'productGallery' | 'thumbnail';
  width?: number;
  height?: number;
}

export default function ImageWrapper({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  sizes,
  type = 'tile',
  width,
  height
}: ImageWrapperProps) {
  const imageSizes = sizes || getImageSizes(type);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={!width || !height}
        className="object-cover"
        priority={priority}
        sizes={imageSizes}
      />
    </div>
  );
}
