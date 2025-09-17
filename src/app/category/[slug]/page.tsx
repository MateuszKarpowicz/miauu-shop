import Navbar from '@/components/layout/Navbar';
import CategoryTopBar from '@/components/category/CategoryTopBar';
import FilterSortBar from '@/components/category/FilterSortBar';
import MediaTile from '@/components/common/MediaTile';
import UniformGrid from '@/components/common/UniformGrid';
import categoriesData from '@/data/categories.json';
import productsData from '@/data/products.json';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  
  // Prepare categories for CategoryTopBar
  const categories = categoriesData.map(cat => ({
    handle: cat.handle,
    label: cat.name
  }));

  // Filter products based on category (for now, show all products)
  // In a real app, you would filter based on the category slug
  const products = productsData;

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Navbar */}
      <Navbar />

      {/* Category Top Bar */}
      <CategoryTopBar categories={categories} />

      {/* Filter Sort Bar */}
      <FilterSortBar />

      {/* Products Grid */}
      <div className="px-4 py-4">
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
