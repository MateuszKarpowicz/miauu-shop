import { Category, Product, ProductListItem, RelatedProduct } from '@/lib/types';
import categoriesData from '@/data/categories.json';
import productsData from '@/data/products.json';
import productDetailsData from '@/data/product-details.json';
import youMayLikeData from '@/data/you-may-like.json';

// Cache dla wydajności
let categoriesCache: Category[] | null = null;
let productListCache: ProductListItem[] | null = null;

/**
 * Konwersja ceny z string "289 ZŁ" na number (28900 groszy)
 */
function parsePrice(priceString: string): number {
  const match = priceString.match(/(\d+)/);
  return match ? parseInt(match[1]) * 100 : 0; // Konwersja na grosze
}

/**
 * Pobiera wszystkie kategorie (async)
 */
export async function getCategories(): Promise<Category[]> {
  if (categoriesCache) {
    return categoriesCache;
  }

  try {
    categoriesCache = categoriesData.map(cat => ({
      handle: cat.handle,
      label: cat.name,
      image: cat.image ? {
        url: cat.image,
        alt: `Kategoria ${cat.name}`
      } : undefined,
      productsCount: 0 // W przyszłości: liczenie produktów
    }));

    return categoriesCache;
  } catch (error) {
    console.warn('Error loading categories:', error);
    return [];
  }
}

/**
 * Pobiera wszystkie kategorie (sync) - dla hooków
 */
export function getCategoriesSync(): Category[] {
  if (categoriesCache) {
    return categoriesCache;
  }

  try {
    categoriesCache = categoriesData.map(cat => ({
      handle: cat.handle,
      label: cat.name,
      image: cat.image ? {
        url: cat.image,
        alt: `Kategoria ${cat.name}`
      } : undefined,
      productsCount: 0 // W przyszłości: liczenie produktów
    }));

    return categoriesCache;
  } catch (error) {
    console.warn('Error loading categories:', error);
    return [];
  }
}

/**
 * Pobiera produkty z filtrowaniem i sortowaniem
 */
export async function getProducts(filters: {
  categoryHandle?: string;
  limit?: number;
  sort?: 'price-asc' | 'price-desc' | 'newest';
} = {}): Promise<ProductListItem[]> {
  if (productListCache && !filters.categoryHandle && !filters.sort) {
    return productListCache.slice(0, filters.limit);
  }

  try {
    let products = productsData.map(product => ({
      id: product.id,
      handle: product.handle,
      name: product.name,
      price: parsePrice(product.price),
      image: {
        url: product.image,
        alt: product.name
      },
      colors: product.swatches,
      swatches: product.swatches, // swatches to to samo co colors
      categoryHandle: 'sweatshirts' // MVP: wszystkie produkty to sweatshirts
    }));

    // Filtrowanie po kategorii
    if (filters.categoryHandle && filters.categoryHandle !== 'view-all') {
      products = products.filter(p => p.categoryHandle === filters.categoryHandle);
    }

    // Sortowanie
    if (filters.sort) {
      switch (filters.sort) {
        case 'price-asc':
          products.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          products.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          // MVP: sortowanie po ID (nowsze = wyższe ID)
          products.sort((a, b) => b.id.localeCompare(a.id));
          break;
      }
    }

    // Limit
    if (filters.limit) {
      products = products.slice(0, filters.limit);
    }

    // Cache tylko jeśli brak filtrów
    if (!filters.categoryHandle && !filters.sort) {
      productListCache = products;
    }

    return products;
  } catch (error) {
    console.warn('Error loading products:', error);
    return [];
  }
}

/**
 * Pobiera produkty z filtrowaniem i sortowaniem (sync) - dla hooków
 */
export function getProductsSync(filters: {
  categoryHandle?: string;
  limit?: number;
  sort?: 'price-asc' | 'price-desc' | 'newest';
} = {}): ProductListItem[] {
  if (productListCache && !filters.categoryHandle && !filters.sort) {
    return productListCache.slice(0, filters.limit);
  }

  try {
    let products = productsData.map(product => ({
      id: product.id,
      handle: product.handle,
      name: product.name,
      price: parsePrice(product.price),
      image: {
        url: product.image,
        alt: product.name
      },
      colors: product.swatches,
      swatches: product.swatches, // swatches to to samo co colors
      categoryHandle: 'sweatshirts' // MVP: wszystkie produkty to sweatshirts
    }));

    // Filtrowanie po kategorii
    if (filters.categoryHandle && filters.categoryHandle !== 'view-all') {
      products = products.filter(p => p.categoryHandle === filters.categoryHandle);
    }

    // Sortowanie
    if (filters.sort) {
      switch (filters.sort) {
        case 'price-asc':
          products.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          products.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          // MVP: sortowanie po ID (nowsze = wyższe ID)
          products.sort((a, b) => b.id.localeCompare(a.id));
          break;
      }
    }

    // Limit
    if (filters.limit) {
      products = products.slice(0, filters.limit);
    }

    // Cache tylko jeśli brak filtrów
    if (!filters.categoryHandle && !filters.sort) {
      productListCache = products;
    }

    return products;
  } catch (error) {
    console.warn('Error loading products:', error);
    return [];
  }
}

/**
 * Pobiera szczegóły produktu po handle
 */
export async function getProductByHandle(_handle: string): Promise<Product | null> {
  try {
    // MVP: zwracamy pierwszy produkt z product-details.json
    const productData = productDetailsData[0];
    
    if (!productData) return null;

    return {
      id: productData.id,
      handle: productData.handle,
      name: productData.name,
      price: parsePrice(productData.price),
      images: productData.images.map(img => ({
        url: img.url,
        alt: img.alt
      })),
      sizes: productData.sizes,
      colors: productData.colors,
      categoryHandle: 'sweatshirts',
      inStock: true,
      createdAt: new Date()
    };
  } catch (error) {
    console.warn('Error loading product:', error);
    return null;
  }
}

/**
 * Pobiera powiązane produkty
 */
export async function getRelatedProducts(handle: string, limit: number = 2): Promise<RelatedProduct[]> {
  try {
    const relatedProducts = youMayLikeData.map(product => ({
      id: product.id,
      handle: product.handle,
      name: product.name,
      price: parsePrice(product.price),
      image: {
        url: product.image,
        alt: product.name
      },
      colors: product.swatches,
      swatches: product.swatches // swatches to to samo co colors
    }));

    return relatedProducts.slice(0, limit);
  } catch (error) {
    console.warn('Error loading related products:', error);
    return [];
  }
}
