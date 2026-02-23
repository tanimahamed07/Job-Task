import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-2 lg:px-8 py-1 bg-white border-b border-gray-200 w-full font-sans min-h-[48px] xl:min-h-[55px]">
      
      <div className="flex items-center flex-1 lg:flex-none cursor-pointer">
        <div className="hidden xl:flex items-center w-[300px]">
          <img
            src="logo.png"
            alt="Pesso Machinery Price Lists"
            className="h-11 w-auto object-contain"
          />
        </div>
        
        <div className="xl:hidden flex items-center">
          <img
            src="image.png" 
            alt="Pesso"
            className="h-14 md:h-12 lg:h-14 w-auto object-contain"
          />
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-center">
        <div className="flex items-center border border-[#8B1D1D] rounded-[4px] overflow-hidden h-[28px] md:h-[30px]">
          <button className="px-5 md:px-5 h-full text-[18px] md:text-[16px] font-bold text-[#8B1D1D] bg-white whitespace-nowrap cursor-pointer hover:bg-gray-50">
            Sign in
          </button>
          <button className="px-5 md:px-5 h-full text-[18px] md:text-[16px] font-bold text-white bg-[#8B1D1D] whitespace-nowrap cursor-pointer hover:bg-[#6b1616]">
            Purchase
          </button>
        </div>
      </div>

      <div className="hidden lg:flex items-center space-x-6">
        <div className="flex items-center space-x-3 xl:space-x-4 text-[14px] xl:text-[16px] font-bold text-black">
          <a href="#" className="hover:text-[#8B1D1D] cursor-pointer">Pricelists</a>
          <span className="text-gray-300 font-light">|</span>
          <a href="#" className="hover:text-[#8B1D1D] cursor-pointer">Buy and sell board</a>
          <span className="text-gray-300 font-light">|</span>
          <a href="#" className="hover:text-[#8B1D1D] cursor-pointer">Services</a>
          <span className="text-gray-300 font-light">|</span>
          <a href="#" className="hover:text-[#8B1D1D] cursor-pointer">Online Advertising</a>
        </div>

        <div className="xl:hidden flex items-center border border-[#8B1D1D] rounded-[4px] overflow-hidden h-[30px]">
          <button className="px-3 h-full text-[14px] font-bold text-[#8B1D1D] bg-white cursor-pointer hover:bg-gray-50">Sign in</button>
          <button className="px-3 h-full text-[14px] font-bold text-white bg-[#8B1D1D] cursor-pointer hover:bg-[#6b1616]">Purchase</button>
        </div>

        <button className="hidden xl:block bg-[#8B1D1D] text-white px-2 py-0.5 rounded-[4px] text-[16px] font-bold hover:bg-[#6b1616] whitespace-nowrap cursor-pointer">
          Purchase a subscription
        </button>
      </div>

      <div className="flex items-center justify-end flex-1 lg:flex-none space-x-3 lg:space-x-4">
        
        <div className="hidden xl:flex items-center space-x-4">
          <div className="flex items-center border border-[#8B1D1D] rounded-[4px] px-4 py-0.5 text-[16px] font-bold text-[#8B1D1D]">
            <button className="cursor-pointer hover:opacity-70">Sign in</button>
            <span className="mx-3 opacity-30">|</span>
            <button className="cursor-pointer hover:opacity-70">Register</button>
          </div>
          <button className="text-[#8B1D1D] p-1 border-r border-gray-200 pr-4 cursor-pointer hover:opacity-70">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-1 text-[16px] font-bold text-[#8B1D1D] cursor-pointer xl:order-last shrink-0 hover:opacity-80">
          <span className="xl:no-underline underline underline-offset-4">En</span>
          <svg className="hidden xl:block" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        <button className="xl:hidden text-[#8B1D1D] flex items-center cursor-pointer hover:opacity-70">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;