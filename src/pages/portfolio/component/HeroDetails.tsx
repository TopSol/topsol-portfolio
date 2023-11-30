import React from "react";
import PrimaryBtn from "../../../components/PrimaryBtn";

export default function Hero(data: any) {
  return (
    <div className="">
      <div className="bg-[#00B8F1] ">
        <div className="flex flex-col text-white  justify-center items-center mx-6   lg:w-[55%] xl:w-[50%] md:mx-auto  " data-aos="fade-up">
          <h1 className="md:text-[50px] text-[35px] text-[#333] uppercase font-urbanist  text-center font-bold mt-[70px] ">
            {data?.data?.subTitle}
          </h1>
          <p className="text-center font-figtree font-light  md:text-[24px] text-[16px] mt-4">{data?.data?.description}</p>
          <div className=" my-[50px] pb-[150px]  md:pb-[180px] ">

          </div>
        </div>
      </div>
      <div className="flex flex-col object-cover  justify-center items-center" data-aos="fade-up">
        <img
          src={data?.data?.detailImageUrl}
          alt=""
          className="absolute mx-4 h-[500px] "
        />
      </div>
    </div>
  );
}
