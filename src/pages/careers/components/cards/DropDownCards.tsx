import React from "react";

type CardsProps = {
  heading: string;
  level: string;
  type: string;
  className?:string,
};

function DropDownCards({ heading, level, type, className }: CardsProps) {
  return (
    <div className={`${className}`}>
      <div className="py-6 px-4 max-w-[426px]  bg-primary-white rounded-xl">
        <h1 className="text-2xl font-bold my-2">{heading}</h1>
        <div className=" text-primary my-4 flex">
          <div className=" border-r-2 border-primary pr-2 mr-2">
            <p>{level}</p>
          </div>
          <p>{type}</p>
        </div>
        <button className="px-10 py-3 rounded-lg font-bold bg-primary text-primary-white hover:bg-primary-light">
          apply now
        </button>
      </div>
    </div>
  );
}

export default DropDownCards;
