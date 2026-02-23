import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full">
      {/* Top Heading Overlay - Desktop Only (Hidden on mobile per SS) */}
      <div className="hidden md:block absolute top-6 left-0 w-full z-10 px-4 text-center">
        <h1 className="text-white md:text-2xl lg:text-[28px] font-bold leading-tight drop-shadow-lg max-w-5xl mx-auto">
          The Determining Pricelists In Israel For Tractors And Agricultural
          Equipment, Heavy Mechanical Equipment, Cranes And Truck Bodies
        </h1>
      </div>

      {/* Banner Container: Mobile stacked, Desktop row */}
      <div className="flex flex-col md:flex-row w-full overflow-hidden">
        {/* Left Section (Tractors) */}
        <div className="relative flex-1 h-[150px] md:h-[500px] lg:h-[670px]">
          <img
            src="banner1.avif"
            alt="Tractors"
            className="w-full h-full object-cover"
          />
          {/* Red Label - Mobile position at top, Desktop centered */}
          <div className="absolute top-12 md:top-[212px] left-0 md:-translate-y-1/2 w-[280px] md:w-[200px] lg:w-[336px] bg-[#8B1D1D] p-3 md:p-4 flex justify-between items-center cursor-pointer hover:bg-[#6b1616] transition-colors border-y-2 md:border-y-3 border-r-2 md:border-r-3 border-gray-400 rounded-r-md shadow-2xl">
            <span className="text-white font-light md:font-bold text-[20px] md:text-lg lg:text-[20px] leading-tight tracking-tight uppercase md:normal-case">
              Pricelist For Tractors And
              Heavy Mechanical Equipment
            </span>
            <span className="text-white text-xl md:text-3xl font-light ml-2">›</span>
          </div>
        </div>

        {/* Right Section (Cranes) */}
        <div className="relative flex-1 h-[150px] md:h-[500px] lg:h-[670px]">
          <img
            src="banner2.webp"
            alt="Cranes"
            className="w-full h-full object-cover"
          />
          {/* Red Label - Same mobile/desktop logic */}
          <div className="absolute top-12 md:top-[200px] left-0 md:-translate-y-1/2 w-[280px] md:w-[200px] lg:w-[336px] bg-[#8B1D1D] p-3 md:p-4 flex justify-between items-center cursor-pointer hover:bg-[#6b1616] transition-colors border-y-2 md:border-y-3 border-r-2 md:border-r-3 border-gray-400 rounded-r-md shadow-2xl">
            <span className="text-white font-light md:font-bold text-[20px] md:text-lg lg:text-[20px] leading-tight tracking-tight uppercase md:normal-case">
              Pricelist For Cranes And Truck Bodies
            </span>
            <span className="text-white text-xl md:text-3xl font-light ml-2">›</span>
          </div>
        </div>
      </div>

      {/* Bottom Subscription Selector - Mobile is relative (flows after images) per SS */}
      <div className="relative md:absolute md:bottom-3 left-0 w-full text-center px-4 py-8 md:py-0 bg-[#8B1D1D] md:bg-transparent">
        <h2 className="text-white text-[26px] md:text-[36px] font-bold mb-6 md:mb-3">
          Choose The Right Subscription For Your Needs:
        </h2>
        
        {/* Buttons: 2x2 Grid on Mobile per SS, Flex on Desktop */}
        <div className="grid grid-cols-2 md:flex md:flex-row justify-center gap-3 md:gap-10 max-w-[360px] md:max-w-none mx-auto">
          {["Daily", "Weekly", "Monthly", "Annually"].map((plan) => (
            <button
              key={plan}
              className="bg-white border-2 border-[#8B1D1D] text-black px-4 py-2 md:pl-8 md:pr-0 md:py-2 rounded-md font-bold flex items-center justify-center md:justify-between gap-2 md:gap-0 shadow-lg hover:bg-gray-100 transition-all text-[20px] md:text-[14px] md:text-base w-full md:w-[125px]"
            >
              <span>{plan}</span>
              <span className="text-[#8B1D1D] text-xl font-black pr-2">›</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;