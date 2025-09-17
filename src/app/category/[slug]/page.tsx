import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import CategoryTopBar from '@/components/category/CategoryTopBar';
import FilterSortBar from '@/components/category/FilterSortBar';
import MediaTile from '@/components/common/MediaTile';
import UniformGrid from '@/components/common/UniformGrid';
import { useCategories } from '@/lib/hooks/useCategories';
import { useProducts } from '@/lib/hooks/useProducts';
import { getCategoryMetaTags } from '@/lib/utils/seo';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = params;
  const categoryName = slug === 'view-all' ? 'Wszystkie produkty' : slug.charAt(0).toUpperCase() + slug.slice(1);
  return getCategoryMetaTags(categoryName, slug);
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  
  // Get data using custom hooks
  const categories = useCategories();
  const products = useProducts(slug);

  return (
    <div className="min-h-screen bg-bg-page pb-20">
      {/* Navbar */}
      <Navbar />

      {/* Category Top Bar */}
      <CategoryTopBar categories={categories} />

      {/* Filter Sort Bar */}
      <FilterSortBar />

      {/* Category heading - h1 dla strony kategorii */}
      <div className="px-md py-md">
        <h1 className="text-2xl font-heading font-bold text-text-primary text-center mb-lg">
          {slug === 'view-all' ? 'Wszystkie produkty' : slug.charAt(0).toUpperCase() + slug.slice(1)}
        </h1>
      </div>

      {/* Products Grid */}
      <div className="px-md py-md">
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
      </div>
    </div>
  );
}
