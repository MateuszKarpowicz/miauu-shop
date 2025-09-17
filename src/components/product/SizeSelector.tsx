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
    <div className={`px-4 py-3 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-black uppercase tracking-wider">
          SIZE
        </h2>
        <button 
          className="text-sm text-gray-600 underline focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
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
                py-3 px-2 text-sm font-medium rounded border-2 transition-colors
                focus:outline-none focus:ring-2 focus:ring-gray-300
                ${isSelected 
                  ? 'bg-[var(--color-brand-orange)] text-white border-[var(--color-brand-orange)]' 
                  : 'bg-white text-black border-gray-300 hover:border-gray-400'
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
