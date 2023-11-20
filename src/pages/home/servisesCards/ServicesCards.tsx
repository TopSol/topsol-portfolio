import React from "react";
import Arrowup from "../../../images/Icons/arrowup.svg";

function ServicesCards({ serviceData }) {
  return (
    <div className=" rounded-2xl w-[285px] h-[320px] relative overflow-hidden service-cards-transition">
      <div className="w-full h-full absolute">
        <img src={serviceData?.bgImg} />
      </div>
      <div className="absolute bottom-0 px-[28px] w-full">
        <h1 className="text-white z-50 font-figtree text-[30px] leading-tight font-extrabold tracking-wide ">
          {serviceData?.heading}
        </h1>
        <div className="flex justify-between items-center text-white py-[20px]">
          <p>View More</p>
          <img src={Arrowup} alt="" className="" />
        </div>
      </div>
      <div className="service-hover-cards-transition">
        <p className="uppercase">View More</p>
        <img src={Arrowup} alt="" className="" />
      </div>
    </div>
  );
}

export default ServicesCards;
