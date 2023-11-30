import React from "react";

interface Props {
  heading?: string;
  mainHeading?: string;
  initialText?: string;
  image?: any;
}

export default function InfoSection({
  heading,
  mainHeading,
  initialText,
  image
}: Props) {
  return (
    <div className="flex flex-col md:flex-row  md:container md:mx-auto items-center  my-20 justify-center" data-aos="fade-up">

      <div className="   text-center md:text-left flex flex-col  mt-6 lg:mt-12 md:w-[40%] w-[90%]">
        <div className="flex  items-center ">
          <div className="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="2" viewBox="0 0 28 2" fill="none">
              <path d="M26.0156 1L0.998779 1" stroke="#004264" stroke-width="2" stroke-linecap="round" />
            </svg>
          </div>
          <p className=" text-[20px] font-figtree font-normal  capitalize  text-[#004264]">{heading}</p>
        </div>
        <h1 className="  text-[20px] lg:text-[25px] text-primary font-urbanist xl:text-[34px] font-normal  mt-[10px] xl:mt-[34px] ">
          {mainHeading}
        </h1>
        <p className=" text-justify mx-[24px] text-[#3D3D3D] md:mx-0 text-[15px] lg:text-[18px] xl:text-[20px] leading-[150%] font-light font-figtree mt-[10px] xl:mt-[34px] ">
          {initialText}
        </p>
      </div>
      <div className="flex justify-center items-center md:w-[45%] w-[90%] md:ml-16 ml-0 ">
        <div className="flex mt-7 md:mt-0">
          <img
            src={image}
            alt="#"
            className=""
          />
        </div>
      </div>



    </div>
  );
}
