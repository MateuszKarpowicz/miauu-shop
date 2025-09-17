'use client';

import Navbar from '@/components/layout/Navbar';
import CategoryTopBar from '@/components/category/CategoryTopBar';
import ProductGallery from '@/components/product/ProductGallery';
import ProductTitlePrice from '@/components/product/ProductTitlePrice';
import SizeSelector from '@/components/product/SizeSelector';
import ProductCTA from '@/components/product/ProductCTA';
import ProductDetailsAccordion from '@/components/product/ProductDetailsAccordion';
import MaterialsAccordion from '@/components/product/MaterialsAccordion';
import YouMayLike from '@/components/product/YouMayLike';
import { useCategories } from '@/lib/hooks/useCategories';
import { useProduct } from '@/lib/hooks/useProduct';
import { useProductActions } from '@/lib/hooks/useProductActions';
import { useYouMayLike } from '@/lib/hooks/useYouMayLike';

interface ProductPageProps {
  params: {
    handle: string;
  };
}

// Note: generateMetadata nie działa z 'use client', więc meta tagi będą w layout.tsx
// W przyszłości można przenieść logikę do server component

export default function ProductPage({ params }: ProductPageProps) {
  const { handle } = params;
  
  // Get data using custom hooks
  const categories = useCategories();
  const product = useProduct(handle);
  const youMayLikeProducts = useYouMayLike();
  const {
    selectedSize,
    handleSizeSelect,
    handleAddToCart,
    handleSelectSize
  } = useProductActions();

  if (!product) {
    return (
      <div className="min-h-screen bg-bg-page pb-20">
        <Navbar />
        <div className="px-md py-xl text-center">
          <p className="text-text-muted">Produkt nie został znaleziony.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-page pb-20">
      {/* Navbar */}
      <Navbar />

      {/* Category Top Bar */}
      <CategoryTopBar categories={categories} />

      {/* Product Gallery */}
      <ProductGallery images={product.images} />

      {/* Product Title, Price & Colors */}
      <ProductTitlePrice 
        name={product.name}
        price={product.price}
        colors={product.colors}
      />

      {/* Free Shipping Note */}
      <div className="px-md py-xs">
        <p className="text-sm text-text-muted text-center">
          free shipping over 500zł
        </p>
      </div>

      {/* Size Selector */}
      <div id="size-selector">
        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          onSizeSelect={handleSizeSelect}
        />
      </div>

      {/* Product CTA */}
      <ProductCTA
        selectedSize={selectedSize}
        onAddToCart={() => handleAddToCart(product.name)}
        onSelectSize={handleSelectSize}
      />

      {/* Product Details Accordion */}
      <ProductDetailsAccordion />

      {/* Materials & Care Accordion */}
      <MaterialsAccordion />

      {/* You May Like */}
      <YouMayLike products={youMayLikeProducts} />

      {/* About Us & Help are handled by layout.tsx */}
    </div>
  );
}
