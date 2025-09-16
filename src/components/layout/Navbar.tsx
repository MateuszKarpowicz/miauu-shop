'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/miauu-logo.svg"
              alt="Miauu Shop"
              width={80}
              height={32}
              className="h-8"
            />
          </Link>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            {/* Shopping bag icon */}
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
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
              className="text-gray-700 hover:text-gray-900 transition-colors"
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
