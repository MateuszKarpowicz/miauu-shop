import { useMemo } from 'react';
import { Product } from '@/lib/types';

/**
 * Hook do pobierania szczegółów produktu po handle
 */
export function useProduct(_handle: string): Product | null {
  return useMemo(() => {
    // W przyszłości: async hook z React Query
    // Na razie: sync data loading
    return null;
  }, []);
}
