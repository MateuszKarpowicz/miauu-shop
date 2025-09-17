import { useMemo } from 'react';
import { RelatedProduct } from '@/lib/types';

/**
 * Hook do pobierania produktów "You May Like"
 */
export function useYouMayLike(): RelatedProduct[] {
  return useMemo(() => {
    // W przyszłości: async hook z React Query
    // Na razie: sync data loading
    return [];
  }, []);
}
