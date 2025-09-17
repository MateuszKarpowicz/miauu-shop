/**
 * Mapa sizes dla optymalizacji obrazów Next.js
 * Używana w komponentach Image i ImageWrapper
 */

export const IMAGE_SIZES = {
  // Hero obraz - pełna szerokość ekranu
  hero: '100vw',
  
  // Kafle w siatce 2-kolumnowej (mobile)
  tile: '(max-width: 768px) 50vw, 25vw',
  
  // Logo w navbarze
  logo: '(max-width: 768px) 124px, 124px',
  
  // Ikony w navbarze i bottom bar
  icon: '24px',
  
  // Obrazy w karuzeli (jeśli używana)
  carousel: '(max-width: 768px) 100vw, 50vw',
  
  // Obrazy w galerii produktu
  productGallery: '(max-width: 768px) 100vw, 50vw',
  
  // Thumbnails w galerii
  thumbnail: '80px',
} as const;

export type ImageSizeKey = keyof typeof IMAGE_SIZES;

/**
 * Pobiera sizes dla danego typu obrazu
 */
export const getImageSizes = (type: ImageSizeKey): string => {
  return IMAGE_SIZES[type];
};
