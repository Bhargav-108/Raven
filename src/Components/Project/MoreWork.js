import React from "react";
import oil from "../../Assets/Oil tanker.png";
import people from "../../Assets/people.png";
import truck from "../../Assets/Truck.png";
import port from "../../Assets/Port.png";
const MoreWork = () => {
  return (
    <>
      <div className="w-full text-center font-heading-text text-[35px] font-semibold">
        Transporting Across The World
      </div>
      <div className="relative mt-9 h-[635px] ">
        <div
          id="top"
          className="flex items-center justify-center flex-row gap-[18px] px-[50px] relative z-20"
        >
          <div className="relative h-[410px] w-[310px] ">
            <div className="z-20 flex flex-col gap-1 items-start  justify-center absolute bottom-5 left-6 ">
              <div className="text-[20px] font-medium text-left font-heading-text text-white ">
                Liquid Transportation
              </div>
              <div className="text-[16px] text-left font-body-text text-[#FFB629]">
                Premium Tankers
              </div>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(0deg, #091242 14.34%, rgba(60, 60, 60, 0) 43.86%)",
              }}
              className="absolute w-full h-full mix-blend-multiply"
            ></div>
            <img className="h-full w-full" src={oil} alt="img" />
          </div>
          <div className="relative h-[410px] w-[310px] ">
            <div className="z-20 flex flex-col gap-1 items-start  justify-center absolute bottom-5 left-6 ">
              <div className="text-[20px] font-medium text-left font-heading-text text-white ">
                Packaging Solutions
              </div>
              <div className="text-[16px] text-left font-body-text text-[#FFB629]">
                Warehouse Management
              </div>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(0deg, #091242 14.34%, rgba(60, 60, 60, 0) 43.86%)",
              }}
              className="absolute w-full h-full mix-blend-multiply"
            ></div>
            <img className="h-full w-full" src={people} alt="img" />
          </div>
          <div className="relative h-[410px] w-[310px] ">
            <div className="z-20 flex flex-col gap-1 items-start  justify-center absolute bottom-5 left-6 ">
              <div className="text-[20px] font-medium text-left font-heading-text text-white ">
                Contract Logistics
              </div>
              <div className="text-[16px] text-left font-body-text text-[#FFB629]">
                Road Transportation
              </div>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(0deg, #091242 14.34%, rgba(60, 60, 60, 0) 43.86%)",
              }}
              className="z-10 absolute w-full h-full mix-blend-multiply"
            ></div>
            <img className="h-full w-full" src={truck} alt="img" />
          </div>
          <div className="relative h-[410px] w-[310px] ">
            <div className="z-20 flex flex-col gap-1 items-start  justify-center absolute bottom-5 left-6 ">
              <div className="text-[20px] font-medium text-left font-heading-text text-white ">
                Specialized Transport
              </div>
              <div className="text-[16px] text-left font-body-text text-[#FFB629]">
                Ocean Transports
              </div>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(0deg, #091242 14.34%, rgba(60, 60, 60, 0) 43.86%)",
              }}
              className="z-10 absolute w-full h-full mix-blend-multiply"
            ></div>
            <img className="h-full w-full" src={port} alt="img" />
          </div>
        </div>
        <div
          id="bottom"
          className="z-10 absolute top-[260px] w-screen h-[375px] bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"
        ></div>

        <div className="w-screen relative  flex items-center justify-center">
          <button className="z-30  h-[60px] w-[194px] overflow-hidden bg-[#091242] flex flex-col gap-1 items-center  justify-center absolute top-16">
            <div className="z-10 overflow-hidden absolute h-[52px] w-[52px] bg-white opacity-50 rounded-full hover:left-[74px] hover:top-[-43px] left-[159px] top-[36px] hover:h-[206px] hover:w-[206px] transition-all duration-300"></div>
            <div className="z-20 text-white font-heading-text text-[16px]">
              More Work
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default MoreWork;
