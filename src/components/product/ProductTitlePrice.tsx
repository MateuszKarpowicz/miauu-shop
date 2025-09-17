import ColorSwatches from '../category/ColorSwatches';
import { formatPrice } from '@/lib/utils/format';

interface ProductTitlePriceProps {
  name: string;
  price: number; // Cena jako number (w groszach)
  colors: string[];
  className?: string;
}

export default function ProductTitlePrice({ 
  name, 
  price, 
  colors, 
  className = '' 
}: ProductTitlePriceProps) {
  return (
    <div className={`px-md py-md ${className}`}>
      <h1 className="text-lg font-bold text-text-primary leading-tight mb-md">
        {name}
      </h1>
      <div className="flex items-center justify-between mb-md">
        <p className="text-lg text-text-primary font-medium">
          {formatPrice(price)}
        </p>
        <ColorSwatches swatches={colors} />
      </div>
    </div>
  );
}
