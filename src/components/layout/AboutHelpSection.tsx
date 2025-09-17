'use client';

import { useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';

export default function AboutHelpSection() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <SectionWrapper className="py-section-y mb-20">
      <div className="space-y-4">
        {/* ABOUT US Accordion */}
        <div className="border-b border-border-light">
          <button
            onClick={() => toggleAccordion('about')}
            className="w-full flex items-center justify-between py-md text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded"
            aria-expanded={openAccordion === 'about'}
            aria-controls="about-content"
          >
            <span className="text-lg font-medium text-text-primary">ABOUT US</span>
            <span className={`text-xl transition-transform duration-200 ${openAccordion === 'about' ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          <div
            id="about-content"
            className={`overflow-hidden transition-all duration-200 ${openAccordion === 'about' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="pb-md text-text-muted">
              <p>Informacje o naszej firmie i misji będą dostępne wkrótce.</p>
            </div>
          </div>
        </div>

        {/* HELP Accordion */}
        <div className="border-b border-border-light">
          <button
            onClick={() => toggleAccordion('help')}
            className="w-full flex items-center justify-between py-md text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded"
            aria-expanded={openAccordion === 'help'}
            aria-controls="help-content"
          >
            <span className="text-lg font-medium text-text-primary">HELP</span>
            <span className={`text-xl transition-transform duration-200 ${openAccordion === 'help' ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          <div
            id="help-content"
            className={`overflow-hidden transition-all duration-200 ${openAccordion === 'help' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="pb-md text-text-muted">
              <p>Centrum pomocy i często zadawane pytania będą dostępne wkrótce.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
