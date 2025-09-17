import { useState, useCallback } from 'react';

/**
 * Hook do zarządzania akcjami produktu (wybór rozmiaru, dodawanie do koszyka)
 */
export function useProductActions() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeSelect = useCallback((size: string) => {
    setSelectedSize(size);
  }, []);

  const handleAddToCart = useCallback((productName: string) => {
    // Mock add to cart functionality
    // TODO: Implement actual cart functionality
    alert(`Dodano do koszyka: ${productName} w rozmiarze ${selectedSize}`);
  }, [selectedSize]);

  const handleSelectSize = useCallback(() => {
    // Scroll to size selector
    const sizeSection = document.getElementById('size-selector');
    if (sizeSection) {
      sizeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return {
    selectedSize,
    handleSizeSelect,
    handleAddToCart,
    handleSelectSize
  };
}
