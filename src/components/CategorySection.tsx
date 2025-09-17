import Link from 'next/link';
import SectionWrapper from './common/SectionWrapper';
import SectionHeader from './common/SectionHeader';
import MediaTile from './common/MediaTile';
import CarouselBase from './common/CarouselBase';
import categoriesData from '../data/categories.json';

export default function CategorySection() {
  return (
    <SectionWrapper>
      <SectionHeader>SORT BY CATEGORY</SectionHeader>
      
      <CarouselBase 
        itemsPerView={2} 
        showArrows={true}
        showDots={true}
        className="px-md"
      >
        {categoriesData.map((category) => (
          <div key={category.id} className="px-sm">
            <Link
              href={`/category/${category.slug}`}
              className="block"
            >
              <MediaTile
                image={category.image}
                title={category.name}
                alt={`Kategoria ${category.name}`}
              />
            </Link>
          </div>
        ))}
      </CarouselBase>
    </SectionWrapper>
  );
}
