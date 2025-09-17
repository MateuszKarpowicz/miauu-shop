import React from 'react';
import ImageWrapper from './ImageWrapper';
import ColorSwatches from '../category/ColorSwatches';

interface MediaTileProps {
  image: string;
  title: string;
  price?: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  swatches?: string[];
  href?: string;
}

export default function MediaTile({ 
  image, 
  title, 
  price, 
  alt, 
  className = '',
  onClick,
  swatches,
  href
}: MediaTileProps) {
  const content = (
    <div className={`cursor-pointer group ${className}`}>
      <div className="aspect-[3/4] overflow-hidden mb-3">
        <ImageWrapper
          src={image}
          alt={alt}
          className="w-full h-full"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="text-center">
        <h3 className={`text-sm ${price ? 'font-bold' : 'font-normal'} text-black leading-tight`}>
          {title}
        </h3>
        {price && (
          <p className="text-sm text-gray-500 mt-1">
            {price}
          </p>
        )}
        {swatches && <ColorSwatches swatches={swatches} />}
      </div>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href}
        className="block focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
        aria-label={`Zobacz produkt ${title}`}
      >
        {content}
      </a>
    );
  }

  return (
    <div 
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className="focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
    >
      {content}
    </div>
  );
}
