import React from "react";
import data from "../../../staticData/servicesData";
import Icon2 from "../../images/Icons/servicersIcon/secourity.svg";
import { Link } from "gatsby";
import FileIcon from "../../../images/Icons/fileIcon.png";
import LineAnimation from "../../../components/LineAnimation";
import WhyChooesUs from '../../../images/whyChouesUs.png'
export default function Project() {
  return (
    <div className="py-[90px] flex flex-col px-2 bg-cover items-center "
      style={{
        backgroundImage: `url(${WhyChooesUs})`
      }}
    >
      <div className="flex flex-col justify-center items-center     ">
        <div className=" mt-[48px] ">
          <h1 className="font-extrabold uppercase font-urbanist text-black  text-3xl md:text-3xl lg:text-4xl text-center">
            Why<span className="text-primary">choose us</span>
          </h1>
        </div>
        <LineAnimation
          width="178px"
          height="7px"
          backgroundColor="#00B8F1"
          marginTop="20px"
        />
      </div>
      <div>
        <div className=" md:w-[75%] w-[95%] mt-[50px] mx-auto grid gap-x-[24px] gap-y-[51px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          {data.map((item: any, index) => {
            return (
              <div className="px-[25px] shadow-md  mx-5 md:mx-0 p-3 bg-white  hover:border-primary hover:border-2 border-2 border-white rounded-xl  py-6 hover:scale-[1.02] "
                style={{ transition: "all .50s ease " }}
              >
                <div className="bg-white w-[70px] justify-center flex items-center rounded-full h-[70px] ">
                  <img src={item.icon} className="h-[40px] w-[40px]  " alt="" />
                </div>
                <h1 className="font-normal text-[20px] font-figtree text-primary   my-3 ">
                  {item.heading}
                </h1>
                <p className="text-[18px] mb-4 font-figtree leading-[125%] font-light">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
