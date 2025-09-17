'use client';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string | null;
  onSizeSelect: (size: string) => void;
  className?: string;
}

export default function SizeSelector({ 
  sizes, 
  selectedSize, 
  onSizeSelect, 
  className = '' 
}: SizeSelectorProps) {
  return (
    <div className={`px-md py-sm ${className}`}>
      <div className="flex items-center justify-between mb-md">
        <h2 className="text-sm font-medium text-text-primary uppercase tracking-wider">
          SIZE
        </h2>
        <button 
          className="text-sm text-text-muted underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded"
          aria-label="Przewodnik rozmiarów"
        >
          size guide
        </button>
      </div>
      
      <div className="grid grid-cols-5 gap-2">
        {sizes.map((size) => {
          const isSelected = selectedSize === size;
          return (
            <button
              key={size}
              onClick={() => onSizeSelect(size)}
              className={`
                py-sm px-sm text-sm font-medium rounded border-2 transition-colors
                focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300
                ${isSelected 
                  ? 'bg-brand-accent text-text-inverse border-brand-accent' 
                  : 'bg-bg-section text-text-primary border-border-light hover:border-border-medium'
                }
              `}
              aria-pressed={isSelected}
              aria-label={`Wybierz rozmiar ${size}`}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
