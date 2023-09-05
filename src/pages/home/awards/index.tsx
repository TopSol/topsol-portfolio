import React, { useState } from "react";
import prevImg from "../../../images/prev.png";
import nextImg from "../../../images/next.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImagSlider from "./ImagSlider";
import AnimateHr from "../../../components/animatedLine/AnimateHr";
import { images } from "./data";



function Awards() {
  const [slider, setSlider] = useState<Slider | null>(null);

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
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pb-[105px] mt-[106px]  bg-[#F4F4F4]">
        <div className="flex flex-col justify-center items-center">
        <div className="">
          <h1 className="font-extrabold mt-[68px] font-montserrat text-[26px] md:text-[34px] lg:text-4xl  text-center">
            People Like us, officially
          </h1>
        </div>
        <div
            className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-[#00B8F1] before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44 mt-[18px]"
          ></div>
        </div>
        <div className="flex justify-center items-center mt-[84px]  ">
          <button className="button " onClick={previous}>
            <img src={prevImg} />
          </button>
          <div className=" w-[90vw] ">
            <Slider {...settings} ref={setSlider}>
              {images?.map((review, id) => {
                return (
                  <div key={id} className=" ">
                     <img src={review.avatar} alt="#" className="w-[105px] h-[105px] mx-auto " />
                  </div>
                );
              })}
            </Slider>
          </div>

          <button className="button" onClick={next}>
            <img src={nextImg} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Awards;
