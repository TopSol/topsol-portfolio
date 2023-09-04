import React from "react";
import AnimateHr from "../../../../../components/animatedLine/AnimateHr";
import searchImg from "../../../../../images/search.png";
import DropDown from "../../../../../components/dropDown/DropDown";
import { Department } from "./Data";

function AllOpenings() {
  return (
    <div className="py-8 px-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-2xl font-montserrat font-bold">All Openings</h1>
        <AnimateHr bgColor="white" />
      </div>
      <div className="my-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={searchImg} />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search jobs"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <DropDown buttonTitle="Department" data={Department} />
        <DropDown buttonTitle="Experience Level" data={Department} />
        <DropDown buttonTitle="Job Type" data={Department} />
      </div>
    </div>
  );
}

export default AllOpenings;
