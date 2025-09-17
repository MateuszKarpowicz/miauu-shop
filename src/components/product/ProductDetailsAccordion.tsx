'use client';

import { useState } from 'react';

export default function ProductDetailsAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggleAccordion}
        className="w-full flex items-center justify-between py-4 px-4 text-left focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
        aria-expanded={isOpen}
        aria-controls="product-details-content"
      >
        <h2 className="text-sm font-medium text-black uppercase tracking-wider">
          PRODUCT DETAILS
        </h2>
        <span className={`text-xl transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div
        id="product-details-content"
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 pb-4 text-sm text-gray-600">
          <p>Szczegółowe informacje o produkcie będą dostępne wkrótce.</p>
        </div>
      </div>
    </div>
  );
}
