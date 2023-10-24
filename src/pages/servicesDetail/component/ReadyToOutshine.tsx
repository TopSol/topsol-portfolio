import React from "react";
import data from "../../../staticData/serviceDetailsData";
import Cards from "./Cards";
import { servicesDetailsCardTypes } from "../../../types/interfaceTypes";

function ReadyToOutshine(servicedata) {
  // {servicedata?.servicedata?.details?.paragraphs}

  // const paragraphs = servicedata?.servicedata?.details?.paragraphs;
  // console.log("paragraphs", paragraphs);
  return (
    <div className="md:container mx-auto">
      <div className="   md:my-[100px] my-[30px] flex flex-row items-center justify-center">
        <div className=" md:w-[90%] w-[100%] text-center md:text-left flex flex-col md:justify-center">
          {servicedata?.servicedata?.details?.paragraphs?.map((item, index) => {
            return (
              <div key={index} className="mt-[30px] ">
                <h1 className=" text-[22px] lg:text-[30px] font-semibold ">
                  {item?.heading}
                </h1>
                <p className="lg:text-[18px] text-[16px] font-medium mt-[20px] text-justify mx-[24px] md:mx-0">
                  {item?.text}
                </p>
              </div>
            );
          })}
          <p className="lg:text-[18px] text-[16px] font-medium mt-[20px] text-justify mx-[24px] md:mx-0">
            {servicedata?.servicedata?.details?.conclusion}
          </p>
        </div>
      </div>
      {/* <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {data.map((item: servicesDetailsCardTypes, index) => {
          return <Cards item={item} />;
        })}
      </div> */}
    </div>
  );
}

export default ReadyToOutshine;
