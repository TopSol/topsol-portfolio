import React, { useState } from "react";
import AnimateHr from "../../../../../components/animatedLine/AnimateHr";
import searchImg from "../../../../../images/search.png";
import DropDown from "../../../../../components/dropDown/DropDown";
import { CardData, Department, ExperienceLevel, JobType } from "./Data";
import DropDownCards from "../../cards/DropDownCards";

function AllOpenings() {
  
  const [visibleCards, setVisibleCards] = useState(9);

  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };
  return (
    <div className="py-8 sm:px-20 px-5  bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo">
      <div className="md:container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-primary-white text-4xl text-center font-bold my-5">
          All Openings
        </h1>
        <div className="w-[160px]">
          <AnimateHr bgColor="white" />
        </div>
      </div>
      <div className="my-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <img src={searchImg} />
          </div>
          <input
            type="search"
            id="default-search"
            className="w-full p-4 pl-20 text-sm text-black  rounded-lg bg-gray-50  dark:bg-primary-white  dark:placeholder-primary "
            placeholder="Search jobs"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center mb-8 gap-y-6 gap-x-3">
        <DropDown
          buttonTitle="Department"
          data={Department}
          //   onChange={(value) => handleDropdownChange("Department", value)}
        />
        <DropDown
          buttonTitle="Experience Level"
          data={ExperienceLevel}
          //   onChange={(value) => handleDropdownChange("Experience Level", value)}
        />
        <DropDown
          buttonTitle="Job Type"
          data={JobType}
          //   onChange={(value) => handleDropdownChange("Job Type", value)}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-y-12  xl:gap-x-32 gap-x-3">
        {CardData?.slice(0, visibleCards).map((item, index) => {
          return (
          
            <DropDownCards
              heading={item.heading}
              level={item.level}
              type={item.type}
              
            />
          );
        })}
      </div>
      {visibleCards < CardData.length && (
        <div className="flex justify-center items-center my-8">
          <button
            onClick={loadMoreCards}
            className="px-7 py-3 text-xl font-bold group flex items-center justify-center rounded bg-primary-white text-primary hover:scale-x-125 transform origin-left transition-transform duration-300 ease-in-out"
          >
            View more
            <svg
              className="w-4 h-4 hidden group-hover:inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
      </div>
    </div>
  );
}

export default AllOpenings;
