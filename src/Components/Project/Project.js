import React from "react";
import project from "../../Assets/Project.png";
import plane from "../../Assets/Plane.png";
import box from "../../Assets/Box.svg";
import Cash from "../../Assets/Cash.svg";
const Project = () => {
  return (
    <div className="h-[940px]">
      <div className="relative w-full flex flex-col items-center">
        <div className="z-10 relative">
          <div
            style={{
              background:
                "linear-gradient(360deg, #091242 -11.11%, rgba(9, 18, 66, 0) 90.28%)",
            }}
            className="absolute w-screen h-[504px]"
          ></div>
          <img src={project} alt="Project" className="w-screen h-[504px]" />
        </div>
        <div className="z-20 w-[1200px] absolute top-[366px] bg-white h-[575px]">
          <div className=" m-[85px] flex gap-[42px] flex-row items-center justify-center h-[462px] ">
            <div className=" w-[500px] h-[462px]">
              <div className="w-[472px] flex flex-col">
                <div className="h-[23px] flex flex-row">
                  <div className="w-[4px] bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>
                  <div
                    className="w-[92px] flex justify-center items-center"
                    style={{ background: "rgba(232, 232, 232, 0.5) " }}
                  >
                    <div className="text-[14px] text-black font-heading-text">
                      Why Us
                    </div>
                  </div>
                </div>
                <div className="text-[35px] mt-[15px] text-left font-semibold leading-[42px] text-black font-heading-text">
                  We provide full range global logistics solution
                </div>
                <div className="text-[16px] mt-[12px] flex flex-col gap-[12px] text-left text-[#666C89] font-medium font-body-text">
                  <p>
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster collaborative thinking to further the
                    overall value proposition.
                  </p>
                  <p>
                    Organically grow the holistic world view of disruptive
                    innovation via workplace diversity and empowerment.
                  </p>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start mt-[15px]">
                  <div className="flex items-center justify-center h-[53px] w-[53px] rounded-full bg-gradient-to-br from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">
                    <img src={box} alt="Box" />
                  </div>
                  <div className="text-[25px] leading-8 text-left text-black font-medium font-heading-text">
                    Delivery on Time
                  </div>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start mt-[15px]">
                  <div className="flex items-center justify-center h-[53px] w-[53px] rounded-full bg-gradient-to-br from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">
                    <img src={Cash} alt="Cash" />
                  </div>
                  <div className="text-[25px] leading-8 text-left text-black font-medium font-heading-text">
                    Optimized Travel Cost
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[461px] h-[462px]">
              <img src={plane} alt="Plane" className="w-[461px] h-[415px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
