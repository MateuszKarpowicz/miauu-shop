import ImageWrapper from '@/components/common/ImageWrapper';
import { getImageSizes } from '@/lib/config/images';

export default function Footer() {
  return (
    <footer className="bg-brand-secondary py-xl">
      <div className="container mx-auto px-md">
        <div className="flex justify-center items-center space-x-12">
          {/* Phone Icon */}
          <a 
            href="tel:+48123456789" 
            className="text-text-inverse hover:opacity-80 transition-opacity"
            aria-label="Zadzwoń do nas"
          >
            <ImageWrapper
              src="/icons/phone.svg"
              alt="Telefon"
              width={38}
              height={38}
              className="w-[38px] h-[38px]"
              type="icon"
              sizes={getImageSizes('icon')}
            />
          </a>

          {/* Mail Icon */}
          <a 
            href="mailto:kontakt@miauu-shop.pl" 
            className="text-text-inverse hover:opacity-80 transition-opacity"
            aria-label="Napisz do nas"
          >
            <ImageWrapper
              src="/icons/mail.svg"
              alt="Email"
              width={38}
              height={38}
              className="w-[38px] h-[38px]"
              type="icon"
              sizes={getImageSizes('icon')}
            />
          </a>

          {/* Instagram Icon */}
          <a 
            href="https://instagram.com/miauu_shop" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-inverse hover:opacity-80 transition-opacity"
            aria-label="Odwiedź nasz Instagram"
          >
            <ImageWrapper
              src="/icons/instagram.svg"
              alt="Instagram"
              width={38}
              height={38}
              className="w-[38px] h-[38px]"
              type="icon"
              sizes={getImageSizes('icon')}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
