import React from "react";
import { data } from "../data";
import { Link } from "gatsby";
import FileIcon from "../../../images/Icons/fileIcon.png";
import LineAnimation from "../../../components/LineAnimation";
export default function Project() {
  return (
    <div className="bg-gradient-to-b from-secondary to-primary  ">
      <div className="flex flex-col justify-center items-center     ">
        <div className=" mt-[48px] ">
          <h1 className="font-extrabold text-white  text-3xl md:text-3xl lg:text-4xl text-center">
            Why choose us
          </h1>
        </div>
        <LineAnimation width='178px' height='7px' backgroundColor='#FFFFFF' marginTop="20px"/>
      </div>
      <div>
        <div className=" pb-[123px] mt-[111px] md:container mx-auto grid gap-x-[93px] gap-y-[51px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          {data.map((item: any, index) => {
            return (
              <Link to={"/servicesDetail"}>
                <div className="px-[25px]  mx-5 md:mx-0 bg-white  hover:bg-primary hover:text-white  rounded-xl  py-2 ">
                  <img
                    src={FileIcon}
                    className="w-[60px] bg-white rounded-full p-3 h-[60px] "
                    alt=""
                  />
                  <h1 className="font-semibold text-[20px]  my-3 ">
                    {item.heading}
                  </h1>
                  <p className="text-[11px] mb-4 ">{item.detail}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
