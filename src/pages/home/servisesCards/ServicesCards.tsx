import React from "react";

function ServicesCards({ serviceData }) {
  return (
    <div className="  bg-white rounded-2xl w-[264px] h-[369px] overflow-hidden relative hoverDive shadow-lg  hover:text-primary-white   ">
      <div className="flex flex-col w-full items-center px-4">
        <div className="mb-2 w-[70px] h-[70px] mt-2 z-[2]">
          <img src={serviceData?.avatar} alt="Avatar" />
        </div>
        <div className="mb-2 w-[70px] h-[70px] mt-2 translate-x-[-50%] absolute top-0 left-[50%] hoverImage">
          <img src={serviceData?.bg} alt="" />
        </div>
        <div className="py-4 font-extrabold z-[2] ">
          <p>{serviceData?.heading}</p>
        </div>
        <div className="text-center pt-4 leading-8 z-[2] ">
          <p>{serviceData?.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
