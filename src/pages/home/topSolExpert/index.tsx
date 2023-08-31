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

 
  const gridColumns = selectedCategory === 'Technologies' ? 8 : 5;
  const lgGridColumns = selectedCategory === 'Technologies' ? 6 : 4;
  const mdGridColumns = selectedCategory === 'Technologies' ? 4 : 2;
  const smGridColumns = selectedCategory === 'Technologies' ? 2 : 1;

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#2D4375] to-[#62C3ED] p-8">
      <div className="flex flex-col justify-center items-center">
        <div className="py-4 text-2xl font-bold text-white">
          <h1>Why TopSol Experts</h1>
        </div>
        <div className="w-[180px]">
          <AnimateHr bgColor={'white'}/>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1  md:gap-x-8 gap-y-4 py-6">
          <button
          onClick={() => handleCategoryChange("Values")}
          className={` text-[#00B8F1] hover:bg-[#00B8F1] hover:text-white px-4 py-2 rounded ${
            selectedCategory === "Values" ? "bg-[#00B8F1] text-white" : "bg-white"
          }`}>
            Values
          </button>
          <button 
          onClick={() => handleCategoryChange("Industries")}
          className={` text-[#00B8F1] hover:bg-[#00B8F1] hover:text-white px-4 py-2 rounded ${
            selectedCategory === "Industries" ? "bg-[#00B8F1] text-white" : "bg-white"
          }`}>
            Industries
          </button>
          <button 
          onClick={() => handleCategoryChange("Technologies")}
          className={` text-[#00B8F1] hover:bg-[#00B8F1] hover:text-white px-4 py-2 rounded ${
            selectedCategory === "Technologies" ? "bg-[#00B8F1] text-white" : "bg-white"
          }`}>
            Technologies
          </button>
        </div>
      </div>

      <div className=" container flex flex-col items-center justify-center py-10 px-4 mb-14 bg-white rounded-3xl">
        <div className="text-[#737373] text-center mb-10">
          <p>
            We Go Beyond to Cultivate a Workspace Where Safety, Value, and
            Motivation are Nurtured for Everyone
          </p>
        </div>
        <div className={`grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-x-16 gap-y-10 mb-10`}>
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
