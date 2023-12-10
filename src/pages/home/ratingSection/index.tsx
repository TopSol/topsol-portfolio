import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RatingSlider from "./RatingSlider";
import reviews from "../../../staticData/ratingeSectionData";
import LineAnimation from "../../../components/LineAnimation";

export default function index() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setSlidesToShow(1);
    } else if (screenWidth >= 768 && screenWidth <= 1024) {
      setSlidesToShow(2);
    }
    else {
      setSlidesToShow(3);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', updateSlidesToShow);
    updateSlidesToShow();
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <div className="  mt-[69px] lg:mt-[100px] flex justify-center ">
      <div className="w-[85%]    ">
        <div className="flex flex-col justify-center items-center" data-aos="fade-up">
          <div className="">
            <h1 className="font-extrabold font-urbanist uppercase text-[26px] md:text-[34px] lg:text-4xl  text-center">
              What our <span className="text-primary  font-extrabold font-urbanist">Clients say </span>
            </h1>
          </div>
          <LineAnimation
            width="178px"
            height="7px"
            backgroundColor="#00B8F1"
            marginTop="18px"
          />
        </div>
        <div>
          <Slider {...settings}>
            {reviews?.map((review, index) => {
              return (
                <div key={index} className="mt-[81px]" data-aos="fade-up">
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
