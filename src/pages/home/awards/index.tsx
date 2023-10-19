import React, { useState } from "react";
import prevImg from "../../../images/prev.png";
import nextImg from "../../../images/next.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./data";
import LineAnimation from "../../../components/LineAnimation";

interface imagePropes {
  id: string;
  avatar: string
}
function Awards() {
  const [slider, setSlider] = useState(null);

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
      <div className="flex flex-col items-center justify-center pb-[105px] md:mt-[106px] mt-[78px]  bg-[#F4F4F4]">
        <div className="flex flex-col justify-center items-center">
          <div className="">
            <h1 className="font-extrabold mt-[68px] font-montserrat text-[26px] md:text-[34px] lg:text-4xl  text-center">
              Awards and Honors
            </h1>
          </div>
          <LineAnimation
            width="178px"
            height="7px"
            backgroundColor="#00B8F1"
            marginTop="18px"
          />
        </div>
        <div className="flex justify-center items-center mt-[84px]  ">
          <button className="button " onClick={previous}>
            <img src={prevImg} />
          </button>
          <div className=" w-[90vw] ">
            <Slider {...settings} ref={setSlider}>
              {images?.map((review: imagePropes, id) => {
                return (
                  <div key={id} className=" ">
                    <img
                      src={review.avatar}
                      alt="#"
                      className="w-[105px] h-[105px] mx-auto "
                    />
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
