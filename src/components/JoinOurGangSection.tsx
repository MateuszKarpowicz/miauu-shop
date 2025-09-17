import SectionWrapper from './common/SectionWrapper';
import SectionHeader from './common/SectionHeader';
import ImageWrapper from './common/ImageWrapper';
import CarouselBase from './common/CarouselBase';
import ugcData from '../data/ugc.json';

export default function JoinOurGangSection() {
  return (
    <SectionWrapper>
      <SectionHeader>JOIN OUR GANG</SectionHeader>
      
      <CarouselBase 
        itemsPerView={2} 
        showArrows={true}
        showDots={true}
        className="px-md"
      >
        {ugcData.map((image) => (
          <div key={image.id} className="px-sm">
            <div className="aspect-[3/4] overflow-hidden">
              <ImageWrapper
                src={image.image}
                alt={image.alt}
                className="w-full h-full"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        ))}
      </CarouselBase>
    </SectionWrapper>
  );
}
