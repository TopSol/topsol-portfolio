import React from "react";
import CodeModules from "../../images/code_modules.png";
import ExpertTeam from "../../images/expert_team.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSlider from "./CardSlider";
import AnimateHr from "../animatedLine/AnimateHr";

const reviews = [
  {
    heading: "Ready-to-use set of modules",
    desc: "Faster development process by leveraging the extensive collection of thousands of modules of reusable code available in our library.",
    avatar: CodeModules,
  },
  {
    heading: "Team of experts to craft your product",
    desc: "Our dedicated team of experts combines these modules and then customize the product as per needs of each client with their exceptional skills and expertise.",
    avatar: CodeModules,
  },
  {
    heading: "Luanch Faster and Iterate",
    desc: "Obtain a personalized estimate to transform your building plan into a functional MVP in a matter of weeks, rather than months.",
    avatar: CodeModules,
  },
  {
    heading: "Predictable Cost",
    desc: "Begin by receiving a comprehensive MVP cost estimation, then smoothly transition to a fixed monthly contract for any additional work needed.",
    avatar: CodeModules,
  },
];

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
        <div className="">
          <Slider {...settings}>
            {reviews?.map((review, index) => {
              return (
                <div key={index} className="">
                  <CardSlider reviews={review} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
