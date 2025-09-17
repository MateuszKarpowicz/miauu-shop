import ImageWrapper from '../common/ImageWrapper';

interface ProductGalleryProps {
  images: Array<{
    url: string;
    alt: string;
  }>;
  className?: string;
}

export default function ProductGallery({ images, className = '' }: ProductGalleryProps) {
  const mainImage = images[0]; // MVP: tylko pierwsze zdjęcie

  if (!mainImage) return null;

  return (
    <div className={`bg-gray-100 ${className}`}>
      <div className="aspect-square max-w-md mx-auto">
        <ImageWrapper
          src={mainImage.url}
          alt={mainImage.alt}
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
