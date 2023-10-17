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

import { upperCardData, lowerCardData, cardsData } from "./data";

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
      <div className="flex lg:flex-row flex-col md:justify-center  xl:mx-0 lg:mx-3">
        <div className="  lg:mb-[150px] flex items-center justify-center md:justify-start md:items-start flex-col lg:mx-0 md:mx-3">
          <h1 className="md:text-6xl lg:text-start text-center text-3xl font-semibold  md:mt-[161px] mt-[51px]">
            Life at Topsol
          </h1>
          <div className="flex justify-start items-start lg:ml-0 md:ml-2">
            <LineAnimation
              width="178px"
              height="7px"
              backgroundColor="#00B8F1"
              marginTop="15px"
            />
          </div>
          <p className=" text-xl md:mx-0 mx-8   lg:text-start text-center font-medium my-10 flex items-center md:leading-10 leading-7 lg:max-w-[628px] ">
            Life at Topsol is more than just a job - it's an immersive
            experience that combines innovation, camaraderie, and personal
            growth. From the moment you step through our doors, you'll become a
            part of a thriving community that values creativity, collaboration,
            and the pursuit of excellence From the moment you step through our
            doors, you'll become a part of a thriving community that values
            creativity, collaboration, and the pursuit of excellence
            {showMore && (
              <>
                From the moment you step through our doors, you'll become a part
                of a thriving community that values creativity, collaboration,
                and the pursuit of excellence From the moment you step through
                our doors, you'll become a part of a thriving community that
                values creativity, collaboration,
              </>
            )}
          </p>
          <button
            onClick={toggleButton}
            className="md:px-[53px] px-[42px] md:max-w-[260px] max-w-[191px] h-[44px] md:h-[65px] md:text-[26px] text-lg font-semibold rounded-[5px] bg-primary text-primary-white hover:bg-primary-light"
          >
            {showMore ? "Show less" : "Learn more"}
          </button>
        </div>

        <div className="md:flex  justify-center gap-[42px] hidden">
          <div className="lg:mt-[141px] lg:mb-0 mb-[150px] mt-20 flex flex-col gap-y-10">

            {upperCardData?.map((review, index) => {
              return (
                <div key={index} className="">
                  <SmallCards
                    heading={review.heading}
                    headingClass="font-semibold text-sm"
                    textClass="text-[11px] font-normal"
                    text={review.text}
                    avatar={review.avatar}
                    hoverAvatar={review.hoverAvatar}
                    className="bg-primary-cardBg mx-auto max-w-[208px] max-h-[230px]  p-[22px]"
                  />
                </div>
              );
            })}
          </div>

          <div className="lg:mt-[219px] mt-20 flex flex-col gap-y-10">
            {lowerCardData?.map((review, index) => {
              return (
                <div key={index} className="">
                  <SmallCards
                    heading={review.heading}
                    headingClass="font-semibold text-sm"
                    textClass="text-[11px] font-normal"
                    text={review.text}
                    avatar={review.avatar}
                    hoverAvatar={review.hoverAvatar}
                    className="bg-primary-cardBg mx-auto max-w-[208px] max-h-[230px]  p-[22px]"
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
                      heading={review.heading}
                      headingClass="font-semibold text-sm"
                      textClass="text-[11px] font-normal"
                      text={review.text}
                      avatar={review.avatar}
                      hoverAvatar={review.hoverAvatar}
                      className="bg-primary-cardBg mx-auto max-w-[208px] max-h-[217px]  p-[22px]"
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
