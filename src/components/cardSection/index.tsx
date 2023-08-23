import React from "react";
import CodeModules from "../../images/code_modules.png";
import ExpertTeam from "../../images/expert_team.png";


export default function CardSection() {
  return (
    <div className="pt-20 bg-gradient-to-b from-[#0B234C] to-[#00B8F1]">
      <div className="flex overflow-x-hidden">
        <div className=" px-20">
        <h1 className="mb-10 text-4xl font-bold mt-16 w-[400px] text-white">
          Build Smarter Not From Scratch
        </h1>
        <div
            className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-white before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44"
          ></div>
        </div>
        <div className="text-black text-center mx-4 rounded-2xl flex flex-col items-center w-full">
          <img src={CodeModules} height={140} width={240} />
          <div className="w-[40%]  ">
            <p className="pt-4 font-popins text-xl font-bold ">
              Ready-to-use set of modules
            </p>
            
          </div>
          <p className=" mt-5 font-mont w-[400px]">
              Faster development process by leveraging the extensive collection
              of thousands of modules of reusable code available in our library.
            
            </p>
        </div>
        <div className="text-black text-center mx-4 rounded-2xl flex flex-col items-center w-full  ">
          <img src={CodeModules} height={140} width={240} />
          <div className="w-[50%] ">
            <p className="pt-4 font-popins text-xl font-bold ">
              Team of experts to craft your product
            </p>
           
          </div>
          <p className=" mt-5 font-mont w-[400px]">
              Our dedicated team of experts combines these modules and then
              customize the product as per needs of each client with their
              exceptional skills and expertise.
            </p>
        </div>
        <div className="text-black text-center mx-4 rounded-2xl flex flex-col items-center w-full">
          <img src={CodeModules} height={140} width={240} />
          <div className="w-[40%]">
            <p className="pt-4 font-popins text-xl font-bold ">
              Luanch Faster and Iterate
            </p>
          
          </div>
          <p className=" mt-5 font-mont w-[400px]">
              Obtain a personalized estimate to transform your building plan
              into a functional MVP in a matter of weeks, rather than months.
            </p>
        </div>
        <div className="text-black text-center mx-4 rounded-2xl flex flex-col items-center w-full ">
          <img src={CodeModules} height={140} width={240} />
          <div className="w-[40%] ">
            <p className="pt-4 font-popins text-xl font-bold ">
              Predictable Cost
            </p>
           
          </div>
          <p className=" mt-5 font-mont w-[400px]">
              Begin by receiving a comprehensive MVP cost estimation, then
              smoothly transition to a fixed monthly contract for any additional
              work needed.
            </p>
        </div>
      </div>
    </div>
  );
}
