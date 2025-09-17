import { Image } from './common';

export interface Product {
  id: string;
  handle: string;
  name: string;
  price: number; // Cena jako number (w groszach lub głównej jednostce)
  images: Image[];
  sizes: string[];
  colors: string[];
  description?: string;
  categoryHandle?: string;
  inStock?: boolean;
  createdAt?: Date;
}

export interface ProductListItem {
  id: string;
  handle: string;
  name: string;
  price: number;
  image: Image;
  colors: string[];
  swatches: string[]; // Dodajemy swatches dla kompatybilności
  categoryHandle?: string;
}

export type RelatedProduct = ProductListItem;
