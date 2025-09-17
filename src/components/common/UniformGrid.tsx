import React from 'react';

interface UniformGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2;
}

export default function UniformGrid({ 
  children, 
  className = '',
  columns = 2 
}: UniformGridProps) {
  const gridCols = columns === 2 ? 'grid-cols-2' : 'grid-cols-1';
  
  return (
    <div className={`grid ${gridCols} gap-tile-gap ${className}`}>
      {children}
    </div>
  );
}
