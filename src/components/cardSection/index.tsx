import React from "react";
import CodeModules from "../../images/code_modules.png";
import ExpertTeam from "../../images/expert_team.png";


export default function CardSection() {
  const settings = {
    dots: false,
    // infinite: true,
    autoplay: true,
    centerPadding:60,
    speed: 500,
    arrows: false,
    autoplaySpeed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        // settings: 'unslick'
        settings:{
          
          // vertical:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        // settings: 'unslick'
        settings: {
          // vertical:true,
          // verticalSwiping: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        // settings: 'unslick'
        settings: {
          // vertical:true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-20 px-8 flex justify-center items-center bg-gradient-to-b from-[#0B234C] to-[#00B8F1] py-4">
      <div className="grid xl:grid-cols-2 grid-cols-1">
        <div className="px-2 flex items-center justify-center flex-col mb-8">
          <h1 className="mb-10 text-4xl font-bold mt-16 max-w-[300px] text-white">
            Build Smarter Not From Scratch
          </h1>
          <div className="w-[150px] ">
          <AnimateHr bgColor={'white'}/>
          </div>
        </div>
        <div className="text-black text-center mx-4 rounded-2xl flex flex-col items-center px-10  min-h-[240px] ">
          <img src={CodeModules} height={140} width={140} />
          <div className="w-[90%] ">
            <p className="pt-4 font-popins text-xl font-bold ">
              Predictable Cost
            </p>
            <p className=" mt-5 font-mont ">
              Begin by receiving a comprehensive MVP cost estimation, then
              smoothly transition to a fixed monthly contract for any additional
              work needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
