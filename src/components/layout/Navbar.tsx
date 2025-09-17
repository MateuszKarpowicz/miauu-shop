'use client';

import { useState } from 'react';
import Link from 'next/link';
import ImageWrapper from '@/components/common/ImageWrapper';
import { getImageSizes } from '@/lib/config/images';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-bg-section">
      <div className="max-w-7xl mx-auto px-md py-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center ml-md">
            <ImageWrapper
              src="/logos/logo.svg"
              alt="miauu"
              width={124}
              height={24}
              className="h-6 w-auto"
              type="logo"
              sizes={getImageSizes('logo')}
            />
          </Link>

          {/* Right side icons */}
          <div className="flex items-center space-x-10 mr-md">
            {/* Shopping bag icon */}
            <button 
              className="text-text-primary hover:text-text-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded"
              aria-label="Koszyk"
            >
              <ImageWrapper
                src="/icons/shopping-bag.svg"
                alt="Koszyk"
                width={24}
                height={24}
                className="w-6 h-6"
                type="icon"
                sizes={getImageSizes('icon')}
              />
            </button>

            {/* Hamburger menu icon */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="text-text-primary hover:text-text-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded mr-sm"
              aria-label="Menu"
            >
              <ImageWrapper
                src="/icons/hamburger.svg"
                alt="Menu"
                width={24}
                height={24}
                className="w-6 h-6"
                type="icon"
                sizes={getImageSizes('icon')}
              />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </nav>
  );
}
