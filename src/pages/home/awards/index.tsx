import React, { useState } from "react";
import prevImg from "../../../images/prev.png";
import nextImg from "../../../images/next.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImagSlider from "./ImagSlider";
import AnimateHr from "../../../components/animatedLine/AnimateHr";
import images from "../../../staticData/awardsData";
import LineAnimation from "../../../components/LineAnimation";

function Awards() {
  const [slider, setSlider] = useState<any | null>(null);

  const next = () => {
    if (slider) {
      slider.slickNext();
    }
  };

  const previous = () => {
    if (slider) {
      slider.slickPrev();
    }
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex  flex-col md:flex-row items-center justify-around h-[431px]  md:mt-[106px] mt-[78px] bg-[#F4F4F4] ">
        <div className="flex flex-col  items-center md:items-start mb-6">
          <h1 className="font-extrabold  font-urbanist  text-[26px] md:text-[34px] lg:text-[48px]  uppercase leading-[120%] ">
            AWARD &
          </h1>
          <h1 className="font-extrabold font-urbanist  text-primary text-[26px] md:text-[34px] lg:text-[48px]  uppercase leading-[120%] ">
            HONOURS
          </h1>
          <LineAnimation
            width="178px"
            height="7px"
            backgroundColor="#00B8F1"
            marginTop="18px"
          />
        </div>
        <div className="flex flex-col justify-center items-center    ">
          <div className=" md:w-[50vw] w-[90vw] ">
            <Slider {...settings} ref={setSlider}>
              {images?.map((review, id) => {
                return (
                  <div key={id} className=" ">
                    <img
                      src={review?.avatar}
                      alt="#"
                      className="w-[105px] h-[105px] mx-auto "
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="flex mt-[32px]">
            <button className="button arrowAwards bg-white hover:bg-primary p-2 rounded-full" onClick={previous}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M20.25 12.1564H3.75" stroke="#121314" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.5 5.40637L3.75 12.1564L10.5 18.9064" stroke="#121314" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button className="button arrowAwards bg-white p-2 hover:bg-primary rounded-full ml-6" onClick={next}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M3.75 12.1564H20.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.5 5.40637L20.25 12.1564L13.5 18.9064" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
