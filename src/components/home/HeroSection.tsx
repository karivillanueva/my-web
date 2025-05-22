import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="absolute top-0 left-0 h-[77%] w-full hidden md:block z-0">
      <div className="flex h-full">
        <div className="bg-[#16191C] w-[50%]" />
        <div className="bg-[#D2CFC8] w-[50%]" />
      </div>

      <div className="absolute inset-0 flex w-full h-full items-end">
        <Image
          src="/images/desktop.png"
          alt="Computer"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
