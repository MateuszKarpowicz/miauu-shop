'use client';

import { useState } from 'react';

export default function FooterLinks() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <div className="bg-bg-section border-t border-border-light">
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {/* ABOUT US Section */}
          <div className="border-b border-border-light pb-md">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="font-semibold text-text-primary">ABOUT US</span>
              <span className="text-text-muted text-xl">
                {aboutOpen ? '−' : '+'}
              </span>
            </button>
            {aboutOpen && (
              <div className="mt-4 space-y-2">
                <a href="/about" className="block text-text-muted hover:text-text-primary">
                  O nas
                </a>
                <a href="/about#mission" className="block text-text-muted hover:text-text-primary">
                  Nasza misja
                </a>
                <a href="/about#team" className="block text-text-muted hover:text-text-primary">
                  Zespół
                </a>
                <a href="/about#contact" className="block text-text-muted hover:text-text-primary">
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
              <span className="font-semibold text-text-primary">HELP</span>
              <span className="text-text-muted text-xl">
                {helpOpen ? '−' : '+'}
              </span>
            </button>
            {helpOpen && (
              <div className="mt-4 space-y-2">
                <a href="/help" className="block text-text-muted hover:text-text-primary">
                  Pomoc
                </a>
                <a href="/help#faq" className="block text-text-muted hover:text-text-primary">
                  FAQ
                </a>
                <a href="/help#shipping" className="block text-text-muted hover:text-text-primary">
                  Dostawa
                </a>
                <a href="/help#returns" className="block text-text-muted hover:text-text-primary">
                  Zwroty
                </a>
                <a href="/help#contact" className="block text-text-muted hover:text-text-primary">
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
