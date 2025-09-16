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
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>

          {/* Menu items */}
          <div className="mt-8 space-y-6">
            {/* View All */}
            <Link
              href="/category"
              className="block text-lg font-semibold text-gray-900 hover:text-gray-600"
              onClick={onClose}
            >
              VIEW ALL
            </Link>

            {/* Categories */}
            <div className="space-y-4">
              <Link
                href="/category/t-shirts"
                className="block text-lg font-semibold text-gray-900 hover:text-gray-600"
                onClick={onClose}
              >
                T-SHIRTS
              </Link>
              
              <Link
                href="/category/sweatshirts"
                className="block text-lg font-semibold text-gray-900 hover:text-gray-600"
                onClick={onClose}
              >
                SWEATSHIRTS
              </Link>
              
              <Link
                href="/category/vests"
                className="block text-lg font-semibold text-gray-900 hover:text-gray-600"
                onClick={onClose}
              >
                VESTS
              </Link>
              
              <Link
                href="/category/pants"
                className="block text-lg font-semibold text-gray-900 hover:text-gray-600"
                onClick={onClose}
              >
                PANTS
              </Link>
            </div>

            {/* About Us - Accordion */}
            <div className="border-t border-gray-200 pt-4">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="text-lg font-semibold text-gray-900">About us</span>
                <span className="text-gray-500 text-xl">
                  {aboutOpen ? '−' : '+'}
                </span>
              </button>
              {aboutOpen && (
                <div className="mt-4 space-y-2">
                  <Link href="/about" className="block text-gray-600 hover:text-gray-900" onClick={onClose}>
                    O nas
                  </Link>
                  <Link href="/about#mission" className="block text-gray-600 hover:text-gray-900" onClick={onClose}>
                    Nasza misja
                  </Link>
                  <Link href="/about#team" className="block text-gray-600 hover:text-gray-900" onClick={onClose}>
                    Zespół
                  </Link>
                  <Link href="/about#contact" className="block text-gray-600 hover:text-gray-900" onClick={onClose}>
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
                <span className="text-lg font-semibold text-gray-900">Help</span>
                <span className="text-gray-500 text-xl">
                  {helpOpen ? '−' : '+'}
                </span>
              </button>
              {helpOpen && (
                <div className="mt-4 space-y-2">
                  <Link href="/help" className="block text-gray-600 hover:text-gray-900" onClick={onClose}>
                    Pomoc
                  </Link>
                  <Link href="/help#faq" className="block text-gray-600 hover:text-gray-900" onClick={onClose}>
                    FAQ
                  </Link>
                  <Link href="/help#shipping" className="block text-gray-600 hover:text-gray-900" onClick={onClose}>
                    Dostawa
                  </Link>
                  <Link href="/help#returns" className="block text-gray-600 hover:text-gray-900" onClick={onClose}>
                    Zwroty
                  </Link>
                  <Link href="/help#contact" className="block text-gray-600 hover:text-gray-900" onClick={onClose}>
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
