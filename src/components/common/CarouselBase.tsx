'use client';

import React, { useState } from 'react';

interface CarouselBaseProps {
  children: React.ReactNode[];
  itemsPerView?: number;
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
}

export default function CarouselBase({ 
  children, 
  itemsPerView = 2, 
  className = '',
  showDots = false,
  showArrows = false
}: CarouselBaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = children.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  if (totalItems === 0) return null;

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            width: `${(totalItems / itemsPerView) * 100}%`
          }}
        >
          {children.map((child, index) => (
            <div 
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / totalItems}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalItems > itemsPerView && (
        <>
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Poprzedni slajd"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Następny slajd"
          >
            ›
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && totalItems > itemsPerView && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-brand-primary' : 'bg-gray-300'
              }`}
              aria-label={`Przejdź do slajdu ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
