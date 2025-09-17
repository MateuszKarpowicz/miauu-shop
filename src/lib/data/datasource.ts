import { Category, Product, ProductListItem, RelatedProduct, ProductFilters } from '@/lib/types';
import * as mockData from './mock';
import * as shopifyData from './shopify';

// Przełącznik źródła danych
const USE_MOCK = process.env.USE_MOCK === 'true' || process.env.NODE_ENV === 'development';

/**
 * Główny punkt wejścia dla danych
 * Automatycznie wybiera źródło na podstawie ENV
 */

export async function getCategories(): Promise<Category[]> {
  try {
    if (USE_MOCK) {
      return await mockData.getCategories();
    }
    return await shopifyData.getCategories();
  } catch (error) {
    console.warn('Error in getCategories, falling back to mock:', error);
    return await mockData.getCategories();
  }
}

export async function getProducts(filters: ProductFilters = {}): Promise<ProductListItem[]> {
  try {
    if (USE_MOCK) {
      return await mockData.getProducts(filters);
    }
    return await shopifyData.getProducts();
  } catch (error) {
    console.warn('Error in getProducts, falling back to mock:', error);
    return await mockData.getProducts(filters);
  }
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  try {
    if (USE_MOCK) {
      return await mockData.getProductByHandle(handle);
    }
    return await shopifyData.getProductByHandle(handle);
  } catch (error) {
    console.warn('Error in getProductByHandle, falling back to mock:', error);
    return await mockData.getProductByHandle(handle);
  }
}

export async function getRelatedProducts(handle: string, limit: number = 2): Promise<RelatedProduct[]> {
  try {
    if (USE_MOCK) {
      return await mockData.getRelatedProducts(handle, limit);
    }
    return await shopifyData.getRelatedProducts();
  } catch (error) {
    console.warn('Error in getRelatedProducts, falling back to mock:', error);
    return await mockData.getRelatedProducts(handle, limit);
  }
}

// Eksport informacji o źródle danych (dla debugowania)
export const dataSource = {
  isMock: USE_MOCK,
  source: USE_MOCK ? 'mock' : 'shopify'
};
