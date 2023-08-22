import React from "react";
import CodeModules from "../../images/code_modules.png";
import ExpertTeam from "../../images/expert_team.png";


export default function CardSection() {
  return (
    <div className="mt-20">
      <div className="flex">
        <div className="mr-24">
        <h1 className="mb-4 text-4xl font-bold w-full mt-16 ">
          Build Smarter, Not From Scratch!
        </h1>
        </div>
        <div className="text-black text-center mx-4 rounded-2xl flex flex-col items-center">
          <img src={CodeModules} height={140} width={140} />
          <div className="w-[90%] ">
            <p className="pt-4 font-popins text-xl font-bold ">
              Ready-to-use set of modules
            </p>
            
          </div>
          <p className=" mt-5 font-mont ">
              Faster development process by leveraging the extensive collection
              of thousands of modules of reusable code available in our library.
            
            </p>
        </div>
        <div className="text-black text-center mx-4 rounded-2xl flex flex-col items-center px-10  min-h-[240px] ">
          <img src={CodeModules} height={140} width={140} />
          <div className="w-[90%] ">
            <p className="pt-4 font-popins text-xl font-bold ">
              Team of experts to craft your product
            </p>
            <p className=" mt-5 font-mont ">
              Our dedicated team of experts combines these modules and then
              customize the product as per needs of each client with their
              exceptional skills and expertise.
            </p>
          </div>
        </div>
        <div className="text-black text-center mx-4 rounded-2xl flex flex-col items-center px-10  min-h-[240px] ">
          <img src={CodeModules} height={140} width={140} />
          <div className="w-[90%]">
            <p className="pt-4 font-popins text-xl font-bold ">
              Luanch Faster and Iterate
            </p>
            <p className=" mt-5 font-mont">
              Obtain a personalized estimate to transform your building plan
              into a functional MVP in a matter of weeks, rather than months.
            </p>
          </div>
        </div>
        <div className="text-black text-center mx-4 rounded-2xl flex flex-col items-center px-10  min-h-[240px] ">
          <img src={CodeModules} height={140} width={140} />
          <div className="w-[90%] ">
            <p className="pt-4 font-popins text-xl font-bold ">
              Predictable Cost
            </p>
            <p className=" mt-5 font-mont ">
              Begin by receiving a comprehensive MVP cost estimation, then
              smoothly transition to a fixed monthly contract for any additional
              work needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
