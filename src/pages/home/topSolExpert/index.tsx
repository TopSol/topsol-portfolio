import React, { useState } from "react";
import ExpertCards from "../expertCards/ExpertCards";
import AnimateHr from "../../../components/animatedLine/AnimateHr";
import data from "../../../staticData/topsolExpertsData";
// import technologies from "./data";
import CircleImage from "../../../components/CircleImage";
import LineAnimation from "../../../components/LineAnimation";
function TopSolExperts() {
  const [selectedCategory, setSelectedCategory] = useState("Mobile");
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  const {
    technologies,
    Industries,
    Mobile,
    FrontEnd,
    Devops,
    CMS,
    Database,
    Backend,
    UiUx,
  } = data;

  let selectedArray;
  if (selectedCategory === "Mobile") {
    selectedArray = Mobile;
  } else if (selectedCategory === "FrontEnd") {
    selectedArray = FrontEnd;
  } else if (selectedCategory === "Devops") {
    selectedArray = Devops;
  } else if (selectedCategory === "CMS") {
    selectedArray = CMS;
  } else if (selectedCategory === "Database") {
    selectedArray = Database;
  } else if (selectedCategory === "Backend") {
    selectedArray = Backend;
  } else if (selectedCategory === "UiUx") {
    selectedArray = UiUx;
  }

  return (
    <div className="flex flex-col justify-center  items-center bg-[#FCFCFC] ">
      <div className="flex flex-col justify-center items-center  ">
        <div className="">
          <h1 className="font-extrabold mt-[54px]  font-urbanist uppercase text-[26px] md:text-34[px] lg:text-4xl text-center">
            TECHNOLOGIES <span className="text-primary">WE WORK WITH</span>
          </h1>
        </div>
        <LineAnimation
          width="178px"
          height="6px"
          backgroundColor="#00B8F1"
          marginTop="20px"
        />
        <div className="grid md:grid-cols-7 grid-cols-1 gap-y-5  md:gap-x-[40px] mt-[59px] ">
          <button
            onClick={() => handleCategoryChange("Mobile")}
            className={`    cursor-default ${
              selectedCategory === "Mobile"
                ? "border-b-2 border-primary"
                : "bg-white text-[#333]"
            }    py-4 font-urbanist    text-[20px] font-medium`}
          >
            Mobile
          </button>
          <button
            onClick={() => handleCategoryChange("FrontEnd")}
            className={`  ${
              selectedCategory === "FrontEnd"
                ? "border-b-2 border-primary"
                : "bg-white text-[#333]"
            }   cursor-default   font-urbanist    py-4   text-[20px] font-medium `}
          >
            FrontEnd
          </button>
          <button
            onClick={() => handleCategoryChange("Devops")}
            className={`  ${
              selectedCategory === "Devops"
                ? "border-b-2 border-primary"
                : "bg-white text-[#333]"
            } cursor-default font-urbanist      py-4   text-[20px] font-medium `}
          >
            Devops
          </button>
          <button
            onClick={() => handleCategoryChange("CMS")}
            className={`  ${
              selectedCategory === "CMS"
                ? "border-b-2 border-primary"
                : "bg-white text-[#333]"
            } cursor-default font-urbanist      py-4   text-[20px] font-medium `}
          >
            CMS
          </button>
          <button
            onClick={() => handleCategoryChange("Database")}
            className={`  ${
              selectedCategory === "Database"
                ? "border-b-2 border-primary"
                : "bg-white text-[#333]"
            } cursor-default font-urbanist      py-4   text-[20px] font-medium `}
          >
            Database
          </button>
          <button
            onClick={() => handleCategoryChange("Backend")}
            className={`  ${
              selectedCategory === "Backend"
                ? "border-b-2 border-primary"
                : "bg-white text-[#333]"
            } cursor-default font-urbanist      py-4   text-[20px] font-medium `}
          >
            Backend
          </button>
          <button
            onClick={() => handleCategoryChange("UiUx")}
            className={`  ${
              selectedCategory === "UiUx"
                ? "border-b-2 border-primary"
                : "bg-white text-[#333]"
            } cursor-default font-urbanist      py-4   text-[20px] font-medium `}
          >
            UiUx
          </button>
        </div>
      </div>

      <div className=" container flex flex-col items-center  mt-[42px] px-4 mb-[50px]  bg-white rounded-[20px]">
        <p className="text-[#737373] mt-[49px] text-center ">
          We Go Beyond to Cultivate a Workspace Where Safety, Value, and
          Motivation are Nurtured for Everyone
        </p>
        <div
          className={`grid mt-[75px] min-h-[200px]    ${
            selectedCategory === "Technologies"
              ? "lg:grid-cols-8  grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-x-[41px]"
              : " md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6            gap-x-[28px]"
          }  sm:grid-cols-2 grid-cols-1 gap-y-[70px] gap-[28px] pb-[50px]  `}
        >
          {selectedArray?.map((item: any, index) => {
            return (
              <div className="  " key={index}>
                <ExpertCards
                  title={item.title}
                  border={selectedCategory == "22"}
                  avatar={item.avatar}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopSolExperts;
