import React from "react";
import { Link } from "gatsby";

type CardsProps = {
  item: any;
  className?: string;
};

function DropDownCards({ className, item }: CardsProps) {
  return (
    <div
      className={`${className} px-4 pt-[37px]  bg-primary-white rounded-[10px]`}
    >
      <div className="">
        <h1 className="text-[22px] font-semibold">{item.title}</h1>
        <div className=" text-primary my-5 flex">
          <div className=" border-r-2 border-primary text-base font-medium pr-2 mr-2">
            <p>{item.experience}</p>
          </div>
          <p className="text-base font-medium">{item.type}</p>
        </div>
        <div className="max-w-[169px] h-[47px] mb-[19.5px] ">
          <Link to={`/jobDetails`} state={item}>
            <button className=" px-10 w-[100%] h-[100%] rounded-[10px] font-semibold text-base bg-primary text-primary-white hover:bg-primary-light">
              Apply now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DropDownCards;