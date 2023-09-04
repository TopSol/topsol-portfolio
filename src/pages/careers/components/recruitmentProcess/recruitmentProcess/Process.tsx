import React from "react";
import AnimateHr from "../../../../../components/animatedLine/AnimateHr";
import { cardsData } from "./data";
import SmallCards from "../../../../../components/smallCards/SmallCards";

function Process() {
  return (
    <div className="md:container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="md:text-4xl text-2xl text-center font-montserrat font-bold my-4">
        Learn Our Recruitment <span className=" text-primary"> Process</span>
        </h1>
        <div className="w-[150px] my-12">
          <AnimateHr bgColor="[#00B8F1]" />
        </div>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
        {cardsData?.map((data, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <SmallCards
                avatar={data.avatar}
                heading={data.heading}
                text={data.text}
                className="border group py-6 "
                color="white"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Process;
