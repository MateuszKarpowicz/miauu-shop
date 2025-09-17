import SectionWrapper from './common/SectionWrapper';
import SectionHeader from './common/SectionHeader';
import MediaTile from './common/MediaTile';
import UniformGrid from './common/UniformGrid';
import productsData from '../data/products.json';

export default function WhatsNewSection() {
  return (
    <SectionWrapper>
      <SectionHeader>WHAT&apos;S NEW</SectionHeader>
      
      <UniformGrid>
        {productsData.map((product) => (
          <MediaTile
            key={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            alt={`Produkt ${product.name}`}
          />
        ))}
      </UniformGrid>
    </SectionWrapper>
  );
}
