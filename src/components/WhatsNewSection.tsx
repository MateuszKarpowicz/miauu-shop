import SectionWrapper from './common/SectionWrapper';
import SectionHeader from './common/SectionHeader';
import MediaTile from './common/MediaTile';
import CarouselBase from './common/CarouselBase';
import productsData from '../data/products.json';

export default function WhatsNewSection() {
  // Pokaż tylko pierwsze 4 produkty w karuzeli
  const displayProducts = productsData.slice(0, 4);

  return (
    <SectionWrapper>
      <SectionHeader>WHAT&apos;S NEW</SectionHeader>
      
      <CarouselBase 
        itemsPerView={2} 
        showArrows={true}
        showDots={true}
        className="px-md"
      >
        {displayProducts.map((product) => {
          // Konwersja ceny z string na number (w groszach)
          const priceInCents = parseInt(product.price.replace(/\D/g, '')) * 100;
          
          return (
            <div key={product.id} className="px-sm">
              <MediaTile
                image={product.image}
                title={product.name}
                price={priceInCents}
                alt={`Produkt ${product.name}`}
              />
            </div>
          );
        })}
      </CarouselBase>
    </SectionWrapper>
  );
}
