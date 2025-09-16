import Image from 'next/image';

export default function WhatsNewSection() {
  const products = [
    {
      id: 'new-1',
      name: 'T-SHIRT',
      image: '/images/new-1.jpg',
      price: '89.99 zł'
    },
    {
      id: 'new-2', 
      name: 'SWEATSHIRT',
      image: '/images/new-2.jpg',
      price: '79.99 zł'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          WHAT'S NEW
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="block bg-white"
            >
              {/* Product Image */}
              <div className="aspect-[3/4] relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-900 text-sm uppercase mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
