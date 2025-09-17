import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://miauu-shop.pl';
  
  // Statyczne strony
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Kategorie (statyczne dla MVP)
  const categories = [
    'view-all',
    't-shirts', 
    'sweatshirts',
    'vests',
    'pants'
  ];

  const categoryPages = categories.map(category => ({
    url: `${baseUrl}/category/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // TODO: W przyszłości dodać dynamiczne produkty z bazy danych
  // const products = await getProducts();
  // const productPages = products.map(product => ({
  //   url: `${baseUrl}/product/${product.handle}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.8,
  // }));

  return [
    ...staticPages,
    ...categoryPages,
    // ...productPages, // W przyszłości
  ];
}
