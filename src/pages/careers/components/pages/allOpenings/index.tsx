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
    <div className="bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo">
      <div className="md:container md:mx-auto flex justify-center items-center flex-col">
        <div className="flex flex-col items-center justify-center mb-14">
          <h1 className="text-primary-white md:text-[40px] text-3xl text-center font-semibold md:mt-[49px] mt-[52px] md:mb-[18px] mb-[11px]">
            All Openings
          </h1>
          <AnimateHr bgColor="white" className="w-[150px]" />
        </div>
        <div className="w-[268px] overflow-hidden md:w-[95%] lg:w-[71%] xl:w-[87%] 2xl:w-[73%]  md:mb-[39px] md:px-0 ">
          <div className="flex items-center md:h-[75px] h-[63px] rounded-[10px]  bg-white ">
              <img className="  pointer-events-none ml-[30px] md:mr-7 mr-[18px] md:max-w-[34px] max-w-[29px] h-[29px] md:h-[34px]" src={searchImg}/>
            <input
              className="text-lg text-black outline-none rounded-lg dark:placeholder-primary dark:placeholder:text-base md:dark:placeholder:text-xl dark:placeholder:font-medium"
              placeholder="Search jobs"
            
            />
          </div>
        </div>
        <div className="flex md:flex-row  flex-wrap flex-col md:mb-[60px] mb-[58px] justify-center ">
          <div className="mx-[9px] md:mt-0 mt-[25px]">
            <DropDown
              buttonTitle="Department"
              data={Department}
              className="min-w-[268px] sm:w-[362px] md:h-[75px] h-[63px] "
            />
          </div>
          <div className="mx-[9px] md:my-0 my-[25px]">
            <DropDown
              buttonTitle="Experience Level"
              data={ExperienceLevel}
              className="min-w-[268px] sm:w-[362px] md:h-[75px] h-[63px] "
            />
          </div>
          <div className="mx-[9px]  xl:mt-0 md:mt-[25px]">
            <DropDown
              buttonTitle="Job Type"
              data={JobType}
              className="min-w-[268px] sm:w-[362px] md:h-[75px] h-[63px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 md:mb-[60px] mb-[53px] gap-y-[35px] xl:gap-x-[71px] xl:gap-y-[36px] gap-x-3 min-w-[264px] md:min-w-[680px] lg:min-w-[980px] xl:min-w-[1120px]">
          {CardData?.slice(0, visibleCards).map((item, index) => {
            return (
              <DropDownCards
                heading={item.heading}
                level={item.level}
                type={item.type}
                className="w-[100%] "
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center ">
          <button
            onClick={loadMoreCards}
            className=" px-[34px] md:mb-[88px] mb-14 text-xl max-w-[180px] h-[56px] font-semibold group flex md:flex-row flex-col items-center justify-center rounded-[5px] bg-primary-white text-primary hover:scale-x-125 transform origin-left transition-transform duration-300 ease-in-out"
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
      </div>
    </div>
  );
}

export default AllOpenings;
