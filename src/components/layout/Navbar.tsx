'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center ml-4">
            <Image
              src="/logos/logo.svg"
              alt="miauu"
              width={124}
              height={24}
              className="h-6 w-auto"
            />
          </Link>

          {/* Right side icons */}
          <div className="flex items-center space-x-10 mr-4">
            {/* Shopping bag icon */}
            <button 
              className="text-black hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
              aria-label="Koszyk"
            >
              <Image
                src="/icons/shopping-bag.svg"
                alt="Koszyk"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>

            {/* Hamburger menu icon */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="text-black hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 rounded mr-2"
              aria-label="Menu"
            >
              <Image
                src="/icons/hamburger.svg"
                alt="Menu"
                width={24}
                height={24}
                className="w-6 h-6"
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
