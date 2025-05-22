'use client';

import HeroSection from '@/components/home/HeroSection';

const Home = () => {
  return (
    <div className="relative flex w-full h-[calc(100vh-4rem)] min-h-[650px] overflow-hidden bg-[#D2CFC8] flex-col md:justify-between">
      <div className="relative flex w-full mt-[10%] flex-col md:flex-row justify-around items-center z-10">
        <div className="w-[75%] h-30 md:w-auto md:h-auto bg-[#16191C] md:bg-transparent rounded-lg flex items-center justify-center m-4">
          <span className="font-bold text-2xl text-[#D2CFC8]">
            Eng. Software
          </span>
        </div>
        <div className="w-[75%] h-30 md:w-auto md:h-auto bg-white/20 md:bg-transparent rounded-lg flex items-center justify-center m-4">
          <span className="font-bold text-2xl text-[#16191C]">
            Eng. Mechanical
          </span>
        </div>
      </div>

      <span className="text-xl text-[#16191C] text-center mb-10 m-2 max-w-[75%] self-center">
        Hi there! Welcome to my website 👋
        <br />A place where you can get to know more about who I am and what I
        build. <br />
        Feel free to explore!
      </span>

      <HeroSection />
    </div>
  );
};

export default Home;
