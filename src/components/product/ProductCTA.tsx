'use client';

interface ProductCTAProps {
  selectedSize: string | null;
  onAddToCart: () => void;
  onSelectSize?: () => void;
  className?: string;
}

export default function ProductCTA({ 
  selectedSize, 
  onAddToCart, 
  onSelectSize,
  className = '' 
}: ProductCTAProps) {
  const handleClick = () => {
    if (selectedSize) {
      onAddToCart();
    } else if (onSelectSize) {
      onSelectSize();
    }
  };

  const buttonText = selectedSize ? 'ADD TO CART' : 'SELECT SIZE';

  return (
    <div className={`px-4 py-3 ${className}`}>
      <button
        onClick={handleClick}
        className="w-full bg-[var(--color-brand-purple)] text-white py-4 px-6 text-sm font-medium uppercase tracking-wider rounded focus:outline-none focus:ring-2 focus:ring-purple-300 hover:bg-purple-700 transition-colors"
        aria-label={selectedSize ? 'Dodaj do koszyka' : 'Wybierz rozmiar'}
      >
        {buttonText}
      </button>
    </div>
  );
}
