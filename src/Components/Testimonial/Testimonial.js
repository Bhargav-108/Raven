import React, { useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import person1 from "../../Assets/person1.png";
import person2 from "../../Assets/person2.png";
import coma from "../../Assets/InvertedComa.svg";
import star from "../../Assets/Star.svg";
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    company: "Fuel Company",
    image: person1,
    testimonial:
      "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    rating: 4.5,
  },
  {
    id: 2,
    image: person2,
    company: "Restoration Company",
    name: "Jane Smith",
    testimonial:
      "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    rating: 3.8,
  },
  {
    id: 3,
    image: person1,
    name: "Mike Johnson",
    company: "Fuel Company",
    testimonial:
      "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    rating: 4.2,
  },
  {
    id: 4,
    image: person2,
    company: "Restoration Company",
    name: "Sarah Williams",
    testimonial:
      "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    rating: 4.7,
  },
  {
    id: 5,
    image: person1,
    company: "Fuel Company",
    name: "David Brown",
    testimonial:
      "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    rating: 3.5,
  },
  {
    id: 6,
    image: person2,
    company: "Restoration Company",
    name: "Emily Davis",
    testimonial:
      "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    rating: 4.9,
  },
];

const Testimonial = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextTestimonials = () => {
    setStartIndex((prevIndex) => prevIndex + 2);
  };

  const prevTestimonials = () => {
    setStartIndex((prevIndex) => prevIndex - 2);
  };

  const renderRatingStars = (rating) => {
    const roundedRating = Math.ceil(rating);
    const stars = [];

    for (let i = 0; i < roundedRating; i++) {
      stars.push(<img key={i} src={star} alt="star" />);
    }

    return stars;
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="h-[542px] w-[1200px] flex flex-col gap-4 items-start justify-center mt-[120px] mb-[70px]">
          <div className="h-[23px] flex flex-row">
            <div className="w-[4px] bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>
            <div
              className="w-[92px] flex justify-center items-center"
              style={{ background: "rgba(232, 232, 232, 0.5) " }}
            >
              <div className="text-[14px] text-black font-heading-text">
                Testimonial
              </div>
            </div>
          </div>
          <div className=" h-[45px] flex flex-row w-full items-center justify-between">
            <div className="text-[#1C1F35] text-[35px] font-heading-text font-semibold">
              What Our Customer Say
            </div>
            <div className="flex flex-row gap-2">
              <button
                onClick={prevTestimonials}
                disabled={startIndex === 0}
                className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"
              >
                <ArrowBackRoundedIcon />
              </button>
              <button
                onClick={nextTestimonials}
                disabled={startIndex >= testimonials.length - 2}
                className="flex items-center text-white justify-center w-[45px] h-[45px] rounded-full bg-[#091242]"
              >
                <ArrowForwardRoundedIcon />
              </button>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 h-[425px] mt-10">
            {testimonials
              .slice(startIndex, startIndex + 2)
              .map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`px-[62px] py-[72px] flex flex-col items-start justify-between ${
                    index % 2 === 0 ? "bg-[#F4F4F4]" : "bg-[#091242]"
                  } `}
                >
                  <div className="h-[90px] flex flex-row items-center justify-between">
                    <div className="w-[360px] flex flow-row items-center justify-between">
                      <div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-[90px] h-[90px] rounded-full"
                        />
                      </div>
                      <div className="basis-2/3 flex flex-col items-start justify-between">
                        <div
                          className={`${
                            index % 2 === 0 ? "text-[#091242]" : "text-white"
                          } text-[20px] font-heading-text font-semibold`}
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className={`${
                            index % 2 === 0 ? "text-[#091242]" : "text-white"
                          } text-[16px] font-body-text font-medium`}
                        >
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <div className="w-[72px] flex items-center justify-center h-[72px] rounded-full bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">
                      <img src={coma} alt="coma" />
                    </div>
                  </div>
                  <div
                    className={`w-full h-[120px]  text-[16px] text-start font-body-text font-medium italic ${
                      index % 2 === 0 ? "text-[#666C89]" : "text-white"
                    }`}
                  >
                    {testimonial.testimonial}
                  </div>
                  <div>
                    <div className="flex flex-row gap-[3px]">
                      {renderRatingStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
