export interface Image {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}

export type SortOption = 'price-asc' | 'price-desc' | 'newest';

export interface ProductFilters {
  categoryHandle?: string;
  limit?: number;
  sort?: SortOption;
}
