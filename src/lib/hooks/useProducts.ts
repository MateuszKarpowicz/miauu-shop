import { useMemo } from 'react';
import { ProductListItem } from '@/lib/types';
import { getProductsSync } from '@/lib/data/mock';

/**
 * Hook do pobierania produktów z filtrowaniem po kategorii
 */
export function useProducts(categorySlug?: string): ProductListItem[] {
  return useMemo(() => {
    // Na razie: sync data loading z mock data
    return getProductsSync({ categoryHandle: categorySlug });
  }, [categorySlug]);
}
