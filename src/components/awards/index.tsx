import React, { useState } from "react";
import imgOne from "../../images/imgSlider1.png";
import imgTwo from "../../images/pakistan-thegem.png";
import imgThree from "../../images/clutch-logo.png";
import imgFive from "../../images/software-world.png";
import prevImg from "../../images/prev.png";
import nextImg from "../../images/next.png";
import Slider from "react-slick";
import ImagSlider from "./ImagSlider";

let images = [
  {
    id: "1",
    avatar: imgOne,
  },
  {
    id: "2",
    avatar: imgTwo,
  },
  {
    id: "3",
    avatar: imgThree,
  },
  {
    id: "4",
    avatar: imgOne,
  },
  {
    id: "5",
    avatar: imgFive,
  },
  {
    id: "6",
    avatar: imgOne,
  },
  {
    id: "7",
    avatar: imgOne,
  },
  {
    id: "8",
    avatar: imgOne,
  },
];

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
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
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
          <div className="my-6">
            <div
              className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-[#00B8F1] before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44 my-6"
            ></div>
          </div>
        </div>
        <div className="flex py-6">
          <button className="button mr-12" onClick={previous}>
            <img src={prevImg} />
          </button>
          <div className="w-[800px]">
            <Slider {...settings} ref={setSlider}>
              {images?.map((review, id) => {
                return (
                  <div key={id}>
                    <ImagSlider review={review} />
                  </div>
                );
              })}
            </Slider>
          </div>

          <button className="button ml-6" onClick={next}>
            <img src={nextImg} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Awards;
