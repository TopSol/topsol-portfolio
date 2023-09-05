import React, { useState } from "react";
import ExpertCards from "../expertCards/ExpertCards";
import AnimateHr from "../../../components/animatedLine/AnimateHr";
import { Industries, Technologies, Values } from "./data";


function TopSolExperts() {
  const [selectedCategory, setSelectedCategory] = useState("Values");
  const handleCategoryChange = (category:string) => {
    setSelectedCategory(category);
  };

  let selectedArray;
  if (selectedCategory === "Values") {
    selectedArray = Values;
  } else if (selectedCategory === "Industries") {
    selectedArray = Industries;
  } else if (selectedCategory === "Technologies") {
    selectedArray = Technologies;
   
  }

 


  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-secondary to-primary ">
      <div className="flex flex-col justify-center items-center">
        <div className="pb-5 mt-[54px] text-2xl font-bold text-white">
          <h1>Why TopSol Experts</h1>
        </div>
        <div className="w-[180px]">
          <AnimateHr bgColor={'white'}/>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-y-5  md:gap-x-[40px] mt-[59px] ">
          <button
          onClick={() => handleCategoryChange("Values")}
          className={` text-primary bg-white hover:text-white px-[56px] py-4 rounded-[5px] hover:bg-primary text-[20px] font-semibold `}>
            Values
          </button>
          <button 
          onClick={() => handleCategoryChange("Industries")}
          className={` text-primary bg-white hover:text-white px-[56px] py-4 rounded-[5px] hover:bg-primary text-[20px] font-semibold `}>
            Industries
          </button>
          <button 
          onClick={() => handleCategoryChange("Technologies")}
          className={`  text-primary bg-white hover:text-white px-[56px] py-4 rounded-[5px] hover:bg-primary text-[20px] font-semibold`}>
            Technologies
          </button>
        </div>
      </div>

      <div className=" container flex flex-col items-center justify-center mt-[42px] px-4 mb-[154px] bg-white rounded-[20px]">
        
          <p className="text-[#737373] text-center mt-[49px]" >
            We Go Beyond to Cultivate a Workspace Where Safety, Value, and
            Motivation are Nurtured for Everyone
          </p>
        
        <div className={`grid mt-[75px] mb-[105px] ${ selectedCategory === "Technologies" ? "md:grid-cols-8 gap-x-[41px]" :"md:grid-cols-5 gap-x-[28px]" }  sm:grid-cols-2 grid-cols-1 md:gap-y-[70px] gap-[28px]   `}>
        {selectedArray?.map((item, index) => {
            return (
              <div key={index}>
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
