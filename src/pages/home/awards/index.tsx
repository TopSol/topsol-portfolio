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
    slidesToShow: 4,
    slidesToScroll: 4,
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
      <div className="flex flex-col items-center justify-center pb-[105px]  bg-[#F4F4F4]">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="font-extrabold text-[24px] md:text-[34px] mt-[68px] text-center">
              Awards and Honor
            </h1>
          </div>
          <div className="my-6 w-[150px]">
            <AnimateHr bgColor={'[#00B8F1]'}/>
          </div>
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
