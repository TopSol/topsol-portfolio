import React from "react";

interface Props {
  heading?: string;
  mainHeading?: string;
  initialText?: string;
  image?: string;
}

export default function InfoSection({
  heading,
  mainHeading,
  initialText,
  image,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:container md:mx-auto  mt-14 ">
      <div className="xl:w-[45%] lg:w-[45%] md:w-[45%] w-[100%] mx-auto ">
        <img
          // src="https://res.cloudinary.com/asifsaythe/image/upload/v1692950236/new_portfolio/z18gbk01ycabyflhuixa.png"
          src={
            image ||
            "https://res.cloudinary.com/asifsaythe/image/upload/v1692950236/new_portfolio/z18gbk01ycabyflhuixa.png"
          }
          alt="#"
          className="w-[100%] "
        />
      </div>
      <div className=" xl:w-[45%] lg:w-[50%] md:w-[50%] w-[100%]  text-center md:text-left flex flex-col md:justify-center mt-6 lg:mt-12 ">
        <p className=" text-[18px] font-medium text-primary">{heading}</p>
        <h1 className="  text-[20px] lg:text-[25px]  xl:text-[30px] font-semibold  mt-[10px] xl:mt-[34px] ">
          {mainHeading}
        </h1>
        <p className=" text-justify mx-[24px] md:mx-0 text-[15px] lg:text-[18px] xl:text-[20px] font-medium mt-[10px] xl:mt-[34px] ">
          {initialText}
        </p>
      </div>
    </div>
  );
}
