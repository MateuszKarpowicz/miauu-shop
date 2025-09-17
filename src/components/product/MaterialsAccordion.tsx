'use client';

import { useState } from 'react';

export default function MaterialsAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-border-light">
      <button
        onClick={toggleAccordion}
        className="w-full flex items-center justify-between py-4 px-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded"
        aria-expanded={isOpen}
        aria-controls="materials-care-content"
      >
        <h2 className="text-sm font-medium text-text-primary uppercase tracking-wider">
          MATERIALS & CARE
        </h2>
        <span className={`text-xl transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div
        id="materials-care-content"
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-md pb-md text-sm text-text-muted">
          <p>Informacje o materiałach i pielęgnacji będą dostępne wkrótce.</p>
        </div>
      </div>
    </div>
  );
}
