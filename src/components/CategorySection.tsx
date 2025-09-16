import Image from 'next/image';
import Link from 'next/link';

export default function CategorySection() {
  const categories = [
    {
      id: 'sweatshirts',
      name: 'sweatshirts',
      image: '/images/cat-sweatshirts.jpg',
      slug: 'sweatshirts',
      isSelected: true
    },
    {
      id: 'pants',
      name: 'pants',
      image: '/images/cat-pants.jpg',
      slug: 'pants',
      isSelected: false
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          SORT BY CATEGORY
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="block bg-white"
            >
              {/* Category Image */}
              <div className="aspect-[3/4] relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Category Name */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-900 text-sm uppercase">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
