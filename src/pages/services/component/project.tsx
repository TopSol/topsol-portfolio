import React from "react";
import data from "../data";
import LineAnimation from "../../../components/LineAnimation";

interface dataType {
  id: string
  icon: string;
  heading: string;
  detail: string;
}
export default function Project() {
  return (
    <div className="bg-gradient-to-b from-secondary to-primary  ">
      <div className="flex flex-col justify-center items-center     ">
        <div className=" mt-[48px] ">
          <h1 className="font-extrabold text-white  text-3xl md:text-3xl lg:text-4xl text-center">
            Why choose us
          </h1>
        </div>
        <LineAnimation
          width="178px"
          height="7px"
          backgroundColor="#FFFFFF"
          marginTop="20px"
        />
      </div>
      <div>
        <div className=" pb-[123px] mt-[111px] md:container mx-auto grid gap-x-[93px] gap-y-[51px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          {data.map((item, index) => {
            return (
              <div className="px-[25px]  mx-5 md:mx-0 p-3 bg-white  hover:bg-primary hover:text-white  rounded-xl  py-2 ">
                <div className="bg-white w-[70px] justify-center flex items-center rounded-full h-[70px] ">
                  <img src={item.icon} className="h-[40px] w-[40px]  " alt="" />
                </div>
                <h1 className="font-semibold text-[20px]  my-3 ">
                  {item.heading}
                </h1>
                <p className="text-[11px] mb-4 ">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
