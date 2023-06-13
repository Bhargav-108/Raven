import React from "react";
import plane from "../../Assets/Chooseus.png";
import box from "./Box.svg";
import glob from "./Glob.svg";
import clock from "./Clock.svg";
import coin from "./Coin.svg";
import ship from "./Ship.svg";
import head from "./Headphone.svg";
import move from "./Moving.svg";
const ChooseUs = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#091242] from-50% to-[#F4F4F4] to-50% flex items-center justify-center h-[900px] w-screen">
        <div className="bg-white w-[1250px] h-[610px] flex flex-row items-center justify-center">
          <div className="relative first-letter:h-[610px] w-[700px]">
            <div className="absolute bottom-0 gap-8 h-[140px] w-[435px] flex items-center justify-center left-[95px] z-20 bg-gradient-to-br from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">
              <img src={move} alt="move" />
              <div className="text-[#1C1F35] font-heading-text text-[25px] text-left w-[270px] font-medium">
                Moving your products across borders
              </div>
            </div>
            <img className="z-10 w-full h-full" src={plane} alt="plane" />
          </div>
          <div className="flex flex-col justify-between items-start w-[550px] h-full py-[55px] px-[30px]">
            <div>
              <div className="h-[23px] flex flex-row">
                <div className="w-[4px] bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>
                <div
                  className="w-[98px] flex justify-center items-center"
                  style={{ background: "rgba(232, 232, 232, 0.5) " }}
                >
                  <div className="text-[14px] text-black font-heading-text">
                    Why Choose
                  </div>
                </div>
              </div>
              <div className="text-[35px] mt-[15px] text-left font-semibold leading-[42px] text-black font-heading-text">
                We create opportunity to reach potential
              </div>
              <div className="text-[16px] mt-[12px] flex flex-col gap-[12px] text-left text-[#666C89] font-medium font-body-text">
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition.
                </p>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-3">
              <div className="h-[63px] flex items-center justify-start gap-2">
                <div className="h-[63px] w-[63px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">
                  <img src={box} alt="box" />
                </div>
                <div className="text-[20px] font-heading-text text-[#1C1F35] font-medium">
                  Safe Package
                </div>
              </div>
              <div className="h-[63px] flex items-center justify-start gap-2">
                <div className="h-[63px] w-[63px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">
                  <img src={ship} alt="box" />
                </div>
                <div className="text-[20px] font-heading-text text-[#1C1F35] font-medium">
                  Ship Everyware
                </div>
              </div>
              <div className="h-[63px] flex items-center justify-start gap-2">
                <div className="h-[63px] w-[63px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">
                  <img src={glob} alt="box" />
                </div>
                <div className="text-[20px] font-heading-text text-[#1C1F35] font-medium">
                  Global Tracking
                </div>
              </div>
              <div className="h-[63px] flex items-center justify-start gap-2">
                <div className="h-[63px] w-[63px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">
                  <img src={head} alt="box" />
                </div>
                <div className="text-[20px] font-heading-text text-[#1C1F35] font-medium">
                  24/7 Support
                </div>
              </div>
              <div className="h-[63px] flex items-center justify-start gap-2">
                <div className="h-[63px] w-[63px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">
                  <img src={clock} alt="box" />
                </div>
                <div className="text-[20px] font-heading-text text-[#1C1F35] font-medium">
                  In Time Delivery
                </div>
              </div>
              <div className="h-[63px] flex items-center justify-start gap-2">
                <div className="h-[63px] w-[63px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">
                  <img src={coin} alt="box" />
                </div>
                <div className="text-[20px] text-left font-heading-text text-[#1C1F35] font-medium">
                  Transparant Pricing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
