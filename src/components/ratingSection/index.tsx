import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RatingSlider from "../ratingSection";
import Chris from "../../images/chris.jpeg";
import Nick from "../../images/nick.png";
import Juan from "../../images/juan.png";

let reviews = [
  {
    text: "I recently had the pleasure of working with the software company, TopSol Software Solutions. They were extremely professional and easy to work with. The team was extremely knowledgeable and went out of their way to make sure that all of our needs were met. They always made sure to keep us updated on the progress of our project, and the final product was exactly what we were looking for. I would highly recommend TopSol Software Solutions for any software development project. They are reliable, efficient, and will provide exceptional customer service.",
    clientName: "Juan Camilo",
    type: "Founder Otherwise",
    avatar: Juan,
  },
  {
    text: "I've been using the software from TopSol for quite some time now and I'm very impressed. The software is reliable and easy to use, and the customer service team is always available to help out with any issues or questions. I've had great success with their software and would highly recommend it to anyone looking for a quality solution.",
    clientName: "Nick Dudaj",
    type: "Co-Founder Life Mib",
    avatar: Nick,
  },
  {
    text: "I had the pleasure of working with TopSol company who developed mobile applications and I could not be more impressed with the results. Their team is highly professional, knowledgeable and they delivered a great product in a very timely manner. The mobile applications they developed were well designed, easy to use and met our exact requirements. The customer support was also top notch and they were always available to answer our questions and provide helpful advice. I highly recommend this software company for anyone looking for mobile application development services.",
    clientName: "Christopher Burnette",
    type: "Co-Founder, Developer & Manager @ Working Title Simulations",
    avatar: Chris,
  },
];
export default function index() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" overflow-x-hidden flex justify-center ">
      <div className="py-6 w-[90%]  md:w-[60%] ">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-2">
            <h1 className="font-extrabold font-montserrat text-3xl md:text-3xl lg:text-4xl mt-6 text-center">
              People Like us, officially
            </h1>
          </div>
          <div
            className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-[#00B8F1] before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44 my-6"
          ></div>
        </div>
        <div>
          <Slider {...settings}>
            {reviews?.map((review, index) => {
              return (
                <div key={index}>
                  <RatingSlider review={review} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
