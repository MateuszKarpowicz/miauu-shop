import ImageWrapper from '@/components/common/ImageWrapper';
import { getImageSizes } from '@/lib/config/images';

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-secondary py-md z-50">
      <div className="max-w-7xl mx-auto px-md">
        <div className="flex justify-center space-x-8">
          {/* Phone Icon */}
          <button 
            className="text-text-inverse hover:text-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50 rounded p-sm"
            aria-label="Telefon"
          >
            <ImageWrapper
              src="/icons/phone.svg"
              alt="Telefon"
              width={24}
              height={24}
              className="w-6 h-6"
              type="icon"
              sizes={getImageSizes('icon')}
            />
          </button>

          {/* Mail Icon */}
          <button 
            className="text-text-inverse hover:text-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50 rounded p-sm"
            aria-label="Email"
          >
            <ImageWrapper
              src="/icons/mail.svg"
              alt="Email"
              width={24}
              height={24}
              className="w-6 h-6"
              type="icon"
              sizes={getImageSizes('icon')}
            />
          </button>

          {/* Instagram Icon */}
          <button 
            className="text-text-inverse hover:text-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50 rounded p-sm"
            aria-label="Instagram"
          >
            <ImageWrapper
              src="/icons/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="w-6 h-6"
              type="icon"
              sizes={getImageSizes('icon')}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
