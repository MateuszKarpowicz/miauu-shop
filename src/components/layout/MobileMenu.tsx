'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div className="fixed right-0 top-0 h-screen w-screen sm:w-96 bg-bg-section shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 h-full overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-text-muted hover:text-text-primary"
          >
            ✕
          </button>

          {/* Menu items */}
          <div className="mt-8 space-y-6">
            {/* View All */}
            <Link
              href="/category"
              className="block text-lg font-semibold text-text-primary hover:text-text-muted"
              onClick={onClose}
            >
              VIEW ALL
            </Link>

            {/* Categories */}
            <div className="space-y-4">
              <Link
                href="/category/t-shirts"
                className="block text-lg font-semibold text-text-primary hover:text-text-muted"
                onClick={onClose}
              >
                T-SHIRTS
              </Link>
              
              <Link
                href="/category/sweatshirts"
                className="block text-lg font-semibold text-text-primary hover:text-text-muted"
                onClick={onClose}
              >
                SWEATSHIRTS
              </Link>
              
              <Link
                href="/category/vests"
                className="block text-lg font-semibold text-text-primary hover:text-text-muted"
                onClick={onClose}
              >
                VESTS
              </Link>
              
              <Link
                href="/category/pants"
                className="block text-lg font-semibold text-text-primary hover:text-text-muted"
                onClick={onClose}
              >
                PANTS
              </Link>
            </div>

            {/* About Us - Accordion */}
            <div className="border-t border-border-light pt-md">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="text-lg font-semibold text-text-primary">About us</span>
                <span className="text-text-muted text-xl">
                  {aboutOpen ? '−' : '+'}
                </span>
              </button>
              {aboutOpen && (
                <div className="mt-4 space-y-2">
                  <Link href="/about" className="block text-text-muted hover:text-text-primary" onClick={onClose}>
                    O nas
                  </Link>
                  <Link href="/about#mission" className="block text-text-muted hover:text-text-primary" onClick={onClose}>
                    Nasza misja
                  </Link>
                  <Link href="/about#team" className="block text-text-muted hover:text-text-primary" onClick={onClose}>
                    Zespół
                  </Link>
                  <Link href="/about#contact" className="block text-text-muted hover:text-text-primary" onClick={onClose}>
                    Kontakt
                  </Link>
                </div>
              )}
            </div>

            {/* Help - Accordion */}
            <div>
              <button
                onClick={() => setHelpOpen(!helpOpen)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="text-lg font-semibold text-text-primary">Help</span>
                <span className="text-text-muted text-xl">
                  {helpOpen ? '−' : '+'}
                </span>
              </button>
              {helpOpen && (
                <div className="mt-4 space-y-2">
                  <Link href="/help" className="block text-text-muted hover:text-text-primary" onClick={onClose}>
                    Pomoc
                  </Link>
                  <Link href="/help#faq" className="block text-text-muted hover:text-text-primary" onClick={onClose}>
                    FAQ
                  </Link>
                  <Link href="/help#shipping" className="block text-text-muted hover:text-text-primary" onClick={onClose}>
                    Dostawa
                  </Link>
                  <Link href="/help#returns" className="block text-text-muted hover:text-text-primary" onClick={onClose}>
                    Zwroty
                  </Link>
                  <Link href="/help#contact" className="block text-text-muted hover:text-text-primary" onClick={onClose}>
                    Kontakt
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
