import Image from 'next/image';

export default function JoinOurGangSection() {
  const gangImages = [
    {
      id: 'gang-1',
      alt: 'Child in brown sweater',
      src: '/images/gang-1.jpg'
    },
    {
      id: 'gang-2',
      alt: 'Child in green vest and bonnet',
      src: '/images/gang-2.jpg'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          JOIN OUR GANG
        </h2>

        {/* Gang Images Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {gangImages.map((image) => (
            <div key={image.id} className="block bg-white">
              <div className="aspect-[3/4] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
