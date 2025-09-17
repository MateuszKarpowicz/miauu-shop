import SectionWrapper from './common/SectionWrapper';
import SectionHeader from './common/SectionHeader';
import ImageWrapper from './common/ImageWrapper';
import UniformGrid from './common/UniformGrid';
import ugcData from '../data/ugc.json';

export default function JoinOurGangSection() {
  return (
    <SectionWrapper>
      <SectionHeader>JOIN OUR GANG</SectionHeader>
      
      <UniformGrid>
        {ugcData.map((image) => (
          <div key={image.id} className="aspect-[3/4] overflow-hidden">
            <ImageWrapper
              src={image.image}
              alt={image.alt}
              className="w-full h-full"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </UniformGrid>
    </SectionWrapper>
  );
}
