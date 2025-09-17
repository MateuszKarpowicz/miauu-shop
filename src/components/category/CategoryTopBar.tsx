'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Category {
  handle: string;
  label: string;
}

interface CategoryTopBarProps {
  categories: Category[];
}

export default function CategoryTopBar({ categories }: CategoryTopBarProps) {
  const pathname = usePathname();
  // Extract category from /category/[slug] or handle "view-all" for the root category page
  const currentCategory = pathname.split('/')[2] || 'view-all'; 

  return (
    <div className="sticky top-0 z-40 bg-[var(--color-brand-purple)]">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex items-center px-4 py-3 space-x-6 min-w-max">
          {categories.map((category) => {
            const isActive = category.handle === currentCategory;
            return (
              <Link
                key={category.handle}
                href={`/category/${category.handle}`}
                className={`
                  whitespace-nowrap text-sm uppercase tracking-wider
                  focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded
                  ${isActive ? 'font-bold text-white' : 'text-gray-300'}
                `}
                aria-current={isActive ? 'page' : undefined}
              >
                {category.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
