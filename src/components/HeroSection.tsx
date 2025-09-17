import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative w-full h-[70vh] min-h-[400px] mb-6">
      <Image
        src="/images/hero-picture.jpg"
        alt="Dziecko w brązowym ubraniu z czerwonym jabłkiem na tle zieleni"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      

    </div>
  );
}
