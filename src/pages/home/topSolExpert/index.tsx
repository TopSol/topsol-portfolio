import React, { useState } from "react";
import ExpertCards from "../expertCards/ExpertCards";
import AnimateHr from "../../../components/animatedLine/AnimateHr";
import data from "./data";
// import technologies from "./data";
import CircleImage from "../../../components/CircleImage";
import LineAnimation from "../../../components/LineAnimation";
function TopSolExperts() {
  const [selectedCategory, setSelectedCategory] = useState("Values");
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  const { technologies, Industries, Values } = data;

  let selectedArray;
  if (selectedCategory === "Values") {
    selectedArray = Values;
  } else if (selectedCategory === "Industries") {
    selectedArray = Industries;
  } else if (selectedCategory === "Technologies") {
    selectedArray = technologies;
  }

  return (
    <div className="flex flex-col justify-center h-[100%] items-center bg-gradient-to-b from-secondary to-primary ">
      <div className="w-[10%] relative right-44 bottom-6  ">
        <div className="absolute  ">
          <CircleImage />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="">
          <h1 className="font-extrabold mt-[54px] text-white font-montserrat text-[26px] md:text-34[px] lg:text-4xl text-center">
            Why Topsol Experts
          </h1>
        </div>
        <LineAnimation
          width="178px"
          height="7px"
          backgroundColor="#FFFFFF"
          marginTop="20px"
        />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-y-5  md:gap-x-[40px] mt-[59px] ">
          <button
            onClick={() => handleCategoryChange("Values")}
            className={`  ${
              selectedCategory === "Values"
                ? "bg-primary text-white"
                : "bg-white text-primary"
            } cursor-default  hover:text-white px-[45px] lg:px-[56px] py-4 rounded-[5px] hover:bg-primary text-[20px] font-semibold `}
          >
            Values
          </button>
          <button
            onClick={() => handleCategoryChange("Industries")}
            className={`  ${
              selectedCategory === "Industries"
                ? "bg-primary text-white"
                : "bg-white text-primary"
            } text-primary  cursor-default  hover:text-white px-[45px] lg:px-[56px] py-4 rounded-[5px] hover:bg-primary text-[20px] font-semibold `}
          >
            Industries
          </button>
          <button
            onClick={() => handleCategoryChange("Technologies")}
            className={`  text-primary  cursor-default ${
              selectedCategory === "Technologies"
                ? "bg-primary text-white"
                : "bg-white text-primary"
            }  hover:text-white px-[45px] lg:px-[56px] py-4 rounded-[5px] hover:bg-primary text-[20px] font-semibold`}
          >
            Technologies
          </button>
        </div>
      </div>

      <div className=" container flex flex-col items-center  mt-[42px] px-4 mb-[154px]  bg-white rounded-[20px]">
        <p className="text-[#737373] mt-[49px] text-center ">
          We Go Beyond to Cultivate a Workspace Where Safety, Value, and
          Motivation are Nurtured for Everyone
        </p>
        <div
          className={`grid mt-[75px] min-h-[200px]   mb-[105px] ${
            selectedCategory === "Technologies"
              ? "lg:grid-cols-8  grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-x-[41px]"
              : " md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5            gap-x-[28px]"
          }  sm:grid-cols-2 grid-cols-1 gap-y-[70px] gap-[28px]   `}
        >
          {selectedArray?.map((item: any, index) => {
            return (
              <div className="  " key={index}>
                <ExpertCards title={item.title} avatar={item.avatar} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopSolExperts;
