import React, { useState, useEffect } from "react";
import image1 from "../../Assets/Untitled.png";
import image2 from "../../Assets/Untitled 2.png";
import image3 from "../../Assets/Untitled 3.png";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const images = [image1, image2, image3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative h-[612px]">
      <div className="absolute left-[50px] w-[550px] flex flex-col items-left justify-between h-[186px] bottom-[55px] z-50">
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
        <div className="text-[40px] text-left font-bold leading-[48px] text-white font-heading-text">
          Your Gateway to any Destination in the World
        </div>

        <div className="flex flex-row mt-[18px] gap-8">
          <button>
            <div className="relative flex items-center justify-center h-[60px] w-[194px] overflow-hidden bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">
              <div className="z-10 absolute h-[52px] w-[52px] bg-white rounded-full hover:left-[74px] hover:top-[-43px] left-[159px] top-[36px] hover:h-[206px] hover:w-[206px] transition-all duration-300"></div>
              <div className="z-20 relative font-heading-text text-[16px]">
                Explore More
              </div>
            </div>
          </button>
          <button>
            <div className="relative flex items-center justify-center h-[60px] w-[194px] overflow-hidden bg-[#091242]">
              <div className="z-10 absolute h-[52px] w-[52px] bg-white opacity-50 rounded-full hover:left-[74px] hover:top-[-43px] left-[159px] top-[36px] hover:h-[206px] hover:w-[206px] transition-all duration-300"></div>
              <div className="z-20 relative text-white font-heading-text text-[16px]">
                Request Quote
              </div>
            </div>
          </button>
        </div>
      </div>
      <img
        src={images[currentIndex]}
        alt="Carousel"
        className="delay-300 w-full h-full transition-opacity ease-in-out duration-1000"
        style={{ objectFit: "cover" }}
      />
      <button onClick={goToPrevious}>
        <div className="absolute top-1/2 left-4  opacity-50 flex h-[45px] rounded-full  w-[45px] bg-black items-center justify-center text-white">
          <div className="opacity-100">
            <NavigateBeforeIcon />
          </div>
        </div>
      </button>
      <button onClick={goToNext}>
        <div className="absolute top-1/2 right-4 opacity-50 flex h-[45px] rounded-full  w-[45px] bg-black items-center justify-center text-white">
          <div className="opacity-100">
            <NavigateNextIcon />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Slider;
