import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RatingSlider from "./RatingSlider";
import { reviews } from "./data";
import LineAnimation from "../../../components/LineAnimation";

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
    <div className=" overflow-x-hidden mt-[69px] lg:mt-[0px] flex justify-center ">
      <div className="w-[90%]    2xl:w-[65%] ">
        <div className="flex flex-col justify-center items-center">
        <div className="">
          <h1 className="font-extrabold font-montserrat text-[26px] md:text-[34px] lg:text-4xl  text-center">
            People Like us, officially
          </h1>
        </div>
        <LineAnimation width='178px' height='7px' backgroundColor='#00B8F1' marginTop="18px"/>
          </div>
        <div>
          <Slider {...settings}>
            {reviews?.map((review, index) => {
              return (
                <div key={index} className="mt-[81px]">
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
