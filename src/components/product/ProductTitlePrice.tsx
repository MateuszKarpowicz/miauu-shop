import ColorSwatches from '../category/ColorSwatches';

interface ProductTitlePriceProps {
  name: string;
  price: string;
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
    <div className={`px-4 py-4 ${className}`}>
      <h1 className="text-lg font-bold text-black leading-tight mb-3">
        {name}
      </h1>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg text-black font-medium">
          {price}
        </p>
        <ColorSwatches swatches={colors} />
      </div>
    </div>
  );
}
