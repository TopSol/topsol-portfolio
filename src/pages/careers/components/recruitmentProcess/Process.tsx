import React from "react";
import cardsData from "../../../../staticData/recruitmentProcessData";
import LineAnimation from "../../../../components/LineAnimation";
import SmallCards from "../../../../components/smallCards/SmallCards";

function Process() {
  return (
    <div className="md:container mx-auto  flex flex-col justify-center items-center">
      <div className="flex flex-col sm:items-center sm:justify-center">
        <h1 className="md:text-6xl text-3xl md:text-center font-semibold md:mt-[76px] mt-[35px] md:ml-0 md:mr-0 ml-7 mr-[100px] ">
          Learn Our Recruitment <span className=" text-primary"> Process</span>
        </h1>
        <div className="flex justify-center items-center">
          <LineAnimation
            width="178px"
            height="7px"
            backgroundColor="#00B8F1"
            marginTop="22px"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-10 gap-[30px] xl:mx-0 md:mx-4 md:my-[76px] my-12">
        {cardsData?.map((data, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <SmallCards
                avatar={data.avatar}
                heading={data.heading}
                headingClass="text-[20px] font-semibold"
                textClass="text-[11px] font-normal"
                text={data.text}
                className=" border border-primary-smCardBorder group max-w-[265px] h-[299px] py-[38px] pl-[32px] pr-[56px]"
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
