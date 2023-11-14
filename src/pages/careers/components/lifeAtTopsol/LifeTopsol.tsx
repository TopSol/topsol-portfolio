import React, { useState } from "react";
import careerCardOne from "../../../../images/careerSection/careerCard1.png";
import chairWhite from "../../../../images/careerSection/chair.png";
import award from "../../../../images/careerSection/award.png";
import location from "../../../../images/careerSection/location.png";
import square from "../../../../images/careerSection/square.png";
import awardBlue from "../../../../images/careerSection/award-blue.png";
import locationBlue from "../../../../images/careerSection/location-blue.png";
import squareBlue from "../../../../images/careerSection/square-blue.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from "../../../../staticData/lifeatTopsolData";

const { upperCardData, lowerCardData, cardsData } = data;

import LineAnimation from "../../../../components/LineAnimation";
import SmallCards from "../../../../components/smallCards/SmallCards";
function LifeTopsol() {
  const [showMore, setShowMore] = useState(false);

  const settings = {
    dots: false,
    autoplay: true,
    speed: 500,
    arrows: false,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: "unslick",
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  const toggleButton = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="md:container mx-auto">
      <div className="flex lg:flex-row flex-col md:justify-around items-center py-[31px]  xl:mx-0 lg:mx-3">
        <div className="   text-center md:text-left flex flex-col   mt-6 lg:mt-12 md:w-[40%] w-[90%]">
          <div className="flex  items-center ">
            <div className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="2" viewBox="0 0 28 2" fill="none">
                <path d="M26.0156 1L0.998779 1" stroke="#004264" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <p className=" text-[20px] font-figtree font-normal  capitalize  text-[#004264]">Benefits of working with us</p>
          </div>
          <h1 className="  text-[20px] lg:text-[25px] text-primary font-urbanist xl:text-[34px] font-normal  mt-[10px] xl:mt-[34px] ">
            Why you Should Join Our Awesome Team
          </h1>
          <p className=" text-justify mx-[24px] text-[#3D3D3D] md:mx-0 text-[15px] lg:text-[18px] xl:text-[20px] leading-[150%] font-light font-figtree mt-[10px] xl:mt-[34px] ">
            Life at Topsol is more than just a job – it's an immersive experience that combines innovation, camaraderie, and personal growth. From the moment you step through our doors, you'll become a part of a thriving community that values creativity, collaboration, and the pursuit of excellence From the moment you step through our doors, you'll become a part of a thriving community that values creativity, collaboration, and the pursuit of excellence
          </p>
        </div>

        <div className="md:flex  justify-center gap-[42px] hidden">
          <div className=" flex flex-col gap-y-10">
            {upperCardData?.map((review, index) => {
              return (
                <div key={index} className="">
                  <SmallCards
                    heading={review?.heading}
                    headingClass="font-semibold  font-urbanist text-[16px]"
                    textClass=" font-light font-figtree text-[12px]"
                    text={review?.text}
                    avatar={review?.avatar}
                    hoverAvatar={review?.hoverAvatar}
                    className="border-2 border-primary rounded-xl mx-auto max-w-[208px] max-h-[260px]  p-[22px]"
                  />
                </div>
              );
            })}
          </div>

          <div className=" mt-16 flex flex-col gap-y-10">
            {lowerCardData?.map((review, index) => {
              return (
                <div key={index} className="">
                  <SmallCards
                    heading={review?.heading}
                    headingClass="font-medium font-urbanist text-[16px]"
                    textClass="font-light font-figtree text-[12px]"
                    text={review?.text}
                    avatar={review?.avatar}
                    hoverAvatar={review?.hoverAvatar}
                    className="border-2 border-primary rounded-xl mx-auto max-w-[208px] max-h-[260px]  p-[22px]"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" md:hidden grid grid-cols-1 mt-[63px] mb-[70px]">
          {
            <Slider {...settings}>
              {cardsData?.map((review, index) => {
                return (
                  <div key={index} className="">
                    <SmallCards
                      heading={review?.heading}
                      headingClass="font-semibold   font-urbanist text-[16px]"
                      textClass="font-light font-figtree text-[12px]"
                      text={review?.text}
                      avatar={review?.avatar}
                      hoverAvatar={review?.hoverAvatar}
                      className="border-2 border-primary rounded-xl mx-auto max-w-[208px] max-h-[250px]  p-[22px]"
                    />
                  </div>
                );
              })}
            </Slider>
          }
        </div>
      </div>
    </div>
  );
}

export default LifeTopsol;
