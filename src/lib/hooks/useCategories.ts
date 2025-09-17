import { useMemo } from 'react';
import { Category } from '@/lib/types';
import { getCategoriesSync } from '@/lib/data/mock';

/**
 * Hook do pobierania i przygotowania danych kategorii
 */
export function useCategories(): Category[] {
  return useMemo(() => {
    // Na razie: sync data loading z mock data
    return getCategoriesSync();
  }, []);
}
