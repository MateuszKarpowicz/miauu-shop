interface ColorSwatchesProps {
  swatches: string[];
  className?: string;
}

export default function ColorSwatches({ swatches, className = '' }: ColorSwatchesProps) {
  if (!swatches || swatches.length === 0) return null;

  return (
    <div className={`flex justify-center space-x-sm mt-sm ${className}`}>
      {swatches.map((color, index) => (
        <div
          key={index}
          className="w-3 h-3 rounded-full border border-border-light"
          style={{ backgroundColor: color }}
          aria-label={`Kolor ${color}`}
        />
      ))}
    </div>
  );
}
