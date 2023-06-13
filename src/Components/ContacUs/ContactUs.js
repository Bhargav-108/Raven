import React from "react";
import clock from "../../Assets/Clock.svg";
import mail from "../../Assets/Mail.svg";
import call from "../../Assets/Call.svg";
import c1 from "../../Assets/c1.png";
import c2 from "../../Assets/c2.png";
import c3 from "../../Assets/c3.png";
import c4 from "../../Assets/c4.png";
import l1 from "./l1.svg";
import l2 from "./l2.svg";
import l3 from "./l3.svg";
import l4 from "./l4.svg";
const ContactUs = () => {
  return (
    <div className="w-full h-[1058px] flex items-center justify-center bg-[#091242] mt-[75px] text-white">
      <div className="w-[1200px] h-[772px] flex flex-col items-center justify-between ">
        <div className="w-full h-[468px] flex flex-row items-center justify-between">
          <div className="w-[353px] h-full flex flex-col items-start justify-between ">
            <div className="flex flex-col items-start justify-center gap-4">
              <div className="h-[23px] flex flex-row">
                <div className="w-[4px] bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>
                <div
                  className="w-[244px] flex justify-center items-center"
                  style={{ background: "rgba(4, 28, 55, 0.5) " }}
                >
                  <div className="text-[14px] text-white font-heading-text">
                    Logistics & Supply Chain Solutions
                  </div>
                </div>
              </div>
              <div className="text-[35px] font-semibold font-heading-text">
                Get in touch with us
              </div>
              <div className="text-[16px] font-body-text font-medium text-left">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4 items-center ">
                <div className="w-[63px] h-[63px] bg-[#111c55] border-[1px] border-[#273270] flex rounded-full items-center justify-center ">
                  <img className="w-[22px]" src={clock} alt="Clock" />
                </div>
                <div className="text-white font-body-text text-left">
                  <p>Mon - Sat 9.00 - 18.00</p>
                  <p>Sunday Closed</p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center ">
                <div className="w-[63px] h-[63px] bg-[#111c55] border-[1px] border-[#273270] flex rounded-full items-center justify-center ">
                  <img className="w-[22px]" src={mail} alt="mail" />
                </div>
                <div className="text-white font-body-text text-left">
                  <p>Email </p>
                  <p>demo@logistics.com</p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center ">
                <div className="w-[63px] h-[63px] bg-[#111c55] border-[1px] border-[#273270] flex rounded-full items-center justify-center ">
                  <img className="w-[22px]" src={call} alt="Call" />
                </div>
                <div className="text-white font-body-text text-left">
                  <p>Call Us </p>
                  <p>+91 1111111111</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[758px] h-full flex flex-col items-start justify-between">
            <div className="grid grid-cols-2 w-full h-[150px] gap-[30px]">
              <div>
                <input
                  placeholder="Your name*"
                  className="pl-2 text-[20px] border-[1px]  border-[#4E5683] h-[60px] w-full resize-none appearance-none bg-transparent outline-0"
                ></input>
              </div>
              <div>
                <input
                  placeholder="Email*"
                  className="pl-2 text-[20px] border-[1px]  border-[#4E5683] h-[60px] w-full resize-none appearance-none bg-transparent outline-0"
                ></input>
              </div>
              <div>
                <input
                  placeholder="Phone Number*"
                  className="pl-2 text-[20px] border-[1px]  border-[#4E5683] h-[60px] w-full resize-none appearance-none bg-transparent outline-0"
                ></input>
              </div>
              <div>
                <input
                  placeholder="City*"
                  className="pl-2 text-[20px] border-[1px]  border-[#4E5683] h-[60px] w-full resize-none appearance-none bg-transparent outline-0"
                ></input>
              </div>
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="p-4 text-[20px] border-[1px]  border-[#4E5683] resize-none h-[154px] w-[758px] appearance-none bg-transparent outline-0"
              ></textarea>
            </div>
            <button>
              <div
                className="w-[194px] h-[60px] py-[19px] px-[34px] bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]
               text-[16px] font-body-text font-semibold text-black"
              >
                Submit Message
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-row h-[234px] w-full ">
          <div className="relative w-[300px]">
            <img className="absolute pt-[92px] pl-[42px]" src={l1} alt="l1" />
            <img src={c1} alt="c1" />
          </div>
          <div className="relative w-[300px]">
            <img className="absolute pt-[98px] pl-[106px]" src={l2} alt="l2" />
            <img src={c2} alt="c2" />
          </div>
          <div className="relative w-[300px]">
            <img className="absolute pt-[93px] pl-[57px]" src={l3} alt="l3" />
            <img src={c3} alt="c3" />
          </div>
          <div className="relative w-[300px]">
            <img className="absolute pt-[91px] pl-[62px]" src={l4} alt="l4" />
            <img src={c4} alt="c4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
