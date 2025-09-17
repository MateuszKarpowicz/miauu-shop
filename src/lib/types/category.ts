import { Image } from './common';

export interface Category {
  handle: string;
  label: string;
  image?: Image;
  productsCount?: number;
}
