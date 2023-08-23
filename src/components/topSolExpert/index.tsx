import React from "react";
import flexibilityImg from "../../images/flexibility.png";

function TopSolExperts() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#2D4375] to-[#62C3ED] py-8">
      <div className="flex flex-col justify-center items-center">
        <div className="py-4 text-2xl font-bold text-white">
          <h1>Why TopSol Experts</h1>
        </div>
        <div>
          <div
            className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-white before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44"
          ></div>
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-x-8 py-6">
          <button className="bg-white text-[#00B8F1] hover:bg-[#00B8F1] hover:text-white px-4 py-2 rounded">
            Values
          </button>
          <button className="bg-white text-[#00B8F1] hover:bg-[#00B8F1] hover:text-white px-4 py-2 rounded">
            Industries
          </button>
          <button className="bg-white text-[#00B8F1] hover:bg-[#00B8F1] hover:text-white px-4 py-2 rounded">
            Technologies
          </button>
        </div>
      </div>

      <div className="w-[90%]  py-10 px-14 mb-14 bg-white rounded-3xl">
        <div className="text-[#737373] text-center mb-10">
          <p>
            We Go Beyond to Cultivate a Workspace Where Safety, Value, and
            Motivation are Nurtured for Everyone
          </p>
        </div>
        <div className="grid grid-cols-5 grid-rows-1 gap-6 mb-10">
          <div className="flex flex-col hover:bg-[#00B8F1] hover:text-white items-center justify-center rounded-md border border-[#00B8F1] w-[198px] h-[140px]">
            <div className="bg-white rounded-full p-3">
              <img src={flexibilityImg} />
            </div>
            <div className="pt-6">
              <p>FLEXIBILITY</p>
            </div>
          </div>
          <div className="flex flex-col hover:bg-[#00B8F1] items-center justify-center rounded-md border border-[#00B8F1] w-[198px] h-[140px]">
            <div className="bg-white rounded-full p-3">
              <img src={flexibilityImg} />
            </div>
            <div className="pt-6">
              <p>EMPOWERMENT</p>
            </div>
          </div>
          <div className="flex flex-col hover:bg-[#00B8F1] items-center justify-center rounded-md border border-[#00B8F1] w-[198px] h-[140px]">
            <div className="bg-white rounded-full p-3">
              <img src={flexibilityImg} />
            </div>
            <div className="pt-6">
              <p>INCLUSIVITY</p>
            </div>
          </div>
          <div className="flex flex-col hover:bg-[#00B8F1] items-center justify-center rounded-md border border-[#00B8F1] w-[198px] h-[140px]">
            <div className="bg-white rounded-full p-3">
              <img src={flexibilityImg} />
            </div>
            <div className="pt-6">
              <p>DISCIPLINE</p>
            </div>
          </div>
          <div className="flex flex-col hover:bg-[#00B8F1] items-center justify-center rounded-md border border-[#00B8F1] w-[198px] h-[140px]">
            <div className="bg-white rounded-full p-3">
              <img src={flexibilityImg} />
            </div>
            <div className="pt-6">
              <p>GROWTH MINDSET</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSolExperts;
