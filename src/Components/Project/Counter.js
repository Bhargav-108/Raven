import React from "react";

const Counter = () => {
  return (
    <>
      <div className="flex flex-col h-[143px] w-full items-center justify-between mb-[90px]">
        <div className="w-[1020px] h-[2px] bg-[#D5D5D5]"></div>
        <div className="flex flex-row items-center justify-evenly w-[1020px] h-[139px] ">
          <div className="flex flex-row gap-4 items-center justify-evenly h-[60px]">
            <div className="text-[50px] font-heading-text font-semibold">
              1000
            </div>
            <div className="h-[17px] w-[17px] bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>
            <div className="text-[20px] font-body-text font-medium">
              Delivered Packages
            </div>
          </div>
          <div className="w-[2px] bg-[#D5D5D5] h-full"></div>
          <div className="flex flex-row gap-4 items-center justify-evenly h-[60px]">
            <div className="text-[50px] font-heading-text font-semibold">
              3000
            </div>
            <div className="h-[17px] w-[17px] bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>
            <div className="text-[20px] font-body-text font-medium">
              Satisfied Clients
            </div>
          </div>
        </div>
        <div className="w-[1020px] h-[2px] bg-[#D5D5D5]"></div>
      </div>
    </>
  );
};

export default Counter;
