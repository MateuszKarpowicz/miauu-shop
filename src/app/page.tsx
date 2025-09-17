import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import WhatsNewSection from '@/components/WhatsNewSection';
import JoinOurGangSection from '@/components/JoinOurGangSection';
import ValuesText from '@/components/ValuesText';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-page pb-20">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

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
