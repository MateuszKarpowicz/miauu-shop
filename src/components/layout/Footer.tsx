import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#6B3E00] py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-12">
          {/* Phone Icon */}
          <a 
            href="tel:+48123456789" 
            className="text-white hover:opacity-80 transition-opacity"
            aria-label="Zadzwoń do nas"
          >
            <Image
              src="/icons/phone.svg"
              alt="Telefon"
              width={38}
              height={38}
              className="w-[38px] h-[38px]"
            />
          </a>

          {/* Mail Icon */}
          <a 
            href="mailto:kontakt@miauu-shop.pl" 
            className="text-white hover:opacity-80 transition-opacity"
            aria-label="Napisz do nas"
          >
            <Image
              src="/icons/mail.svg"
              alt="Email"
              width={38}
              height={38}
              className="w-[38px] h-[38px]"
            />
          </a>

          {/* Instagram Icon */}
          <a 
            href="https://instagram.com/miauu_shop" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity"
            aria-label="Odwiedź nasz Instagram"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={38}
              height={38}
              className="w-[38px] h-[38px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
