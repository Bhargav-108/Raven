import React from "react";
import b1 from "../../Assets/blog1.png";
import b2 from "../../Assets/blog2.png";
import calendar from "./Calender.svg";
const Blog = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-start h-[1180px] pt-[106px] w-[950px]">
        <div className="h-[23px] flex flex-row">
          <div className="w-[4px] bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>
          <div
            className="w-[98px] flex justify-center items-center"
            style={{ background: "rgba(232, 232, 232, 0.5) " }}
          >
            <div className="text-[14px] text-black font-heading-text">
              Our Blog
            </div>
          </div>
        </div>
        <div className="text-[#1C1F35] mt-4 text-[35px] font-heading-text font-semibold">
          Our Latest News
        </div>
        <div className="flex flex-col items-center justify-center w-[950px]">
          <div className="w-full h-[2px] bg-[#D6D6D6] mt-[35px]"></div>
          <div className="h-[308px] flex flex-row items-center justify-center w-full mt-[35px]">
            <div className="w-[453px] h-full">
              <img src={b1} alt="b1" />
            </div>
            <div className="w-[125px] h-full flex flex-col items-center justify-start">
              <img src={calendar} alt="calender" />
              <div className="text-[40px] text-[#1C1F35] font-heading-text font-bold">
                08
              </div>
              <div className="text-[#666C89] text-[16px] font-body-text">
                January
              </div>
            </div>
            <div className="bg-[#D6D6D6] w-[2px] h-full rounded-lg"></div>
            <div className="w-[355px] h-full p-5 flex flex-col items-start justify-between">
              <div className="w-full text-left h-[60px] font-heading-text text-[25px] leading-[30px] text-[#1C1F35]">
                Inland freight a worthy solution for your business
              </div>
              <div
                style={{ fontWeight: "500" }}
                className="text-[#666C89] w-full h-[72px] text-left font-body-text text-[16px] leading-[151.52%]"
              >
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.
              </div>
              <div className="text-[#1C1F35] text-left text-[16px] font-body-text font-semibold">
                <ul className="pl-4 list-disc">
                  <li>Urgent transport solutions</li>
                  <li>Reliable & experienced staffs</li>
                  <li>Urgent transport solutions</li>
                  <li>Reliable & experienced staffs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#D6D6D6] mt-[35px]"></div>
        </div>
        <div className="flex flex-col items-center justify-center w-[950px]">
          <div className="w-full h-[2px] bg-[#D6D6D6] mt-[35px]"></div>
          <div className="h-[308px] flex flex-row items-center justify-center w-full mt-[35px]">
            <div className="w-[453px] h-full">
              <img src={b2} alt="b2" />
            </div>
            <div className="w-[125px] h-full flex flex-col items-center justify-start">
              <img src={calendar} alt="calender" />
              <div className="text-[40px] text-[#1C1F35] font-heading-text font-bold">
                20
              </div>
              <div className="text-[#666C89] text-[16px] font-body-text">
                February
              </div>
            </div>
            <div className="bg-[#D6D6D6] w-[2px] h-full rounded-lg"></div>
            <div className="w-[355px] h-full p-5 flex flex-col items-start justify-between">
              <div className="w-full text-left h-[60px] font-heading-text text-[25px] leading-[30px] text-[#1C1F35]">
                Five things you should have ready for your broker
              </div>
              <div
                style={{ fontWeight: "500" }}
                className="text-[#666C89] w-full h-[72px] text-left font-body-text text-[16px] leading-[151.52%]"
              >
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.
              </div>
              <div className="text-[#1C1F35] text-left text-[16px] font-body-text font-semibold">
                <ul className="pl-4 list-disc">
                  <li>Urgent transport solutions</li>
                  <li>Reliable & experienced staffs</li>
                  <li>Urgent transport solutions</li>
                  <li>Reliable & experienced staffs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#D6D6D6] mt-[35px]"></div>
        </div>
        <button>
          <div className="mt-[40px] relative flex items-center justify-center h-[60px] w-[194px] overflow-hidden bg-[#091242]">
            <div className="z-10 absolute h-[52px] w-[52px] bg-white opacity-50 rounded-full hover:left-[74px] hover:top-[-43px] left-[159px] top-[36px] hover:h-[206px] hover:w-[206px] transition-all duration-300"></div>
            <div className="z-20 relative text-white font-heading-text text-[16px]">
              More Blog
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Blog;
