import { formatImageAlt } from './format';

export interface MetaTags {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
}

/**
 * Generuje meta tagi dla SEO
 */
export function getMetaTags({ 
  title, 
  description, 
  image, 
  url, 
  type = 'website' 
}: MetaTags) {
  const siteName = 'MIAUU SHOP';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullUrl = url ? `https://miauu-shop.pl${url}` : 'https://miauu-shop.pl';
  const fullImage = image ? `https://miauu-shop.pl${image}` : 'https://miauu-shop.pl/images/hero-picture.jpg';

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: formatImageAlt(title, 'product'),
        },
      ],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generuje meta tagi dla strony głównej
 */
export function getHomeMetaTags() {
  return getMetaTags({
    title: 'MIAUU SHOP - Ubrania dla dzieci',
    description: 'Sklep z ubraniami dla dzieci. Najwyższa jakość, wygodne fasony i piękne wzory. Sprawdź naszą kolekcję sweatshirtów, t-shirtów i innych ubrań.',
    image: '/images/hero-picture.jpg',
    url: '/',
  });
}

/**
 * Generuje meta tagi dla strony kategorii
 */
export function getCategoryMetaTags(categoryName: string, categorySlug: string) {
  return getMetaTags({
    title: `${categoryName} - MIAUU SHOP`,
    description: `Zobacz naszą kolekcję ${categoryName.toLowerCase()}. Najwyższa jakość, wygodne fasony i piękne wzory dla dzieci.`,
    url: `/category/${categorySlug}`,
  });
}

/**
 * Generuje meta tagi dla strony produktu
 */
export function getProductMetaTags(productName: string, productHandle: string, price: number, image?: string) {
  return getMetaTags({
    title: `${productName} - MIAUU SHOP`,
    description: `${productName} - wysokiej jakości ubranie dla dzieci. Cena: ${price} zł. Sprawdź szczegóły i dodaj do koszyka.`,
    image,
    url: `/product/${productHandle}`,
    type: 'product',
  });
}
