import { Category, Product, ProductListItem, RelatedProduct } from '@/lib/types';

/**
 * Placeholder dla Shopify Storefront API
 * TODO: Implementacja z rzeczywistym API
 */

export async function getCategories(): Promise<Category[]> {
  console.warn('Shopify API not implemented yet, falling back to mock data');
  // TODO: Implementacja z Shopify Storefront API
  // const query = gql`...`;
  // const response = await shopifyClient.query({ query });
  return [];
}

export async function getProducts(): Promise<ProductListItem[]> {
  console.warn('Shopify API not implemented yet, falling back to mock data');
  // TODO: Implementacja z Shopify Storefront API
  return [];
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  console.warn('Shopify API not implemented yet, falling back to mock data');
  // TODO: Implementacja z Shopify Storefront API
  return null;
}

export async function getRelatedProducts(): Promise<RelatedProduct[]> {
  console.warn('Shopify API not implemented yet, falling back to mock data');
  // TODO: Implementacja z Shopify Storefront API
  return [];
}
