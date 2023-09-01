import React from "react";
export default function InfoSection() {
  return (
    <div className="flex flex-col lg:flex-row md:justify-center  lg:container md:mx-auto mt-[30px] ">
      <div className=" flex justify-center   ">
        <img
          src="https://res.cloudinary.com/asifsaythe/image/upload/v1692950236/new_portfolio/z18gbk01ycabyflhuixa.png"
          alt=""
          srcset=""
          className=" "
        />
      </div>
      <div className=" lg:ml-[34px] mr-[20px] ml-[20px]    lg:w-[35%]  flex flex-col lg:justify-center mt-6 md:mt-0 ">
        <p className=" text-justify text-lg  text-primary">
          Work with the Tech Leader.
        </p>
        <h1 className=" text-justify text-[20px]  md::text-[30px] font-semibold  mt-5 md:mt-[34px] ">
          Topsol brings ideas to life, leveraging modern technologies.
        </h1>
        <p className=" text-base md:text-xl mt-5 md:mt-[34px]  text-justify">
          Founded [Year], Topsol's evolution from a compact team to a dynamic
          mobile-first software development company showcases our commitment.
          With industry-leading team satisfaction, recognized by analysts, and a
          growing client roster including, we're honored to have supported
          startups and distinguished brands alike.
        </p>
      </div>
    </div>
  );
}
