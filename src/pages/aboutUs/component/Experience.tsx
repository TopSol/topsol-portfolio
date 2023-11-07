import React from "react";
import AnimatedValue from "./NumberAnimation";
import LineAnimation from "../../../components/LineAnimation";

export default function Experience() {
  return (
    <div className="bg-gradient-to-b from-secondary to-primary mt-[80px] pt-[48px] pb-[140px] md:pt-[92px] md:pb-[92px] ">
      <div className=" flex flex-col md:justify-start justify-center  items-center  ">
        <h1 className="font-bold text-white  uppercase font-urbanist text-[26px] md:text-[48px] text-center ">
          Our <span className="text-primary">Achievements</span>
        </h1>
        <LineAnimation
          width="178px"
          height="7px"
          backgroundColor="#FFFFFF"
          marginTop="22px"
        />
        <p className='text-white font-figtree md:text-[24px] text-[16px] font-medium leading-[120%] mt-8 text-center '>Discover our track record of success with these dynamic statistics showcasing our achievements</p>
      </div>
      <div className=" md:container md:mx-auto mt-16  mx-[18px] flex flex-col justify-center items-center ">
        <div className="flex lg:flex-row flex-col  lg:space-x-4 ">
          <div className="bg-white rounded-[10px]  justify-center flex flex-row  items-center  w-[300px] sm:w-[500px]   py-4  sm:py-9 ">
            <div className="w-[20%] sm:w-[25%]">
              <h1 className=" text-[20px] flex text-primary sm:text-[50px] font-bold  ">
                <AnimatedValue start={0} end={30} duration={2000} /> +
              </h1>
            </div>
            <div className="w-[70%] sm:w-[50%] ">
              <p className="text-[#333] text-[16px] sm:text-[24px] font-urbanist font-bold  ">
                Company Clients
              </p>
              <p className="text-[#556070] text-[16px] sm:text-[18px] font-figtree font-light leading-normal">Empowering businesses through innovative solutions</p>
            </div>
          </div>
          <div className="bg-white rounded-[10px] mt-5 lg:mt-0 justify-center flex flex-row items-center  w-[300px] sm:w-[500px]  py-4  sm:py-9  ">
            <div className="w-[20%] sm:w-[25%]">
              <h1 className=" text-[20px] flex text-primary sm:text-[50px] font-bold  ">
                <AnimatedValue start={0} end={50} duration={2000} /> +
              </h1>
            </div>
            <div className="w-[70%] sm:w-[50%] ">
              <p className="text-[#333] text-[16px] sm:text-[24px] font-urbanist font-bold  ">
                Client Feedbacks
              </p>
              <p className="text-[#556070] text-[16px] sm:text-[18px] font-figtree font-light leading-normal">Shaping our future with valuable client feedback</p>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:space-x-5 mt-5">
          <div className="bg-white rounded-[10px]  justify-center flex flex-row items-center  w-[300px] sm:w-[500px]  py-4  sm:py-9  ">
            <div className="w-[20%]  sm:w-[30%]">
              <h1 className=" text-[20px] flex text-primary sm:text-[50px] font-bold  ">
                <AnimatedValue start={0} end={100} duration={2000} /> +
              </h1>
            </div>
            <div className="w-[70%] sm:w-[50%] ">
              <p className="text-[#333] text-[16px] sm:text-[24px] font-urbanist font-bold  ">
                Projects Done
              </p>
              <p className="text-[#556070] text-[16px] sm:text-[18px] font-figtree font-light leading-normal">Turning ideas into reality, multiple project at a time.</p>
            </div>
          </div>
          <div className="bg-white rounded-[10px] mt-5 lg:mt-0  justify-center flex flex-row items-center  w-[300px] sm:w-[500px]  py-4  sm:py-9  ">
            <div className="w-[20%] sm:w-[30%]">
              <h1 className=" text-[20px] flex text-primary sm:text-[50px] font-bold  ">
                <AnimatedValue start={0} end={100} duration={2000} /> %
              </h1>
            </div>
            <div className="w-[70%] sm:w-[50%] ">
              <p className="text-[#333] text-[16px] sm:text-[24px] font-urbanist font-bold  ">
                Clients satisfaction
              </p>
              <p className="text-[#556070] text-[16px] sm:text-[18px] font-figtree font-light leading-normal">Customer’s happiness is our ultimate success.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
