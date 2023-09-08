import React, { useState } from "react";
import PrimaryBtn from "../../components/PrimaryBtn";
import { btnData, allData } from "./data";
import { Link } from "gatsby";
export default function Card() {
  const [selectedCategory, setSelectedCategory] = useState("All");    
  return (
    <div>
      <div className=" lg:w-[100%] xl:w-[84%] justify-center mx-auto">
        <div className=" md:container grid grid-col gap-3 items-center mt-[42px] md:mt-[76px] md:grid-cols-2 lg:grid-cols-4   md:mx-auto ">
          {btnData.map((item: any, index) => {
            return (
              <div
                className={`mx-5 md:mx-5 flex rounded justify-around ${
                  selectedCategory === item.name ? "bg-primary" : ""
                }`}
                key={index}
                onClick={() => {
                  console.log("hello im am hear -----------------");
                  setSelectedCategory(item.name);
                }}
              >
                <PrimaryBtn
                  text={item.name}
                  additionalClasses="bg-primary  px-4 text-[20px] w-full 
                   md:mx-0 hover:bg-primary-lighter text-white font-semibold rounded"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:mt-[99px]  mt-[42px] space-y-[39px] md:space-y-[123px]">
        {allData
          .filter(
            (item) =>
              selectedCategory === "All" || item.catagery === selectedCategory
          )
          .map((item, index) => (
            <div
              className={` ${item.flexDirection} px-5   md:container md:mx-auto  flex flex-col md:flex-row justify-center  `}
            >
              <div
                className={` md:w-[50%]  flex ${
                  item.flexDirection === "md:flex-row"
                    ? "justify-start md:mr-[50px] xl:mr-0"
                    : "justify-end  md:ml-[50px] xl:ml-0"
                }   `}
              >
                <img
                  className=""
                  src={
                    "https://res.cloudinary.com/asifsaythe/image/upload/v1693296182/new_portfolio/man-using-tablet-work-connect-with-others_lhxghw.png"
                  }
                  alt=""
                />
              </div>
              <div className=" md:w-[45%] mt-[14px] md:mt-0  ">
                <div className="flex ">
                  <div className="flex justify-center items-center">
                    <div
                      className="before:content-[''] before:block before:h-[5px] 
                       before:bg-[#00B8F1] before:rounded-3xl
                      before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
                      before:transition before:ease-in-out before:duration-1000
                       w-[49px]   pr-[8px] "
                    ></div>
                  </div>
                  <h1 className=" md:text-[18px]   font-semibold lg:text-[25px] xl:text-[35px]  text-primary">
                    {item.title}
                  </h1>
                </div>
                <p className=" text-justify mt-[14px] lg:text-[20px] font-medium xl:text-[22px] text-light_Black ">
                  {item.description}
                </p>
                <Link to={"/readMore"}>
                  <PrimaryBtn
                    text="Reade Mores"
                    additionalClasses="bg-primary mt-[14px] text-[16px] md:px-[79px] px-10 lg:text-[26px] xl:mt-[14px] font-semibold hover:bg-primary-lighter text-white "
                  />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
