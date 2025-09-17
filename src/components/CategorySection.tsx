import Link from 'next/link';
import SectionWrapper from './common/SectionWrapper';
import SectionHeader from './common/SectionHeader';
import MediaTile from './common/MediaTile';
import UniformGrid from './common/UniformGrid';
import categoriesData from '../data/categories.json';

export default function CategorySection() {
  return (
    <SectionWrapper>
      <SectionHeader>SORT BY CATEGORY</SectionHeader>
      
      <UniformGrid>
        {categoriesData.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="block"
          >
            <MediaTile
              image={category.image}
              title={category.name}
              alt={`Kategoria ${category.name}`}
            />
          </Link>
        ))}
      </UniformGrid>
    </SectionWrapper>
  );
}
