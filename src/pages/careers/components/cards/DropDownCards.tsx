import React from "react";
import { Link } from "gatsby";

type CardsProps = {
  item: any;
  className?: string;
};

function DropDownCards({ className, item }: CardsProps) {
  return (
    <div
      className={`${className} px-4 pt-[22px]  bg-primary-white rounded-[10px]`}
    >
      <div className="">
        <div className=" text-primary  flex justify-between">
          <p className="border-2 border-primary font-figtree text-[15px] w-[139px]  text-center font-medium px-[30px] rounded-lg capitalize py-[15px]">{item?.type}</p>
          <p className="text-center border-2 border-primary font-figtree  w-[139px] text-[15px] px-[30px] py-[15px] rounded-lg capitalize font-medium">onsite</p>
        </div>
        <h1 className="text-[23px] mt-6 font-urbanist  capitalize h-[54px] sm:text-[18px] lg:text-[23px]">
          {item?.title}
        </h1>
        <p className="font-figtree text-[15px] capitalize font-light mb-4">{item?.experience}</p>
        <div className="flex flex-row justify-between">
          <div className="max-w-[169px] h-[47px] mb-[19.5px] ">
            <Link to={`/jobDetails`} state={item}>
              <button className=" px-10 w-[100%] h-[100%] rounded-[10px] font-semibold text-base bg-primary text-primary-white hover:bg-primary-light">
                Apply now
              </button>
            </Link>
          </div>
          <div className="max-w-[169px] h-[47px] mb-[19.5px] mr-6 ">
            <h1 className="text-[#9B9B9B] font-urbanist text-[12px] capitalize font-medium">deadline</h1>
            <h1 className="text-[#1F1F1F] font-figtree text-[15px] capitalize font-medium">19/04/2024</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDownCards;
