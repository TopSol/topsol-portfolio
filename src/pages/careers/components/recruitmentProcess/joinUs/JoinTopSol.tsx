import React from "react";
import careerOneImg from "../../../../../images/career1.png";

function JoinTopSol() {
  return (
    <div className="bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo">
      <div className=" flex md:flex-row flex-col justify-center items-center md:text-start text-center md:container md:mx-auto">
        <div className="flex flex-col justify-center  md:items-start items-center md:mt-[128px] md:mb-[129px]  mt-[70px] mb-0 md:ml-3 md:mr-0 mr-[25px] ml-[26px]">
            <h1 className="lg:text-[70px] md:text-[50px] text-[36px] font-semibold text-primary-white  md:max-w-[522px] max-w-[269px] ">
              Join Our <span className=" text-primary"> Team</span> at
              <span className=" text-primary"> Topsol</span>
            </h1>
          <div className="md:my-[50px] my-8 md:max-w-[576px] max-w-[267px] ">
            <p className="text-primary-white font-medium text-lg">
              Every journey embarks with an aspiration. Come join us, as we
              delve into possibilities, build together, and foster growth within
              our united team
            </p>
          </div>
          <div className="flex md:justify-start justify-center items-center md:max-w-[349px] md:h-[71px] max-w-[228px] h-[54px]">
            <button className="md:text-[26px] text-xl font-semibold border hover:border-none rounded-[5px] md:px-[75px] md:pt-[20px] md:pb-[19px] py-[15px] px-9 text-primary-white hover:bg-primary">
              View openings
            </button>
          </div>
        </div>

        <div
          className="md:mb-[129px] mb-[84px] md:mr-3  md:mt-[128px] mt-8 md:max-w-[506px] max-w-[200px]"
        >
          <img src={careerOneImg} className="w-[100%]" />
        </div>
      </div>
    </div>
  );
}

export default JoinTopSol;
