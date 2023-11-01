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
  image,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row  md:container md:mx-auto items-center  my-20 justify-center">

      <div className="   text-center md:text-left flex flex-col  mt-6 lg:mt-12 md:w-[40%] w-[90%]">
        <p className=" text-[24px] font-urbanist  capitalize font-medium text-[#004264]">{heading}</p>
        <h1 className="  text-[20px] lg:text-[25px] text-primary font-figtree xl:text-[30px] font-normal  mt-[10px] xl:mt-[34px] ">
          {mainHeading}
        </h1>
        <p className=" text-justify mx-[24px] md:mx-0 text-[15px] lg:text-[18px] xl:text-[20px] leading-[150%] font-medium mt-[10px] xl:mt-[34px] ">
          {initialText}
        </p>
      </div>
      <div className="flex justify-center items-center md:w-[45%] w-[90%] md:ml-16 ml-0  ">
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
