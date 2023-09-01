import React from "react";
import PrimaryBtn from "./PrimaryBtn";

export default function smallFooter() {
  return (
    <div className="bg-gradient-to-b mt-[100px]  from-secondary to-primary py-[100px] ">
      <div className="md:container mx-auto flex flex-col md:flex-row  justify-between items-center    ">
        <div className=" md:w-[60%]">
          <h1 className="font-bold text-[40px]  md:text-[50px] lg:text-[70px]  text-white mx-5  ">
            Ready to discuss your project
          </h1>
        </div>
        <div className="mt-6 md:w-[30%]">
          <PrimaryBtn
            text="Start your project"
            additionalClasses="  bg-transparent   border-white border-2 text-white hover:bg-primary "
          />
        </div>
      </div>
    </div>
  );
}
