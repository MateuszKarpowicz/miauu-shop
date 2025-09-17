'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import CategoryTopBar from '@/components/category/CategoryTopBar';
import ProductGallery from '@/components/product/ProductGallery';
import ProductTitlePrice from '@/components/product/ProductTitlePrice';
import SizeSelector from '@/components/product/SizeSelector';
import ProductCTA from '@/components/product/ProductCTA';
import ProductDetailsAccordion from '@/components/product/ProductDetailsAccordion';
import MaterialsAccordion from '@/components/product/MaterialsAccordion';
import YouMayLike from '@/components/product/YouMayLike';
import categoriesData from '@/data/categories.json';
import productDetailsData from '@/data/product-details.json';
import youMayLikeData from '@/data/you-may-like.json';

interface ProductPageProps {
  params: {
    handle: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { handle } = params;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // Prepare categories for CategoryTopBar
  const categories = categoriesData.map(cat => ({
    handle: cat.handle,
    label: cat.name
  }));

  // Get product data (in real app, this would be fetched based on handle)
  const product = productDetailsData[0]; // MVP: first product

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    // Mock add to cart functionality
    console.log('Added to cart:', { product: product.name, size: selectedSize });
    alert(`Dodano do koszyka: ${product.name} w rozmiarze ${selectedSize}`);
  };

  const handleSelectSize = () => {
    // Scroll to size selector (optional)
    const sizeSection = document.getElementById('size-selector');
    if (sizeSection) {
      sizeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-white pb-20">
        <Navbar />
        <div className="px-4 py-8 text-center">
          <p>Produkt nie został znaleziony.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
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
      <div className="px-4 py-1">
        <p className="text-sm text-gray-600 text-center">
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
        onAddToCart={handleAddToCart}
        onSelectSize={handleSelectSize}
      />

      {/* Product Details Accordion */}
      <ProductDetailsAccordion />

      {/* Materials & Care Accordion */}
      <MaterialsAccordion />

      {/* You May Like */}
      <YouMayLike products={youMayLikeData} />

      {/* About Us & Help are handled by layout.tsx */}
    </div>
  );
}
