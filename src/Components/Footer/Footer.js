import React from "react";
import f1 from "../../Assets/f1.png";
import logo from "../../Assets/Logo.svg";
import mail from "../../Assets/Mail.svg";
import call from "../../Assets/Call.svg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div>
      <div>
        <img className="w-screen h-[412px]" src={f1} alt="footer" />
      </div>
      <div className="w-screen bg-[#091242]  h-[562px]">
        <div className="relative w-full flex items-center justify-center">
          <div className="z-20 absolute h-[118px]">
            <div className="relative flex h-full w-[1090px] flex-row items-center justify-start">
              <div className="w-[320px] h-full flex items-center justify-center gap-4 text-white font-heading-text text-[30px] font-semibold bg-[#091242]">
                <img src={logo} alt="logo" />
                <div>Company Name</div>
              </div>
              <div className="ml-[40px] w-[770px] flex flex-row items-center justify-start">
                <div className="text-white text-left font-heading-text text-[25px] basis-1/4 ">
                  Pages
                </div>
                <div className="text-white text-left font-heading-text text-[25px] basis-1/4 ">
                  Utility
                </div>
                <div className="text-white text-left font-heading-text text-[25px] basis-2/4 ">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
          <div className="z-10 h-[118px] w-full bg-white opacity-[0.08]"></div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[1090px] flex flex-row items-center">
            <div className="mt-[30px] pl-[22px] w-[320px] h-auto flex flex-col items-start justify-center gap-4 text-white">
              <div className="text-left text-[14px] font-body-text w-[283px]">
                Leverage agile frameworks to provide a robust synopsis for
                strategy collaborative thinking to further the overall value
                proposition.
              </div>
              <div className="flex flex-col gap-4 mt-[30px]">
                <div className="flex flex-row gap-4 items-center ">
                  <div className="w-[63px] h-[63px] bg-[#111c55] border-[1px] border-[#273270] flex rounded-full items-center justify-center ">
                    <img className="w-[22px]" src={mail} alt="mail" />
                  </div>
                  <div className="text-white text-[14px] font-body-text text-left">
                    <p>Email </p>
                    <p>demo@logistics.com</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center ">
                  <div className="w-[63px] h-[63px] bg-[#111c55] border-[1px] border-[#273270] flex rounded-full items-center justify-center ">
                    <img className="w-[22px]" src={call} alt="Call" />
                  </div>
                  <div className="text-white text-[14px] font-body-text text-left">
                    <p>Call Us </p>
                    <p>+91 1111111111</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-[40px] w-[770px] flex flex-row items-center justify-start">
              <div className="text-white flex flex-col gap-4 items-start justify-between font-body-text text-[16px] basis-1/4 ">
                <div>About Us</div>
                <div>Our Team</div>
                <div>Our Project</div>
                <div>Pricing</div>
                <div>Contact</div>
              </div>
              <div className="text-white flex flex-col gap-4 items-start justify-between font-body-text text-[16px] basis-1/4 ">
                <div>Style Guide</div>
                <div>Changelog</div>
                <div>Licenses</div>
                <div>Protected</div>
                <div>Not Found</div>
              </div>
              <div className="text-white flex flex-col items-start justify-start gap-4 font-body-text text-[16px] basis-2/4">
                <div>
                  <input
                    placeholder="Your name*"
                    className="pl-2 text-[20px] border-[1px]  border-[#4E5683] h-[60px] w-[370px]  appearance-none bg-transparent outline-0"
                  ></input>
                </div>
                <div className="w-[370px] h-[60px] flex flex-row items-center justify-between">
                  <div className="w-[175px] h-full text-black flex items-center justify-center bg-gradient-to-br from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] text-[20px] font-medium font-heading-text">
                    Send Now
                  </div>
                  <div className="w-auto flex flex-row items-center gap-6 text-white text-lg">
                    <LinkedInIcon />
                    <TwitterIcon />
                    <FacebookRoundedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
