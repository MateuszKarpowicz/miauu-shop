import Image from 'next/image';

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#8b4513] py-4 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-8">
          {/* Phone Icon */}
          <button 
            className="text-white hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded p-2"
            aria-label="Telefon"
          >
            <Image
              src="/icons/phone.svg"
              alt="Telefon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>

          {/* Mail Icon */}
          <button 
            className="text-white hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded p-2"
            aria-label="Email"
          >
            <Image
              src="/icons/mail.svg"
              alt="Email"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>

          {/* Instagram Icon */}
          <button 
            className="text-white hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded p-2"
            aria-label="Instagram"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
