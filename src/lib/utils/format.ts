/**
 * Utility functions for formatting data
 */

/**
 * Formatuje cenę z groszy na złotówki z walutą
 */
export function formatPrice(priceInCents: number, currency: string = 'ZŁ'): string {
  const priceInZloty = priceInCents / 100;
  return `${priceInZloty} ${currency}`;
}

/**
 * Formatuje cenę bez waluty (tylko liczba)
 */
export function formatPriceNumber(priceInCents: number): string {
  const priceInZloty = priceInCents / 100;
  return priceInZloty.toString();
}

/**
 * Formatuje handle URL (lowercase, myślniki)
 */
export function formatHandle(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Formatuje tekst na uppercase z tracking
 */
export function formatUppercase(text: string): string {
  return text.toUpperCase();
}

/**
 * Formatuje alt text dla obrazu
 */
export function formatImageAlt(text: string, type: 'product' | 'category' = 'product'): string {
  const prefix = type === 'product' ? 'Produkt' : 'Kategoria';
  return `${prefix} ${text}`;
}
