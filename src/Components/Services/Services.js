import React from "react";
import boat from "../../Assets/Boat.svg";
import building from "../../Assets/Building.svg";
import Plane from "../../Assets/Plane.svg";
import Truck from "../../Assets/Truck.svg";
const Services = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[820px] w-[100%]">
        <div className="w-[1200px] h-[320px] gap-[42px] flex flex-row">
          <div className="w-[300px] flex flex-col">
            <div className="h-[23px] flex flex-row">
              <div className="w-[4px] bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>
              <div
                className="w-[92px] flex justify-center items-center"
                style={{ background: "rgba(232, 232, 232, 0.5) " }}
              >
                <div className="text-[14px] text-black font-heading-text">
                  What We Do
                </div>
              </div>
            </div>
            <div className="text-[35px] mt-[15px] text-left font-bold leading-[42px] text-black font-heading-text">
              Safe & Reliable Cargo Solutions
            </div>
          </div>
          <div className="w-[858px] grid grid-cols-2 gap-[70px]">
            <div className="flex h-[115px] flex-row justify-between gap-[25px] ">
              <div>
                <img src={boat} alt="boat" />
              </div>
              <div className="h-full w-[1px] rounded-md bg-slate-400"></div>
              <div className="w-[270px] flex flex-col justify-between">
                <div className="text-[25px] text-left font-bold leading-[30px] text-black font-heading-text">
                  Sea Transport Services
                </div>
                <div className="text-[#666C89] text-[16px] text-left   font-body-text">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </div>
              </div>
            </div>
            <div className="flex h-[115px] flex-row justify-between gap-[25px] ">
              <div>
                <img src={building} alt="building" />
              </div>
              <div className="h-full w-[1px] rounded-md bg-slate-400"></div>
              <div className="w-[270px] flex flex-col justify-between">
                <div className="text-[25px] text-left font-bold leading-[30px] text-black font-heading-text">
                  Warehousing Services
                </div>
                <div className="text-[#666C89] text-[16px] text-left   font-body-text">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </div>
              </div>
            </div>
            <div className="flex h-[115px] flex-row justify-between gap-[25px] ">
              <div>
                <img src={Plane} alt="plane" />
              </div>
              <div className="h-full w-[1px] rounded-md bg-slate-400"></div>
              <div className="w-[270px] flex flex-col justify-between">
                <div className="text-[25px] text-left font-bold leading-[30px] text-black font-heading-text">
                  Air Fright Services
                </div>
                <div className="text-[#666C89] text-[16px] text-left   font-body-text">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </div>
              </div>
            </div>
            <div className="flex h-[115px] flex-row justify-between gap-[25px] ">
              <div>
                <img src={Truck} alt="Truck" />
              </div>
              <div className="h-full w-[1px] rounded-md bg-slate-400"></div>
              <div className="w-[270px] flex flex-col justify-between">
                <div className="text-[25px] text-left font-bold leading-[30px] text-black font-heading-text">
                  Local Shipping Services
                </div>
                <div className="text-[#666C89] text-[16px] text-left   font-body-text">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
