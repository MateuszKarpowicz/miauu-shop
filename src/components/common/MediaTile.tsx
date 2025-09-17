import React from 'react';
import ImageWrapper from './ImageWrapper';
import ColorSwatches from '../category/ColorSwatches';
import { getImageSizes } from '@/lib/config/images';
import { formatPrice } from '@/lib/utils/format';
import { Image } from '@/lib/types';

interface MediaTileProps {
  image: Image | string; // Obsługa zarówno nowego typu Image jak i string (backward compatibility)
  title: string;
  price?: number; // Cena jako number (w groszach)
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
  // Obsługa zarówno Image object jak i string
  const imageSrc = typeof image === 'string' ? image : image.url;
  const imageAlt = typeof image === 'string' ? alt : (image.alt || alt);

  const content = (
    <div className={`cursor-pointer group ${className}`}>
      <div className="aspect-[3/4] overflow-hidden mb-md">
        <ImageWrapper
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full"
          sizes={getImageSizes('tile')}
        />
      </div>
      <div className="text-center">
        <h3 className={`text-sm font-body ${price ? 'font-bold' : 'font-normal'} text-text-primary leading-tight`}>
          {title}
        </h3>
        {price && (
          <p className="text-sm text-text-muted mt-sm">
            {formatPrice(price)}
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
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-border-medium rounded-button"
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
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-border-medium rounded-button"
    >
      {content}
    </div>
  );
}
