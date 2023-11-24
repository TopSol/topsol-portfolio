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
        <h1 className="text-[23px]  font-urbanist font-medium text-[#1F1F1F]  capitalize h-[54px] sm:text-[18px] lg:text-[23px]">
          {item?.title}
        </h1>
        <p className="font-urbanist font-light text-[15px] capitalize text-[#1F1F1F]  mb-4">
          {item?.experience}
        </p>
        <div className="flex flex-row justify-between">
          <div className=" h-[47px] mb-[19.5px] ">
            <Link to={`/jobDetails`} state={item}>
              <button className=" px-10 w-[100%] h-[100%] rounded-[10px] font-semibold text-base bg-primary text-primary-white hover:bg-primary-light">
                Apply now
              </button>
            </Link>
          </div>
          <div className=" h-[47px] mb-[19.5px] flex flex-row justify-center items-center">
            <div className="ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
              >
                <path
                  d="M15 8C15 13.4444 8 18.1111 8 18.1111C8 18.1111 1 13.4444 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                  stroke="#333333"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.0013 10.3334C9.28997 10.3334 10.3346 9.28875 10.3346 8.00008C10.3346 6.71142 9.28997 5.66675 8.0013 5.66675C6.71264 5.66675 5.66797 6.71142 5.66797 8.00008C5.66797 9.28875 6.71264 10.3334 8.0013 10.3334Z"
                  stroke="#333333"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-[#1F1F1F] ml-2 font-figtree text-[15px] capitalize font-medium">
              {item?.location}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDownCards;
