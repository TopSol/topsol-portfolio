import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RatingSlider from "./RatingSlider";
import { reviews } from "./data";


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
