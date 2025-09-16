import Image from 'next/image';
import CategorySection from '@/components/CategorySection';
import WhatsNewSection from '@/components/WhatsNewSection';
import JoinOurGangSection from '@/components/JoinOurGangSection';
import ValuesText from '@/components/ValuesText';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full">
        <Image
          src="/images/hero-picture.jpg"
          alt="Miauu Shop - Clothes that grow with your values"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Category Section */}
      <CategorySection />

      {/* What's New Section */}
      <WhatsNewSection />

      {/* Join Our Gang Section */}
      <JoinOurGangSection />

      {/* Values Text */}
      <ValuesText />
    </div>
  );
}
