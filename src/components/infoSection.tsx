import React from "react";

export default function InfoSection() {
  return (
    <div className="flex flex-col md:flex-row  md:container md:mx-auto  mt-14 ">
      <div className="xl:w-[50%] lg:w-[45%] md:w-[45%] w-[100%] justify-center  ">
        <img
          src="https://res.cloudinary.com/asifsaythe/image/upload/v1692950236/new_portfolio/z18gbk01ycabyflhuixa.png"
          alt="#"
          className="w-[90%] justify-center mr-auto "
        />
      </div>
      <div className=" xl:w-[40%] lg:w-[50%] md:w-[50%] w-[100%]  text-center md:text-left flex flex-col md:justify-center mt-6 lg:mt-12 ">
        <p className=" text-[18px] font-medium text-primary">
          Work with the Tech Leader.
        </p>
        <h1 className="  text-[20px] lg:text-[25px]  xl:text-[30px] font-semibold  mt-[10px] xl:mt-[34px] ">
          Topsol brings ideas to life, leveraging modern technologies.
        </h1>
        <p className=" text-justify mx-[24px] md:mx-0 text-[15px] lg:text-[18px] xl:text-[20px] font-medium mt-[10px] xl:mt-[34px] ">
          Founded 2021, Topsol's evolution from a compact team to a dynamic
          mobile-first software development company showcases our commitment.
          With industry-leading team satisfaction, recognized by analysts, and a
          growing client roster including, we're honored to have supported
          startups and distinguished brands alike.
        </p>
      </div>
    </div>
  );
}
