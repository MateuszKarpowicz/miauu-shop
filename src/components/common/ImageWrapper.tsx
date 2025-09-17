import React from 'react';
import Image from 'next/image';

interface ImageWrapperProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ImageWrapper({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw'
}: ImageWrapperProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes={sizes}
      />
    </div>
  );
}
