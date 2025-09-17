import SectionWrapper from '../common/SectionWrapper';
import SectionHeader from '../common/SectionHeader';
import MediaTile from '../common/MediaTile';
import UniformGrid from '../common/UniformGrid';

interface Product {
  id: string;
  handle: string;
  name: string;
  price: string;
  image: string;
  swatches: string[];
}

interface YouMayLikeProps {
  products: Product[];
  className?: string;
}

export default function YouMayLike({ products, className = '' }: YouMayLikeProps) {
  if (!products || products.length === 0) return null;

  return (
    <SectionWrapper className={`py-6 ${className}`}>
      <SectionHeader>YOU MAY LIKE</SectionHeader>
      
      <UniformGrid>
        {products.map((product) => (
          <MediaTile
            key={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            alt={product.name}
            swatches={product.swatches}
            href={`/product/${product.handle}`}
          />
        ))}
      </UniformGrid>
    </SectionWrapper>
  );
}
