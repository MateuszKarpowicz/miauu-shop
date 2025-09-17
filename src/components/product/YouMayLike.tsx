import SectionWrapper from '../common/SectionWrapper';
import SectionHeader from '../common/SectionHeader';
import MediaTile from '../common/MediaTile';
import UniformGrid from '../common/UniformGrid';
import { RelatedProduct } from '@/lib/types';

interface YouMayLikeProps {
  products: RelatedProduct[];
  className?: string;
}

export default function YouMayLike({ products, className = '' }: YouMayLikeProps) {
  if (!products || products.length === 0) return null;

  return (
    <SectionWrapper className={`py-section-y ${className}`}>
      <SectionHeader>YOU MAY LIKE</SectionHeader>
      
      <UniformGrid>
        {products.map((product) => (
          <MediaTile
            key={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            alt={product.image.alt}
            swatches={product.swatches}
            href={`/product/${product.handle}`}
          />
        ))}
      </UniformGrid>
    </SectionWrapper>
  );
}
