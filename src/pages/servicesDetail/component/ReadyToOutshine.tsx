import React from "react";
import data from "../../../staticData/serviceDetailsData";
import Cards from "./Cards";
import { servicesDetailsCardTypes } from "../../../types/interfaceTypes";

function ReadyToOutshine() {
  return (
    <div className="md:container mx-auto">
      <div className="   md:my-[100px] my-[50px] flex flex-row items-center justify-center">
        <div className=" md:w-[90%] w-[100%] text-center md:text-left flex flex-col md:justify-center">
          <h1 className=" text-[20px] lg:text-[40px] font-semibold">
            Ready to Outshine Your Competitors Online?
          </h1>
          <p className="lg:text-[24px] text-[20px] font-medium mt-[30px]">
            Topsol crafts websites that captivate customers, load swiftly, offer
            effortless maintenance, and adapt seamlessly to your business
            growth.
          </p>
        </div>
      </div>
      <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {data.map((item: servicesDetailsCardTypes, index) => {
          return <Cards item={item} />;
        })}
      </div>
    </div>
  );
}

export default ReadyToOutshine;
