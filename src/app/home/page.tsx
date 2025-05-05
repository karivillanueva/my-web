'use client';

import HeroSection from '@/components/home/HeroSection';
import { useMouseProgress } from '@/hooks/home/useMouseProgress';

const Home = () => {
  const { progress, handleMouseMove } = useMouseProgress();

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#D2CFC8]">
      <span className="absolute top-[20%] left-[20%] z-10 font-bold text-2xl">
        Eng. Software
      </span>
      <span className="absolute top-[20%] right-[20%] z-10 font-bold text-2xl">
        Eng. Mechanical
      </span>
      <HeroSection handleMouseMove={handleMouseMove} progress={progress} />
    </div>
  );
};

export default Home;
