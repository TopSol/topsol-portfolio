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

  const categories = [
    "Mobile",
    "FrontEnd",
    "Devops",
    "CMS",
    "Database",
    "Backend",
    "UIUX",
  ];
  const {
    Mobile,
    FrontEnd,
    Devops,
    CMS,
    Database,
    Backend,
    UIUX,
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
  } else if (selectedCategory === "UIUX") {
    selectedArray = UIUX;
  }

  return (
    <div className="flex flex-col justify-center  items-center bg-[#FCFCFC] ">
      <div className="flex flex-col justify-center items-center mx-auto ">
        <div className="">
          <h1 className="font-extrabold mt-[54px]  font-urbanist uppercase text-[26px] md:text-[34px] lg:text-4xl text-center">
            TECHNOLOGIES <span className="text-primary font-urbanist font-extrabold">WE WORK WITH</span>
          </h1>
        </div>
        <LineAnimation
          width="178px"
          height="6px"
          backgroundColor="#00B8F1"
          marginTop="20px"
        />
        <div className="flex flex-wrap justify-center items-center   md:space-x-12 mt-[30px] ">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`cursor-pointer mt-4  mx-1 ${selectedCategory === category
                ? "md:border-b-2 border-primary bg-primary md:bg-white text-white md:text-black"
                : "bg-transparent border-primary text-[#333]"
                } py-2 border-2 md:border-0 md:px-0 px-[20px] w-[90px] md:w-auto md:rounded-none rounded-full font-urbanist text-[12px] md:text-[20px] font-medium `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="md:container md:mx-auto flex flex-col justify-center items-center mt-[25px] px-4 mb-[40px]  rounded-[20px]">
        <div
          className="flex flex-wrap justify-center items-center mt-[25px] w-[80%] gap-y-[70px] pb-[50px]"
        >
          {selectedArray?.map((item: any, index) => (
            <div className="flex flex-col items-center justify-center mx-4" key={index}>
              <ExpertCards title={item.title} avatar={item.avatar} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default TopSolExperts;
