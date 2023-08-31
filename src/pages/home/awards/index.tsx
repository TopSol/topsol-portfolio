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

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    arrows: false,
    // initialSlide:0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
          // initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center py-14 bg-[#F4F4F4]">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="font-extrabold text-3xl md:text-3xl lg:text-4xl mt-6 text-center">
              Awards and Honor
            </h1>
          </div>
          <div className="my-6 w-[150px]">
            <AnimateHr bgColor={'[#00B8F1]'}/>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <button className="button " onClick={previous}>
            <img src={prevImg} />
          </button>
          <div className="md:w-[100vh] sm:pl-0 pl-14 w-[40vh]  ">
            <Slider {...settings} ref={setSlider}>
              {images?.map((review, id) => {
                return (
                  <div key={id} className="">
                    <ImagSlider review={review} />
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
