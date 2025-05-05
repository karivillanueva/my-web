import Image from 'next/image';
import { HeroSectionPropTypes } from './HeroSectionPropTypes';

const HeroSection = ({ handleMouseMove, progress }: HeroSectionPropTypes) => {
  const leftWidth = !progress ? '50%' : `${progress * 100}%`;
  const rightWidth = !progress ? '50%' : `${(1 - progress) * 100}%`;

  return (
    <div className="relative w-full h-[77%]" onMouseMove={handleMouseMove}>
      <div className="flex h-full">
        <div className=" bg-[#16191C]" style={{ width: rightWidth }} />
        <div className=" bg-[#D2CFC8]" style={{ width: leftWidth }} />
      </div>

      <div className="absolute inset-0 flex w-full items-end">
        <div className="relative w-full h-full">
          <Image
            src="/images/desktop.png"
            alt="Computer"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
