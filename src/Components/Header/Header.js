import React, { useState } from "react";
import clock from "../../Assets/Clock.svg";
import mail from "../../Assets/Mail.svg";
import call from "../../Assets/Call.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../Assets/Logo.svg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        id="upper"
        className="z-20 pt-[25px] w-[100%] h-[128px] bg-[#091242] flex flex-row px-[117px] justify-between items-center gap-12"
      >
        <div className=" flex flex-row justify-center items-center gap-12">
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
        <div className="text-white flex flex-row gap-4  text-xl">
          <InstagramIcon />
          <FacebookRoundedIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div
        id="lower"
        className="relative z-50 text-white w-[100%] h-[84px] bg-[#091242] flex flex-row px-[117px] justify-between items-center gap-12"
      >
        <div className=" flex items-center justify-between w-[275px] font-heading-text font-bold text-[32px]">
          <img src={logo} alt="logo" />
          Company Name
        </div>
        <div>
          <ul className="font-body-text text-[16px] flex flex-row items-center gap-[30px]">
            <li>Home</li>
            <li className="w-[1px] opacity-25 h-[16px] bg-white"></li>
            <li>About</li>
            <li className="w-[1px] opacity-25 h-[16px] bg-white"></li>
            <li>
              <button onClick={toggleDropdown}>
                Pages{" "}
                {isOpen === false ? (
                  <span>
                    <ArrowDropDownIcon />
                  </span>
                ) : (
                  <span>
                    <ArrowDropUpIcon />
                  </span>
                )}
              </button>
              {isOpen && (
                <ul className="absolute text-black bg-white p-2 mt-2 w-40 rounded shadow">
                  <li className="py-2">Option 1</li>
                  <li className="py-2">Option 2</li>
                  <li className="py-2">Option 3</li>
                </ul>
              )}
            </li>
            <li className="w-[1px] opacity-25 h-[16px] bg-white"></li>
            <li>Services</li>
            <li className="w-[1px] opacity-25 h-[16px] bg-white"></li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="h-[66px] px-[20px] w-[248px] flex items-center justify-between rounded-[40px] border-white border-2">
          <input
            placeholder="Search"
            className="text-xl font-semibold h-[60px] w-[100px] appearance-none bg-transparent outline-0"
          ></input>
          <button>
            <div className="h-[50px] flex items-center justify-center font w-[50px] rounded-full bg-[#18A0FB]">
              <SearchIcon />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
