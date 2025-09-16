'use client';

import { useState } from 'react';

export default function FooterLinks() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <div className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {/* ABOUT US Section */}
          <div className="border-b border-gray-200 pb-4">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="font-semibold text-gray-900">ABOUT US</span>
              <span className="text-gray-500 text-xl">
                {aboutOpen ? '−' : '+'}
              </span>
            </button>
            {aboutOpen && (
              <div className="mt-4 space-y-2">
                <a href="/about" className="block text-gray-600 hover:text-gray-900">
                  O nas
                </a>
                <a href="/about#mission" className="block text-gray-600 hover:text-gray-900">
                  Nasza misja
                </a>
                <a href="/about#team" className="block text-gray-600 hover:text-gray-900">
                  Zespół
                </a>
                <a href="/about#contact" className="block text-gray-600 hover:text-gray-900">
                  Kontakt
                </a>
              </div>
            )}
          </div>

          {/* HELP Section */}
          <div>
            <button
              onClick={() => setHelpOpen(!helpOpen)}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="font-semibold text-gray-900">HELP</span>
              <span className="text-gray-500 text-xl">
                {helpOpen ? '−' : '+'}
              </span>
            </button>
            {helpOpen && (
              <div className="mt-4 space-y-2">
                <a href="/help" className="block text-gray-600 hover:text-gray-900">
                  Pomoc
                </a>
                <a href="/help#faq" className="block text-gray-600 hover:text-gray-900">
                  FAQ
                </a>
                <a href="/help#shipping" className="block text-gray-600 hover:text-gray-900">
                  Dostawa
                </a>
                <a href="/help#returns" className="block text-gray-600 hover:text-gray-900">
                  Zwroty
                </a>
                <a href="/help#contact" className="block text-gray-600 hover:text-gray-900">
                  Kontakt
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
