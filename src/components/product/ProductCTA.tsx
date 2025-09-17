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
    <div className={`px-md py-sm ${className}`}>
      <button
        onClick={handleClick}
        className="w-full bg-brand-primary text-text-inverse py-md px-lg text-sm font-medium uppercase tracking-wider rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 hover:bg-purple-700 transition-colors"
        aria-label={selectedSize ? 'Dodaj do koszyka' : 'Wybierz rozmiar'}
      >
        {buttonText}
      </button>
    </div>
  );
}
